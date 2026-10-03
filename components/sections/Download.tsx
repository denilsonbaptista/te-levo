import { Mark } from "../Icons";
import StoreLink, { STORE_URLS } from "../StoreLink";

export default function Download() {
  return (
    <section className="section" id="baixar">
      <div className="wrap">
        <div className="download-head reveal">
          <div className="eyebrow">Baixe agora</div>
          <h2>É mais fácil pelo app.</h2>
          <p className="lead">Escolha o aplicativo certo para você e comece hoje mesmo.</p>
        </div>
        <div className="apps">
          <article className="app-card pass reveal">
            <Mark className="corner" />
            <div className="tag">Passageiro</div>
            <h3>Peça sua corrida com a TE&nbsp;LEVO</h3>
            <p>Segurança, conforto e preço claro na palma da mão. Disponível para Android e iPhone.</p>
            <div className="stores">
              <StoreLink href={STORE_URLS.passengerAndroid} store="play" caption="DISPONÍVEL NO" onDark />
              <StoreLink href={STORE_URLS.passengerIos} store="apple" caption="BAIXAR NA" onDark />
            </div>
          </article>
          <article className="app-card drv reveal">
            <div className="tag" style={{ color: "var(--blue)" }}>
              Motorista
            </div>
            <h3>Dirija e ganhe com a TE&nbsp;LEVO</h3>
            <p>Faça seu horário, receba corridas na sua região e conte com o suporte de uma equipe local.</p>
            <div className="stores">
              <StoreLink href={STORE_URLS.driverAndroid} store="play" caption="DISPONÍVEL NO" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
