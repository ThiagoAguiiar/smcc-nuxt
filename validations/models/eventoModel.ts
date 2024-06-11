const infoEvento: IEventInfo = {
  certificadoParticipacao: false,
  conteudo: "",
  dataEvento: [],

  espacoSMCC: {
    local: "não",
    especificar: null,
  },

  fornecedores: {
    cnpj: null,
    nome: null,
    valor: false,
  },

  grauParticipacao: "sem apoio",
  horarioEvento: {
    inicio: "",
    termino: "",
  },

  inscricoes: {
    inscricaoSite: false,

    associado: {
      isento: false,
      valor: "",
    },

    smcc: {
      isento: false,
      valor: "",
    },
  },

  kit: "kit básico",
  materialGrafico: false,
  modalidadeEvento: "presencial",
  numParticipantes: 0,
  observacoes: "",

  patrocinadores: {
    patrocinador: null,
    valor: "nenhum",
  },

  programaSocial: {
    horario: null,
    valor: "nenhum",
  },

  publicoAlvo: "",
  tituloEvento: "",
  videoTransmissao: false,

  tipoSala: "reunião",
  tipoEvento: "youtube",
  senhaSala: null,
  edicaoVideo: false,
  conteudoOnline: "editado",
};

const infoSolicitante: IContactInfo = {
  authorize: false,

  categoriaSolicitante: {
    categoria: "",
    solicitante: "",
  },

  responsavelEvento: {
    cpf: "",
    email: "",
    empresa: "",
    nome: "",
    rg: "",
    telefone: "",
  },
};

export const eventoModel: IEventFormData = {
  informacoesEvento: infoEvento,
  informacoesSolicitante: infoSolicitante,
};
