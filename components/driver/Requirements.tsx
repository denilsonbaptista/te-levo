import { Icon } from "../Icons";

const requirements = [
  { title: "CNH válida com EAR", text: "Carteira de motorista com a observação “Exerce Atividade Remunerada”." },
  { title: "Veículo em bom estado", text: "Carro conservado, confortável e com a documentação em dia." },
  { title: "Celular Android", text: "Com internet e GPS, para usar o app do motorista." },
];

const documents = [
  { icon: "i-user", label: "Dados pessoais e foto de perfil" },
  { icon: "i-doc", label: "CNH com EAR" },
  { icon: "i-car", label: "Documento do veículo (CRLV)", viewBox: "0 0 32 24" },
  { icon: "i-phone", label: "App do motorista instalado" },
];

export default function Requirements() {
  return (
    <section className="section" id="requisitos">
      <div className="wrap fair-grid">
        <div className="reveal">
          <div className="eyebrow">Requisitos</div>
          <h2>O que você precisa para começar.</h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Pedimos poucas coisas, todas pensadas para a segurança de motoristas e passageiros. A lista completa de
            documentos aparece no cadastro do app.
          </p>
          <ul className="checks">
            {requirements.map((req) => (
              <li key={req.title}>
                <Icon id="i-check" />
                <div>
                  <b>{req.title}</b>
                  <span>{req.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="price-card reveal" aria-label="Documentos para o cadastro">
          <h4>Tenha em mãos para o cadastro</h4>
          {documents.map((doc) => (
            <div className="opt doc" key={doc.label}>
              <div className="car">
                <Icon id={doc.icon} viewBox={doc.viewBox} />
              </div>
              <div>
                <b>{doc.label}</b>
              </div>
            </div>
          ))}
          <a className="btn btn-dark" href="#baixar" style={{ width: "100%", marginTop: 22 }}>
            Quero me cadastrar
          </a>
        </div>
      </div>
    </section>
  );
}
