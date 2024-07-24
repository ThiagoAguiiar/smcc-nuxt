<template>
  <div class="space-y-2.5 mt-3">
    <div v-for="(item, index) in optionsEspacoSMCC">
      <UCheckbox
        v-model="selected[index]"
        :label="item.label"
        :help="item.help"
        :disabled="item.disabled"
      />
    </div>

    <UInput placeholder="Especificar" size="xs" />
  </div>
</template>

<script setup lang="ts">
const selected = ref<boolean[]>([]);

const selectedValues = computed<typeof optionsEspacoSMCC.value>(() => {
  return selected.value
    .map((value: any, index: number) => {
      return value ? optionsEspacoSMCC.value[Number(index)] : null;
    })
    .filter((value) => {
      return value !== null;
    });
});

// const qtdLocation = computed(() => {
//   return selectedValues.value.reduce(
//     (acc, { qtd }) => {
//       return { ...acc, qtd: acc.qtd + qtd };
//     },
//     { qtd: 0 }
//   );
// });

const disabledOtherOptions = () => {
  const find = selectedValues.value.find(({ value }) => value === "outros");

  if (find) {
    optionsEspacoSMCC.value.forEach((item, index) => {
      if (item.value !== "outros") {
        item.disabled = true;
        selected.value[index] = false;

        return;
      }
    });
  } else {
    optionsEspacoSMCC.value.forEach((item) => {
      item.disabled = false;
    });
  }
};

watch(selectedValues, () => disabledOtherOptions(), { deep: true });

const optionsEspacoSMCC = ref([
  {
    value: "sala a",
    label: "sala A",
    help: "Auditório - Máximo 110 pessoas",
    qtd: 110,
    disabled: false,
  },
  {
    value: "estúdio",
    label: "Estúdio",
    qtd: 0,
    disabled: false,
  },
  {
    value: "sala c",
    label: "Sala C",
    help: "Máximo de 33 pessoas",
    qtd: 33,
    disabled: false,
  },
  {
    value: "sala d",
    label: "Sala D",
    help: "Máximo de 45 pessoas",
    qtd: 45,
    disabled: false,
  },
  {
    value: "sala e",
    label: "Sala E",
    help: "Máximo de 25 pessoas",
    qtd: 25,
    disabled: false,
  },
  {
    value: "sala f",
    label: "Sala F",
    help: "Máximo de 15 pessoas",
    qtd: 15,
    disabled: false,
  },
  {
    value: "salão social",
    label: "Salão social",
    help: "Máximo de 130 pessoas (coquetel) / até 90 pessoas (jantar)",
    qtd: 90,
    disabled: false,
  },
  {
    value: "outros",
    label: "Outros",
    qtd: 0,
    disabled: false,
  },
]);
</script>
