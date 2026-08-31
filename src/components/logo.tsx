import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  variant?: "white" | "black";
  onClick?: () => void;
};

function scrollToTop() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
}

export function Logo({ className, variant = "white", onClick }: LogoProps) {
  const src =
    variant === "white" ? "/brand/mark-white-sm.png" : "/brand/mark-black-sm.png";
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <Link
      to="/"
      onClick={(e) => {
        onClick?.();
        if (pathname === "/") {
          e.preventDefault();
          scrollToTop();
        }
      }}
      aria-label={`${site.brand} — nahoru`}
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <img
        src={src}
        alt=""
        width={240}
        height={213}
        className="h-8 w-auto select-none"
      />
      <span className="flex flex-col justify-center leading-none">
        <span className="translate-y-1 text-2xs font-medium tracking-tight text-muted">
          Kovovýroba
        </span>
        <span className="mt-0.5 text-lg font-medium tracking-tight">
          Hrdlička
        </span>
      </span>
    </Link>
  );
}
