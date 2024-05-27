<template>
  <img
    src="/logo.png"
    :alt="description"
    :class="['object-contain', sizes[size as keyof typeof sizes]]"
  />
</template>

<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<"lg" | "md" | "sm" | "xs">,
    required: false,
    default: "lg",
  },
});

const sizes = {
  lg: "w-auto h-24",
  md: "w-auto h-20",
  sm: "w-auto h-16",
  xs: "w-auto h-12",
};
</script>
