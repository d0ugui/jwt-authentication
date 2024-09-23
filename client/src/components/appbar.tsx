import { SidebarTrigger } from "./ui/sidebar";

export function Appbar() {
  return (
    <header className="border-b flex items-center bg-background h-[49px] sticky top-0 z-50 px-4 ">
      <SidebarTrigger />
      Appbar
    </header>
  );
}
