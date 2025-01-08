import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { generateMembersPDF, generateCollectorZip } from '@/utils/pdfGenerator';
import { Database } from '@/integrations/supabase/types';
import { supabase } from "@/integrations/supabase/client";
import ExportButtons from "./print/ExportButtons";
import PrintProgress from "./print/PrintProgress";

type Member = Database['public']['Tables']['members']['Row'];

interface PrintButtonsProps {
  allMembers?: Member[] | undefined;
  collectorName?: string;
  onGenerateStart?: () => void;
  onGenerateComplete?: () => void;
}

const BATCH_SIZE = 100;

const PrintButtons = ({ 
  allMembers, 
  collectorName,
  onGenerateStart,
  onGenerateComplete 
}: PrintButtonsProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0, collector: '' });

  const fetchMembersInBatches = async (name: string) => {
    let allCollectorMembers: Member[] = [];
    let hasMore = true;
    let page = 0;

    while (hasMore) {
      const { data: collectorMembers, error } = await supabase
        .from('members')
        .select('*')
        .eq('collector', name)
        .order('member_number', { ascending: true })
        .range(page * BATCH_SIZE, (page + 1) * BATCH_SIZE - 1);
      
      if (error) throw error;

      if (collectorMembers && collectorMembers.length > 0) {
        allCollectorMembers = [...allCollectorMembers, ...collectorMembers];
        page++;
        hasMore = collectorMembers.length === BATCH_SIZE;
        console.log(`Fetched batch ${page} for ${name}, total: ${allCollectorMembers.length}`);
      } else {
        hasMore = false;
      }
    }

    return allCollectorMembers;
  };

  const handlePrintAll = async () => {
    if (!allMembers) {
      toast({
        title: "Error",
        description: "No members data available to print",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsGenerating(true);
      onGenerateStart?.();

      await generateCollectorZip(allMembers, (current, total, collector) => {
        setProgress({ current, total, collector });
        console.log(`Processing collector ${collector} (${current}/${total})`);
      });

      toast({
        title: "Success",
        description: "ZIP file with all collector reports generated successfully",
      });
    } catch (error) {
      console.error('Error generating ZIP:', error);
      toast({
        title: "Error",
        description: "Failed to generate ZIP file",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
      onGenerateComplete?.();
    }
  };

  const handlePrintCollector = async (name: string) => {
    try {
      console.log(`Fetching members for collector: ${name}`);
      const allCollectorMembers = await fetchMembersInBatches(name);

      if (!allCollectorMembers.length) {
        toast({
          title: "Error",
          description: "No members found for this collector",
          variant: "destructive",
        });
        return;
      }

      console.log(`Generating PDF for ${name} with ${allCollectorMembers.length} members`);
      const doc = generateMembersPDF(allCollectorMembers, `Members List - Collector: ${name}`);
      doc.save();
      toast({
        title: "Success",
        description: "PDF report generated successfully",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF report",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      {isGenerating && (
        <PrintProgress 
          current={progress.current}
          total={progress.total}
          currentCollector={progress.collector}
        />
      )}
      
      {collectorName ? (
        <div className="flex gap-2">
          <Button
            onClick={() => handlePrintCollector(collectorName)}
            className="bg-gradient-to-r from-dashboard-accent1 to-dashboard-accent2 hover:from-dashboard-accent1/90 hover:to-dashboard-accent2/90 text-white shadow-lg"
            disabled={isGenerating}
          >
            <Printer className="w-4 h-4 mr-2" />
            Print Members
          </Button>
          {allMembers && allMembers.length > 0 && (
            <ExportButtons 
              allMembers={allMembers} 
              collectorName={collectorName} 
            />
          )}
        </div>
      ) : (
        <div className="flex gap-2">
          <Button 
            onClick={handlePrintAll}
            className="bg-gradient-to-r from-dashboard-accent1 to-dashboard-accent2 hover:from-dashboard-accent1/90 hover:to-dashboard-accent2/90 text-white shadow-lg"
            disabled={isGenerating}
          >
            <Printer className="w-4 h-4 mr-2" />
            {isGenerating ? 'Generating...' : 'Print All Members'}
          </Button>
          {allMembers && allMembers.length > 0 && (
            <ExportButtons 
              allMembers={allMembers} 
              collectorName={collectorName} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PrintButtons;