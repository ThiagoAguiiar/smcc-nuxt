<template>
  <aside class="h-full bg-[#f6f6f6] grid grid-rows-12">
    <div class="row-span-11 py-5 px-5 overflow-y-auto scroller">
      <NavigationSearch />

      <div class="space-y-1.5 mt-5">
        <NavigationLink
          icon="fluent:home-24-regular"
          text="Página Inicial"
          path="/dashboard"
        />

        <NavigationLink
          v-for="{ baseURL, icon, name, subLinks } in s.asideLinks"
          :text="name"
          :icon="icon"
          :items="subLinks && subLinks.map((item: SubLink) => {
            return {
              name: item.name,
              path: baseURL + item.path,
              icon: item.icon,
              counter: item.counter
            };
          })"
        />
      </div>
    </div>

    <div
      class="row-span-1 border-t border-t-[#d1d5db] flex items-center justify-end px-5"
    >
      <UTooltip text="Sair">
        <UButton
          square
          color="red"
          trailing
          icon="fluent:arrow-exit-20-regular"
        />
      </UTooltip>
    </div>
  </aside>
</template>

<script setup lang="ts">
const s = useSidebar();
</script>
