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
- Criar projeto: bloqueado no painel. Continua com o MAX (/novo projeto).
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
