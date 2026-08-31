import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  variant?: "white" | "black";
  onClick?: () => void;
};

export function Logo({ className, variant = "white", onClick }: LogoProps) {
  const src =
    variant === "white" ? "/brand/logo-white-sm.png" : "/brand/logo-black-sm.png";
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${site.name} — úvod`}
      className={cn("inline-flex items-center", className)}
    >
      <img
        src={src}
        alt={site.name}
        width={180}
        height={159}
        className="h-8 w-auto md:h-9"
      />
    </Link>
  );
}
