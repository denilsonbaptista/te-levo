import Brand from "../Brand";

const values = [
  { title: "Segurança", text: "Cadastro de motoristas, dados da viagem visíveis e acompanhamento em tempo real." },
  { title: "Respeito", text: "Tratamos passageiros e motoristas com a mesma atenção e cuidado." },
  { title: "Transparência", text: "Preço claro antes da corrida e comunicação honesta em cada etapa." },
  { title: "Proximidade", text: "Equipe local, que escuta, responde e resolve de perto." },
];

export default function About() {
  return (
    <section className="section" id="sobre" style={{ paddingTop: 0 }}>
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="eyebrow"><span>Sobre a <Brand /></span></div>
          <h2>Uma empresa daqui, comprometida com a nossa cidade.</h2>
          <p className="lead" style={{ marginTop: 20 }}>
            A <Brand /> nasceu para oferecer a Parauapebas uma forma de se deslocar mais segura, confortável e próxima das
            pessoas. Conhecemos as ruas, os bairros e a rotina de quem vive aqui.
          </p>
          <p className="lead">
            Nosso compromisso é construir a mobilidade da cidade junto com passageiros e motoristas: ouvindo, melhorando
            o atendimento e buscando condições justas para os dois lados de cada corrida.
          </p>
        </div>
        <div className="values">
          {values.map((value) => (
            <article className="value reveal" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
