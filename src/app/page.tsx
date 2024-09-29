"use client";

import { useEffect, useMemo } from "react";

import { UserButton } from "@/features/auth/components/user-button";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";

export default function Home() {
  const [modalOpen, setModalOpen] = useCreateWorkspaceModal(); // Global useState which stays true wherever this hook is added
  const { workspaces, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => workspaces?.[0]?._id, [workspaces]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("Redirect to workspace");
    } else if (!modalOpen) {
      setModalOpen(true);
    }
  }, [workspaceId, isLoading, modalOpen, setModalOpen]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
