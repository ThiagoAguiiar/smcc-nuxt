<template>
  <div class="space-y-5">
    <EventosTitle title="Informações do Evento" />

    <UFormGroup
      name="informacoesEvento.modalidadeEvento"
      label="Modalidade do evento"
      required
    >
      <URadioGroup
        v-model="models.modalidadeEvento"
        :options="optionsTipoEvento"
        :ui="{ fieldset: 'flex gap-x-3' }"
        class="mt-2"
      />
    </UFormGroup>

    <EventosSubtitle title="Dados Essenciais" />

    <!-- Modalidade Presencial -->
    <UFormGroup
      name="informacoesEvento.tituloEvento"
      label="Título do evento"
      required
      eager-validation
    >
      <UInput v-model="models.tituloEvento" />
    </UFormGroup>

    <UFormGroup
      name="informacoesEvento.dataEvento"
      label="Datas do evento"
      required
      eager-validation
    >
      <UPopover :popper="{ placement: 'bottom-start' }">
        <UButton
          icon="i-heroicons-calendar-days-20-solid"
          color="white"
          variant="solid"
          label="Selecionar Datas"
        />

        <template #panel="{ close }">
          <FormDatePicker v-model="selectedDate" is-required @close="close" />
        </template>
      </UPopover>

      <div class="mt-4 space-y-2" v-if="models.dataEvento.length > 0">
        <p class="text-sea-green-500 font-medium text-sm">
          Clique sobre a data para removê-la
        </p>

        <div class="flex gap-1 flex-wrap">
          <UBadge
            class="cursor-pointer"
            v-for="(item, index) in models.dataEvento"
            @click="removeDate(index)"
          >
            {{ item }}
          </UBadge>
        </div>
      </div>
    </UFormGroup>

    <div class="flex items-center gap-x-4 w-full flex-wrap mt-2">
      <UFormGroup
        name="informacoesEvento.horarioEvento.inicio"
        label="Horário início"
        required
      >
        <UInput
          type="time"
          class="mt-1"
          v-model="models.horarioEvento.inicio"
        />
      </UFormGroup>

      <UFormGroup
        name="informacoesEvento.horarioEvento.termino"
        label="Horário término"
        required
      >
        <UInput
          type="time"
          class="mt-1"
          v-model="models.horarioEvento.termino"
        />
      </UFormGroup>
    </div>

    <UFormGroup
      name="informacoesEvento.conteudo"
      label="Conteúdo do evento"
      required
    >
      <UTextarea v-model="models.conteudo" />
    </UFormGroup>

    <UFormGroup
      name="informacoesEvento.publicoAlvo"
      label="Público alvo do evento"
      required
    >
      <UTextarea v-model="models.publicoAlvo" />
    </UFormGroup>

    <UFormGroup
      name="informacoesEvento.numParticipantes"
      label="Número de participantes"
      required
    >
      <UInput type="number" v-model="models.numParticipantes" />
    </UFormGroup>

    <UFormGroup
      name="informacoesEvento.grauParticipacao"
      label="Grau de participação de Dpto./Comitê Científico ou Dpto. Acadêmico ou da SMCC?"
      required
    >
      <URadioGroup
        v-model="models.grauParticipacao"
        label="Selecionar"
        class="mt-3"
        :options="optionsParticipacao"
        :ui="{ fieldset: 'space-y-2' }"
      />
    </UFormGroup>

    <div class="space-y-1.5">
      <UFormGroup
        name="informacoesEvento.inscricoes.smcc.isento"
        label="Inscrições (Associados SMCC)"
        eager-validation
      >
        <UCheckbox
          v-model="models.inscricoes.smcc.isento"
          :label="models.inscricoes.smcc.isento ? 'Isento' : 'Não isento'"
        />
      </UFormGroup>

      <UFormGroup
        v-if="!models.inscricoes.smcc.isento"
        name="informacoesEvento.inscricoes.smcc.valor"
        eager-validation
      >
        <UInput
          size="xs"
          v-model="models.inscricoes.smcc.valor"
          :disabled="models.inscricoes.smcc.isento"
          placeholder="Valor (R$)"
        />
        <p class="text-gray-600 text-sm mt-2">
          20% de Desconto obrigatório se apoio da SMCC
        </p>
      </UFormGroup>
    </div>

    <div class="space-y-1.5">
      <UFormGroup
        name="informacoesEvento.inscricoes.associado.isento"
        label="Inscrições (Não associados SMCC)"
      >
        <UCheckbox
          v-model="models.inscricoes.associado.isento"
          :label="models.inscricoes.associado.isento ? 'Isento' : 'Não isento'"
        />
      </UFormGroup>

      <UFormGroup
        name="informacoesEvento.inscricoes.associado.valor"
        v-if="!models.inscricoes.associado.isento"
      >
        <UInput
          size="xs"
          v-model="models.inscricoes.associado.valor"
          placeholder="Valor (R$)"
        />
      </UFormGroup>
    </div>

    <UFormGroup
      name="informacoesEvento.inscricoes.inscricaoSite"
      label="Deseja que as inscrições sejam feitas pelo site da SMCC?"
    >
      <div class="space-y-1.5">
        <UCheckbox
          v-model="models.inscricoes.inscricaoSite"
          :label="models.inscricoes.inscricaoSite ? 'Sim' : 'Não'"
        />
      </div>
    </UFormGroup>

    <UFormGroup
      name="informacoesEvento.certificadoParticipacao"
      label="Haverá certificado de participação?"
    >
      <div class="space-y-1.5">
        <UCheckbox
          v-model="models.certificadoParticipacao"
          :label="models.certificadoParticipacao ? 'Sim' : 'Não'"
        />
      </div>
    </UFormGroup>

    <div class="space-y-1.5" v-if="models.modalidadeEvento !== 'online'">
      <UFormGroup
        name="informacoesEvento.espacoSMCC.local"
        label="Deseja solicitar espaço à SMCC? (Mediante disponibilidade)"
      >
        <URadioGroup
          v-model="models.espacoSMCC.local"
          :options="optionsEspacoSMCC"
          class="mt-3"
          :ui="{ fieldset: 'space-y-2' }"
        />
      </UFormGroup>

      <UFormGroup
        name="informacoesEvento.espacoSMCC.especificar"
        v-if="models.espacoSMCC.local == 'outros'"
        eager-validation
      >
        <UInput
          placeholder="Especificar"
          size="xs"
          v-model="models.espacoSMCC.especificar"
        />
      </UFormGroup>
    </div>

    <UFormGroup
      name="informacoesEvento.videoTransmissao"
      label="Haverá videotransmissão ou videoconferência no evento?"
    >
      <URadioGroup
        class="mt-3"
        v-model="models.videoTransmissao"
        :options="videoConferenciOptions"
        :ui="{ fieldset: 'space-y-2' }"
      />
    </UFormGroup>

    <!-- #region Eventos Online -->
    <div
      class="space-y-3"
      v-if="
        models.modalidadeEvento === 'online' ||
        models.modalidadeEvento === 'hibrido'
      "
    >
      <UDivider />

      <EventosSubtitle title="Dados Eventos Online" />

      <UFormGroup
        label="Tipo de sala"
        name="informacoesEvento.tipoSala"
        required
      >
        <URadioGroup
          class="mt-3"
          :options="tipoSalaOptions"
          :ui="{ fieldset: 'flex gap-x-3' }"
          v-model="models.tipoSala"
        />
      </UFormGroup>

      <UFormGroup label="Senha para sala" name="informacoesEvento.senhaSala">
        <FormPassword v-model="models.senhaSala" size="xs" />
      </UFormGroup>

      <UFormGroup label="Tipo de evento" name="informacoesEvento.tipoEvento">
        <URadioGroup
          v-model="models.tipoEvento"
          :options="tipoEventoOptions"
          :ui="{ fieldset: 'space-y-3' }"
        />
      </UFormGroup>

      <UFormGroup
        name="informacoesEvento.edicaoVideo"
        label="Deseja que o vídeo seja editado?"
      >
        <UCheckbox
          v-model="models.edicaoVideo"
          :label="models.edicaoVideo ? 'Sim' : 'Não'"
        />

        <UAlert
          v-if="models.edicaoVideo"
          variant="outline"
          color="primary"
          class="mt-3"
        >
          <template #description>
            Enviar os seguintes documentos via email:
            <span class="font-medium">
              Logo, Nome, CRM, Currículos simplificados dos palestrantes e
              Identificação da empresa
            </span>

            <p class="mt-2">
              Email
              <a href="" class="underline">email@contato.smcc.com.br</a>
            </p>
          </template>
        </UAlert>
      </UFormGroup>

      <UFormGroup name="informacoesEvento.conteudoOnline" label="Conteúdo">
        <URadioGroup
          class="mt-3"
          :ui="{ fieldset: 'flex gap-x-3' }"
          v-model="models.conteudoOnline"
          :options="conteudoOnlineOptions"
        />
      </UFormGroup>
    </div>

    <!-- #endregion Eventos Online -->

    <UFormGroup
      name="informacoesEvento.materialGrafico"
      label="Haverá confecção de material gráfico para evento pela SMCC (Depto. de Comunicação)?"
    >
      <URadioGroup
        class="mt-3"
        v-model="models.materialGrafico"
        :options="materialGraficoOptions"
        :ui="{ fieldset: 'space-y-2' }"
      />
    </UFormGroup>

    <!-- #region Material Gráfico -->
    <div v-if="models.materialGrafico" class="space-y-3">
      <UDivider />

      <div class="flex justify-between">
        <EventosSubtitle title="Dados do Material Gráfico" />

        <UPopover mode="hover" :popper="{ placement: 'top-end' }">
          <Icon
            name="fluent:info-24-regular"
            size="1.2rem"
            class="cursor-pointer text-sea-green-600"
          />

          <template #panel>
            <div class="w-[300px] p-4 text-[14px] space-y-2">
              <p class="text-sm font-medium text-sea-green-600">
                Informações do Kit Básico
              </p>

              <div class="space-y-2">
                <div>
                  <p class="text-sea-green-600 font-medium">Criação de Arte</p>
                  <p class="text-xs text-gray-600">
                    Criação gratuita para eventos realizados pelo DCC
                  </p>
                </div>

                <div>
                  <p class="text-sea-green-600 font-medium">
                    Email Marketing aos associados
                  </p>
                  <p class="text-xs text-gray-600">
                    Dois disparos gratuitos para DCC
                  </p>
                </div>

                <div>
                  <p class="text-sea-green-600 font-medium">
                    Posts em Redes Sociais
                  </p>
                  <p class="text-xs text-gray-600">
                    Dois posts gratuitos para DCC
                  </p>
                </div>
              </div>
            </div>
          </template>
        </UPopover>
      </div>

      <UFormGroup name="informacoesEvento.kitCustos">
        <URadioGroup
          v-model="models.kit"
          :options="kitOptions"
          class="mt-3"
          :ui="{ fieldset: 'space-y-3' }"
        />
      </UFormGroup>

      <UAlert
        color="primary"
        variant="outline"
        description="Quantidades maiores que as previstas no kit básico estarão sujeitas a aprovação prévia, e/ou 
        cobrança. Custos com a impressão especial em gráficas serão de responsabilidade do DCC."
      />
    </div>
    <!-- #endregion Material Gráfico -->

    <div class="space-y-1.5">
      <UFormGroup
        name="informacoesEvento.patrocinadores.valor"
        label="Possui Patrocinadores?"
        class="mt-4"
        required
      >
        <URadioGroup
          v-model="models.patrocinadores.valor"
          class="mt-3"
          :options="patrocinadoresOptions"
          :ui="{ fieldset: 'space-y-2' }"
        />
      </UFormGroup>

      <UFormGroup
        name="informacoesEvento.patrocinadores.patrocinador"
        v-if="models.patrocinadores.valor !== 'nenhum'"
        eager-validation
      >
        <UInput
          size="xs"
          placeholder="Especificar"
          v-model="models.patrocinadores.patrocinador"
        />
      </UFormGroup>
    </div>

    <div class="space-y-1.5">
      <UFormGroup
        name="informacoesEvento.programaSocial.valor"
        label="Programa social previsto no evento?"
        required
      >
        <URadioGroup
          :options="programaSocialOptions"
          :ui="{ fieldset: 'flex gap-x-3 mt-2' }"
          v-model="models.programaSocial.valor"
        />
      </UFormGroup>

      <UFormGroup
        v-if="models.programaSocial.valor !== 'nenhum'"
        name="informacoesEvento.programaSocial.horario"
        label="Selecionar o Horário"
        required
        eager-validation
      >
        <UInput type="time" size="xs" v-model="models.programaSocial.horario" />
      </UFormGroup>
    </div>

    <div class="space-y-2">
      <UFormGroup
        name="fornecedores"
        label="Haverá fornecedores terceirizados prestando serviços para o evento?"
        required
      >
        <URadioGroup
          :options="fornecedoresOptions"
          :ui="{ fieldset: 'flex gap-x-3 mt-2' }"
          v-model="models.fornecedores.valor"
        />
      </UFormGroup>

      <div class="flex items-center gap-x-2" v-if="models.fornecedores.valor">
        <UFormGroup
          name="informacoesEvento.fornecedores.nome"
          label="Nome"
          class="flex-1"
          required
          eager-validation
        >
          <UInput
            placeholder="Nome"
            size="xs"
            v-model="models.fornecedores.nome"
          />
        </UFormGroup>

        <UFormGroup
          name="informacoesEvento.fornecedores.cnpj"
          label="CNPJ"
          class="flex-1"
          required
          eager-validation
        >
          <UInput
            placeholder="CNPJ"
            size="xs"
            v-maska
            data-maska="##.###.###/000#-##"
            v-model="models.fornecedores.cnpj"
          />
        </UFormGroup>
      </div>
    </div>

    <!-- #region Eventos Especiais -->
    <div v-if="models.modalidadeEvento === 'especial'" class="space-y-3">
      <UDivider />

      <EventosSubtitle title="Eventos Especiais" />

      <UFormGroup name="" label="O projeto beneficia profissionais da saúde?">
        <UCheckbox label="Sim" class="mt-2" />
      </UFormGroup>

      <UFormGroup label="Especifique quais profissionais e como" required>
        <UTextarea />
      </UFormGroup>

      <UFormGroup label="Tipo de Ação" required>
        <USelectMenu
          :options="acaoOptions"
          placeholder="Selecionar"
          value-attribute="value"
          option-attribute="label"
          multiple
        />
      </UFormGroup>

      <UFormGroup> <UInput size="xs" placeholder="Especificar" /></UFormGroup>

      <UFormGroup
        label="Lista de especialidades médicas relacionadas com o projeto"
        required
      >
        <USelectMenu
          :options="especialidadesOptions"
          value-attribute="value"
          option-attribute="label"
          placeholder="Selecionar"
          multiple
        />
      </UFormGroup>

      <UFormGroup label="Formas de divulgação previstas" required>
        <USelectMenu
          value-attribute="value"
          option-attribute="label"
          placeholder="Selecionar"
          :options="divulgacaoOptions"
          multiple
        />
      </UFormGroup>
    </div>
    <!-- #endregion Eventos Especiais -->

    <UFormGroup
      name="informacoesEvento.observacoes"
      label="Observações"
      eager-validation
    >
      <UTextarea v-model="models.observacoes" />
    </UFormGroup>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";
import type { IEventInfo } from "~/types/cientifico/evento";
import { format } from "date-fns";

const props = defineProps({
  modelValue: {
    type: Object as PropType<IEventInfo>,
    required: true,
  },
});

const optionsTipoEvento = [
  {
    label: "Presencial",
    value: "presencial",
  },
  {
    label: "Online",
    value: "online",
  },
  {
    label: "Híbrido",
    value: "hibrido",
  },
  {
    label: "Especial",
    value: "especial",
  },
];

const optionsParticipacao = [
  {
    label: "Realização/Promção de DCC/DA SMCC ",
    value: "realização/promção de dcc/da smcc",
    help: "Departamento/Comitê Científico SMCC é o principal organizdor",
  },
  {
    label: "Apoio de dcc/da smcc",
    value: "apoio de dcc/da smcc",
    help: "Organizado por terceiros e com apoio. Anexar termo de apoio por escrito",
  },
  {
    label: "Sem Apoio",
    value: "sem apoio",
    help: "Organizado por terceiros e não possui o apoio de DCC/DA SMCC",
  },
];

const optionsEspacoSMCC = [
  {
    value: "não",
    label: "Não",
    help: "Evento em local externo (Fora da SMCC)",
  },
  {
    value: "qualquer sala disponível",
    label: "Qualquer sala disponível",
  },
  {
    value: "sala a",
    label: "sala A",
    help: "Auditório - Máximo 110 pessoas",
  },
  {
    value: "estúdio",
    label: "Estúdio",
  },
  {
    value: "sala c",
    label: "Sala C",
    help: "Máximo de 33 pessoas",
  },
  {
    value: "sala d",
    label: "Sala D",
    help: "Máximo de 45 pessoas",
  },
  {
    value: "sala e",
    label: "Sala E",
    help: "Máximo de 25 pessoas",
  },
  {
    value: "sala d + e",
    label: "Sala D + E",
    help: "Máximo de 70 pessoas",
  },
  {
    value: "sala f",
    label: "Sala F",
    help: "Máximo de 15 pessoas",
  },
  {
    value: "salão social",
    label: "Salão social",
    help: "Máximo de 130 pessoas (coquetel) / até 90 pessoas (jantar)",
  },
  {
    value: "outros",
    label: "Outros",
  },
];

const videoConferenciOptions = [
  {
    label: "Não",
    value: false,
  },
  {
    label: "Sim",
    value: true,
    help: "Obrigatório agendamento prévio com a Secretaria SMCC para planejamento do uso dos equipamentos",
  },
];

const materialGraficoOptions = [
  {
    label: "Não",
    value: false,
  },
  {
    label: "Sim",
    value: true,
    help: "Obrigatório contato com Dep. Científico. Necessário preenchimento de formulário específico DECOM, se aprovado pela Diretoria Científica",
  },
];

const kitOptions = [
  {
    label: "Kit Básico",
    value: "kit básico",
    help: "Kit básico sem custos",
  },
  {
    label: "Impressos (banner, folder, cartaz)",
    value: "impressos (banner, folder, cartaz)",
    help: "Descrever detalhadamente",
  },
  {
    label: "Arte para cerificado",
    value: "arte para certificado",
    help: "Tamanho A4",
  },
  {
    label: "Criação especial",
    value: "criacao especial",
    help: "Exclusivo para a diretoria. Encaminhar detalhadamente em folha anexa",
  },
];

const patrocinadoresOptions = [
  {
    label: "Nenhum",
    value: "nenhum",
  },
  {
    label: "Sim",
    value: "sim",
  },
  {
    label: "Em negociação com empresas patrocinadoras",
    value: "em negociação com empresas patrocinadoras",
  },
];

const programaSocialOptions = [
  {
    label: "Nenhum",
    value: "nenhum",
  },
  {
    label: "Coffee Break",
    value: "coffee break",
  },
  {
    label: "Coquetel",
    value: "coquetel",
  },
  {
    label: "Almoço/Jantar",
    value: "almoco/jantar",
  },
];

const fornecedoresOptions = [
  {
    label: "Não",
    value: false,
  },
  {
    label: "Sim",
    value: true,
  },
];

const tipoSalaOptions = [
  {
    label: "Reunião",
    value: "reunião",
  },
  {
    label: "Webinar",
    value: "webinar",
  },
];

const tipoEventoOptions = [
  {
    label: "Transmissão ao vivo pelo Youtube",
    value: "youtube",
  },
  {
    label: "Público",
    value: "publico",
  },
  {
    label: "Privado",
    value: "privado",
  },
];

const conteudoOnlineOptions = [
  {
    label: "Editado",
    value: "editado",
  },
  {
    label: "Disponível na plataforma SMCC",
    value: "disponível na plataforma smcc",
  },
];

const acaoOptions = [
  {
    label: "Científica",
    value: "cientifica",
    help: "",
  },
  {
    label: "Campanha educativa",
    value: "campanha educativa",
    help: "",
  },
  {
    label: "Assistencial",
    value: "assistencial",
    help: "",
  },
  {
    label: "Social",
    value: "social",
    help: "",
  },
  {
    label: "Outros",
    value: "outros",
    help: "",
  },
];

const especialidadesOptions = [
  {
    label: "Cardiologia",
    value: "cardiologia",
  },
  {
    label: "Cirurgia",
    value: "cirurgia",
  },
  {
    label: "Clínica Médica",
    value: "clinica medica",
  },
];

const divulgacaoOptions = [
  {
    label: "Email/Newsletter",
    value: "email/newsletter",
  },
  {
    label: "Mala direta",
    value: "mala direta",
  },
  {
    label: "Redes Sociais",
    value: "redes sociais",
  },
  {
    label: "Faixas",
    value: "faixas",
  },
  {
    label: "Outros",
    value: "outros",
  },
];

const models = ref<IEventInfo>(props.modelValue);
const selectedDate = ref<Date | null>(null);

const resetSelectedDate = () => {
  selectedDate.value = null;
};

const removeDate = (index: number) => {
  models.value.dataEvento.splice(index, 1);
  resetSelectedDate();
};

watch(selectedDate, (item) => {
  if (item != null) {
    const formatDate = format(item, "dd/MM/yyyy");
    models.value.dataEvento.push(formatDate);
    models.value.dataEvento = [...new Set(models.value.dataEvento)];

    resetSelectedDate();
  }
});

watchEffect(() => {
  models.value.inscricoes.associado.isento
    ? (models.value.inscricoes.associado.valor = "0")
    : (models.value.inscricoes.associado.valor = "");

  models.value.inscricoes.smcc.isento
    ? (models.value.inscricoes.smcc.valor = "0")
    : (models.value.inscricoes.smcc.valor = "");

  models.value.espacoSMCC.local === "outros"
    ? (models.value.espacoSMCC.especificar = "")
    : (models.value.espacoSMCC.especificar = null);

  // Validação do Patrocinador
  models.value.patrocinadores.valor === "nenhum"
    ? (models.value.patrocinadores.patrocinador = null)
    : (models.value.patrocinadores.patrocinador = "");

  // Validação do Horário Programa social
  models.value.programaSocial.valor === "nenhum"
    ? (models.value.programaSocial.horario = null)
    : (models.value.programaSocial.horario = "");

  // Validação dos dados do Fornecedor
  if (models.value.fornecedores.valor) {
    models.value.fornecedores.nome = "";
    models.value.fornecedores.cnpj = "";
  } else {
    models.value.fornecedores.nome = null;
    models.value.fornecedores.cnpj = null;
  }
});
</script>
