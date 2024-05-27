<template>
  <div class="realtive">
    <UInput v-model="value" :type="showPassword ? 'text' : 'password'" />

    <div
      v-if="value.length > 0"
      @click="showPassword = !showPassword"
      class="w-[28px] h-[28px] flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-1 cursor-pointer"
    >
      <UTooltip :text="showPassword ? 'Ocultar senha' : 'Mostrar senha'">
        <Icon name="solar:eye-broken" v-if="!showPassword" size="1.1rem" />
        <Icon name="iconamoon:eye-off-thin" v-else size="1.1rem" />
      </UTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const showPassword = ref<boolean>(false);
const value = ref<string>("");

watch(
  () => props.modelValue,
  (nv: string) => (value.value = nv.trim())
);

watch(
  () => value.value,
  (nv: string) => emits("update:modelValue", nv.trim())
);
</script>
