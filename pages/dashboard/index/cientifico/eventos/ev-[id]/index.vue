<template>
  <div class="w-full px-5 py-2">
    <UForm :state="models" @submit="handleSubmit" @error="onError">
      <CientificoEventosFormTab :items="tabs">
        <template #item="{ item }">
          <CientificoEventosFormContato v-if="item.key === 'contato'" />
          <CientificoEventosFormEvento v-if="item.key === 'evento'" />
        </template>
      </CientificoEventosFormTab>
    </UForm>
  </div>
</template>

<script setup lang="ts">
import type { FormErrorEvent, TabItem } from "#ui/types";

const models = reactive<IEventFormData>({ ...eventoModel });

const toast = useToast();

provide("evento-models", models);

const tabs = ref<TabItem[]>([
  {
    label: "Informações de Contato",
    key: "contato",
    error: false,
  },
  {
    label: "Informações do Evento",
    key: "evento",
    error: false,
  },
  {
    label: "Anexos",
    key: "anexos",
    error: false,
  },
]);

const handleSubmit = () => {
  tabs.value.forEach((item) => {
    updateTabErrorState(item.key, false);
  });
};

const updateTabErrorState = (key: string, hasError: boolean) => {
  if (key.length > 0) {
    const tab = tabs.value.find((item) => item.key === key);
    if (tab) tab.error = hasError;
  } else {
    tabs.value.forEach((item) => (item.error = false));
  }
};

const onError = async ({ errors }: FormErrorEvent) => {
  const element = document.getElementById(errors[0].id);

  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  Object.keys(models).forEach((key) => {
    const hasError = errors.some((error) => {
      const pathSegment = error.path.split(".")[0];
      return key === pathSegment;
    });

    updateTabErrorState(key, hasError);
  });

  errors.forEach((item) => {
    updateTabErrorState(item.path.split(".")[0], true);
  });

  toast.add({
    title: "Atenção",
    description: "Revise os campos do formulário. Existem informações ausentes",
    timeout: 2500,
    id: "smcc-error",
  });
};
</script>
