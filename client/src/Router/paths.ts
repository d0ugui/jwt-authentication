import {
  BookOpen,
  Bot,
  Code2,
  Settings2,
  SquareTerminal,
  LucideIcon,
} from "lucide-react";

export interface PathProps {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
}

export const paths = {
  nav: [
    {
      title: "Home",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: Code2,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
};
