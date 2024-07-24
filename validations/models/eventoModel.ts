const infoEvento: IEventInfo = {
  conteudo: "",
  dataEvento: [],

  certificados: {
    certificadoParticipacao: false,
    certificado: "",
  },

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

  inscricaoSite: false,
  controlePresenca: false,

  inscricoes: {
    isento: false,
    precoCategoria: [],
  },

  kit: "kit básico",
  materialGrafico: false,
  modalidade: "presencial",
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
  titulo: "",
  videoTransmissao: false,

  tipoSala: "reunião",
  tipoEvento: "youtube",
  senhaSala: null,
  edicaoVideo: false,
  conteudoOnline: "editado",
};

const infoSolicitante: IContactInfo = {
  authorize: false,

  catSolicitante: {
    categoria: "",
    solicitante: "",
  },

  responsavel: {
    cpf: "",
    email: "",
    empresa: "",
    nome: "",
    rg: "",
    telefone: "",
  },
};

export const eventoModel: IEventFormData = {
  evento: infoEvento,
  solicitante: infoSolicitante,
};
