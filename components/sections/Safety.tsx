import { Icon } from "../Icons";

const features = [
  {
    icon: "i-user",
    title: "Motoristas cadastrados",
    text: "Todo motorista passa por cadastro e análise de documentos antes de dirigir.",
  },
  { icon: "i-car", title: "Dados do veículo", text: "Nome, foto, modelo e placa do carro aparecem antes do embarque." },
  {
    icon: "i-share",
    title: "Compartilhe a viagem",
    text: "Envie sua rota para familiares e amigos acompanharem em tempo real.",
  },
  {
    icon: "i-star-o",
    title: "Avaliação mútua",
    text: "Passageiros e motoristas se avaliam, mantendo a qualidade das corridas.",
  },
];

export default function Safety() {
  return (
    <section className="section safety" id="seguranca">
      <div className="wrap safety-grid">
        <div className="reveal">
          <div className="eyebrow">Segurança em primeiro lugar</div>
          <h2>Você sabe com quem está indo, do início ao fim.</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Cada corrida foi pensada para que você se sinta seguro: informação clara, acompanhamento constante e uma
            equipe pronta para ajudar.
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

        <div className="ride-card reveal" aria-label="Exemplo de tela de corrida">
          <div className="ride-top">
            <span>Motorista a caminho</span>
            <small>Chega em 3 min</small>
          </div>
          <div className="driver">
            <div className="avatar" aria-hidden="true">
              M
            </div>
            <div>
              <b>Marcos</b>
              <div className="rate">
                <Icon id="i-star" />
                4,9 · Motorista TE LEVO
              </div>
            </div>
            <div className="plate">
              <b>ABC1D23</b>
              <small>Sedan prata</small>
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
              <Icon id="i-share" />
              Compartilhar
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
