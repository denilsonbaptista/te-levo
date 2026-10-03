import { withBrand } from "../Brand";

const steps = [
  {
    title: "Baixe o app",
    text: "Instale o app do motorista te levo, disponível para Android no Google Play.",
  },
  {
    title: "Faça seu cadastro",
    text: "Preencha seus dados e os do veículo e envie os documentos solicitados pelo app.",
  },
  {
    title: "Aguarde a análise",
    text: "Nossa equipe confere suas informações para manter a segurança de todos.",
  },
  {
    title: "Comece a dirigir",
    text: "Cadastro aprovado, é só ficar online e começar a receber corridas.",
  },
];

export default function HowToStart() {
  return (
    <section className="section fair" id="como-comecar">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Como começar</div>
          <h2>Do cadastro à primeira corrida.</h2>
          <p className="lead">Tudo é feito pelo aplicativo. Se precisar de ajuda em qualquer etapa, é só chamar a gente.</p>
        </div>
        <div className="steps steps-4">
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
