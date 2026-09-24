const NOME_PLANILHA = 'Briefings - Respostas';
const CABECALHO = ['Data e hora', 'Nome', 'Tipo de projeto', 'Endereço'];
const TIPOS_PROJETO = [
  'Arquitetônico',
  'Interiores',
  'Arquitetônico + Interiores',
  'Reforma',
  'Outro'
];

// Abre a página do formulário.
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Briefing — Dayse Lacerda Arquitetura')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// Chamada pelo formulário. Grava uma linha na planilha.
function salvarBriefing(dados) {
  const nome = String((dados && dados.nome) || '').trim();
  const tipo = String((dados && dados.tipo) || '').trim();
  const endereco = String((dados && dados.endereco) || '').trim();

  if (!nome || !endereco || TIPOS_PROJETO.indexOf(tipo) === -1) {
    throw new Error('Preencha todos os campos.');
  }

  const trava = LockService.getScriptLock();
  trava.waitLock(30000);
  try {
    const aba = obterPlanilha_().getSheets()[0];
    aba.appendRow([new Date(), textoSeguro_(nome), tipo, textoSeguro_(endereco)]);
  } finally {
    trava.releaseLock();
  }
  return true;
}

// Rode esta função uma vez no editor para autorizar o script
// e criar a planilha. O link aparece no "Registro de execução".
function configurar() {
  const planilha = obterPlanilha_();
  Logger.log('Planilha pronta: ' + planilha.getUrl());
}

// Usa a planilha guardada nas propriedades do script; se não existir, cria.
function obterPlanilha_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('PLANILHA_ID');
  if (id) {
    try {
      return SpreadsheetApp.openById(id);
    } catch (e) {
      // Planilha apagada ou inacessível: cria outra abaixo.
    }
  }
  const planilha = SpreadsheetApp.create(NOME_PLANILHA);
  const aba = planilha.getSheets()[0];
  aba.appendRow(CABECALHO);
  aba.getRange(1, 1, 1, CABECALHO.length).setFontWeight('bold');
  aba.setFrozenRows(1);
  aba.getRange('A:A').setNumberFormat('dd/MM/yyyy HH:mm:ss');
  props.setProperty('PLANILHA_ID', planilha.getId());
  return planilha;
}

// Evita que um texto começando com "=", "+", "-" ou "@" vire fórmula.
function textoSeguro_(texto) {
  return /^[=+\-@]/.test(texto) ? "'" + texto : texto;
}
