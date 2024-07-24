<template>
  <UTabs
    orientation="vertical"
    :items="items"
    :ui="{
      wrapper: 'flex gap-x-5',
      container: 'border-l border-l-gray-300 px-5 max-h-[calc(100vh-95px)] bg-white scroller scroller-rounded overflow-y-auto',
      list: {
        width: 'w-[250px]',
        height: 'h-fit',
        rounded: 'rounded-none',
        background: 'bg-white',
        marker: { background: 'bg-sea-green-500' },
        tab: { active: 'text-white', base: 'justify-start' },
      },
    }"
  >
    <template #default="{ item: { label, error }, selected }">
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
      <slot name="item" :item="item"></slot>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import type { TabItem } from "#ui/types";

defineProps({
  items: {
    type: Array as PropType<TabItem[]>,
    required: true,
  },
});
</script>
