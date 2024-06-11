export interface IFilterEvent {
  tituloEvento: string;
  categoria: string;
  valor: string;
  numParticipantes: number;
  dataSolicitacao: Date;
  dataInscricao: Date;
}

export interface IEventInfo {
  modalidadeEvento: "presencial" | "online" | "hibrido"  | "especial";
  tituloEvento: string;
  dataEvento: string[];

  horarioEvento: {
    inicio: string;
    termino: string;
  };

  conteudo: string;
  publicoAlvo: string;
  numParticipantes: number;
  grauParticipacao: string;

  inscricoes: {
    inscricaoSite: boolean;

    associado: {
      isento: boolean;
      valor: string;
    };

    smcc: {
      isento: boolean;
      valor: string;
    };
  };

  certificadoParticipacao: boolean;

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
  categoriaSolicitante: {
    categoria: string;
    solicitante: string;
  };

  responsavelEvento: {
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
  informacoesEvento: IEventInfo;
  informacoesSolicitante: IContactInfo;
}
