---
name: "Torque"
description: "Sistema visual implementado — Automotivo & mobilidade"
colors:
  primary: "#ff5146"
  action: "#d93932"
  background: "#151719"
  text: "#f1f1ef"
  surface: "#2b2c2e"
  light-surface: "#e7e6e1"
  dark-text: "#202123"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(85px, 10vw, 140px)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-6px"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    lineHeight: 1.6
---

# Design System: Torque

## Overview

Automotivo de presença escura, fotografia ampla e vermelho pontual. Display de grande escala, itálico serifado e número vazado expressam movimento e precisão.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/torque). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Vermelho marca seleção, ênfase e ação; cinzas escuros estruturam catálogo e navegação. A área de serviços inverte para superfície clara e texto escuro. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Manrope conduz títulos com ênfase em Georgia no hero; DM Sans organiza navegação e dados. O título principal passa a (94px) até (760px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero com mínimo de (650px), três seletores de veículo, detalhe em três colunas e serviços em duas. Até (1000px), o número vazado diminui. Até (760px), detalhe e serviços viram uma coluna, número decorativo desaparece e hero usa mínimo de (550px); as três opções de veículo permanecem lado a lado.

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

Gradientes escuros sobre a foto e tons no seletor. As áreas de dados usam bordas; não há sombras estruturais.

## Shapes

Planos retos; aba ativa tem borda superior vermelha (3px) e compensação de padding. O número decorativo usa contorno (1px). A imagem conceitual está em [`assets/torque.webp`](../assets/torque.webp); preservar seu recorte definido pelo CSS.

## Components

- Veículos: seleção inicia no segundo item e troca o detalhe anunciado com `aria-live="polite"`.
- Serviço: seletor e ação de agendamento ilustrativo; alterar serviço limpa a confirmação e a ação exibe status.
- Hero: ação de âncora com sublinhado vermelho e assinatura tipográfica em escala grande.
- Estados compartilhados: Controles da demonstração usam o foco global rosa (3px), afastado (5px). A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Preservar a alternância de áreas escuras e claras e a borda vermelha da seleção.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Tratar a simulação como visita agendada ou criar disponibilidade real de veículos.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
