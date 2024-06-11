<template>
  <div class="flex items-center gap-x-3">
    <UBadge
      square
      color="primary"
      class="rounded-full flex items-center justify-center w-[25px] h-[25px]"
      v-if="number"
    >
      {{ number }}
    </UBadge>
    
    <p class="font-medium text-sea-green-500">{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  number: {
    type: Number,
    required: false,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
