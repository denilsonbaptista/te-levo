"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Ao trocar de página, volta ao topo. O Next só rola quando o início da página
 * está fora da tela, e o header fixo faz parecer que sempre está visível.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
