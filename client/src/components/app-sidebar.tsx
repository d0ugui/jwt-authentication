import { LockKeyhole } from "lucide-react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
} from "@/components/ui/sidebar";
import { paths } from "@/Router/paths";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="py-0">
        <div className="w-full">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-4 py-0">
              <a href="/" className="flex items-center gap-2 font-semibold">
                <LockKeyhole className="h-6 w-6" />
                <span className="">Autentication</span>
              </a>
            </div>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarItem>
          <SidebarLabel>Routes</SidebarLabel>
          <NavMain items={paths.nav} />
        </SidebarItem>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={paths.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
