<template>
  <CientificoEventosTitle title="Informações de Contato" />

  <div class="space-y-7 mt-4">
    <div class="space-y-3">
      <UFormGroup
        name="solicitante.catSolicitante.categoria"
        label="Categoria do Solicitante (assinalar apenas uma opção)?"
        required
      >
        <URadioGroup
          :ui="{ fieldset: 'space-y-3', wrapper: 'mt-3' }"
          :options="categoriaSolicitanteOptions"
          v-model="solicitante.catSolicitante.categoria"
        />
      </UFormGroup>

      <!-- Se marcado (empresa) -->
      <UFormGroup name="solicitante.catSolicitante.solicitante">
        <UInput
          size="sm"
          placeholder="Especificar"
          v-model="solicitante.catSolicitante.solicitante"
        />
      </UFormGroup>
    </div>

    <div class="space-y-3.5">
      <CientificoEventosSubtitle title="Responsável pelo Evento" />

      <UFormGroup label="Nome" name="solicitante.responsavel.nome" required>
        <UInput v-model="solicitante.responsavel.nome" />
      </UFormGroup>

      <UFormGroup label="Email" name="solicitante.responsavel.email" required>
        <UInput v-model="solicitante.responsavel.email" />
      </UFormGroup>

      <div class="flex items-start gap-x-3">
        <UFormGroup
          label="RG"
          name="solicitante.responsavel.rg"
          class="flex-1"
          required
        >
          <UInput
            v-model="solicitante.responsavel.rg"
            v-maska
            data-maska="##.###.###-#"
          />
        </UFormGroup>

        <UFormGroup
          label="CPF"
          name="informacoesSolicitante.responsavelEvento.cpf"
          class="flex-1"
          required
        >
          <UInput
            v-model="solicitante.responsavel.cpf"
            v-maska
            data-maska="###.###.###-##"
          />
        </UFormGroup>
      </div>

      <div class="flex items-start gap-x-3">
        <UFormGroup
          label="Telefone"
          name="solicitante.responsavel.telefone"
          class="flex-1"
          required
        >
          <UInput
            v-model="solicitante.responsavel.telefone"
            v-maska
            data-maska="(##) #####-####"
          />
        </UFormGroup>

        <UFormGroup
          label="Empresa"
          name="solicitante.responsavel.empresa"
          class="flex-1"
          required
        >
          <UInput v-model="solicitante.responsavel.empresa" />
        </UFormGroup>
      </div>

      <UFormGroup name="solicitante.authorize">
        <UCheckbox
          v-model="solicitante.authorize"
          label="Através do preenchimento deste formulário, declaro que estou ciente, li e concordo com 
            o Regulamento do Departamento Cientifico e regimento da SMCC e me responsabilizo 
            pela veracidade das informações contidas neste documento."
        />
      </UFormGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
const { solicitante } = inject("evento-models") as IEventFormData;

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
</script>
