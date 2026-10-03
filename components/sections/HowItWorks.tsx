import { withBrand } from "../Brand";

const steps = [
  {
    title: "Baixe e cadastre-se",
    text: "Instale o app te levo Mobile no Android ou iPhone e crie sua conta com seus dados básicos.",
  },
  { title: "Informe o destino", text: "Digite para onde vai, confira o valor estimado e escolha como prefere pagar." },
  { title: "Acompanhe e embarque", text: "Veja o motorista chegando pelo mapa, confira a placa e aproveite a viagem." },
];

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Como funciona</div>
          <h2>Sua corrida em três passos.</h2>
          <p className="lead">Simples desde o primeiro acesso. Em poucos minutos você está pronto para ir.</p>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <article className="step reveal" key={step.title}>
              <div className="step-n">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{withBrand(step.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
