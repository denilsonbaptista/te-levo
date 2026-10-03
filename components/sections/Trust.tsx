import { Icon } from "../Icons";

export type TrustItem = { icon: string; title: string; text: string };

const defaultItems: TrustItem[] = [
  { icon: "i-shield", title: "Segurança", text: "Motoristas cadastrados e dados da viagem sempre à vista." },
  { icon: "i-pin", title: "Tempo real", text: "Acompanhe o carro no mapa, da chegada até o destino." },
  { icon: "i-tag", title: "Preço claro", text: "Você sabe quanto vai pagar antes de pedir." },
  { icon: "i-chat", title: "Suporte local", text: "Atendimento de quem mora e trabalha em Parauapebas." },
];

export default function Trust({ items = defaultItems }: { items?: TrustItem[] }) {
  return (
    <section className="trust" aria-label="Diferenciais">
      <div className="wrap trust-grid">
        {items.map((item) => (
          <div className="trust-item" key={item.title}>
            <Icon id={item.icon} />
            <div>
              <b>{item.title}</b>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
