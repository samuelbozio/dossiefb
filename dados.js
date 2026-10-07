// Para adicionar um caso, copie um bloco e preencha.
// status: "Em andamento", "Denunciado", "Encerrado", "Arquivado", "Anulado", "Condenado", "Alegação", "Posição pública"

const REGISTROS = [
  {
    titulo: "Rachadinhas e funcionários fantasmas",
    subtitulo: "Suposto desvio de salários de assessores na Alerj",
    tema: "Rachadinha",
    status: "Encerrado",
    data: "Reportagem de março/2026",
    orgao: "MP-RJ",
    resumo: "O MP-RJ investigou um suposto esquema de desvio de salários de assessores do gabinete de Flávio na Alerj.",
    detalhe: [
      "O Ministério Público do Rio de Janeiro investigou um suposto esquema de desvio de salários de assessores do gabinete de Flávio Bolsonaro na Assembleia Legislativa do Rio (Alerj).",
      "Segundo a Folha, o caso foi encerrado com perguntas não respondidas."
    ],
    fontes: [{ nome: "Folha", url: "https://www1.folha.uol.com.br/poder/2026/03/caso-da-rachadinha-de-flavio-bolsonaro-foi-encerrado-com-perguntas-nao-respondidas.shtml" }]
  },
  {
    titulo: "Kopenhagen e lavagem de dinheiro",
    subtitulo: "Franquia apontada como possível instrumento de lavagem",
    tema: "Rachadinha",
    status: "Encerrado",
    data: "Reportagem de fevereiro/2021",
    orgao: "MP-RJ",
    resumo: "Loja de Flávio e do ex-sócio Alexandre Santini foi apontada pelo MP-RJ como possível instrumento de lavagem, com até R$ 1,6 milhão.",
    detalhe: [
      "A franquia de chocolates de Flávio e de seu ex-sócio Alexandre Santini foi apontada pelo MP-RJ como possível instrumento de lavagem de dinheiro relacionada ao caso das rachadinhas, envolvendo até R$ 1,6 milhão.",
      "Em 2021, Flávio entregou a loja investigada."
    ],
    fontes: [{ nome: "Folha", url: "https://www1.folha.uol.com.br/poder/2021/02/flavio-bolsonaro-entrega-loja-de-chocolates-investigada-no-caso-da-rachadinha.shtml" }]
  },
  {
    titulo: "Imóveis e dinheiro em espécie",
    subtitulo: "R$ 977 mil em gastos sem origem comprovada",
    tema: "Rachadinha",
    status: "Encerrado",
    data: "Reportagem de março/2026",
    orgao: "MP-RJ",
    resumo: "Investigações apontaram R$ 977 mil em gastos sem origem comprovada entre 2010 e 2014, além de operações com dinheiro vivo.",
    detalhe: [
      "As investigações apontaram R$ 977 mil em gastos cuja origem não havia sido comprovada entre 2010 e 2014, além de diversas operações envolvendo dinheiro vivo."
    ],
    fontes: [{ nome: "Folha", url: "https://www1.folha.uol.com.br/poder/2026/03/caso-da-rachadinha-de-flavio-bolsonaro-foi-encerrado-com-perguntas-nao-respondidas.shtml" }]
  },
  {
    titulo: "Adriano da Nóbrega, miliciano morto pela polícia",
    subtitulo: "Homenagem na Alerj a miliciano apontado pelo MP",
    tema: "Milícia e crime organizado",
    status: "Reportagem",
    data: "Reportagem de maio/2026",
    orgao: "Folha",
    resumo: "Flávio homenageou Adriano com a Medalha Tiradentes; a mãe e a esposa dele trabalharam no gabinete.",
    detalhe: [
      "Flávio homenageou Adriano da Nóbrega na Alerj, inclusive com a Medalha Tiradentes.",
      "Anos depois, Adriano foi apontado pelo MP como integrante de uma milícia.",
      "A mãe e a esposa de Adriano trabalharam no gabinete de Flávio."
    ],
    fontes: [{ nome: "Folha", url: "https://www1.folha.uol.com.br/poder/2026/05/cla-bolsonaro-teve-relacao-com-suspeitos-de-envolvimento-no-crime-organizado-relembre-casos.shtml" }]
  },
  {
    titulo: "Caso Marielle",
    subtitulo: "Emenda negociada com condenado pelo STF",
    tema: "Milícia e crime organizado",
    status: "Reportagem",
    data: "Reportagem de setembro/2026",
    orgao: "G1",
    resumo: "Assessora de Flávio negociou emenda de quase R$ 200 mil com Robson Calixto, o “Peixe”, condenado pelo STF.",
    detalhe: [
      "Uma assessora de Flávio negociou uma emenda de quase R$ 200 mil com Robson Calixto, conhecido como “Peixe”.",
      "Peixe foi posteriormente condenado pelo STF por envolvimento com a organização criminosa ligada ao caso Marielle."
    ],
    fontes: [{ nome: "G1", url: "https://g1.globo.com/politica/noticia/2026/09/22/flavio-bolsonaro-destinou-emenda-a-miliciano-condenado-por-morte-de-marielle-veja-prints-de-conversa-com-assessora-do-senador.ghtml" }]
  },
  {
    titulo: "Daniel Vorcaro e o filme Dark Horse",
    subtitulo: "Pedido de recursos ao ex-dono do Banco Master",
    tema: "Banco Master e Dark Horse",
    status: "Em andamento",
    data: "Setembro/2026",
    orgao: "Polícia Federal",
    resumo: "Flávio manteve contato com Vorcaro e pediu recursos para o filme sobre Jair Bolsonaro. A PF passou a investigar as negociações.",
    detalhe: [
      "Flávio manteve contato com Daniel Vorcaro, ex-dono do Banco Master, e pediu recursos para financiar o filme sobre Jair Bolsonaro.",
      "As negociações passaram a ser investigadas pela Polícia Federal."
    ],
    fontes: [{ nome: "Agência Brasil", url: "https://agenciabrasil.ebc.com.br/justica/noticia/2026-09/pf-aponta-cobrancas-de-flavio-vorcaro-por-filme-dark-horse" }]
  },
  {
    titulo: "Investigação no caso Dark Horse",
    subtitulo: "Flávio incluído como investigado no STF",
    tema: "Banco Master e Dark Horse",
    status: "Em andamento",
    data: "Setembro/2026",
    orgao: "STF",
    resumo: "Flávio foi incluído como investigado em inquérito sobre as negociações com Vorcaro. Ele nega irregularidade.",
    detalhe: [
      "Flávio foi incluído como investigado em inquérito relacionado às negociações com Vorcaro.",
      "Ele nega qualquer irregularidade."
    ],
    fontes: [{ nome: "Folha", url: "https://www1.folha.uol.com.br/poder/2026/09/flavio-bolsonaro-e-investigado-no-stf-em-inquerito-sobre-dark-horse.shtml" }]
  },
  {
    titulo: "Defesa de Bruno Delaroli, policial que assassinou Ana Clara e que Flávio defendeu",
    subtitulo: "Policial militar acusado de matar criança de 5 anos",
    tema: "Outros casos",
    status: "Reportagem",
    data: "—",
    orgao: "Fato Aberto",
    resumo: "Flávio integrou a defesa do PM Bruno Dias Delaroli, acusado de matar Ana Clara, de 5 anos.",
    detalhe: [
      "Flávio integrou a defesa do policial militar Bruno Dias Delaroli, acusado de matar Ana Clara, de 5 anos."
    ],
    fontes: [{ nome: "Fato Aberto", url: "https://fatoaberto.com/politica/flavio-bolsonaro-defesa-pm-rio/" }]
  },
  {
    titulo: "Festas e garotas de programa",
    subtitulo: "Material divulgado pelo ex-sócio Alexandre Santini",
    tema: "Outros casos",
    status: "Alegação",
    data: "Reportagem de setembro/2026",
    orgao: "UOL",
    resumo: "Reportagens usaram mensagens e fotos divulgadas por Santini para relatar festas privadas. É alegação, não crime comprovado.",
    detalhe: [
      "Mensagens, fotografias e relatos divulgados pelo ex-sócio Alexandre Santini foram utilizados por reportagens para relatar festas privadas envolvendo Flávio e garotas de programa.",
      "Este episódio deve ser tratado como alegação baseada no material divulgado, e não como crime comprovado."
    ],
    fontes: [{ nome: "UOL", url: "https://noticias.uol.com.br/politica/ultimas-noticias/2026/09/29/mensagens-flavio-bolsonaro-amigo-alexandre-santini-festas.amp.htm" }]
  },
  {
    titulo: "Terras raras e parceria com os EUA",
    subtitulo: "Reunião com Donald Trump",
    tema: "Posições políticas",
    status: "Posição pública",
    data: "2026",
    orgao: "CNN Brasil",
    resumo: "Flávio se reuniu com Trump e disse que, num eventual governo, faria parcerias de longo prazo para explorar terras raras.",
    detalhe: [
      "Flávio Bolsonaro se reuniu com Donald Trump e afirmou que, em eventual governo, faria parcerias estratégicas de longo prazo com os EUA para exploração de terras raras e minerais críticos brasileiros."
    ],
    fontes: [{ nome: "CNN Brasil", url: "https://www.cnnbrasil.com.br/politica/tarifas-faccoes-e-terras-raras-os-temas-que-flavio-teria-falado-com-trump" }]
  },
  {
    titulo: "Pix e pressão americana",
    subtitulo: "Acusação feita por Lula",
    tema: "Posições políticas",
    status: "Alegação",
    data: "2026",
    orgao: "—",
    resumo: "Flávio disse ter tratado do Pix em reunião com Trump. Lula o acusou de pedir intervenção dos EUA sobre o sistema.",
    detalhe: [
      "Flávio Bolsonaro se reuniu com Trump em meio à pressão americana sobre o Brasil e afirmou ter tratado de questões relacionadas ao Pix.",
      "Lula acusou Flávio de pedir a Trump intervenção sobre o sistema brasileiro.",
      "[Adicione aqui um link de fonte para este registro.]"
    ],
    fontes: []
  },
  {
    titulo: "Contra o fim da escala 6x1",
    subtitulo: "PEC alternativa por hora trabalhada",
    tema: "Posições políticas",
    status: "Posição pública",
    data: "Agosto/2026",
    orgao: "UOL",
    resumo: "Flávio é contra o fim da escala 6x1 e articula uma PEC alternativa por hora trabalhada.",
    detalhe: [
      "Flávio Bolsonaro é contra o fim da escala 6x1 e articula uma PEC alternativa por hora trabalhada."
    ],
    fontes: [{ nome: "UOL", url: "https://noticias.uol.com.br/eleicoes/2026/08/30/contra-fim-da-6x1-flavio-articula-pec-alternativa-por-hora-trabalhada.ghtml" }]
  }
];