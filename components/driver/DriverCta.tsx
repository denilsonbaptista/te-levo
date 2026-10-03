import Link from "next/link";
import { Icon, Mark } from "../Icons";
import StoreLink, { STORE_URLS } from "../StoreLink";
import Brand from "../Brand";

export default function DriverCta() {
  return (
    <section className="section" id="baixar">
      <div className="wrap">
        <div className="download-head reveal">
          <div className="eyebrow">Comece hoje</div>
          <h2>Seu próximo passageiro está esperando.</h2>
          <p className="lead">Baixe o app do motorista, faça seu cadastro e venha dirigir com a <Brand />.</p>
        </div>
        <div className="apps">
          <article className="app-card pass reveal">
            <Mark className="corner" />
            <div className="tag">App do motorista</div>
            <h3>Dirija e ganhe com a <Brand /></h3>
            <p>Cadastro pelo app, análise da nossa equipe e, depois, é só ficar online. Disponível para Android.</p>
            <div className="stores">
              <StoreLink href={STORE_URLS.driverAndroid} store="play" caption="DISPONÍVEL NO" onDark />
            </div>
          </article>
          <article className="app-card drv reveal">
            <div className="tag" style={{ color: "var(--blue)" }}>
              Fale com a gente
            </div>
            <h3>Ficou alguma dúvida?</h3>
            <p>Nossa equipe local responde pelo WhatsApp e ajuda você do cadastro à primeira corrida.</p>
            <div className="stores">
              <a className="btn btn-dark btn-tall" href={STORE_URLS.whatsappDriver} target="_blank" rel="noopener noreferrer">
                <Icon id="i-whats" className="btn-ico" />
                Chamar no WhatsApp
              </a>
              <Link className="btn btn-ghost btn-tall" href="/">
                Sou passageiro
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
