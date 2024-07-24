import { z } from "zod";

const contactSchema: z.ZodType<IContactInfo> = z.object({
  catSolicitante: z.object({
    categoria: z.string(),
    solicitante: z.string().min(1, messages.common).nullable(),
  }),

  responsavel: z.object({
    cpf: cpfShema,
    email: emailSchema,
    rg: rgSchema,
    empresa: z.string().min(1, messages.common),
    nome: z.string().min(1, messages.common),
    telefone: z.string().min(15, messages.common),
  }),

  authorize: z.literal(true),
});

// Formulário de informações do evento
const infoSchema: z.ZodType<IEventInfo> = z.object({
  modalidade: z.enum(["presencial", "hibrido", "online", "especial"]),
  titulo: z.string().trim().min(1, messages.common),
  dataEvento: z.array(z.string()).min(1, messages.date),

  horarioEvento: z.object({
    inicio: z.string().trim().min(1, messages.date),
    termino: z.string().trim().min(1, messages.date),
  }),

  conteudo: z.string().trim().min(1, messages.common),
  publicoAlvo: z.string().trim().min(1, messages.common),

  numParticipantes: z
    .number({ invalid_type_error: messages.common })
    .positive(messages.common)
    .int(messages.common),

  grauParticipacao: z.string().trim().min(1, messages.radio),

  inscricoes: z.object({
    inscricaoSite: z.boolean(),

    smcc: z.object({
      isento: z.boolean(),
      valor: z.string().trim().min(1, messages.common),
    }),

    associado: z.object({
      isento: z.boolean(),
      valor: z.string().min(1, messages.common),
    }),
  }),

  certificadoParticipacao: z.boolean(),

  espacoSMCC: z.object({
    local: z.string().min(1, messages.common).nullable(),
    especificar: z.string().min(1, messages.common).nullable(),
  }),

  videoTransmissao: z.boolean(),
  materialGrafico: z.boolean(),
  kit: z.string().min(1, messages.common).nullable(),

  patrocinadores: z.object({
    patrocinador: z.string().min(1, messages.common).nullable(),
    valor: z.string().min(1, messages.radio),
  }),

  programaSocial: z.object({
    valor: z.string().min(1, messages.radio),
    horario: z.string().min(1, messages.time).nullable(),
  }),

  fornecedores: z.object({
    valor: z.boolean(),
    nome: z.string().trim().min(1, messages.common).nullable(),
    cnpj: z
      .string()
      .trim()
      .regex(regex.cnpj, { message: messages.cnpj })
      .nullable(),
  }),

  observacoes: z.string().nullable(),
  tipoSala: z.enum(["webinar", "reunião"]),
  tipoEvento: z.enum(["youtube", "publico", "privado"]),
  senhaSala: z.string().nullable(),
  edicaoVideo: z.boolean(),
  conteudoOnline: z.enum(["editado", "disponível na plataforma smcc"]),
});

export const eventoSchemaValidation: z.ZodType<IEventFormData> = z.object({
  evento: infoSchema,
  solicitante: contactSchema,
});
