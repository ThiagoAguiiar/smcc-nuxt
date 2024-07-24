<template>
  <CientificoEventosTitle title="Informações do Evento" />

  <div class="space-y-6 mt-4">
    <UFormGroup name="evento.modalidade" label="Modalidade do evento">
      <URadioGroup
        v-model="evento.modalidade"
        :options="optionsModalidade"
        :ui="{ fieldset: 'flex gap-x-3' }"
      />
    </UFormGroup>

    <UFormGroup name="evento.titulo" label="Título do evento" required>
      <UInput v-model="evento.titulo" />
    </UFormGroup>

    <UFormGroup name="evento.dataEvento" label="Datas do evento" required>
      <CientificoEventosFormEventoDateHour v-model="evento.dataEvento" />
    </UFormGroup>

    <UFormGroup name="evento.conteudo" label="Conteúdo do evento" required>
      <UTextarea v-model="evento.conteudo" />
    </UFormGroup>

    <UFormGroup name="evento.publicoAlvo" label="Público alvo" required>
      <UTextarea v-model="evento.publicoAlvo" />
    </UFormGroup>

    <UFormGroup
      name="evento.numParticipantes"
      label="Qtd de participantes"
      required
    >
      <UInput type="number" v-model="evento.numParticipantes" />
    </UFormGroup>

    <UFormGroup
      name="evento.grauParticipacao"
      label="Grau de participação de Dpto./Comitê Científico ou Dpto. Acadêmico ou da SMCC?"
    >
      <URadioGroup
        v-model="evento.grauParticipacao"
        label="Selecionar"
        class="mt-3"
        :options="optionsParticipacao"
        :ui="{ fieldset: 'space-y-2' }"
      />
    </UFormGroup>

    <UFormGroup name="evento.inscricoes.isento" label="Inscrições">
      <UCheckbox v-model="evento.inscricoes.isento" label="Isento" />
    </UFormGroup>

    <UFormGroup
      v-if="!evento.inscricoes.isento"
      label="Definir categoria e preços"
      required
    >
      <CientificoEventosFormEventoCategoriesPrice
        v-model="evento.inscricoes.precoCategoria"
      />
    </UFormGroup>

    <UFormGroup
      name="evento.inscricaoSite"
      label="Deseja que as inscrições sejam feitas pelo site da SMCC?"
    >
      <div class="space-y-1.5">
        <UCheckbox
          v-model="evento.inscricaoSite"
          :label="evento.inscricaoSite ? 'Sim' : 'Não'"
        />
      </div>
    </UFormGroup>

    <UFormGroup
      name="evento.certificados.certificadoParticipacao"
      label="Haverá certificado de participação?"
    >
      <UCheckbox
        v-model="evento.certificados.certificadoParticipacao"
        :label="evento.certificados.certificadoParticipacao ? 'Sim' : 'Não'"
      />
    </UFormGroup>

    <UFormGroup
      v-if="evento.certificados.certificadoParticipacao"
      name="evento.certificados.certificado"
      label="Selecionar certificado"
      required
    >
      <USelectMenu v-model="evento.certificados.certificado" />
    </UFormGroup>

    <UFormGroup
      name="evento.controlePresenca"
      label="Haverá controle de presença?"
    >
      <div class="space-y-1.5">
        <UCheckbox
          v-model="evento.controlePresenca"
          :label="evento.controlePresenca ? 'Sim' : 'Não'"
        />
      </div>
    </UFormGroup>

    <UFormGroup label="Espaços SMCC">
      <CientificoEventosFormEventoLocalSmcc />
    </UFormGroup>

    <UFormGroup
      label="Haverá videotransmissão ou videoconferência no evento?"
      name="evento.videoTransmissao"
    >
      <URadioGroup
        class="mt-3"
        v-model="evento.videoTransmissao"
        :options="videoConferenciaOptions"
        :ui="{ fieldset: 'space-y-2' }"
      />
    </UFormGroup>

    <!-- #region Eventos Online -->
    <CientificoEventosFormEventoOnline
      v-if="evento.modalidade === 'online' || evento.modalidade === 'hibrido'"
    />
    <!-- #endregion Eventos Online -->
  </div>
</template>

<script setup lang="ts">
const { evento } = inject("evento-models") as IEventFormData;

const optionsModalidade = [
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

const videoConferenciaOptions = [
  {
    label: "Sim",
    value: true,
    help: "Obrigatório agendamento prévio com a Secretaria SMCC para planejamento do uso dos equipamentos",
  },
  {
    label: "Não",
    value: false,
  },
];
</script>
