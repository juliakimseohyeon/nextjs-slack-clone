"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
  const [modalOpen, setModalOpen] = useCreateWorkspaceModal();

  const handleClose = () => {
    setModalOpen(false);
    // TODO: clear form
  };

  return (
    <Dialog open={modalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
