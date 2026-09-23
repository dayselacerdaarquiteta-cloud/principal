# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Página única em HTML, CSS e JS publicada como Artifact no claude.ai (`app/painel.html`). Sem framework nem build. Bibliotecas externas só por CDN permitido (cdnjs, jsdelivr) e fontes só pelo Google Fonts. Os dados vêm dos conectores do claude.ai (Trello, Google Calendar; Google Drive a partir da Fase 3) e o Claude é usado para interpretar textos.

## Users
- **Dayse Lacerda**, arquiteta e diretora do escritório Dayse Lacerda Arquitetura, em João Pessoa/PB. É a usuária principal e a única que edita nesta etapa. Usa o painel no computador do escritório e no celular fora dele, com o mesmo peso.
- **Equipe** (Alice Barbosa, Mirella, Rafael Lopes): usuária futura, depois que cada pessoa tiver conta no claude.ai e acesso ao quadro e à agenda.

## Product Purpose
Painel operacional diário do escritório. Mostra o que importa hoje (reuniões próximas, entregas, prazos em risco, atrasos, carga da equipe) e deixa a Dayse registrar atualizações em linguagem natural, que só são gravadas depois de ela confirmar numa tela de antes e depois. Sucesso: abrir o painel e, em segundos, saber o que precisa de atenção hoje e quem está fazendo o quê, sem abrir o Trello.

## Positioning
O painel não guarda dados próprios. Lê as fontes oficiais que os agentes do Claude Desktop (MAX, MÁRCIA, LUISA, CHARLES) também usam: o Trello, o Google Calendar e o Google Drive. Assim, o que um lado muda o outro enxerga, e o painel segue as mesmas regras e travas de segurança dos agentes.

## Operating Context
- Quadro Trello **ESCRITÓRIO DAYSE LACERDA**: as listas são os status oficiais; os responsáveis aparecem no título dos cards e as etapas e prazos internos estão escritos nas descrições.
- Google Calendar da Dayse, mais a agenda "Feriados no Brasil" para contar dias úteis.
- Drive: `ESC. DAYSE LACERDA / ano / CLIENTE - TIPO DE PROJETO`.
- Tipos de projeto: Arquitetônico (Construtor, Cliente Final, Comercial), Interiores (Casa Térrea, Sobrado, Comercial, Avulsos) e Arquitetônico + Interiores.
- Rituais: panorama das 08h do MAX no Claude Desktop; reuniões de apresentação e aprovação com o cliente; entrega final.

## Capabilities and Constraints
- Seções planejadas: Hoje (feita), Projetos (Fase 3), Reuniões (Fase 4), Equipe (Fase 5).
- Nunca inventar status, prazo, responsável, aprovação ou reunião. Informação ausente aparece como "Não registrado no Trello".
- Confirmação obrigatória antes de gravar. Confirmação extra para prazo oficial e aprovação de cliente. Criar projeto e excluir qualquer coisa ficam bloqueados no painel.
- O histórico é gravado como comentário novo no card; a descrição nunca é reescrita.
- Prazos em dias úteis. Os feriados municipais de João Pessoa ainda não estão disponíveis.
- Cores de demanda definidas pela direção: vermelho = entrega final, laranja = apresentação/aprovação, azul = reunião, verde = produção.

## Brand Commitments
- Nome: Dayse Lacerda Arquitetura. Não há logotipo nem paleta fornecidos para o painel.
- Pedido da direção: elegante, minimalista, profissional, inspirado em arquitetura, fundo claro, rápido, responsivo, poucos cliques. Identidade própria forte, sem cara de painel genérico.

## Evidence on Hand
Só dados reais lidos em tempo de execução. Nenhum dado de projeto pode ficar no código ou em exemplos. Não há fotos de projetos nem logotipo fornecidos.

## Product Principles
1. A fonte oficial manda: o painel mostra o que está no Trello e no Calendar e diz quando algo não está registrado.
2. Nada é gravado sem a Dayse ver o antes e o depois.
3. Hoje primeiro: o que pede atenção aparece antes do detalhe.
4. Poucos cliques: cada informação está a um toque, no computador e no celular.

## Accessibility & Inclusion
Contraste WCAG AA, foco visível, movimento reduzido respeitado, uso confortável no celular sob luz forte.
