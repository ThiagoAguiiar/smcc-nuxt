<template>
  <UTabs
    orientation="vertical"
    :items="items"
    :ui="{
      wrapper: 'flex gap-x-5',
      container:
        'border-l border-l-gray-300 px-5 max-h-[500px] bg-white scroller scroller-rounded overflow-y-auto',
      list: {
        width: 'w-[230px]',
        height: 'h-fit',
        rounded: 'rounded-none',
        background: 'bg-white',
        marker: { background: 'bg-sea-green-500' },
        tab: { active: 'text-white', base: 'justify-start' },
      },
    }"
  >
    <template #default="{ item: { label, error }, index, selected }">
      <slot
        name="default"
        :label="label"
        :error="error"
        :index="index"
        :selected="selected"
      >
      </slot>
    </template>

    <template #item="{ item }">
      <slot name="item" :item="item"></slot
    ></template>
  </UTabs>
</template>

<script setup lang="ts">
import type { TabItem } from "#ui/types";

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

defineProps({
  items: {
    type: Array as PropType<TabItem[]>,
    required: true,
  },
});
</script>
