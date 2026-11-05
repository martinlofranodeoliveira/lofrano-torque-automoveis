const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "torque-01 — alterna entre os perfis Urban e Terrain",
    run: async ({ ui, user, assert, within }) => {
      const profiles = within(
        ui.getByRole("group", { name: "Selecionar perfil de veículo" }),
      );
      const urban = profiles.getByRole("button", { name: /Urban/u });
      await user.click(urban);
      assert.equal(urban.getAttribute("aria-pressed"), "true");
      assert.ok(ui.getByRole("heading", { level: 3, name: /^Urban/u }));
      for (const item of [
        "CIDADE / COMPACTO",
        "Perfil urbano",
        "Silhueta compacta",
        "Uso cotidiano",
      ]) {
        assert.ok(ui.getByText(item, { exact: true }));
      }
      const terrain = profiles.getByRole("button", { name: /Terrain/u });
      await user.click(terrain);
      assert.equal(terrain.getAttribute("aria-pressed"), "true");
      assert.equal(urban.getAttribute("aria-pressed"), "false");
      assert.ok(ui.getByRole("heading", { level: 3, name: /^Terrain/u }));
      for (const item of [
        "VERSATILIDADE / UTILITÁRIO",
        "Perfil versátil",
        "Espaço flexível",
        "Uso misto",
      ]) {
        assert.ok(ui.getByText(item, { exact: true }));
      }
      assert.equal(ui.queryByText("Perfil urbano", { exact: true }), null);
    },
  },
  {
    name: "torque-02 — visualiza a intenção de Pneus e alinhamento",
    run: async ({ ui, user, assert }) => {
      await user.selectOptions(
        ui.getByRole("combobox", { name: "O QUE VOCÊ PROCURA?" }),
        "Pneus e alinhamento",
      );
      await user.click(ui.getByRole("button", { name: "Visualizar intenção" }));
      assert.equal(
        text(ui.getByRole("status")),
        "Pneus e alinhamento: interesse de exemplo registrado apenas nesta tela. Nenhum agendamento realizado.",
      );
    },
  },
  {
    name: "torque-03 — limpa a intenção ao mudar de serviço",
    run: async ({ ui, user, assert }) => {
      await user.click(ui.getByRole("button", { name: "Visualizar intenção" }));
      assert.match(text(ui.getByRole("status")), /^Revisão preventiva:/u);
      await user.selectOptions(
        ui.getByRole("combobox", { name: "O QUE VOCÊ PROCURA?" }),
        "Peças e acessórios",
      );
      assert.equal(
        text(ui.getByRole("status")),
        "Uma experiência de atendimento, em modo demonstração.",
      );
    },
  },
];
