<template>
  <DashboardNavTitle title="Lista de Eventos" :breadcumb="breadcumbLinks" />
  <EventosFilter :selected="selectedTableData" />
  <DataTable :columns="columns" :rows="rows" @select="onSelect" />

  <!-- Abre as informações do evento selecionado -->
  <DataModal v-model="isOpen" width="w-[900px] sm:max-w-[900px]" prevent-close>
    <template #content>
      <UForm
        :state="models"
        @submit="onSubmit"
        @error="onError"
        :schema="eventoSchemaValidation"
      >
        <EventosFormsTabs :items="tabs">
          <template #default="{ error, label, selected }">
            <div class="flex items-center gap-2 relative truncate">
              <Icon
                v-if="error"
                name="fluent-mdl2:error-badge"
                size="1rem"
                :color="!selected ? 'red' : 'white'"
              />

              <span v-if="error && !selected" class="text-red-500">
                {{ label }}
              </span>

              <span v-else>{{ label }}</span>
            </div>
          </template>

          <template #item="{ item }">
            <EventosFormsInfoEvento
              v-model="models.informacoesEvento"
              v-if="item.key === 'informacoesEvento'"
            />

            <EventosFormsInfoContato
              v-model="models.informacoesSolicitante"
              v-if="item.key === 'informacoesSolicitante'"
            />
          </template>
        </EventosFormsTabs>

        <div class="pt-4 flex justify-end gap-x-2">
          <UButton color="red" variant="outline" @click="closeModal">
            Cancelar
          </UButton>

          <UButton type="submit">Salvar</UButton>
        </div>
      </UForm>
    </template>
  </DataModal>
</template>

<script setup lang="ts">
import type { ColumnProps } from "~/components/data/table.vue";
import type { FormErrorEvent } from "#ui/types";

const models = reactive<IEventFormData>({ ...eventoModel });

const selectedTableData = ref([]);
const isOpen = ref<boolean>(false);
const toast = useToast();

const tabs = ref([
  {
    label: "Informações de Contato",
    key: "informacoesSolicitante",
    error: false,
  },
  {
    label: "Informações do Evento",
    key: "informacoesEvento",
    error: false,
  },
  {
    label: "Anexos",
    key: "anexos",
    error: false,
  },
]);

const breadcumbLinks: BreadcumbLinks[] = [
  {
    label: "Científico",
  },
  {
    label: "Eventos",
  },
  {
    label: "Lista de eventos",
  },
];

const columns: ColumnProps[] = [
  {
    key: "categoria",
    label: "Categoria",
    index: 0,
  },
  {
    key: "titulo",
    label: "Título",
    index: 1,
  },
  {
    key: "dataEvento",
    label: "Data do evento",
    index: 2,
  },
  {
    key: "dataSolicitacao",
    label: "Data da Solicitação",
    index: 3,
  },
  {
    key: "valor",
    label: "Valor (R$)",
    index: 4,
  },
  {
    key: "numParticipantes",
    label: "Nº de Participantes",
    index: 5,
  },
  {
    key: "dataInscricao",
    label: "Data da inscrição",
    index: 6,
  },
];

const rows = [
  {
    categoria: "Categoria",
    titulo: "título",
    dataEvento: "Data do Evento",
    dataSolicitacao: "29/11/2024",
    valor: "R$ 129,90",
    numParticipantes: 10,
    dataInscricao: "29/12/2024",
  },
];

// Métodos
const onSelect = (row: any) => {
  isOpen.value = true;
};

const onSubmit = () => {
  tabs.value.forEach((item) => {
    updateTabErrorState(item.key, false);
  });
};

const closeModal = () => {
  isOpen.value = false;
  tabs.value.forEach((tab) => (tab.error = false));
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
