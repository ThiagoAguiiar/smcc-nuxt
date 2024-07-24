<template>
  <div class="space-y-6">
    <UDivider />
    <EventosSubtitle title="Dados Eventos Online" />

    <UFormGroup label="Tipo de sala" name="evento.tipoSala" required>
      <URadioGroup
        class="mt-3"
        :options="tipoSalaOptions"
        :ui="{ fieldset: 'flex gap-x-3' }"
        v-model="models.tipoSala"
      />
    </UFormGroup>
  </div>
</template>

<script lang="ts" setup>
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
</script>
