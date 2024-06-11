<template>
  <UTable :columns="columns" :rows="rows" v-model="model" @select="select">
    <template #actions-data="{ row }">
      <slot name="actions" :row="row">
      </slot>
    </template>
  </UTable>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

export type ColumnProps = {
  key: string;
  label?: string;
  index?: number;
};

const props = defineProps({
  columns: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
  },

  rows: {
    type: Array as PropType<Record<string, any>[]>,
    required: true,
  },

  modelValue: {
    type: Array as PropType<any[]>,
    required: false,
  },
});

const model = ref<Array<any> | null>(null);
const emits = defineEmits(["update:modelValue", "select"]);

const hydrateProps = (): void => {
  model.value = props.modelValue || null;
};

const select = (row: any) => {
  emits("select", row);
};

watch(model, (value) => {
  emits("update:modelValue", value);
});

onMounted(() => {
  hydrateProps();
});
</script>
