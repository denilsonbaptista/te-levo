import { withBrand } from "./Brand";

export type FaqItem = { q: string; a: string };

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={item.q} open={i === 0}>
          <summary><span>{withBrand(item.q)}</span></summary>
          <p>{withBrand(item.a)}</p>
        </details>
      ))}
    </div>
  );
}
