import { Fragment, type ReactNode } from "react";

/** Nome da marca em minúsculo, com cor de destaque. */
export default function Brand() {
  return <span className="brand">te&nbsp;levo</span>;
}

/** Destaca as ocorrências de "te levo" em um texto vindo de dados. */
export function withBrand(text: string): ReactNode {
  const parts = text.split(/te levo/i);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && <Brand />}
      {part}
    </Fragment>
  ));
}
