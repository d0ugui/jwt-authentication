import { SidebarLayout } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarLayout>
      <AppSidebar />
      <main className="w-screen">{children}</main>
    </SidebarLayout>
  );
}
