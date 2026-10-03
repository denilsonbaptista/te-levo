"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { Mark } from "./Icons";

/** Logo que leva ao início da página atual: a dos motoristas ou a principal. */
export default function LogoLink({ badge, onClick }: { badge?: string; onClick?: () => void }) {
  const pathname = usePathname();
  const home = pathname.startsWith("/motoristas") ? "/motoristas" : "/";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (pathname !== home) return;
    event.preventDefault();
    window.history.replaceState(null, "", home);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link className="logo" href={home} aria-label="te levo Mobile, página inicial" onClick={handleClick}>
      <Mark />
      <b>
        te<i>levo</i>
      </b>
      {badge && <span className="logo-badge">{badge}</span>}
    </Link>
  );
}
