# Painel Dayse Lacerda — decisões

Painel publicado como Artifact no claude.ai: https://claude.ai/artifact/1ojp1Jsa7aNsiAahzJ4MKk
Fonte: `app/painel.html`. Para atualizar, republicar o mesmo arquivo na mesma URL.

A direção pediu que o Claude decidisse os pontos abertos da Fase 1. Estas são as decisões em vigor e podem ser revistas a qualquer momento.

## Fontes de dados
- Trello: quadro **ESCRITÓRIO DAYSE LACERDA** (workspace "Projetos - Dayse Lacerda"). O quadro SOARES E CORTES ADVOCACIA fica fora do painel.
- Atualização: o painel lê Trello e Calendar ao abrir, a cada 2 minutos enquanto está aberto e visível, e ao voltar para a aba depois de 1 minuto fora. A leitura das etapas pelo Claude só roda de novo quando algum card de projeto mudou.
- Google Calendar: agenda principal da Dayse, mais a agenda pública "Feriados no Brasil" para o cálculo de dias úteis.
- Google Drive: entra na Fase 3 (Projetos), para os links das pastas.
- Nenhum dado de projeto fica gravado no código. Tudo é lido quando a página abre e ao tocar em "Atualizar dados".

## Status e listas
- Os status oficiais do painel são as **listas reais do Trello**, não a lista de status da especificação do MAX.
- Um projeto só conta como concluído quando está na lista **CONCLUÍDO**. A marcação de "concluído" do próprio card é ignorada, porque está errada em pelo menos um card (Residência 154).
- Tipos de card:
  - título começando com "REUNIÃO" = reunião;
  - título começando com "ENTREGA FINAL", ou card na lista ENTREGA FINAL = entrega;
  - todo o resto = projeto.

## Reuniões
- Os cards de reunião ficam onde estiverem (hoje estão em APRESENTAÇÃO). Reuniões novas marcadas pelo painel entram na lista **REUNIÕES**, com o nome `REUNIÃO - CLIENTE - DD/MM` (padrão da MÁRCIA), e também no Google Calendar.
- Antes de criar, o painel confere se já existe card ou evento no mesmo dia para o mesmo cliente, para não duplicar.
- Uma reunião do Trello com horário 09:00 e sem "Horário" na descrição aparece como "horário não registrado". 09:00 é o horário padrão do Trello quando nenhum horário é informado.

## Equipe
- Dayse Lacerda, Alice Barbosa, Mirella e Rafael Lopes. Os nomes vêm só dos títulos dos cards de projeto ("(ALICE/MIRELLA/RAFAEL)"), com uma palavra por nome; termos como INTERIORES ou SOBRADO entre parênteses não contam como pessoa, e dos responsáveis escritos nas descrições.
- As etapas, os responsáveis e os prazos internos existem só como texto nas descrições. O painel pede ao Claude para lê-los, com a instrução de não inventar nada. Sem data explícita, a etapa fica sem prazo.
- **Sobrecarga (critério provisório do painel):** 3 ou mais etapas ativas por pessoa = atenção; 5 ou mais = crítico. Conta como ativa a etapa em andamento ou com prazo nos próximos 5 dias úteis.
- Cores das demandas: vermelho = entrega final, laranja = apresentação/aprovação, azul = reunião, verde = produção.

## Usuários e permissões
- Nesta etapa, só a Dayse usa o painel e edita pelo painel. O painel lê Trello e Calendar com os conectores de quem abre a página. Para liberar a equipe, cada pessoa precisa de conta no claude.ai, dos conectores ligados e de acesso ao quadro e à agenda.

## Gravações (travas de segurança)
- Nada é gravado sem a tela ANTES / DEPOIS e o botão "Confirmar e salvar".
- Prazo oficial e aprovação do cliente pedem uma confirmação extra, em caixa de seleção.
- Criar projeto: pelo assistente "Novo projeto" (ver seção própria), só depois do resumo e do botão "Confirmar criação".
- Excluir qualquer coisa: bloqueado.
- Todo histórico é gravado como **comentário novo no card**, com data, hora, o pedido original e o antes → depois. A descrição original nunca é reescrita.
- Alteração de prazo após reunião: o painel **sempre pede confirmação**. A reorganização automática continua sendo exceção do MAX no Claude Desktop.
- Aprovação do cliente: o painel só registra. A reorganização de datas e etapas continua com o MAX.

## Pontos pendentes do MAX
1. WhatsApp: vale o modelo de 23/09 (`✅ [Projeto] — [Responsável]: [ação] — entrega: [data]`).
2. Prazo após reunião: sempre com confirmação quando a mudança vem pelo painel.
3. Panorama das 08h: continua na tarefa agendada do MAX no Claude Desktop. O painel não gera o panorama.

## Dias úteis
- Segunda a sexta, menos os eventos da agenda "Feriados no Brasil" com descrição "Feriado".
- Não contam como feriado: Dia do Servidor Público (ponto facultativo) e Véspera de Natal (meio expediente).
- Feriados municipais de João Pessoa ainda não entram no cálculo.

## Drive (estrutura proposta, ainda não criada)
```
ESC. DAYSE LACERDA/
├── 00_GESTAO_DO_ESCRITORIO/
│   ├── AGENTES_CLAUDE/ (MAX_Diretor_Geral, LUISA_Briefing, CHARLES_Qualidade, MARCIA_Reunioes)
│   └── PADROES/
└── 2026/CLIENTE - TIPO DE PROJETO/ …
```
As especificações dos agentes devem ficar em Google Docs nessas pastas e ser adicionadas ao conhecimento de cada projeto do Claude Desktop pela integração com o Drive.

## Fase 3: aba Projetos
- Lista os projetos ativos (cards de projeto fora da lista CONCLUÍDO). Os concluídos ficam no filtro "Concluídos".
- Cliente e tipo vêm das linhas "CLIENTE:" e "TIPO:" da descrição; sem elas, do título do card.
- Prazo oficial = data do card no Trello. Prazo interno = prazo da etapa atual lido da descrição; sem data, "Não registrado no Trello".
- Etapa atual: a etapa em andamento; sem ela, a pendente com prazo mais próximo.
- Filtros: situação (ativos/concluídos), status, responsável e prazo oficial (atrasados, vencem esta semana, vencem este mês, sem prazo).
- Ficha: links do Trello e do Drive, datas (início, prazos, apresentação e entrega final dos cards ligados), etapas, pendências (lidas pelo Claude, só as que o texto trata como em aberto) e histórico (blocos datados da descrição e comentários, copiados do card, do mais recente para o mais antigo).
- Drive: só leitura. A pasta é procurada em ESC. DAYSE LACERDA / ano. O link só aparece quando o cliente e o tipo da pasta batem com o card; na dúvida, mostra "Pasta não encontrada no Drive".
- As pastas do Drive são lidas ao abrir o painel e ao tocar em "Atualizar dados", não a cada 2 minutos.

## Aba Equipe
- Lista os integrantes (nomes dos títulos dos cards de projeto). Ao tocar num nome, abre o calendário do mês da pessoa.
- No calendário entram: prazo de cada etapa da pessoa (verde; hachura se atrasada; preto se concluída), entrega final e prazo oficial dos projetos da pessoa (vermelho), apresentações (laranja) e reuniões (azul).
- Tocar no dia mostra as tarefas; tocar na tarefa abre a ficha com os quatro status: A iniciar, Em produção, Esperando aprovação, Concluído.
- Trocar o status pede confirmação (antes e depois) e grava um comentário datado no card do projeto. A descrição do card não é alterada. Na próxima leitura, o Claude considera esse comentário como a situação mais recente da etapa.
- Etapas sem data aparecem abaixo do calendário, em "Tarefas sem data registrada", com a mesma troca de status.
- Status só vale para etapas. Entregas e reuniões seguem o card no Trello.

## Aba Reuniões
- Próximas reuniões (30 dias) do Trello e do Calendar; reuniões anteriores (60 dias) dos cards do Trello, com a marca "Ata registrada" ou "Sem ata".
- Gerador de atas: o Claude organiza resumo, decisões, aprovações (aprovado, não aprovado, pendente, com o trecho que comprova), alterações, pendências com responsável e prazo, impactos e sinalizações para LUISA, MAX e CHARLES. Nada inventado; o que falta aparece como "Necessário confirmar".
- A ata pode ser copiada ou salva como comentário no card da reunião. Se houver aprovação marcada como aprovada, salvar exige confirmar que o cliente aprovou claramente.
- Salvar a ata no Drive fica pendente até definir a pasta de atas (00_REUNIOES/03_ATAS ainda não existe nos projetos).

## Redesign premium (referências de glassmorphism enviadas pela direção)
- Visual: vidro fosco sobre luz ambiente (petróleo, areia e oliva) e grade de planta sutil; tema claro em branco quente e tema escuro em petróleo profundo. Fonte Manrope. Cantos de 20px nos cards.
- Hoje: saudação com o nome de quem abre, 4 indicadores (entregas hoje, projetos em andamento, alertas críticos, reuniões em 7 dias), Prioridades do dia (atrasados no topo com borda vermelha e dias úteis de atraso), Lembretes (entregas, reuniões, projetos críticos e pendências), Fale com o MAX (mesmo fluxo de antes, com confirmação) e Equipe hoje.
- Alertas críticos = projetos com prazo oficial vencido + etapas com prazo registrado vencido.
- Saúde do projeto: Atrasado (prazo oficial vencido), Atenção (prazo em até 5 dias úteis ou etapa atrasada), A iniciar (lista A INICIAR), Em andamento/Saudável (demais).
- Carga da equipe: mostrada em 3 níveis (Normal, Atenção, Crítica), sem porcentagem, porque não há capacidade registrada.
- Datas estimadas: quando o card traz INÍCIO e a duração da etapa em dias úteis, o painel calcula a data em sequência pelas regras do MAX (dias úteis, feriados nacionais). A cadeia para em etapa sem data nem duração, aguardando cliente ou concluída sem data. Aparecem com contorno tracejado e a marca "estimada"; nunca são gravadas no Trello.
- Prioridade das tarefas (critério do painel): Alta se atrasada ou em até 2 dias úteis; Média em até 5; Baixa depois disso.
- Linha do tempo do projeto: Briefing, Estudo, Projeto, Detalhamento (a partir das etapas do card), Apresentação (cards de reunião ligados) e Entrega (card de entrega ou prazo oficial). Fase sem etapa correspondente aparece como "Sem registro".
- Capa dos projetos: tipográfica, com o ícone do tipo de projeto. Imagem de render do Drive fica pendente (a página não pode carregar imagens direto do Drive).
- Celular: barra de abas fixa no rodapé e botão do MAX; indicadores e pessoas em faixa rolável para o lado.

## Novo projeto (assistente de cadastro)
- Botão "Novo projeto" na aba Hoje e na aba Projetos. Só abre com o Trello carregado.
- Etapas: Cliente, Tipo, Perfil, Fase inicial, Responsável, Equipe, Prazos, Prioridade, Tamanho, Observações e Resumo. Nada é gravado antes de "Confirmar criação"; "Editar" volta às etapas.
- Tipo em duas escolhas: categoria e depois o tipo oficial do MAX (Interiores Casa Térrea 25, Sobrado 40, Comercial 30, Avulsos sem prazo fixo; Arquitetônico Construtor 10, Cliente Final 15, Comercial 15; Arquitetônico + Interiores usa o prazo do arquitetônico na Fase 1). Reforma, Paisagismo, Consultoria e Outro não têm tabela de prazo no MAX.
- Prazo oficial: a data do cliente, quando existe; senão, o prazo do MAX em dias úteis contado da data de início (o dia de início conta como dia 1). Sem data do cliente e sem tabela, o projeto fica sem prazo até o MAX definir. Data do cliente menor que o padrão gera "ATENÇÃO: PRAZO ESPECIAL".
- Responsável e equipe: só as pessoas que já aparecem nos cards. "Outra pessoa" exige o nome completo e mostra aviso.
- Cliente com projeto ativo de mesmo nome: aviso na etapa 1 e confirmação obrigatória no resumo.
- Capacidade: se o responsável ou alguém da equipe já está com carga Atenção ou Crítica, o resumo mostra "ATENÇÃO DE CAPACIDADE" e o texto vai para o card como risco.
- Fase inicial → lista do Trello: Novo cliente, Briefing realizado e Levantamento iniciado → A INICIAR; Estudo preliminar → FASE PLANTA BAIXA (arquitetônico) ou FASE AMBIENTAÇÕES; Projeto em andamento → FASE PLANTA BAIXA (arquitetônico) ou FASE DETALHAMENTO EXECUTIVO; Revisão e Finalização → FASE FINALIZAÇÃO.
- Ao confirmar, o painel cria, nesta ordem: card principal (nome `CLIENTE - TIPO (EQUIPE)`, descrição no formato do MAX, data = prazo oficial às 17h); card "REUNIÃO DE APRESENTAÇÃO — CLIENTE" em APRESENTAÇÃO, sem data (o MAX define); card "ENTREGA FINAL — CLIENTE" com o prazo oficial; pasta `CLIENTE - TIPO` em ESC. DAYSE LACERDA / ano, com 01_BRIEFING, 02_EXECUTIVOS, 03_DETALHAMENTOS, 04_3D, 05_RENDERS e 06_ARQUIVOS_FINAIS; comentário no card principal com o link da pasta.
- Pasta do ano ou do projeto que já existe é reaproveitada; só as subpastas que faltam são criadas.
- Se uma etapa falha, a criação para e nada é desfeito. A tela mostra o que já foi criado, para conferir antes de tentar de novo.
- Responsáveis por etapa e data da apresentação ficam "a definir com o MAX". O painel não inventa essas datas.

## Calendário da equipe com checklist de etapas
- No calendário da pessoa, cada dia mostra o nome do projeto e as etapas com prazo naquele dia (no celular, pontos coloridos). Tocar no dia abre o painel lateral "Demandas do dia": projeto, cliente, responsável, prazo e status de cada etapa, e o botão "Ver etapas do projeto".
- "Ver etapas do projeto" abre o checklist: cliente, responsável (linha RESPONSÁVEL PRINCIPAL ou RESPONSÁVEL TÉCNICO do card), equipe, prazo final, status atual, barra de progresso (etapas concluídas / total), próxima etapa e prazo. O mesmo checklist fica dentro da ficha do projeto (aba Projetos), logo abaixo da linha do tempo, com as mesmas ações. Ele substitui a antiga lista de etapas da ficha.
- Etapas vêm do texto do card (lidas pelo Claude, sem inventar) e dos itens do checklist do Trello. Uma etapa com dois responsáveis aparece uma vez. Ordem: por prazo.
- Visual: concluída = círculo verde com ✓; pendente = círculo vazio; atrasada = borda e selo vermelhos com "Atrasada há N dia(s) útil(eis)" (só com prazo registrado, nunca com data estimada).
- Apresentação e entrega final aparecem como "Marcos do projeto", sem caixa de marcar: seguem o card no Trello.
- **Sincronização com o Trello:** nenhum card tinha checklist em 24/09/2026. Na primeira conclusão de uma etapa num card, o painel cria o checklist **ETAPAS DO PROJETO** no topo do card com todas as etapas registradas, marca as que já constam como concluídas e marca a etapa concluída. Depois, só marca ou inclui o item. A confirmação avisa isso antes.
- Cada conclusão grava um comentário no card: "✓ Etapa X concluída por NOME em DD/MM/AAAA às HH:MM." A descrição do card não é alterada e nada é apagado.
- **Trello como fonte oficial:** se o item do checklist estiver marcado no Trello, a etapa aparece concluída; se estiver desmarcado, aparece pendente, mesmo que o texto do card diga outra coisa. Itens criados direto no checklist também aparecem.
- A troca de status (A iniciar, Em produção, Esperando aprovação, Concluído) continua em "Outro status". Marcar Concluído também marca o checklist; voltar de Concluído desmarca o item.
- **Permissões:** a pessoa é identificada pelo nome da conta do claude.ai. Gestão (Dayse) altera qualquer etapa. Equipe conclui só as etapas em que é responsável. Conta não identificada ou fora da equipe: só visualização.
- Correção: depois da atualização automática a cada 2 minutos, as etapas perdiam a ligação com os cards recarregados. Agora são religadas a cada leitura.
- **Etapas guardadas no aparelho:** depois da primeira leitura, as etapas ficam salvas no navegador de cada pessoa. Ao abrir o painel, aparecem na hora. O Claude só lê de novo os cards quando algum card de projeto mudou (lista, prazo, descrição ou comentários); enquanto isso, o painel mostra "Conferindo se há etapas novas no card…". As marcações do checklist vêm sempre do Trello, a cada leitura.
- O rodapé mostra a versão do painel, para conferir no celular se a versão aberta é a mais recente.

## Bate-papo com o MAX
- A caixa "Fale com o MAX" da aba Hoje abre uma conversa (tela cheia no celular). O botão flutuante do MAX e o "Falar com o MAX sobre este projeto" da ficha também abrem a conversa.
- O MAX responde enquanto escreve, com os dados do painel a cada mensagem: cards abertos (lista e prazo), etapas com responsável, prazo e situação, pendências, carga da equipe e reuniões dos próximos 21 dias. Ele não lê a descrição inteira dos cards, só o que o painel já extraiu.
- Regras passadas ao MAX em toda mensagem: não inventar nada ("Não registrado no Trello" quando faltar), nunca apagar, aprovação só quando for clara, prazo oficial é compromisso com o cliente, tabela de prazos em dias úteis, datas estimadas ditas como estimativa.
- Pedidos de alteração viram uma proposta dentro da conversa, com antes e depois, e só são gravados com "Confirmar e salvar". Prazo oficial e aprovação continuam pedindo a confirmação extra. Os tipos são os mesmos de antes: status, prazo, responsável, aprovação, reunião e registro no histórico.
- Pedido de projeto novo mostra o botão que abre o assistente "Novo projeto".
- A conversa fica salva no aparelho de cada pessoa (últimas 40 mensagens). "Nova conversa" apaga só essa conversa local; nada no Trello. Propostas não confirmadas não sobrevivem ao fechar o painel e aparecem como "não confirmada".
- Cada mensagem usa o Claude da conta de quem está conversando.

## Destaque dos projetos urgentes (aba Projetos)
- Atrasado: capa em terracota avermelhado, contorno e brilho vermelhos e fundo do card levemente rosado.
- Atenção (prazo em até 5 dias úteis ou etapa atrasada): capa em âmbar/laranja queimado, contorno laranja e fundo levemente alaranjado.
- Os demais mantêm a capa pela cor do tipo de projeto.
- Correção: o texto do botão "Novo projeto" ficava escuro no tema claro; agora é branco nos dois temas.
- Entrega hoje: quando o prazo oficial do projeto é hoje, o card fica em verde oliva (capa, contorno e fundo) nas abas Projetos e Hoje, com o selo "Entrega hoje". Tem prioridade sobre "Atenção"; "Atrasado" continua vermelho.
- Lembretes (aba Hoje): card inteiro em petróleo profundo, a cor da marca, com a grade de planta sutil das capas e textos claros; o tipo do lembrete aparece em areia. Separa o card das Prioridades do dia, que continuam em vidro claro.
- Equipe: ao escolher uma pessoa, aparece acima do calendário o card "O dia de NOME", em tom areia, só com o dia atual:
  - Atrasadas: etapas da pessoa com prazo registrado vencido, com os dias úteis de atraso.
  - Para hoje: etapas com prazo hoje (registrado ou estimado), entregas e prazos oficiais de hoje dos projetos da pessoa, e reuniões de hoje.
  - Em produção: etapas da pessoa marcadas como em andamento, com o próximo prazo.
  - Tocar num item abre a mesma ficha do calendário (status e "Ver etapas do projeto"). Sem nada registrado, o card diz isso; não inventa tarefas.
