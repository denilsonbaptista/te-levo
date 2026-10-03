import Link from "next/link";
import { Icon } from "./Icons";
import LogoLink from "./LogoLink";
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
              <LogoLink />
              <p>
                <strong style={{ color: "#fff" }}>Te Levo Mobile - Seu App de Corridas</strong>
                <br />
                Mobilidade segura, confortável e feita por quem conhece Parauapebas.
              </p>
              <div className="social">
                <a href={STORE_URLS.instagram} {...external} aria-label="Instagram da te levo">
                  <Icon id="i-insta" />
                </a>
                <a href={STORE_URLS.whatsapp} {...external} aria-label="WhatsApp da te levo">
                  <Icon id="i-whats" />
                </a>
              </div>
            </div>
            <div>
              <h4>Empresa</h4>
              <ul>
                <li><Link href="/#sobre">Sobre nós</Link></li>
                <li><Link href="/#seguranca">Segurança</Link></li>
                <li><Link href="/#duvidas">Dúvidas frequentes</Link></li>
              </ul>
            </div>
            <div>
              <h4>Passageiros</h4>
              <ul>
                <li><Link href="/#como-funciona">Como funciona</Link></li>
                <li><a href={STORE_URLS.passengerAndroid} {...external}>App para Android</a></li>
                <li><a href={STORE_URLS.passengerIos} {...external}>App para iPhone</a></li>
              </ul>
            </div>
            <div>
              <h4>Motoristas</h4>
              <ul>
                <li><Link href="/motoristas">Seja um parceiro</Link></li>
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
