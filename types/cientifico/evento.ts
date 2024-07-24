export interface IFilterEvent {
  tituloEvento: string;
  categoria: string;
  valor: string;
  numParticipantes: number;
  dataSolicitacao: Date;
  dataInscricao: Date;
}

export interface IEventDate {
  data: string;
  hour: {
    start: string | null;
    end: string | null;
  };
}

export interface IEventInfo {
  modalidade: "presencial" | "online" | "hibrido" | "especial";
  titulo: string;
  dataEvento: IEventDate[];

  horarioEvento: {
    inicio: string;
    termino: string;
  };

  conteudo: string;
  publicoAlvo: string;
  numParticipantes: number;
  grauParticipacao: string;

  inscricaoSite: boolean;
  controlePresenca: boolean;

  certificados: {
    certificadoParticipacao: boolean;
    certificado: string;
  };

  inscricoes: {
    isento: boolean;

    precoCategoria: {
      preco: string;
      categoria: string;
    }[];
  };

  espacoSMCC: {
    local: string | null;
    especificar: string | null;
  };

  videoTransmissao: boolean;
  materialGrafico: boolean;

  kit: string | null;

  patrocinadores: {
    valor: string;
    patrocinador: string | null;
  };

  programaSocial: {
    valor: string;
    horario: string | null;
  };

  fornecedores: {
    valor: boolean;
    nome: string | null;
    cnpj: string | null;
  };

  observacoes: string | null;

  tipoSala: "webinar" | "reunião";
  tipoEvento: "youtube" | "publico" | "privado";
  senhaSala: string | null;
  edicaoVideo: boolean;
  conteudoOnline: "editado" | "disponível na plataforma smcc";
}

export interface IContactInfo {
  catSolicitante: {
    categoria: string;
    solicitante: string | null;
  };

  responsavel: {
    nome: string;
    rg: string;
    telefone: string;
    cpf: string;
    email: string;
    empresa: string;
  };

  authorize: boolean;
}

export interface ISpecialProjects {
  tituloProjeto: string;
}

export interface IEventFormData {
  evento: IEventInfo;
  solicitante: IContactInfo;
}
