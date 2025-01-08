import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, Table } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { Member } from "@/types/member";

interface ExportButtonsProps {
  allMembers: Member[];
  collectorName?: string;
}

const ExportButtons = ({ allMembers, collectorName }: ExportButtonsProps) => {
  const { toast } = useToast();

  const downloadExcel = async (members: Member[]) => {
    try {
      const headers = Object.keys(members[0] || {}).join(',');
      const rows = members.map(row => 
        Object.values(row).map(value => 
          typeof value === 'object' ? JSON.stringify(value) : String(value)
        ).join(',')
      );
      const csv = [headers, ...rows].join('\n');

      const blob = new Blob([csv], { type: 'application/vnd.ms-excel' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${collectorName || 'all'}-members.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: "Excel File Downloaded",
        description: "The Excel file has been downloaded successfully",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Failed to download the Excel file",
        variant: "destructive",
      });
    }
  };

  const downloadCSV = async (members: Member[]) => {
    try {
      const headers = Object.keys(members[0] || {}).join(',');
      const rows = members.map(row => 
        Object.values(row).map(value => 
          typeof value === 'object' ? JSON.stringify(value) : String(value)
        ).join(',')
      );
      const csv = [headers, ...rows].join('\n');

      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${collectorName || 'all'}-members.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: "CSV File Downloaded",
        description: "The CSV file has been downloaded successfully",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Failed to download the CSV file",
        variant: "destructive",
      });
    }
  };

  const openInGoogleSheets = (members: Member[]) => {
    try {
      const headers = Object.keys(members[0] || {}).join('\t');
      const rows = members.map(row => 
        Object.values(row).map(value => 
          typeof value === 'object' ? JSON.stringify(value) : String(value)
        ).join('\t')
      );
      const tsv = [headers, ...rows].join('\n');
      
      const encodedData = encodeURIComponent(tsv);
      const googleSheetsUrl = `https://docs.google.com/spreadsheets/d/create?usp=sharing&content=${encodedData}`;
      
      window.open(googleSheetsUrl, '_blank');

      toast({
        title: "Opening Google Sheets",
        description: "The data will open in a new Google Sheets document",
      });
    } catch (error) {
      console.error('Google Sheets error:', error);
      toast({
        title: "Error",
        description: "Failed to open in Google Sheets",
        variant: "destructive",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-dashboard-accent3 hover:bg-dashboard-accent3/80 text-white"
          disabled={!allMembers?.length}
        >
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => allMembers && downloadExcel(allMembers)} className="hover:bg-dashboard-accent3/10">
          <FileSpreadsheet className="w-4 h-4 mr-2 text-dashboard-accent3" />
          Excel (.xlsx)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => allMembers && downloadCSV(allMembers)} className="hover:bg-dashboard-accent3/10">
          <Table className="w-4 h-4 mr-2 text-dashboard-accent3" />
          CSV (.csv)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => allMembers && openInGoogleSheets(allMembers)} className="hover:bg-dashboard-accent3/10">
          <FileSpreadsheet className="w-4 h-4 mr-2 text-dashboard-accent3" />
          Open in Google Sheets
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportButtons;