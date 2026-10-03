import Link from "next/link";
import { Icon } from "../Icons";
import StoreLink, { STORE_URLS } from "../StoreLink";
import Brand from "../Brand";

const perks = [
  { icon: "i-calendar", text: "Flexibilidade total de horários" },
  { icon: "i-wallet", text: "Ganhos justos em cada corrida" },
  { icon: "i-chat", text: "Suporte próximo, de gente daqui" },
  { icon: "i-shield", text: "Passageiros cadastrados e avaliados" },
];

const barHeights = ["45%", "62%", "38%", "74%", "92%", "58%", "30%"];
const days = ["S", "T", "Q", "Q", "S", "S", "D"];

export default function Drivers() {
  return (
    <section className="section" id="motoristas">
      <div className="wrap">
        <div className="drive reveal">
          <div className="drive-copy">
            <div className="eyebrow">Para motoristas</div>
            <h2>Dirija com a <Brand /> e faça seu próprio horário.</h2>
            <p className="lead">
              Seja parceiro de uma empresa local que valoriza quem está ao volante. Você decide quando dirigir e conta
              com suporte de perto.
            </p>
            <ul className="drive-list">
              {perks.map((perk) => (
                <li key={perk.text}>
                  <Icon id={perk.icon} />
                  {perk.text}
                </li>
              ))}
            </ul>
            <div className="stores">
              <StoreLink href={STORE_URLS.driverAndroid} store="play" caption="APP DO MOTORISTA NO" onDark />
              <Link className="btn btn-outline-light" href="/motoristas">
                Conheça as vantagens
              </Link>
            </div>
          </div>
          <div className="drive-art" aria-hidden="true">
            <svg className="road" viewBox="0 0 500 480" preserveAspectRatio="xMidYMid slice">
              <path d="M-20 400C120 360 160 250 260 230S420 180 540 60" stroke="#135d84" strokeWidth="70" fill="none" strokeLinecap="round" />
              <path d="M-20 400C120 360 160 250 260 230S420 180 540 60" stroke="#fff" strokeWidth="3" strokeDasharray="18 16" fill="none" opacity=".5" />
              <g transform="translate(330 -60) scale(.45)" opacity=".9">
                <use href="#mark" />
              </g>
            </svg>
            <div className="earn">
              <small>Seus ganhos na semana</small>
              <b>Você no controle</b>
              <div className="bars">
                {barHeights.map((height, i) => (
                  <i key={i} style={{ height }}></i>
                ))}
              </div>
              <div className="days">
                {days.map((day, i) => (
                  <span key={i}>{day}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
