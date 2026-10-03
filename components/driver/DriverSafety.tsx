import { Icon } from "../Icons";

const features = [
  {
    icon: "i-user",
    title: "Passageiros cadastrados",
    text: "Toda corrida vem de um passageiro com cadastro no app. Você sabe quem vai buscar.",
  },
  {
    icon: "i-star-o",
    title: "Avaliação mútua",
    text: "Motoristas também avaliam passageiros, mantendo o respeito e a qualidade das corridas.",
  },
  {
    icon: "i-pin",
    title: "Rota no mapa",
    text: "Embarque e destino aparecem antes de você aceitar, e o trajeto é acompanhado pelo app.",
  },
  {
    icon: "i-chat",
    title: "Equipe local",
    text: "Se algo sair do esperado, você conta com uma equipe de Parauapebas para ajudar.",
  },
];

export default function DriverSafety() {
  return (
    <section className="section safety" id="seguranca">
      <div className="wrap safety-grid">
        <div className="reveal">
          <div className="eyebrow">Segurança para quem dirige</div>
          <h2>Você também sabe quem está levando.</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Segurança vale para os dois lados. Por isso, você tem as informações da corrida antes de aceitar e uma
            equipe pronta para apoiar durante todo o trajeto.
          </p>
          <div className="features">
            {features.map((feature) => (
              <div className="feature" key={feature.title}>
                <Icon id={feature.icon} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ride-card reveal" aria-label="Exemplo de corrida no app do motorista">
          <div className="ride-top">
            <span>Passageiro confirmado</span>
            <small>Embarque em 2 min</small>
          </div>
          <div className="driver">
            <div className="avatar" aria-hidden="true">
              A
            </div>
            <div>
              <b>Ana</b>
              <div className="rate">
                <Icon id="i-star" />
                4,8 · Passageira TE LEVO
              </div>
            </div>
            <div className="plate fare">
              <b>R$ 14,90</b>
              <small>valor estimado</small>
            </div>
          </div>
          <div className="route">
            <div>
              <i></i>Rua do Comércio, Centro
            </div>
            <div>
              <i></i>Partage Shopping Parauapebas
            </div>
          </div>
          <div className="ride-actions">
            <div>
              <Icon id="i-pin" />
              Navegar
            </div>
            <div>
              <Icon id="i-chat" />
              Mensagem
            </div>
            <div className="sos">
              <Icon id="i-sos" />
              Ajuda
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
