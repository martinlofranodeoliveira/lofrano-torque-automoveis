import React from "react";
import { ArrowUpRight, MoveUpRight, ArrowRight } from "./Icons.jsx";
import image_torque from "../assets/torque.webp";

const SectorImage = ({ name: e, alt: t }) => (
  <img src={image_torque} alt={t} width={1400} height={1e3} />
);
const DemoData1 = [
  {
    name: `Urban`,
    type: `CIDADE / COMPACTO`,
    text: `Linhas limpas para o ritmo de todos os dias.`,
    spec: [`Perfil urbano`, `Silhueta compacta`, `Uso cotidiano`],
  },
  {
    name: `Touring`,
    type: `ESTRADA / GRAN TURISMO`,
    text: `O caminho também faz parte do destino.`,
    spec: [`Perfil rodoviário`, `Cabine ampla`, `Viagens longas`],
  },
  {
    name: `Terrain`,
    type: `VERSATILIDADE / UTILITÁRIO`,
    text: `Mais possibilidades a cada novo trajeto.`,
    spec: [`Perfil versátil`, `Espaço flexível`, `Uso misto`],
  },
];
function TorqueDemo() {
  let [selectedVehicleIndex, setSelectedVehicleIndex] = React.useState(1),
    [service, setService] = React.useState(`Revisão preventiva`),
    [visitSimulated, setVisitSimulated] = React.useState(!1);
  return (
    <div className={`tq-root`} id={`demo-top`}>
      <nav className={`tq-nav`} aria-label={`Navegação Torque`}>
        <a href={`#demo-top`} className={`tq-logo`}>
          TORQUE<span>{` /`}</span>
        </a>
        <a href={`#tq-fleet`}>A coleção</a>
        <a href={`#tq-care`}>
          {`Seu próximo passo `}
          <ArrowUpRight size={16} />
        </a>
      </nav>
      <section className={`tq-hero`}>
        <SectorImage
          name={`torque`}
          alt={`Automóvel conceitual em ambiente editorial escuro`}
        />
        <div className={`tq-hero-copy`}>
          <p className={`tq-kicker`}>NÃO É SÓ SOBRE CHEGAR.</p>
          <h1>
            É sobre
            <br />
            <em>sentir.</em>
          </h1>
          <a href={`#tq-fleet`}>
            {`EXPLORE O MOVIMENTO `}
            <ArrowUpRight size={20} />
          </a>
        </div>
        <div className={`tq-hero-bottom`}>
          <span>DESIGN EM MOVIMENTO</span>
          <span>01 — CONCEITO AUTOMOTIVO</span>
        </div>
      </section>
      <section className={`tq-fleet`} id={`tq-fleet`}>
        <div className={`tq-fleet-heading`}>
          <p className={`tq-kicker`}>ESCOLHA SUA DIREÇÃO</p>
          <h2>
            Para cada ritmo,
            <br />
            uma personalidade.
          </h2>
        </div>
        <div
          className={`tq-selector`}
          role={`group`}
          aria-label={`Selecionar perfil de veículo`}
        >
          {DemoData1.map((n, r) => (
            <button
              key={n.name}
              aria-pressed={selectedVehicleIndex === r}
              onClick={() => setSelectedVehicleIndex(r)}
            >
              <span>0{r + 1}</span>
              {n.name}
              <MoveUpRight size={22} />
            </button>
          ))}
        </div>
        <div className={`tq-car-detail`} aria-live={`polite`}>
          <div>
            <p className={`tq-kicker`}>
              {DemoData1[selectedVehicleIndex].type}
            </p>
            <h3>
              {DemoData1[selectedVehicleIndex].name}
              <span>{` /`}</span>
            </h3>
            <p>{DemoData1[selectedVehicleIndex].text}</p>
          </div>
          <ul>
            {DemoData1[selectedVehicleIndex].spec.map((e) => (
              <li key={e}>
                {e}
                <ArrowUpRight size={16} />
              </li>
            ))}
          </ul>
          <span className={`tq-outline-number`}>
            0{selectedVehicleIndex + 1}
          </span>
        </div>
        <p className={`tq-note`}>
          Perfis fictícios de apresentação. Sem estoque, preços ou
          especificações de veículos reais.
        </p>
      </section>
      <section className={`tq-care`} id={`tq-care`}>
        <div>
          <p className={`tq-kicker`}>CUIDADO QUE ACOMPANHA</p>
          <h2>
            O próximo trajeto
            <br />
            começa aqui.
          </h2>
          <p>
            Explore uma jornada de atendimento automotivo.
            <br />
            Sem enviar dados ou agendar serviços.
          </p>
        </div>
        <div className={`tq-service`}>
          <label htmlFor={`tq-service`}>O QUE VOCÊ PROCURA?</label>
          <select
            id={`tq-service`}
            value={service}
            onChange={(e) => {
              (setService(e.target.value), setVisitSimulated(!1));
            }}
          >
            {[
              `Revisão preventiva`,
              `Pneus e alinhamento`,
              `Peças e acessórios`,
              `Conhecer um veículo`,
            ].map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
          <button onClick={() => setVisitSimulated(!0)}>
            {`Visualizar intenção `}
            <ArrowRight size={18} />
          </button>
          <p role={`status`}>
            {visitSimulated
              ? `${service}: interesse de exemplo registrado apenas nesta tela. Nenhum agendamento realizado.`
              : `Uma experiência de atendimento, em modo demonstração.`}
          </p>
        </div>
      </section>
    </div>
  );
}

export default TorqueDemo;
