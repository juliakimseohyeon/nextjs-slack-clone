import { useQuery } from "convex/react";

import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";

interface UseCurrentMemberProps {
  workspaceId: Id<"workspaces">;
}

export const useCurrentMember = ({ workspaceId }: UseCurrentMemberProps) => {
  const currentMember = useQuery(api.members.currentMember, { workspaceId });

  const isLoading = currentMember === undefined;

  return { currentMember, isLoading };
};
