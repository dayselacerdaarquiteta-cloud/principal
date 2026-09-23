---
name: Painel Dayse Lacerda
description: Painel operacional diário lido como um mostruário silencioso de amostras de cor.
colors:
  ground: "#F3F5F7"
  surface: "#FFFFFF"
  ink: "#1E2225"
  stone: "#596065"
  line: "#DCE1E5"
  line-strong: "#C2C9CF"
  wash: "#E8ECEF"
  red: "#B3372B"
  orange: "#C2671A"
  orange-text: "#9A4E0F"
  blue: "#2E5C9A"
  green: "#3B7853"
typography:
  display:
    fontFamily: "Sofia Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(64px, 9vw, 96px)"
    fontWeight: 300
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Sofia Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.6vw, 32px)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Sofia Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Sofia Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "Sofia Sans, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Sofia Sans Condensed, Sofia Sans, Avenir Next Condensed, Arial Narrow, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.01em"
    fontFeature: "\"tnum\", \"lnum\""
rounded:
  swatch: "2px"
  swatch-big: "3px"
  control: "4px"
  sheet-mobile: "10px"
spacing:
  strip-gap: "5px"
  sm: "8px"
  md: "14px"
  row: "16px"
  lg: "22px"
  section: "44px"
  gutter: "64px"
  page-inline: "clamp(16px, 4.5vw, 56px)"
components:
  button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "38px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "38px"
  button-primary-hover:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ground}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    size: "34px"
  textarea:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  swatch:
    backgroundColor: "{colors.wash}"
    rounded: "{rounded.swatch}"
    width: "12px"
    height: "16px"
  swatch-strip:
    rounded: "{rounded.swatch}"
    width: "14px"
    height: "20px"
  swatch-feature:
    rounded: "{rounded.swatch-big}"
    width: "64px"
    height: "92px"
  swatch-entrega:
    backgroundColor: "{colors.red}"
  swatch-apresentacao:
    backgroundColor: "{colors.orange}"
  swatch-reuniao:
    backgroundColor: "{colors.blue}"
  swatch-producao:
    backgroundColor: "{colors.green}"
  sheet:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    width: "min(540px, 100%)"
---

# Design System: Painel Dayse Lacerda

## Overview

**Creative North Star: "O Mostruário Silencioso"**

O painel é lido como um mostruário de acabamentos de um escritório de arquitetura: um fundo calmo, frio e quase branco, tinta grafite, filetes finos, e cor apenas em pequenas amostras retangulares. Cada demanda do dia é uma amostra; a semana de cada pessoa é uma tira de dez amostras, uma por dia útil. Todo o resto (texto, controles, divisões) fica em escala de cinzas azulados para que a cor tenha significado e nunca decoração.

A densidade é de ferramenta de trabalho, não de vitrine: linhas de lista separadas por filetes, sem cartões em volta de cada bloco, sem barra lateral, títulos em caixa normal. A hierarquia vem do peso e do tamanho de uma única família tipográfica (Sofia Sans), com a largura condensada reservada a números, datas e rótulos. O único gesto grande é o "Hoje" em peso leve e corpo enorme, que ancora a página.

O movimento é curto e funcional: o lembrete em destaque troca com esmaecimento e leve desfoque, a ficha da pessoa entra com curva de gaveta, e controles cedem com leve redução de escala ao toque. Tudo respeita `prefers-reduced-motion`. O sistema tem modo escuro completo, por preferência do sistema ou por `data-theme="dark"`.

**Key Characteristics:**
- Cor só nas amostras de demanda; interface em grafite, pedra e filetes.
- Uma família tipográfica, com a versão condensada para números.
- Linhas e filetes em vez de caixas; superfícies planas.
- Cantos quase retos (2 a 4px) em tudo que é da página.
- Movimento curto, com curvas de saída suaves, desligado sob movimento reduzido.

## Colors

Paleta fria e contida: neutros cinza-azulados com quatro cores de demanda fixas, usadas como pigmento de amostra.

### Primary
- **Grafite** (`ink`): texto principal, botão primário preenchido, filete da navegação ativa, contorno de foco, cor de seleção de texto e cor da amostra de sobrecarga. É a voz da interface.

### Secondary
As quatro cores de demanda são definidas pela direção do escritório e têm significado fixo. Aparecem como amostras e, em raros casos, como texto de estado.
- **Vermelho Tijolo** (`red`): entrega final; também atraso, prazo em risco, erros, estado crítico de carga e mensagens de bloqueio.
- **Laranja Terracota** (`orange`): apresentação ou aprovação do cliente. Só como pigmento de amostra.
- **Laranja Queimado** (`orange-text`): a versão escura do laranja para texto (etiqueta de confirmação extra), porque o laranja de amostra não atinge contraste de texto.
- **Azul Ardósia** (`blue`): reunião; também o contorno da amostra de registro pendente e o filete das perguntas de esclarecimento.
- **Verde Musgo** (`green`): produção; também a confirmação de gravação bem-sucedida.

### Neutral
- **Branco-gelo** (`ground`): fundo da página e texto sobre o botão primário.
- **Branco Papel** (`surface`): superfícies de entrada e leitura (campo de texto, cartão de antes e depois, ficha lateral).
- **Cinza Pedra** (`stone`): texto secundário, metadados, datas, rótulos e hover do botão primário.
- **Filete** (`line`): divisões entre linhas de lista e seções.
- **Filete Forte** (`line-strong`): contornos de botões e campos, sublinhado de links em repouso e contorno da amostra vazia.
- **Névoa** (`wash`): amostra sem demanda, esqueletos de carregamento e o realce de hover das linhas da equipe.

No modo escuro os mesmos papéis trocam de valor (fundo `#141617`, superfície `#1B1E20`, tinta `#E9EBE8`, pedra `#9EA5A9`, filetes `#2A2E31` e `#3D4246`, névoa `#212527`) e as cores de demanda clareiam (`#E26B5D`, `#E39A55`, `#83A6DC`, `#7DBB92`), com o laranja de texto igual ao de amostra.

### Named Rules
**The Pigment Rule.** Vermelho, laranja, azul e verde significam tipo de demanda e nada mais. Nunca usar uma delas como cor de marca, fundo de seção, botão ou enfeite.

**The Text-Safe Orange Rule.** O laranja de amostra (`orange`) não é cor de texto. Texto laranja usa sempre `orange-text`.

## Typography

**Display Font:** Sofia Sans (com Avenir Next, Segoe UI, system-ui)
**Body Font:** Sofia Sans
**Label/Mono Font:** Sofia Sans Condensed (com Avenir Next Condensed, Arial Narrow), números tabulares e alinhados

**Character:** Uma humanista de desenho limpo, com a largura condensada fazendo o papel de "letra de etiqueta" do mostruário: datas, contadores, dias da tira e legendas.

### Hierarchy
- **Display** (300, clamp(64px, 9vw, 96px), 0.9): só o título da página ("Hoje"), leve, grande, com tracking negativo.
- **Headline** (500, clamp(24px, 2.6vw, 32px), 1.18): título do lembrete em destaque; o nome na ficha lateral usa a mesma voz em 24px.
- **Title** (600, 19px): títulos de seção. Subtítulos internos em 600, 14px.
- **Body** (400, 15px, 1.55): texto corrente; nomes de pessoa em 600, 16px. Textos explicativos limitados a cerca de 44ch.
- **Body small** (400, 13.5px): linha secundária em pedra (o que a pessoa faz agora, detalhe do alerta, status). Notas de rodapé em 12.5px.
- **Label** (Condensed, 13px, 0.01em, tabular): datas, contadores, dias da tira, legenda, carga. Destaque do dia atual em 600 e tinta.

### Named Rules
**The One Family Rule.** Só Sofia Sans e Sofia Sans Condensed. Hierarquia por peso e tamanho, nunca por uma segunda família.

**The Numbers Are Condensed Rule.** Todo número, data ou contador que o olho compara usa a condensada com `tabular-nums lining-nums`.

**The Sentence Case Rule.** Títulos, rótulos e botões em caixa normal. Nada em caixa alta.

## Layout

Coluna única centralizada de até 1200px, com margem lateral fluida (`page-inline`). A página é uma sequência de faixas separadas por filetes horizontais: cabeçalho baixo (18px de respiro vertical, marca à esquerda, navegação e status à direita), abertura em duas colunas (título e data à esquerda, lembrete em destaque à direita, proporção 1 : 1.15), corpo em duas colunas (equipe 1.65 : alertas 1) e a faixa de atualização (texto 1 : formulário 1.65). Colunas usam `gutter` (64px) na horizontal; faixas usam `section` (44px) na vertical.

Listas são linhas com filete superior e cerca de 11 a 16px de respiro vertical; não há caixas em volta de itens. A tira da equipe é uma grade de 10 colunas de 14px com `strip-gap` (5px).

Responsivo: até 960px todas as grades de duas colunas viram uma coluna. Até 560px a linha da cabeça dos dias some e cada pessoa mostra nome e carga em cima e a tira embaixo, com os números dos dias sob as amostras; o antes e depois empilha; a ficha lateral vira folha inferior com 94% da altura.

## Elevation & Depth

O sistema é plano. A profundidade da página vem de filetes e da troca de fundo entre `ground` e `surface`, não de sombras. A única sombra de elevação existe no único elemento que realmente flutua, a ficha lateral, sobre um véu (`--scrim`, `rgba(24,27,29,.32)` no claro).

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 1px 2px rgba(30,34,37,.05), 0 12px 40px rgba(30,34,37,.10)`; no escuro `0 1px 2px rgba(0,0,0,.4), 0 16px 48px rgba(0,0,0,.5)`): somente na ficha lateral aberta.
- **Filete interno de amostra** (`box-shadow: inset 0 0 0 1px` ou `1.5px`): não é elevação; é o contorno das amostras vazias, de prazo e de registro, desenhado por dentro para não alterar o tamanho.

### Named Rules
**The Only-What-Floats Rule.** Sombra de elevação só em camadas sobrepostas à página (a ficha). Nada que esteja no fluxo da página ganha sombra.

## Shapes

Cantos quase retos, como amostras cortadas: 2px nas amostras pequenas, 3px nas grandes, 4px em botões, campos e cartões de confirmação. A exceção é a folha inferior no celular, com 10px só nos cantos de cima. Bordas são sempre de 1px (filete ou filete forte); o destaque de estado usa 1.5px (navegação ativa, contornos de amostra). A forma recorrente é o retângulo vertical da amostra (proporção próxima de 3:4 a 2:3), que aparece de 9x12px na legenda a 64x92px no lembrete.

## Components

### Buttons
Discretos e precisos: contorno fino, sem preenchimento, ganham presença só no hover.
- **Shape:** cantos quase retos (4px), altura mínima de 38px (34px no cabeçalho), 14px de padding lateral, texto 14px em 500, ícone de 15px opcional com 8px de espaço.
- **Default:** fundo transparente, contorno `line-strong`, texto grafite.
- **Primary:** preenchido em grafite com texto `ground`; uma ação primária por bloco (ex.: "Interpretar").
- **Hover / Focus:** contorno passa a grafite; o primário clareia para pedra. Hover só em dispositivos com ponteiro fino. Foco visível com contorno de 2px grafite, afastado 3px. Ao toque, escala 0.97 em 160ms (`--ease-out`).
- **Disabled:** opacidade 0.45.
- **Link button:** texto sublinhado com sublinhado em `line-strong` que escurece no hover; usado para ações secundárias ("Ver todos") e exemplos de texto (estes em pedra).

### Icon Button
Quadrado de 34px, contorno `line-strong`, canto de 4px, ícone de traço de 14px (traço 1.5). Hover escurece o contorno; toque em escala 0.94.

### Inputs / Fields
- **Style:** fundo `surface`, contorno `line-strong`, canto de 4px, 14px 16px de padding, texto de 16px (evita zoom no celular), altura mínima de 104px, redimensionável na vertical. Rótulo visível acima em 14px, 500.
- **Focus:** contorno e anel de 1px em grafite, sem brilho colorido.

### Navigation
Links de texto em 15px com 24px de espaço, rolagem horizontal sem barra no celular. O item atual fica em 600 com filete inferior de 1.5px em grafite; seções ainda indisponíveis aparecem em pedra, sem link.

### Swatch (Amostra)
O átomo do sistema. Retângulo vertical com canto de 2px. Variantes: cheia na cor da demanda (entrega, apresentação, reunião, produção), vazia (`wash` com filete interno `line-strong`), prazo em risco (só contorno vermelho de 1.5px), atraso (listras diagonais vermelhas com contorno), sobrecarga (grafite) e registro pendente (contorno azul). Tamanhos: 9x12 (legenda), 10x14 (alerta), 12x16 (padrão), 14x20 (tira), 30x42 e 64x92 (lembrete). Sempre acompanhada de texto ou de `title`; a cor nunca é o único portador do significado.

### Day Strip (Tira de amostras)
Assinatura do sistema: dez amostras de 14x20px, uma por dia útil, na cor da demanda mais importante do dia. A linha inteira da pessoa é um botão que abre a ficha; no hover recebe um realce horizontal em `wash` que se dissolve nas pontas. Na ficha, a tira cresce para amostras de 34px de altura em largura fluida, com dia da semana e data condensados abaixo, o dia atual em 600.

### Feature Sample (Lembrete em destaque)
Amostra grande de 64x92px com a data condensada embaixo, ao lado do título em Headline e de uma linha de metadados em pedra (tipo e dia em grafite condensado). Setas em icon buttons e contador "n de N". Troca a cada 7s (pausável, desligada sob movimento reduzido) com entrada de 260ms: opacidade, desfoque de 3px e deslocamento de 4px para cima.

### Lists / Alerts
Linhas com filete superior, amostra à esquerda alinhada ao texto, título em 500 e detalhe em Body small. O tipo do alerta abre a frase de detalhe em condensada 600 e grafite (vermelho quando crítico). Estados vazios são uma frase em pedra sobre filete.

### Cards / Containers (Antes e depois)
Único contêiner com caixa, porque separa uma operação a confirmar.
- **Corner Style:** 4px.
- **Background:** `surface`.
- **Shadow Strategy:** nenhuma (ver Elevation & Depth).
- **Border:** 1px `line`, com divisões internas também em filete; duas colunas "antes" e "depois" divididas por filete vertical.
- **Internal Padding:** 12 a 14px na vertical, 16px na horizontal.
- Etiquetas de estado em 12.5px: pedra por padrão, `orange-text` para confirmação extra, vermelho para bloqueio, verde para pronto.

### Sheet (Ficha da pessoa)
Painel lateral de até 540px, altura total, fundo `surface`, sombra Lift, véu `--scrim`. Cabeçalho fixo com nome em 24px/500 e botão de fechar. Entra em 360ms com `--ease-drawer` (`cubic-bezier(.32,.72,0,1)`) deslizando 40px; no celular sobe de baixo.

## Do's and Don'ts

### Do:
- **Do** colocar cor apenas em amostras e em raros textos de estado, sempre com o significado fixo de demanda.
- **Do** separar conteúdo com filetes de 1px (`line`) e respiro, em vez de caixas.
- **Do** usar Sofia Sans Condensed com números tabulares para toda data, contador e dia.
- **Do** manter cantos entre 2px e 4px em tudo que está no fluxo da página.
- **Do** limitar hover a `(hover:hover) and (pointer:fine)` e dar a todo controle um retorno de toque em escala (0.94 a 0.97) em 160ms.
- **Do** desligar animações e a rotação do lembrete sob `prefers-reduced-motion`.
- **Do** definir cada novo valor de cor nos dois modos, claro e escuro.

### Don't:
- **Don't** usar vermelho, laranja, azul ou verde como cor de marca, fundo ou decoração.
- **Don't** usar `orange` como cor de texto; use `orange-text`.
- **Don't** colocar sombra em elementos do fluxo da página; a sombra Lift é exclusiva de camadas flutuantes.
- **Don't** envolver seções ou itens de lista em cartões; o único contêiner com caixa é o de antes e depois.
- **Don't** introduzir uma segunda família tipográfica nem títulos em caixa alta.
- **Don't** deixar a cor ser o único portador de significado; toda amostra tem texto ou `title`.
