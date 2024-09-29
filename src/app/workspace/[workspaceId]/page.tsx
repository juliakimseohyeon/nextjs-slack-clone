"use client";

import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  const { workspace } = useGetWorkspace({ id: workspaceId });

  return <div>ID: {JSON.stringify(workspace)}</div>;
};

export default WorkspaceIdPage;
