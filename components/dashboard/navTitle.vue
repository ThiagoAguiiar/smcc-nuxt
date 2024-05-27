<template>
  <div class="p-5 py-4 border-b">
    <div class="flex items-center gap-x-1">
      <Icon v-if="icon" :name="icon" />
      <h2 class="text-md font-medium">{{ title }}</h2>
    </div>

    <UBreadcrumb :links="breadcumb" class="mt-2">
      <template #default="{ link, isActive, index }">
        <UBadge
          :color="isActive ? 'black' : 'gray'"
          class="rounded-full truncate"
        >
          {{ link.label }}
        </UBadge>
      </template>

      <template #divider>
        <Icon name="fluent:chevron-right-20-regular" />
      </template>
    </UBreadcrumb>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
  breadcumb: {
    type: Array as PropType<BreadcumbLinks[]>,
    required: true,
  },
});
</script>
