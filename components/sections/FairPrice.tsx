import { Icon } from "../Icons";
import { withBrand } from "../Brand";

const checks = [
  { title: "Valor estimado antes de confirmar", text: "Decida com tranquilidade, sabendo quanto vai pagar." },
  { title: "Justo para os dois lados", text: "Um preço acessível para o passageiro e digno para o motorista." },
  { title: "Cupons e promoções", text: "Fique de olho nas notificações do app para aproveitar descontos." },
];

const options = [
  { name: "te levo", info: "Chega em 3 min · 4 lugares", price: "R$ 14,90", selected: true },
  { name: "te levo Conforto", info: "Chega em 6 min · carros maiores", price: "R$ 19,50", selected: false },
];

export default function FairPrice() {
  return (
    <section className="section fair">
      <div className="wrap fair-grid">
        <div className="reveal">
          <div className="eyebrow">Preço justo</div>
          <h2>Sem surpresas no fim da corrida.</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Transparência é a base de uma relação de confiança. Por isso, você vê o valor antes de pedir e escolhe a
            forma de pagamento que for melhor para você.
          </p>
          <ul className="checks">
            {checks.map((check) => (
              <li key={check.title}>
                <Icon id="i-check" />
                <div>
                  <b>{check.title}</b>
                  <span>{check.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="price-card reveal" aria-label="Exemplo de escolha de corrida">
          <h4>Escolha sua corrida</h4>
          {options.map((opt) => (
            <div className={opt.selected ? "opt sel" : "opt"} key={opt.name}>
              <div className="car">
                <Icon id="i-car" viewBox="0 0 32 24" />
              </div>
              <div>
                <b>{withBrand(opt.name)}</b>
                <small>{opt.info}</small>
              </div>
              <div className="val">
                {opt.price}
                <small>valor estimado</small>
              </div>
            </div>
          ))}
          <div className="pay">
            <span>Dinheiro</span>
            <span>Pix</span>
            <span>Cartão</span>
          </div>
          <a className="btn btn-dark" href="#baixar" style={{ width: "100%", marginTop: 22 }}>
            Pedir pelo app
          </a>
        </div>
      </div>
    </section>
  );
}
