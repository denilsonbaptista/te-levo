import FaqList, { type FaqItem } from "../FaqList";
import { STORE_URLS } from "../StoreLink";

const questions: FaqItem[] = [
  {
    q: "Como me torno motorista parceiro?",
    a: "Baixe o app do motorista TE LEVO no Google Play, faça o cadastro e envie os documentos solicitados. Após a análise, você já pode começar a dirigir.",
  },
  {
    q: "Preciso cumprir horário ou meta?",
    a: "Não. Você decide quando ficar online e quantas corridas quer fazer. A flexibilidade de horário é uma das bases da parceria.",
  },
  {
    q: "O app do motorista funciona no iPhone?",
    a: "Por enquanto, o app do motorista está disponível para Android, no Google Play.",
  },
  {
    q: "Em quais cidades posso dirigir?",
    a: "A TE LEVO atende Parauapebas, no Pará. As corridas são todas na cidade e região.",
  },
  {
    q: "Como funciona a segurança para o motorista?",
    a: "Os passageiros são cadastrados e avaliados, e você vê embarque e destino antes de aceitar a corrida. Se precisar, nossa equipe local está pronta para ajudar.",
  },
  {
    q: "Tenho dúvidas sobre o cadastro. Com quem falo?",
    a: "Fale com a nossa equipe pelo WhatsApp +55 94 93618-2415. A gente ajuda você em cada etapa.",
  },
];

export default function DriverFaq() {
  return (
    <section className="section faq" id="duvidas">
      <div className="wrap faq-grid">
        <div className="reveal">
          <div className="eyebrow">Dúvidas de motoristas</div>
          <h2>Antes de começar, tire suas dúvidas.</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Não encontrou sua resposta? Chame a nossa equipe no WhatsApp{" "}
            <a
              href={STORE_URLS.whatsappDriver}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--blue)", fontWeight: 600, whiteSpace: "nowrap" }}
            >
              +55 94 93618-2415
            </a>
            .
          </p>
        </div>
        <FaqList items={questions} />
      </div>
    </section>
  );
}
