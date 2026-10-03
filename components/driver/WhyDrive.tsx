import { Icon } from "../Icons";

const reasons = [
  {
    icon: "i-calendar",
    title: "Você faz o seu horário",
    text: "Sem escala e sem horário fixo. Fique online quando for melhor para você e para a sua rotina.",
  },
  {
    icon: "i-wallet",
    title: "Ganhos justos",
    text: "Um preço acessível para o passageiro e digno para o motorista, em cada corrida.",
  },
  {
    icon: "i-pin",
    title: "Corridas na sua região",
    text: "Uma empresa de Parauapebas, com passageiros de Parauapebas. Você roda na cidade que conhece.",
  },
  {
    icon: "i-chat",
    title: "Suporte de perto",
    text: "Problema na corrida ou dúvida no cadastro? Você fala com uma equipe local, que responde e resolve.",
  },
];

export default function WhyDrive() {
  return (
    <section className="section" id="vantagens">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Por que dirigir com a TE LEVO</div>
          <h2>Uma parceria feita para quem está ao volante.</h2>
          <p className="lead">
            A TE LEVO é uma empresa daqui. Conhecemos a rotina de quem dirige pela cidade e trabalhamos para que cada
            corrida valha a pena para os dois lados.
          </p>
        </div>
        <div className="uses">
          {reasons.map((reason) => (
            <article className="use reveal" key={reason.title}>
              <div className="art">
                <Icon id={reason.icon} />
              </div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
