<template>
  <div class="space-y-4">
    <EventosTitle title="Informações de Contato" />

    <div class="space-y-1.5">
      <UFormGroup
        name="informacoesSolicitante.categoriaSolicitante.categoria"
        label="Categoria do Solicitante (assinalar apenas uma opção)?"
        required
      >
        <URadioGroup
          class="mt-3"
          v-model="models.catSolicitante.categoria"
          :ui="{ fieldset: 'space-y-2' }"
          :options="categoriaSolicitanteOptions"
        />
      </UFormGroup>

      <UFormGroup
        name="informacoesSolicitante.categoriaSolicitante.solicitante"
      >
        <UInput
          v-model="models.catSolicitante.solicitante"
          size="xs"
          placeholder="Especificar"
        />
      </UFormGroup>
    </div>

    <EventosFormsSubtitle title="Responsável pelo Evento" />

    <UFormGroup
      label="Nome"
      name="informacoesSolicitante.responsavelEvento.nome"
      required
    >
      <UInput v-model="models.responsavelEvento.nome" />
    </UFormGroup>

    <div class="grid grid-cols-2 w-full gap-x-3 mt-4">
      <UFormGroup
        label="RG"
        name="informacoesSolicitante.responsavelEvento.rg"
        required
      >
        <UInput
          v-model="models.responsavelEvento.rg"
          v-maska
          data-maska="##.###.###-#"
        />
      </UFormGroup>

      <UFormGroup
        label="CPF"
        name="informacoesSolicitante.responsavelEvento.cpf"
        required
      >
        <UInput
          v-model="models.responsavelEvento.cpf"
          v-maska
          data-maska="###.###.###-##"
        />
      </UFormGroup>
    </div>

    <div class="space-y-3 mt-3">
      <UFormGroup
        label="Telefone"
        name="informacoesSolicitante.responsavelEvento.telefone"
        required
      >
        <UInput
          v-model="models.responsavelEvento.telefone"
          v-maska
          data-maska="(##) #####-####"
        />
      </UFormGroup>

      <UFormGroup
        label="Email"
        name="informacoesSolicitante.responsavelEvento.email"
        required
      >
        <UInput v-model="models.responsavelEvento.email" />
      </UFormGroup>

      <UFormGroup
        label="Empresa"
        name="informacoesSolicitante.responsavelEvento.empresa"
        required
      >
        <UInput v-model="models.responsavelEvento.empresa" />
      </UFormGroup>

      <UFormGroup name="informacoesSolicitante.authorize">
        <UCheckbox
          v-model="models.authorize"
          label="Através do preenchimento deste formulário, declaro que estou ciente, li e concordo com 
            o Regulamento do Departamento Cientifico e regimento da SMCC e me responsabilizo 
            pela veracidade das informações contidas neste documento."
        />
      </UFormGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IContactInfo } from "~/types/cientifico/evento";

const props = defineProps({
  modelValue: {
    type: Object as PropType<IContactInfo>,
    required: true,
  },
});

const categoriaSolicitanteOptions = [
  {
    label: "Departamento/Comitê Científico da SMCC",
    value: "departamento/comitê científico da SMCC",
    help: "Apenas membros da coordenação",
  },
  {
    label: "Departamento Acadêmico da SMCC (apenas membros da coordenação)",
    value: "departamento acadêmico da SMCC (apenas membros da coordenação)",
    help: "Apenas membros da coordenação",
  },
  {
    label: "Sociedade de especialidade",
    value: "Sociedade de especialidade",
  },
  {
    label: "Médico associado SMCC",
    value: "Médico associado SMCC",
  },
  {
    label: "Empresa",
    value: "empresa",
  },
];

const models = ref<IContactInfo>(props.modelValue);
</script>
