<template>
  <div>
    <UButton
      label="Pesquisar"
      size="sm"
      color="white"
      class="w-full"
      icon="fluent:search-32-regular"
      @click="isOpen = true"
    />

    <UModal v-model="isOpen">
      <div class="h-[500px] overflow-y-auto">
        <UCommandPalette
          @update:model-value="(option: SubLink) => navigateTo(option.path)"
          :autoselect="false"
          :groups="m.getSearchAsideLinks() || []"
          :fuse="{ resultLimit: 7, fuseOptions: { threshold: 0.1 } }"
          placeholder="Pesquisar"
        >
          <template #empty-state>
            <div class="py-6">
              <p class="text-center text-sm">Nenhum resultado encontrado</p>
            </div>
          </template>
        </UCommandPalette>
      </div>

      <div class="p-3 text-end border-t">
        <span class="text-xs gap-x-1.5 justify-end flex items-center">
          Fechar janela
          <UKbd>Esc</UKbd>
        </span>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
const m = useModule();
const isOpen = ref<boolean>(false);
</script>
