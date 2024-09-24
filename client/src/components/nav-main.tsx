import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function NavMain({
  className,
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className="flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <item.icon className="h-4 w-4 shrink-0" />
          {item.title}
        </a>
      ))}
    </ul>
  );
}
