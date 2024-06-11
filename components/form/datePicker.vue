<template>
  <VCalendarDatePicker
    v-if="date && typeof date === 'object'"
    v-model="date"
    :columns="1"
    v-bind="{ ...attrs, ...$attrs }"
  />
  
  <VCalendarDatePicker v-else v-model="date" v-bind="{ ...attrs, ...$attrs }" />
</template>

<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from "v-calendar";
import "v-calendar/dist/style.css";

const attrs = {
  transparent: true,
  borderless: true,
  color: "blue",
  "first-day-of-week": 2,
};

const props = defineProps({
  modelValue: {
    default: null,
  },
});

const emit = defineEmits(["update:model-value", "close"]);

const date = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:model-value", value);
    emit("close");
  },
});

watch(date, (value) => {
  emit("update:model-value", value);
});
</script>
