<template>
  <DashboardNavTitle title="Lista de Eventos" :breadcumb="breadcumbLinks" />
</template>

<script setup lang="ts">
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
</script>
