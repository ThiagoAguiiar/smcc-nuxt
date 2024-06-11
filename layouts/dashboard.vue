<template>
  <section>
    <DashboardNavbar>
      <div class="pl-10 mx-auto flex h-full justify-between">
        <span class="text-2xl font-bold flex items-center h-full">
          Dashboard
        </span>

        <div class="flex justify-end w-full gap-x-5 h-full items-center">
          <FormModule
            v-model="module"
            placeholder="Selecionar módulo"
            class="w-[200px]"
          />

          <DashboardProfile />
        </div>
      </div>
    </DashboardNavbar>

    <ClientOnly>
      <template #fallback> Carregando... </template>

      <div
        class="w-full h-[calc(100vh-65px)] flex"
        v-if="module.trim().length > 0"
      >
        <NavigationAside class="basis-[280px] w-[280px]" />

        <main class="overflow-y-auto flex-1">
          <slot></slot>
        </main>
      </div>

      <div
        class="w-full h-[calc(100vh-65px)] flex justify-center items-center"
        v-else
      >
        <p
          class="border border-[#277c5b] text-[#277c5b] flex items-center gap-x-2 font-medium rounded-md px-10 py-4"
        >
          <Icon name="fluent:warning-24-regular" size="2rem" />
          Selecione um módulo para continuar
        </p>
      </div>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
const m = useModule();
const module = ref<string>(m.getModule());
</script>
