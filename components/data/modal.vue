<template>
  <UModal
    fullscreen
    v-model="isOpen"
    :ui="{ rounded: 'rounded-md', width }"
    :prevent-close="preventClose"
  >
    <div class="p-4">
      <slot name="content"></slot>
    </div>
  </UModal>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: false,
    default: false,
  },
  width: {
    type: String,
    required: false,
    default: "",
  },
  preventClose: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const isOpen = ref<boolean>(props.modelValue);

watch(
  () => props.modelValue,
  (value: boolean) => (isOpen.value = value)
);

watch(isOpen, (value: boolean) => {
  emits("update:modelValue", value);
});
</script>
