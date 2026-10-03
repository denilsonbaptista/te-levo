import { Icon } from "../Icons";
import Brand from "../Brand";

const uses = [
  {
    icon: "i-briefcase",
    title: "Trabalho e compromissos",
    text: "Chegue no horário ao trabalho, à faculdade ou àquela reunião importante, sem se preocupar com estacionamento.",
  },
  {
    icon: "i-bag",
    title: "Compras e lazer",
    text: "Shopping, feira, restaurante ou encontro com os amigos. Vá e volte com as mãos livres.",
  },
  {
    icon: "i-heart",
    title: "Saúde e família",
    text: "Consultas, exames e visitas. Um trajeto confortável para você e para quem você ama.",
  },
  {
    icon: "i-moon",
    title: "Volta para casa à noite",
    text: "Compartilhe sua viagem com alguém de confiança e chegue em casa com tranquilidade.",
  },
];

export default function Passengers() {
  return (
    <section className="section" id="passageiros">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Para passageiros</div>
          <h2>Um app para cada momento do seu dia.</h2>
          <p className="lead">
            Do caminho para o trabalho à volta para casa depois do jantar, a <Brand /> leva você com conforto e
            tranquilidade.
          </p>
        </div>
        <div className="uses">
          {uses.map((use) => (
            <article className="use reveal" key={use.title}>
              <div className="art">
                <Icon id={use.icon} />
              </div>
              <h3>{use.title}</h3>
              <p>{use.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
