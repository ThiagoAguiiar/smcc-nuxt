<template>
  <h3 class="text-sea-green-500 text-xl font-medium">{{ title }}</h3>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
