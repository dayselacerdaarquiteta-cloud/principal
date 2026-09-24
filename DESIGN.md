---
name: Painel Dayse Lacerda
description: Painel operacional diário em vidro fosco sobre luz ambiente e grade de planta.
colors:
  bg: "#F3F1ED"
  glass: "rgba(255,255,255,.62)"
  glass-strong: "rgba(255,255,255,.88)"
  glass-line: "rgba(255,255,255,.9)"
  glass-edge: "rgba(31,35,39,.07)"
  ink: "#1F2327"
  ink2: "#3E4449"
  muted: "#62676C"
  line: "rgba(31,35,39,.09)"
  hover: "rgba(31,35,39,.045)"
  gray-soft: "rgba(31,35,39,.06)"
  petrol: "#1F5E6B"
  petrol-soft: "rgba(31,94,107,.11)"
  on-petrol: "#FFFFFF"
  sand: "#B89968"
  sand-soft: "rgba(184,153,104,.2)"
  olive: "#5E6C2E"
  olive-fill: "#7A8A3E"
  olive-soft: "rgba(106,122,58,.14)"
  red: "#B23A30"
  red-soft: "rgba(178,58,48,.1)"
  orange: "#C4722A"
  orange-text: "#94500F"
  orange-soft: "rgba(196,114,42,.13)"
  blue: "#3F6FB0"
  blue-soft: "rgba(63,111,176,.12)"
  scrim: "rgba(20,26,30,.36)"
  haze1: "rgba(31,94,107,.16)"
  haze2: "rgba(184,153,104,.2)"
  haze3: "rgba(106,122,58,.1)"
  gridline: "rgba(31,35,39,.035)"
typography:
  display:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(32px, 4.4vw, 46px)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(30px, 4vw, 40px)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  metric:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "\"tnum\""
  title:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 750
    letterSpacing: "-0.01em"
  title-card:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 750
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"tnum\""
  body-small:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.5
  chip:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
  label:
    fontFamily: "Manrope, Avenir Next, Segoe UI, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: "0.08em"
rounded:
  r: "20px"
  r-sm: "14px"
  control: "12px"
  inset: "16px"
  dock: "22px"
  sheet: "24px"
  page: "26px"
  pill: "999px"
spacing:
  grid-gap: "14px"
  column-gap: "24px"
  card: "18px"
  panel: "20px"
  section: "28px"
  gutter: "clamp(16px, 4vw, 40px)"
  module: "56px"
components:
  button-primary:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.on-petrol}"
    typography: "{typography.chip}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.glass-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "{colors.hover}"
  tab:
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  tab-active:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.on-petrol}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  chip:
    backgroundColor: "{colors.gray-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  health-warn:
    backgroundColor: "{colors.orange-soft}"
    textColor: "{colors.orange-text}"
    rounded: "{rounded.pill}"
    padding: "5px 11px 5px 9px"
  health-ok:
    backgroundColor: "{colors.olive-soft}"
    textColor: "{colors.olive}"
    rounded: "{rounded.pill}"
    padding: "5px 11px 5px 9px"
  card-glass:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r}"
    padding: "{spacing.card}"
  input-composer:
    backgroundColor: "{colors.glass-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.inset}"
    padding: "6px 6px 6px 14px"
  segmented-selected:
    backgroundColor: "{colors.glass-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "36px"
---

# Design System: Painel Dayse Lacerda

## Overview

**Creative North Star: "Vidro sobre a prancheta"**

O painel é uma mesa de trabalho de arquitetura vista através de vidro fosco. Ao fundo, três focos de luz ambiente (petróleo no alto à esquerda, areia no alto à direita, oliva embaixo) e uma grade de planta de 56px que se dissolve para baixo. Por cima, painéis de vidro com desfoque de 20px, filete claro na borda superior e sombra longa e macia. O conteúdo é operacional e denso; o vidro dá a sensação premium sem roubar a leitura.

Uma única família (Manrope) carrega tudo, com a hierarquia feita por peso (750 e 800 nos títulos) e tamanho, e números tabulares em todo o painel. O petróleo é a voz da interface (seleção, foco, ação principal); as quatro cores de demanda da direção (vermelho, laranja, azul, oliva) marcam o tipo de compromisso e nunca decoram. O tema claro é branco quente; o tema escuro é petróleo profundo, com as mesmas regras e tons clareados.

A densidade é de painel: grades de cards com 14px de intervalo, seções separadas por 24 a 32px, tudo a um toque. No celular, as abas descem para uma doca de vidro no rodapé e o MAX vira um botão flutuante.

**Key Characteristics:**
- Vidro fosco (`blur(20px) saturate(150%)`) sobre luz ambiente e grade de planta, nunca sobre fundo chapado.
- Cantos generosos e consistentes: 20px nos cards, 12px nos controles, pílulas nos filtros e selos.
- Uma família tipográfica, pesos altos nos títulos, números tabulares.
- Petróleo como único acento de interação; cores de demanda só com significado.
- Elevação que responde: o card sobe 2px e a sombra se alonga no hover com ponteiro fino.
- Tema escuro completo por `prefers-color-scheme` e `[data-theme="dark"]`.

## Colors

Neutros quentes e translúcidos, um petróleo profundo como acento, areia e oliva como luz de ambiente, e quatro cores de demanda com papel fixo.

### Primary
- **Petróleo** (`--petrol`): aba ativa, botão principal, foco (`outline` de 2px), seleção de texto, cursor, dia de hoje no calendário, dia selecionado, pontos do carrossel, valor alterado no antes e depois, ícones de estado neutro. No escuro vira um petróleo claro (#62B6C4) e o texto sobre ele passa a ser o fundo (#0B1318). `--petrol-soft` é o halo de foco do compositor e o fundo da coluna "depois".

### Secondary
- **Areia** (`--sand`): luz quente do fundo (`--haze2`), metade do degradê do avatar do MAX, do botão flutuante e do filete do painel do MAX, e o selo de "a iniciar". Não é cor de texto (ver Don'ts).

### Tertiary (cores de demanda, definidas pela direção)
- **Vermelho Tijolo** (`--red`): entrega final, atraso, alerta crítico, erro. Sólido só para o estado mais grave (selo "Atrasado", nó atrasado da linha do tempo, evento atrasado); o resto usa `--red-soft` com texto em `--red`.
- **Laranja Terracota** (`--orange` para preenchimento, `--orange-text` para texto): apresentação e aprovação, atenção, prioridade média, confirmação extra.
- **Azul Ardósia** (`--blue`): reunião; caixa de data dos cards de reunião; aviso de dúvida do MAX.
- **Oliva** (`--olive` para texto, `--olive-fill` para barras e pontos): produção, projeto saudável, sucesso. O verde da direção foi realizado como oliva para conversar com a luz ambiente.

### Neutral
- **Branco Quente** (`--bg`): fundo da página no tema claro; no escuro, petróleo profundo (#0B1318).
- **Vidro** (`--glass`): superfície de todo card e painel de primeiro nível.
- **Vidro Denso** (`--glass-strong`): controles e blocos dentro do vidro (botões, compositor, blocos de operação, ata), diálogos, e o substituto do vidro quando não há `backdrop-filter` ou a transparência está reduzida.
- **Filete de Luz** (`--glass-line`) e **Aresta** (`--glass-edge`): borda de 1px e brilho interno do topo do vidro; contorno externo de 1px.
- **Grafite** (`--ink`), **Grafite Médio** (`--ink2`), **Cinza de Apoio** (`--muted`): texto principal, texto secundário forte e etapas concluídas, metadados.
- **Filete** (`--line`), **Toque** (`--hover`), **Névoa** (`--gray-soft`): divisórias e bordas de controles, fundo de hover, trilhos e selos neutros.
- **Véu** (`--scrim`): fundo de diálogo, sempre com `blur(6px)`.

### Named Rules
**A Regra do Petróleo Único.** Seleção, foco e ação principal são sempre petróleo. Nenhuma cor de demanda assume papel de interação.

**A Regra das Quatro Demandas.** Vermelho é entrega, laranja é apresentação ou aprovação, azul é reunião, oliva é produção. A mesma cor significa a mesma coisa no calendário, nos selos, na legenda e nos ícones.

**A Regra do Par Texto e Preenchimento.** Laranja e oliva têm dois tons: o escuro (`--orange-text`, `--olive`) para texto e ícone, o claro (`--orange`, `--olive-fill`) para barras, pontos e trilhos. Nunca troque os papéis.

## Typography

**Display Font:** Manrope (com Avenir Next, Segoe UI, system-ui)
**Body Font:** Manrope
**Label/Mono Font:** Manrope, pesos 700 e 800

**Character:** Uma geométrica humanista de peso variável (400 a 800), firme nos títulos e calma no texto. Toda a hierarquia sai de peso e tamanho; `font-variant-numeric: tabular-nums` alinha datas e contadores.

### Hierarchy
- **Display** (750, clamp 32 a 46px, 1.05, -0.03em): só a saudação da aba Hoje; o nome da pessoa em petróleo.
- **Headline** (750, clamp 30 a 40px, 1.1, -0.025em): título das abas Projetos, Reuniões e Equipe. A capa da página do projeto usa a mesma voz em 800, clamp 24 a 32px.
- **Metric** (800, 30px, 1, -0.02em): número dos indicadores; a caixa de data das reuniões usa 26px.
- **Title** (750, 19px): título de seção; título do lembrete em destaque (700); nome na ficha lateral (21px).
- **Title card** (750, 17px, 1.25): nome do projeto nos cards; pessoas em 16px; reuniões em 16.5px.
- **Body** (400, 15px, 1.55): texto corrente; o compositor do MAX usa 16px para não dar zoom no celular.
- **Body small** (13.5px): fatos em lista de definição (rótulo em `--muted` 500, valor em 600), histórico, metadados.
- **Chip** (700, 12.5px): selos, sugestões, legenda, contadores.
- **Label** (800, 11.5 a 12px, tracking 0.04 a 0.12em, maiúsculas): selos de saúde, dias da semana, mês na caixa de data, cabeçalhos "antes" e "depois" e grupos de atas. É rótulo de dado, não enfeite de título.

### Named Rules
**A Regra da Voz Única.** Uma família só. Contraste vem de peso (400 contra 750 e 800) e de tamanho, nunca de uma segunda fonte.

**A Regra do Número Tabular.** Todo número do painel usa algarismos tabulares, para que datas e contagens fiquem alinhadas em colunas e grades.

## Layout

Conteúdo centrado em até 1240px, com margem lateral `clamp(16px, 4vw, 40px)`, sob uma barra superior de vidro fixa. O fundo (`.app-bg`) é fixo e não rola: três gradientes radiais e a grade de 56px mascarada de cima para baixo.

- **Hoje:** saudação, quatro indicadores em linha, depois duas colunas (1.7fr e 1fr) com Prioridades à esquerda e Lembretes e MAX à direita; Equipe hoje em grade automática de cards de 250px.
- **Projetos:** grade automática de cards de 290px com intervalo de 16px; filtros em pílulas.
- **Reuniões:** duas colunas (1.25fr e 1fr), gerador de atas em painel largo abaixo.
- **Equipe:** pessoas em grade de 210px, calendário mensal de 7 colunas com intervalo de 6px e células de 104px de altura mínima.
- **Ritmo:** 14px entre cards irmãos, 24px entre colunas e painéis laterais, 28 a 32px entre blocos de seção, 18 a 20px de respiro interno.
- **1020px:** colunas viram uma; indicadores em 2 colunas; abas mostram só ícones.
- **760px:** abas e linha de status somem da barra; aparece a doca de vidro no rodapé e o botão do MAX (64px); indicadores e pessoas viram faixa rolável com encaixe (72% e 78% de largura); a linha do tempo fica vertical; o calendário troca eventos por pontos; a ficha lateral sobe do rodapé e a página do projeto ocupa a tela.

## Elevation & Depth

Profundidade por material: vidro translúcido com desfoque sobre um fundo com luz, mais uma sombra longa, suave e tingida de petróleo escuro. Cada superfície de vidro combina três camadas na mesma `box-shadow`: brilho interno do topo (`inset 0 1px 0 var(--glass-line)`), aresta externa de 1px (`0 0 0 1px var(--glass-edge)`) e a sombra do token.

### Shadow Vocabulary
- **Repouso** (`--shadow`: `0 1px 1px rgba(31,35,39,.03), 0 14px 34px -14px rgba(28,48,56,.2)`): todo vidro em repouso.
- **Elevado** (`--shadow-up`: `0 2px 4px rgba(31,35,39,.04), 0 24px 48px -18px rgba(28,48,56,.3)`): hover dos cards clicáveis, diálogos, pessoa selecionada.
- **Brilho de acento** (`0 10px 22px -10px` em petróleo a 70%): botão principal, aba ativa e botão flutuante; a luz vem da própria cor.
- **Brilho de alerta** (`0 18px 40px -18px` em vermelho a 45%, com contorno vermelho e degradê `--red-soft` no topo): card de prioridade atrasado e projeto atrasado.
- **Halo de foco** (`0 0 0 4px var(--petrol-soft)` no compositor, `0 0 0 3px` no dia selecionado, `0 0 0 5px` nos nós ativos da linha do tempo).

### Named Rules
**A Regra do Vidro com Chão.** Todo vidro tem fallback: sem suporte a `backdrop-filter` ou com `prefers-reduced-transparency: reduce`, a superfície vira `--glass-strong` opaco o bastante para ler.

**A Regra do Vidro que não Empilha.** Dentro de um painel de vidro, os blocos internos usam `--glass-strong` com filete `--line`, nunca outro `.glass` com desfoque.

**A Regra da Elevação que Responde.** O card fica em `--shadow` em repouso; sobe 2px e passa a `--shadow-up` só no hover com ponteiro fino, em 220ms. No toque, só a compressão (`scale(.98)`).

## Shapes

Cantos arredondados e generosos em todo lugar, em uma escala curta: 20px para cards e painéis, 14px para blocos internos, células do calendário e botões de status, 16px para compositor, caixa de data, tarefa e ata, 12px para botões, ícones e marca, 22px para a doca e o botão flutuante, 24px para a ficha lateral e 26px para a página do projeto. Filtros, abas, selos e sugestões são pílulas (999px). Ícones vivem em quadrados arredondados (38px com raio 12px; 60px com 18px; 30px com 10px). Os trilhos de carga e progresso são segmentos de 6px de altura em pílula. Datas estimadas ganham contorno tracejado de 1px, a única linha tracejada do sistema.

## Components

### Buttons
Firmes e táteis, com compressão ao toque.
- **Shape:** cantos de 12px, altura mínima de 44px.
- **Primary:** petróleo com texto `--on-petrol`, 600 em 14px, ícone de 16px, brilho de acento. Hover: `brightness(1.08)`.
- **Secondary:** `--glass-strong` com filete `--line`; hover em `--hover`.
- **Active / Disabled:** `scale(.97)` em 160ms; desabilitado a 45% de opacidade.
- **Link de ação:** texto petróleo 600 em 14px com seta, sem fundo.
- **Ícone:** quadrado de 40px (raio 12px) em `--glass-strong`; o de lembrete tem 34px (raio 10px).

### Chips
- **Selos de saúde:** pílula em maiúsculas 800 de 12px com ícone. Atrasado é vermelho sólido; Atenção em laranja suave; Saudável em oliva suave; A iniciar e Concluído em névoa.
- **Chips de prioridade e status:** pílula 700 de 12.5px nos pares suaves (Alta vermelho, Média laranja, Baixa névoa, status em petróleo).
- **Sugestões do MAX:** pílula transparente com filete, texto `--ink2`.
- **Estimada:** pílula tracejada, 11.5px, texto `--muted`.

### Cards / Containers
- **Corner Style:** 20px.
- **Background:** `--glass` com desfoque de 20px.
- **Shadow Strategy:** repouso e elevado, ver Elevation & Depth.
- **Border:** 1px `--glass-line`, com aresta externa `--glass-edge`.
- **Internal Padding:** 16 a 18px nos cards; 20px nos painéis laterais.
- **Entrada:** subida de 10px com fade em 460ms, escalonada de 45ms por item, só na primeira pintura.

### Inputs / Fields
- **Style:** `--glass-strong` com filete `--line`; compositor com raio de 16px, campos de ata com 14px, selects de filtro em pílula de 40px com seta própria.
- **Focus:** o compositor troca a borda para petróleo a 60% e ganha halo de 4px em `--petrol-soft`; os demais usam o anel global de 2px em petróleo com recuo de 3px.
- **Confirmação:** caixa de aceite em faixa `--orange-soft` para prazo oficial e aprovação.

### Navigation
- **Desktop:** barra de vidro fixa com a marca (quadrado petróleo de 38px com as iniciais e o nome em 800 com tracking largo), abas em trilho de pílula `--gray-soft`, aba ativa em petróleo com brilho de acento, linha de status e botão de atualizar.
- **Celular:** doca de vidro fixa no rodapé (raio 22px) com ícone de 21px e rótulo de 11px; ativa em `--petrol-soft` com texto petróleo. Ao lado, o botão flutuante do MAX em degradê petróleo e areia.
- **Segmentado:** trilho `--gray-soft`, opção marcada em `--glass-strong` com sombra curta.

### Capa de projeto
Capa tipográfica de 118px: degradê de 135° por tipo de projeto (Arquitetônico petróleo para grafite #1F5E6B a #2E3B44; Interiores bronze #6B5A3E a #8E7650; misto petróleo a bronze; outros grafite #4B5358 a #2B3136), grade branca de 22px revelada na diagonal, ícone do tipo em vidro claro de 54px e selo de saúde em branco.

### Linha do tempo do projeto
Seis nós circulares de 36px ligados por trilho de 2px. Concluído: grafite sólido. Em andamento: borda oliva com halo. Atrasado: vermelho sólido com halo. Aguardando: borda laranja. Vertical no celular.

### Calendário da equipe
Células de vidro com raio 14px; hoje com o número em quadradinho petróleo; eventos em etiquetas de 7px de raio nos pares suaves das quatro demandas; concluído riscado; estimado tracejado. No celular, pontos de 7px.

### Antes e depois
Bloco de operação em `--glass-strong` com duas colunas: "antes" neutro, "depois" em `--petrol-soft` com o valor alterado em petróleo 750. Mensagens bloqueadas em vermelho; aceite extra em faixa laranja.

## Do's and Don'ts

### Do:
- **Do** colocar todo card e painel de primeiro nível em vidro (`--glass`, desfoque de 20px, raio de 20px, brilho interno, aresta e `--shadow`) sobre o fundo de luz ambiente e grade.
- **Do** usar petróleo para toda seleção, foco e ação principal, e as quatro cores de demanda só com o significado fixado pela direção.
- **Do** usar o par suave (`-soft` de fundo e tom cheio no texto) para estados; reservar o vermelho sólido para atraso.
- **Do** marcar datas calculadas pelo painel com contorno tracejado e a palavra "estimada".
- **Do** manter os fallbacks do vidro, o foco visível de 2px e o corte total de animação em `prefers-reduced-motion`.
- **Do** repetir cada token no tema escuro; nada de cor fixa que não mude com o tema, salvo sobre as capas de projeto, que são escuras nos dois temas.

### Don't:
- **Don't** empilhar vidro desfocado dentro de vidro; blocos internos são `--glass-strong`.
- **Don't** usar `--sand` como cor de texto ou de ícone sobre fundo claro; ele não chega a 3:1. Areia é luz e degradê.
- **Don't** fixar `#fff` sobre `--red` ou `--petrol`: no tema escuro esses tons clareiam e o branco cai abaixo de AA. Use `--on-petrol` ou um par próprio.
- **Don't** usar laranja ou oliva de preenchimento (`--orange`, `--olive-fill`) como texto.
- **Don't** pôr imagem de banco ou ilustração na capa de projeto; a capa é tipográfica até existir render real do projeto.
- **Don't** criar rótulo em maiúsculas espaçadas acima de título como chamada (kicker). O rótulo em maiúsculas é para dado: selo, dia da semana, cabeçalho de coluna.
- **Don't** mostrar carga da equipe em porcentagem; são três segmentos (Normal, Atenção, Crítica).
