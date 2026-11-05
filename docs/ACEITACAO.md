# Critérios do modelo Torque

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **torque-01** — No grupo “Selecionar perfil de veículo”, clicar no button que contém Urban; depois Terrain.
  Resultado: Urban fica aria-pressed=true e mostra CIDADE / COMPACTO, Perfil urbano, Silhueta compacta e Uso cotidiano. Terrain fica ativo e mostra VERSATILIDADE / UTILITÁRIO, Perfil versátil, Espaço flexível e Uso misto.
- **torque-02** — No select#tq-service, escolher Pneus e alinhamento e clicar “Visualizar intenção”.
  Resultado: Role=status mostra “Pneus e alinhamento: interesse de exemplo registrado apenas nesta tela. Nenhum agendamento realizado.”.
- **torque-03** — Depois de visualizar a intenção, mudar select#tq-service para Peças e acessórios.
  Resultado: O resultado anterior é limpo e o status volta a “Uma experiência de atendimento, em modo demonstração.”.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
