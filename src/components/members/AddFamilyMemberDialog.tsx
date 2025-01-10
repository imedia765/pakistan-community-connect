import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Member } from "@/types/member";

interface AddFamilyMemberDialogProps {
  member: Member;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFamilyMemberAdded: () => void;
}

const AddFamilyMemberDialog = ({ member, open, onOpenChange, onFamilyMemberAdded }: AddFamilyMemberDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    family_member_name: '',
    family_member_relationship: '',
    family_member_dob: '',
    family_member_gender: ''
  });

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from('members')
        .update({
          family_member_name: formData.family_member_name,
          family_member_relationship: formData.family_member_relationship,
          family_member_dob: formData.family_member_dob,
          family_member_gender: formData.family_member_gender
        })
        .eq('id', member.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Family member added successfully",
      });
      onFamilyMemberAdded();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add family member",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-dashboard-card border-dashboard-accent1/20">
        <DialogHeader>
          <DialogTitle className="text-white text-xl">Add Family Member</DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-dashboard-text">
              Name
            </Label>
            <Input
              id="name"
              value={formData.family_member_name}
              onChange={(e) => setFormData({...formData, family_member_name: e.target.value})}
              className="col-span-3 bg-dashboard-dark text-white border-dashboard-accent1/20"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="relationship" className="text-right text-dashboard-text">
              Relationship
            </Label>
            <Input
              id="relationship"
              value={formData.family_member_relationship}
              onChange={(e) => setFormData({...formData, family_member_relationship: e.target.value})}
              className="col-span-3 bg-dashboard-dark text-white border-dashboard-accent1/20"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dob" className="text-right text-dashboard-text">
              Date of Birth
            </Label>
            <Input
              id="dob"
              type="date"
              value={formData.family_member_dob}
              onChange={(e) => setFormData({...formData, family_member_dob: e.target.value})}
              className="col-span-3 bg-dashboard-dark text-white border-dashboard-accent1/20"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right text-dashboard-text">
              Gender
            </Label>
            <Input
              id="gender"
              value={formData.family_member_gender}
              onChange={(e) => setFormData({...formData, family_member_gender: e.target.value})}
              className="col-span-3 bg-dashboard-dark text-white border-dashboard-accent1/20"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
            className="bg-dashboard-dark text-dashboard-text hover:bg-dashboard-card hover:text-white"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave}
            className="bg-dashboard-accent1 text-white hover:bg-dashboard-accent1/80"
          >
            Add Family Member
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddFamilyMemberDialog;