<template>
  <aside class="h-full bg-[#f6f6f6] grid grid-rows-12">
    <div class="row-span-11 py-5 px-5 overflow-y-auto scroller">
      <DashboardSearchLink />

      <div class="space-y-1.5 mt-5">
        <DashboardAsideLink
          icon="fluent:home-24-regular"
          text="Página Inicial"
          path="/dashboard"
        />

        <DashboardAsideLink
          v-for="{ baseURL, icon, name, subLinks } in m.asideLinks"
          :text="name"
          :icon="icon"
          :items="subLinks && subLinks.map((item: any) => {
            return {
              name: item.name,
              path: baseURL + item.path,
              icon: item.icon
            };
          })"
        />
      </div>
    </div>

    <div
      class="row-span-1 border-t border-t-[#d1d5db] flex items-center justify-end px-5 gap-x-1.5"
    >
      <UButton square color="white" trailing icon="solar:settings-linear" />

      <UButton
        square
        color="red"
        trailing
        icon="fluent:arrow-exit-20-regular"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
const m = useModule();
</script>
