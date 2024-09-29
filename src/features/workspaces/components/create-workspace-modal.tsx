"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
  const [modalOpen, setModalOpen] = useCreateWorkspaceModal();

  const { mutate, data, error, isPending, isSuccess, isError, isSettled } =
    useCreateWorkspace();

  const handleClose = () => {
    setModalOpen(false);
    // TODO: clear form
  };

  const handleSubmit = async () => {
    try {
      const data = await mutate(
        {
          name: "Workspace 1",
        },
        {
          onSuccess(data) {
            // TODO: Redirect to specific workspace ID
          },
          onError(error) {
            // TODO: Show toast error
          },
          onSettled: () => {
            // TODO: Reset form
          },
        }
      );
    } catch (error) {}
  };

  return (
    <Dialog open={modalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <Input
            value=""
            disabled={false}
            required
            autoFocus
            minLength={3}
            placeholder="Workspace name (e.g. 'Professional Slackers')"
          />
          <div className="flex justify-end">
            <Button disabled={false}>Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
