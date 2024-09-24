import { useLocation } from "react-router-dom";
import { SidebarTrigger } from "./ui/sidebar";
import { PathProps, paths } from "@/Router/paths";

export function Appbar() {
  const location = useLocation();

  return (
    <header className="border-b flex items-center bg-background h-[60px] sticky top-0 z-50 px-4 ">
      <SidebarTrigger />
      {
        paths.nav.find((path: PathProps) => path.url === location.pathname)
          ?.title
      }
    </header>
  );
}
