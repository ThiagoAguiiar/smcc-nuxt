<template>
  <UDropdown :items="dropOptions" :popper="{ placement: 'bottom-start' }">
    <div
      class="h-full flex items-center gap-x-2 w-autp pl-4 pr-7 border-l border-l-[#d1d5db] cursor-pointer"
    >
      <div
        class="w-[40px] h-[40px] bg-[#277c5b] flex items-center justify-center rounded-md"
      >
        <span class="text-xl font-extrabold text-white">T</span>
      </div>

      <div class="leading-[17px]">
        <p class="font-bold">Thiago M. Aguiar</p>
        <span class="text-[13px] text-gray-600">Desenvolvedor Frontend</span>
      </div>
    </div>
  </UDropdown>
</template>

<script lang="ts" setup>
const dropOptions = [
  [
    {
      label: "Seu Perfil",
      icon: "lucide:user-round",
    },
    {
      label: "Configurações",
      icon: "solar:settings-linear",
    },
  ],
  [
    {
      label: "Sair",
      icon: "fluent:arrow-exit-20-regular",
    },
  ],
];
</script>
