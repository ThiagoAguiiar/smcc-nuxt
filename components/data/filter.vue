<template>
  <div
    :class="[
      isToggle ? 'h-[0px] truncate' : 'px-5 py-4 h-auto',
      'relative bg-gray-50',
    ]"
  >
    <p class="text-sm flex items-center gap-x-1.5">
      Filtrar Resultados
      <UBadge class="font-medium" variant="outline">2.000</UBadge>
    </p>

    <slot></slot>
  </div>

  <div class="w-full flex justify-end">
    <div
      class="mr-5 mt-2 w-[30px] h-[30px] bg-gray-200 flex items-center justify-center rounded-md cursor-pointer"
      @click="isToggle = !isToggle"
    >
      <UTooltip :text="isToggle ? 'Mostrar Filtros' : 'Ocultar Filtros'">
        <Icon
          name="fluent:chevron-up-24-regular"
          :class="['chevron', isToggle && 'rotate']"
        />
      </UTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
const isToggle = ref<boolean>(false);
</script>

<style scoped>
.rotate {
  transform: rotate(180deg);
}

.chevron {
  transition: all 0.2s;
}
</style>
