<template>
  <UDropdown :popper="{ placement: 'bottom-start' }" :items="items">
    <UButton
      :items="items"
      variant="ghost"
      color="white"
      class="flex items-center justify-center border border-gray-200 transition-all hover:border-gray-200 hover:bg-gray-200"
    >
      ...
    </UButton>
  </UDropdown>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

export type ItemsProps = {
  label: string;
  icon?: string;
  click?: () => void;
};

defineProps({
  items: {
    type: Array as PropType<ItemsProps[][]>,
    required: false,
    default: [],
  },
  row: {
    type: Object as PropType<any>,
    required: false,
  },
});
</script>
