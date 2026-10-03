import { Icon, Mark } from "../Icons";
import StoreLink, { STORE_URLS } from "../StoreLink";

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
            Peça sua corrida em poucos toques, veja o preço antes de confirmar e acompanhe tudo pelo mapa. A TE LEVO é o
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
              <svg className="map" viewBox="0 0 270 560" preserveAspectRatio="xMidYMid slice">
                <rect width="270" height="560" fill="#e9eef2" />
                <g stroke="#fff" strokeWidth="7" fill="none" strokeLinecap="round">
                  <path d="M-10 120L290 160M-10 250L290 230M-10 370L290 400M60 -10L90 570M190 -10L170 570M-10 470L290 440" />
                </g>
                <g stroke="#f7fafb" strokeWidth="3" fill="none">
                  <path d="M-10 60L290 80M-10 190L290 195M-10 310L290 320M20 -10L40 570M130 -10L125 570M240 -10L230 570" />
                </g>
                <path d="M-20 300C60 280 110 200 150 170S250 140 300 90" stroke="#b9dcec" strokeWidth="10" fill="none" strokeLinecap="round" />
                <rect x="140" y="250" width="70" height="50" rx="6" fill="#dcebd9" />
                <rect x="20" y="395" width="50" height="40" rx="6" fill="#dcebd9" />
                <path d="M78 390L88 250L170 234L180 145" stroke="#176f9d" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="78" cy="390" r="9" fill="#4caf46" stroke="#fff" strokeWidth="3" />
                <rect x="172" y="137" width="16" height="16" rx="3" fill="#c34e55" stroke="#fff" strokeWidth="3" />
                <g transform="translate(120 238) rotate(-10)">
                  <rect x="-14" y="-8" width="28" height="16" rx="5" fill="#fff" stroke="#103c56" strokeWidth="2" />
                  <rect x="-6" y="-5" width="10" height="10" rx="2" fill="#103c56" />
                </g>
                <g transform="translate(210 350) rotate(80)" opacity=".7">
                  <rect x="-12" y="-7" width="24" height="14" rx="4" fill="#fff" stroke="#557180" strokeWidth="2" />
                </g>
                <g transform="translate(40 180) rotate(20)" opacity=".7">
                  <rect x="-12" y="-7" width="24" height="14" rx="4" fill="#fff" stroke="#557180" strokeWidth="2" />
                </g>
              </svg>
              <div className="app-pill">
                <Mark />
                TE LEVO MOBILE
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
