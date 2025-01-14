import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Loader2, Receipt, CreditCard, PoundSterling, Calendar } from "lucide-react";
import { formatDate } from "@/lib/dateFormat";

interface PaymentSummaryProps {
  collectorName: string | null;
}

const CollectorPaymentSummary = ({ collectorName }: PaymentSummaryProps) => {
  const { data: paymentStats, isLoading } = useQuery({
    queryKey: ['collector-payments', collectorName],
    queryFn: async () => {
      if (!collectorName) return null;
      
      console.log('Fetching payment stats for collector:', collectorName);
      
      // Fetch members data
      const { data: members, error } = await supabase
        .from('members')
        .select(`
          yearly_payment_status,
          emergency_collection_status,
          yearly_payment_amount,
          emergency_collection_amount,
          yearly_payment_due_date,
          payment_date
        `)
        .eq('collector', collectorName);
      
      if (error) {
        console.error('Error fetching payment stats:', error);
        throw error;
      }

      // Calculate payment statistics
      const stats = {
        totalMembers: members?.length || 0,
        yearlyPayments: {
          completed: members?.filter(m => m.yearly_payment_status === 'completed').length || 0,
          pending: members?.filter(m => m.yearly_payment_status === 'pending').length || 0,
          totalCollected: members?.reduce((sum, m) => 
            m.yearly_payment_status === 'completed' ? sum + (m.yearly_payment_amount || 40) : sum, 0
          ) || 0,
          nextDueDate: members?.reduce((earliest, m) => {
            if (!m.yearly_payment_due_date) return earliest;
            return !earliest || new Date(m.yearly_payment_due_date) < new Date(earliest)
              ? m.yearly_payment_due_date
              : earliest;
          }, null as string | null),
        },
        emergencyCollections: {
          completed: members?.filter(m => m.emergency_collection_status === 'completed').length || 0,
          pending: members?.filter(m => m.emergency_collection_status === 'pending').length || 0,
          totalCollected: members?.reduce((sum, m) => 
            m.emergency_collection_status === 'completed' ? sum + (m.emergency_collection_amount || 0) : sum, 0
          ) || 0,
        },
        recentActivity: {
          lastPaymentDate: members?.reduce((latest, m) => {
            if (!m.payment_date) return latest;
            return !latest || new Date(m.payment_date) > new Date(latest)
              ? m.payment_date
              : latest;
          }, null as string | null),
        }
      };

      console.log('Payment stats:', stats);
      return stats;
    },
    enabled: !!collectorName,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!paymentStats) return null;

  const yearlyPaymentPercentage = Math.round(
    (paymentStats.yearlyPayments.completed / paymentStats.totalMembers) * 100
  );

  const emergencyPaymentPercentage = Math.round(
    (paymentStats.emergencyCollections.completed / paymentStats.totalMembers) * 100
  );

  const totalYearlyAmount = paymentStats.totalMembers * 40;
  const collectedYearlyAmount = paymentStats.yearlyPayments.totalCollected;
  const remainingMembers = paymentStats.totalMembers - paymentStats.yearlyPayments.completed;

  return (
    <Card className="glass-card p-6 mt-8">
      <h3 className="text-xl font-medium text-white mb-6">Payment Collection Summary</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-4">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-dashboard-accent1" />
            <h4 className="text-dashboard-accent1 font-medium">Yearly Payments</h4>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-white">
                £{collectedYearlyAmount} / £{totalYearlyAmount}
              </p>
              <p className="text-sm text-dashboard-muted">Amount collected</p>
              <p className="text-sm text-dashboard-warning font-medium mt-1">
                {remainingMembers} {remainingMembers === 1 ? 'member' : 'members'} remaining
              </p>
              {paymentStats.yearlyPayments.nextDueDate && (
                <p className="text-sm text-dashboard-accent2 mt-2">
                  Next due: {formatDate(paymentStats.yearlyPayments.nextDueDate)}
                </p>
              )}
            </div>
            <div className="w-16 h-16">
              <CircularProgressbar
                value={yearlyPaymentPercentage}
                text={`${yearlyPaymentPercentage}%`}
                styles={buildStyles({
                  textSize: '1.5rem',
                  pathColor: '#4CAF50',
                  textColor: '#4CAF50',
                  trailColor: 'rgba(255,255,255,0.1)',
                })}
              />
            </div>
          </div>
        </div>

        <div className="glass-card p-4">
          <div className="flex items-center gap-2 mb-4">
            <Receipt className="w-5 h-5 text-dashboard-accent2" />
            <h4 className="text-dashboard-accent2 font-medium">Emergency Collections</h4>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-white">
                £{paymentStats.emergencyCollections.totalCollected}
              </p>
              <p className="text-sm text-dashboard-muted">Total collected</p>
              <p className="text-sm text-dashboard-accent1 mt-1">
                {paymentStats.emergencyCollections.completed}/{paymentStats.totalMembers} members paid
              </p>
              {paymentStats.recentActivity.lastPaymentDate && (
                <p className="text-sm text-dashboard-accent2 mt-2">
                  Last payment: {formatDate(paymentStats.recentActivity.lastPaymentDate)}
                </p>
              )}
            </div>
            <div className="w-16 h-16">
              <CircularProgressbar
                value={emergencyPaymentPercentage}
                text={`${emergencyPaymentPercentage}%`}
                styles={buildStyles({
                  textSize: '1.5rem',
                  pathColor: '#FF9800',
                  textColor: '#FF9800',
                  trailColor: 'rgba(255,255,255,0.1)',
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CollectorPaymentSummary;