import { Icon, Mark } from "../Icons";
import MapArt from "../MapArt";
import StoreLink, { STORE_URLS } from "../StoreLink";
import Brand from "../Brand";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Mobilidade em Parauapebas</div>
          <h1>
            Vá aonde precisar, com <em>quem conhece a cidade.</em>
          </h1>
          <p className="lead">
            Peça sua corrida em poucos toques, veja o preço antes de confirmar e acompanhe tudo pelo mapa. A <Brand /> é o
            aplicativo de mobilidade feito aqui, com segurança e atendimento de verdade.
          </p>
          <div className="stores">
            <StoreLink href={STORE_URLS.passengerAndroid} store="play" caption="DISPONÍVEL NO" />
            <StoreLink href={STORE_URLS.passengerIos} store="apple" caption="BAIXAR NA" />
          </div>
          <ul className="hero-points">
            {["Motoristas cadastrados", "Preço antes de confirmar", "Suporte local"].map((point) => (
              <li key={point}>
                <Icon id="i-check" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-panel">
            <Mark className="arcs" />
          </div>

          <div className="phone">
            <div className="screen">
              <div className="notch"></div>
              <MapArt />
              <div className="app-pill">
                <Mark />
                <Brand /> mobile
              </div>
              <div className="sheet">
                <div className="grab"></div>
                <h4>Para onde vamos?</h4>
                <div className="field">
                  <i></i>
                  <b>Minha localização</b>
                </div>
                <div className="field to">
                  <i></i>Partage Shopping
                </div>
                <div className="go">Confirmar corrida</div>
              </div>
            </div>
          </div>

          <div className="float-card fc-1">
            <div className="ico">
              <Icon id="i-shield" />
            </div>
            <div>
              <b>Motorista a caminho</b>
              <small>Chega em 3 min</small>
            </div>
          </div>
          <div className="float-card fc-2">
            <div className="ico">
              <Icon id="i-tag" />
            </div>
            <div>
              <b>Preço definido</b>
              <small>Antes de você confirmar</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
