<template>
  <USelectMenu
    v-model="value"
    :placeholder="placeholder"
    :options="modules"
    option-attribute="text"
    value-attribute="value"
  >
    <template #empty>
      <span>Nenhum módulo disponível</span>
    </template>
  </USelectMenu>
</template>

<script setup lang="ts">
const emits = defineEmits(["update:modelValue"]);
const m = useModule();
const r = useRouter();

const value = ref<string>(m.getModule() || "");

const props = defineProps({
  modelValue: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
    default: "Selecionar",
  },
  noRedirect: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const modules = [
  { value: "cadastro", text: "Cadastro" },
  { value: "cientifico", text: "Científico" },
  { value: "comunicacao", text: "Comunicação" },
  { value: "financeiro", text: "Financeiro" },
  { value: "evento", text: "Evento" },
  { value: "secretaria", text: "Secretaria" },
  { value: "evento-especial", text: "Evento Especial" },
  { value: "comercial", text: "Comercial" },
  { value: "evento-portaria", text: "Evento Portaria" },
];

watch(
  () => value.value,
  (nv) => {
    emits("update:modelValue", nv);

    m.setModule(nv);

    if (!props.noRedirect) {
      r.push("/dashboard");
    }
  }
);
</script>
