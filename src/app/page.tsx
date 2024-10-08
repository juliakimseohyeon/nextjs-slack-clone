"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";

import { UserButton } from "@/features/auth/components/user-button";

import { useGetWorkspaces } from "@/features/workspaces/api/use-get-workspaces";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";

export default function Home() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useCreateWorkspaceModal(); // Global useState which stays true wherever this hook is added
  const { workspaces, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => workspaces?.[0]?._id, [workspaces]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      router.replace(`/workspace/${workspaceId}`);
    } else if (!modalOpen) {
      setModalOpen(true);
    }
  }, [workspaceId, isLoading, modalOpen, setModalOpen, router]);

  return (
    <div>
      <UserButton />
    </div>
  );
}
