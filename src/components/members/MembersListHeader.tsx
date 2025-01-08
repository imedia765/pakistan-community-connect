import { Button } from "@/components/ui/button";
import { useState } from "react";
import EditProfileDialog from "./EditProfileDialog";
import { Member } from "@/types/member";
import PrintButtons from "@/components/PrintButtons";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface MembersListHeaderProps {
  userRole: string | null;
  onPrint: () => void;
  hasMembers: boolean;
  collectorInfo?: { name: string } | null;
  selectedMember: Member | null;
  onProfileUpdated: () => void;
}

const MembersListHeader = ({ 
  userRole, 
  hasMembers, 
  collectorInfo,
  selectedMember,
  onProfileUpdated
}: MembersListHeaderProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  // Fetch members for the current collector
  const { data: collectorMembers } = useQuery({
    queryKey: ['collector_members', collectorInfo?.name],
    queryFn: async () => {
      if (!collectorInfo?.name) return [];
      
      console.log('Fetching members for collector:', collectorInfo.name);
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .eq('collector', collectorInfo.name)
        .order('member_number', { ascending: true });

      if (error) {
        console.error('Error fetching collector members:', error);
        throw error;
      }

      return data || [];
    },
    enabled: !!collectorInfo?.name
  });

  if (userRole !== 'collector' || !hasMembers) return null;

  return (
    <>
      <div className="flex justify-end mb-4 gap-2">
        <PrintButtons 
          collectorName={collectorInfo?.name || ''}
          allMembers={collectorMembers}
        />
      </div>

      {selectedMember && (
        <EditProfileDialog
          member={selectedMember}
          open={editDialogOpen}
          onOpenChange={setEditDialogOpen}
          onProfileUpdated={onProfileUpdated}
        />
      )}
    </>
  );
};

export default MembersListHeader;