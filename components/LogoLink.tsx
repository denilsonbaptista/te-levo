"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { Mark } from "./Icons";

/** Logo que sempre leva ao início da página principal. */
export default function LogoLink({ badge, onClick }: { badge?: string; onClick?: () => void }) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.();
    if (pathname !== "/") return;
    event.preventDefault();
    window.history.replaceState(null, "", "/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link className="logo" href="/" aria-label="te levo Mobile, página inicial" onClick={handleClick}>
      <Mark />
      <b>
        te<i>levo</i>
      </b>
      {badge && <span className="logo-badge">{badge}</span>}
    </Link>
  );
}
