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
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  nav: [
    {
      title: "Home",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Models",
      url: "/models",
      icon: Bot,
    },
    {
      title: "Documentation",
      url: "/docs",
      icon: BookOpen,
    },
    {
      title: "API",
      url: "/api",
      icon: Code2,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
};
