import { Icon, Mark } from "../Icons";
import Brand from "../Brand";
import MapArt from "../MapArt";
import StoreLink, { STORE_URLS } from "../StoreLink";

export default function DriverHero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Seja motorista parceiro</div>
          <h1>
            Dirija em Parauapebas com <em>quem valoriza você.</em>
          </h1>
          <p className="lead">
            Faça seu próprio horário, receba corridas na sua região e conte com o suporte de uma equipe local. Na <Brand />, o motorista é parceiro de verdade.
          </p>
          <div className="stores">
            <StoreLink href={STORE_URLS.driverAndroid} store="play" caption="APP DO MOTORISTA NO" />
            <a className="btn btn-ghost btn-tall" href={STORE_URLS.whatsappDriver} target="_blank" rel="noopener noreferrer">
              <Icon id="i-whats" className="btn-ico" />
              Tirar dúvidas no WhatsApp
            </a>
          </div>
          <ul className="hero-points">
            {["Sem horário fixo", "Ganhos justos", "Suporte de gente daqui"].map((point) => (
              <li key={point}>
                <Icon id="i-check" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-panel driver-panel">
            <Mark className="arcs" />
          </div>

          <div className="phone">
            <div className="screen">
              <div className="notch"></div>
              <MapArt />
              <div className="app-pill">
                <i className="online-dot"></i>
                ONLINE · MOTORISTA
              </div>
              <div className="sheet">
                <div className="grab"></div>
                <div className="req-top">
                  <h4>Nova corrida</h4>
                  <span className="req-timer">15s</span>
                </div>
                <div className="req-price">
                  R$ 14,90 <small>valor estimado</small>
                </div>
                <div className="field">
                  <i></i>
                  <b>Rua do Comércio</b>
                </div>
                <div className="field to">
                  <i></i>Partage Shopping
                </div>
                <div className="go go-accept">Aceitar corrida</div>
              </div>
            </div>
          </div>

          <div className="float-card fc-1">
            <div className="ico">
              <Icon id="i-star" />
            </div>
            <div>
              <b>Corrida concluída</b>
              <small>Passageiro avaliou 5 estrelas</small>
            </div>
          </div>
          <div className="float-card fc-2">
            <div className="ico">
              <Icon id="i-calendar" />
            </div>
            <div>
              <b>Você decide</b>
              <small>Fique online quando quiser</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
