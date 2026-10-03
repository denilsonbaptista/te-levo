import { Icon, Mark } from "./Icons";
import { STORE_URLS } from "./StoreLink";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Footer() {
  return (
    <>
      <div className="stripe" aria-hidden="true"></div>
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a className="logo" href="#inicio" aria-label="TE LEVO Mobile, página inicial">
                <Mark />
                <b>
                  te<i>levo</i>
                </b>
              </a>
              <p>
                <strong style={{ color: "#fff" }}>Te Levo Mobile - Seu App de Corridas</strong>
                <br />
                Mobilidade segura, confortável e feita por quem conhece Parauapebas.
              </p>
              <div className="social">
                <a href={STORE_URLS.instagram} {...external} aria-label="Instagram da TE LEVO">
                  <Icon id="i-insta" />
                </a>
                <a href={STORE_URLS.whatsapp} {...external} aria-label="WhatsApp da TE LEVO">
                  <Icon id="i-whats" />
                </a>
              </div>
            </div>
            <div>
              <h4>Empresa</h4>
              <ul>
                <li><a href="#sobre">Sobre nós</a></li>
                <li><a href="#seguranca">Segurança</a></li>
                <li><a href="#duvidas">Dúvidas frequentes</a></li>
              </ul>
            </div>
            <div>
              <h4>Passageiros</h4>
              <ul>
                <li><a href="#como-funciona">Como funciona</a></li>
                <li><a href={STORE_URLS.passengerAndroid} {...external}>App para Android</a></li>
                <li><a href={STORE_URLS.passengerIos} {...external}>App para iPhone</a></li>
              </ul>
            </div>
            <div>
              <h4>Motoristas</h4>
              <ul>
                <li><a href="#motoristas">Seja um parceiro</a></li>
                <li><a href={STORE_URLS.driverAndroid} {...external}>App do motorista</a></li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>
                  <a href={STORE_URLS.whatsapp} {...external}>
                    WhatsApp: <span style={{ whiteSpace: "nowrap" }}>+55 94 93618-2415</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Te Levo Mobile - Seu App de Corridas. Todos os direitos reservados.</span>
            <span>
              Parauapebas · Pará · Brasil ·{" "}
              <a href={STORE_URLS.whatsapp} {...external} style={{ color: "inherit", whiteSpace: "nowrap" }}>
                WhatsApp +55 94 93618-2415
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
