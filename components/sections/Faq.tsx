import FaqList, { type FaqItem } from "../FaqList";
import { STORE_URLS } from "../StoreLink";

const questions: FaqItem[] = [
  {
    q: "Como faço para pedir uma corrida?",
    a: "Baixe o app TE LEVO Mobile, faça seu cadastro, informe o destino e confirme. Você acompanha o motorista pelo mapa até ele chegar.",
  },
  {
    q: "Em quais cidades a TE LEVO atende?",
    a: "A TE LEVO atende Parauapebas, no Pará. Nosso foco é oferecer um serviço de qualidade para quem vive e circula pela cidade.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "As formas de pagamento disponíveis aparecem no aplicativo no momento de pedir a corrida. Escolha a que for mais prática para você.",
  },
  {
    q: "Como sei que a corrida é segura?",
    a: "Antes do embarque você vê o nome e a foto do motorista, o modelo e a placa do carro. Durante a viagem, acompanhe o trajeto pelo mapa e compartilhe sua rota com quem quiser.",
  },
  {
    q: "Esqueci um objeto no carro. O que faço?",
    a: "Entre em contato com o nosso suporte informando os dados da corrida. Nossa equipe local vai ajudar a localizar o motorista e o seu objeto.",
  },
  {
    q: "Como me torno motorista parceiro?",
    a: "Baixe o app do motorista TE LEVO no Google Play, faça o cadastro e envie os documentos solicitados. Após a análise, você já pode começar a dirigir.",
  },
];

export default function Faq() {
  return (
    <section className="section faq" id="duvidas">
      <div className="wrap faq-grid">
        <div className="reveal">
          <div className="eyebrow">Dúvidas frequentes</div>
          <h2>Tudo o que você precisa saber.</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Não encontrou sua resposta? Fale com a gente pelo WhatsApp{" "}
            <a
              href={STORE_URLS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--blue)", fontWeight: 600, whiteSpace: "nowrap" }}
            >
              +55 94 93618-2415
            </a>{" "}
            ou pelo Instagram{" "}
            <a
              href={STORE_URLS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--blue)", fontWeight: 600 }}
            >
              @televomobile.pa
            </a>
            .
          </p>
        </div>
        <FaqList items={questions} />
      </div>
    </section>
  );
}
