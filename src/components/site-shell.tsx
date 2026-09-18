import type { ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
