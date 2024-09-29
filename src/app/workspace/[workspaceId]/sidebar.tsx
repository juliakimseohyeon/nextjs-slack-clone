import { usePathname } from "next/navigation";

import { UserButton } from "@/features/auth/components/user-button";
import { WorkspaceSwitcher } from "./workspace-switcher";

import { SidebarButton } from "./sidebar-button";
import {
  BellIcon,
  Home,
  MessagesSquareIcon,
  MoreHorizontalIcon,
} from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-[70px] h-full bg-purple flex flex-col gap-y-4 items-center pt-[9px] pb-4">
      <WorkspaceSwitcher />
      <SidebarButton
        icon={Home}
        label="Home"
        isActive={pathname.includes("/workspace")}
      />
      <SidebarButton icon={MessagesSquareIcon} label="DMs" />
      <SidebarButton icon={BellIcon} label="Activity" />
      <SidebarButton icon={MoreHorizontalIcon} label="More" />
      <div className="flex flex-col items-center justify-center gap-y-1 mt-auto">
        <UserButton />
      </div>
    </aside>
  );
};
