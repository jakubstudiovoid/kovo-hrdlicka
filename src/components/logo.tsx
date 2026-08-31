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
      className={cn("brand-lockup", className)}
    >
      <img src={src} alt="" width={180} height={159} />
      <span className="brand-wordmark">
        <span>Kovovýroba</span>
        <span>Hrdlička</span>
      </span>
    </Link>
  );
}
