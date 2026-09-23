# Sistema de design — Dayse Lacerda Arquitetura

Primeira aplicação: Prancheta de Projetos (app que consulta a base de projetos no Notion).

## Direção
Prancha técnica: nanquim sobre papel vegetal. Calmo, preciso, pouco colorido.
A única cor de destaque é o vermelho das nuvens de revisão, reservado ao que exige atenção
(pendência em aberto, prazo vencido). Ações principais usam nanquim, não o vermelho.

## Cores (tokens)
| Token | Claro | Escuro | Uso |
|---|---|---|---|
| --vegetal | #ECEEEA | #14181D | fundo da página |
| --folha | #F9FAF7 | #1B2027 | superfícies (folhas) |
| --campo | #E4E7E2 | #12161B | campos de texto (mais escuros que o entorno) |
| --nanquim | #1B2430 | #E3E6E1 | texto principal, botão principal |
| --grafite | #58616B | #A3AAB1 | texto secundário |
| --grafite-claro | #7E868E | #7F878F | texto de apoio, placeholder |
| --traco | rgba(27,36,48,.14) | rgba(227,230,225,.10) | linhas internas |
| --traco-forte | rgba(27,36,48,.32) | rgba(227,230,225,.26) | contornos, sublinhados |
| --revisao | #B3322A | #E36A5F | marca "Revisar", avisos de erro |

## Tipografia
- Títulos e interface: Barlow Semi Condensed (400–700). Lembra a letra técnica de prancha.
- Textos de leitura (respostas): Source Serif 4, 16–17px, entrelinha 1,6, até ~64 caracteres.
- Números sempre com `font-variant-numeric: tabular-nums`.
- Sem rótulos em caixa alta, sem fonte monoespaçada para rótulos, sem sobrelinhas (eyebrows).
- Escala: 14 · 16 · 17 · 20 · 36–52 (título da página, -0.015em).

## Profundidade e espaçamento
- Estratégia: sombra em camadas sutil no claro; anel de 1px no escuro. Não misturar com bordas pesadas.
- Grade de 4px; blocos da página separados por 32px; dentro da folha, 20px; padding da folha 24px (16px no celular).
- Raios: 3px campos e botões · 6px folhas · pílula só na marca "Revisar".

## Componentes
- Botão principal — 44px alt · 0 20px · 3px raio · 16px/600 · fundo nanquim · `scale(.97)` ao clicar.
- Botão secundário — mesmo tamanho, fundo transparente, contorno --traco-forte.
- Sugestões — links de texto sublinhados (não pílulas), 40px de área de toque.
- Folha — cada resposta; título = a pergunta (20px/600); corpo em serifa.
- Carimbo (assinatura) — quadro no canto inferior direito da folha, grade de 2 colunas
  (rótulo | valor): Folha "n de total", Consulta (data e hora), Fontes (links do Notion).
- Marca "Revisar" — pílula vermelha antes de itens com pendência ou prazo vencido.

## Movimento
- Só em resposta à ação: a folha nova "pousa" (220ms, translateY 6px, ease-out).
- Respeitar `prefers-reduced-motion`.
