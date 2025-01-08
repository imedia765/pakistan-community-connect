import { Progress } from "@/components/ui/progress";

interface PrintProgressProps {
  current: number;
  total: number;
  currentCollector: string;
}

const PrintProgress = ({ current, total, currentCollector }: PrintProgressProps) => {
  const progress = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="space-y-2 w-full">
      <div className="flex justify-between text-sm text-dashboard-text">
        <span>Generating PDFs...</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="bg-dashboard-card h-2">
        <div 
          className="h-full bg-gradient-to-r from-dashboard-accent1 to-dashboard-accent2 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </Progress>
      <p className="text-sm text-dashboard-muted">
        Processing collector: {currentCollector}
      </p>
    </div>
  );
};

export default PrintProgress;