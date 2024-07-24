<template>
  <DashboardNavTitle title="Lista de Eventos" :breadcumb="breadcumbLinks" />
  <EventosFilter :selected="selectedTableData" />
  <DataTable :columns="columns" :rows="rows" @select="handleSelect" />
</template>

<script setup lang="ts">
import type { ColumnProps } from "~/components/data/table.vue";

const selectedTableData = ref([]);

const router = useRouter();

const handleSelect = (row: any) => {
  router.push(`ev-${row.titulo}`);
};

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
</script>
