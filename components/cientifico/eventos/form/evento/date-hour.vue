<template>
  <div class="border-gray-300 rounded-lg pt-3 border p-4">
    <p
      class="text-gray-600 text-sm font-medium mb-2"
      v-if="models.dataEvento.length === 0"
    >
      Nenhuma data selecionada
    </p>

    <UPopover :popper="{ placement: 'bottom-start' }">
      <UButton
        icon="i-heroicons-calendar-days-20-solid"
        color="white"
        variant="solid"
        label="Selecionar Datas"
      />

      <template #panel="{ close }">
        <FormDatePicker v-model="models.dataSelecionada" @close="close" />
      </template>
    </UPopover>

    <div
      class="space-y-3 max-h-[250px] overflow-y-auto scroller scroller-rounded mt-4"
      v-if="models.dataEvento.length > 0"
    >
      <div>
        <p class="text-sm font-bold text-primary">Datas e Horários</p>
        <p class="text-gray-600 text-sm font-medium">
          Obrigatório adicionar os horários de íncio e término, respectivamente
        </p>
      </div>

      <UFormGroup class="space-y-3" v-for="(item, index) in models.dataEvento">
        <div class="flex items-center gap-x-3">
          <UBadge>
            {{ item.data }}
          </UBadge>

          <UInput
            type="time"
            size="xs"
            name="inicio"
            v-model="models.dataEvento[index].hour.start"
          />

          <UInput
            type="time"
            size="xs"
            name="termino"
            v-model="models.dataEvento[index].hour.end"
          />

          <UButton
            @click="removeDate(index)"
            label="Remover"
            size="xs"
            color="red"
            variant="soft"
          />

          <span
            class="text-xs text-red-500 font-medium"
            v-if="models.errors[index]"
          >
            {{ models.errors[index] }}
          </span>
        </div>
      </UFormGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from "date-fns";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: Array as PropType<IEventDate[]>,
    required: true,
  },
});

interface IModels {
  errors: string[];
  dataSelecionada: Date | null;
  dataEvento: IEventDate[];
}

const models = reactive<IModels>({
  dataEvento: [],
  dataSelecionada: null,
  errors: [],
});

const removeDate = (index: number) => {
  models.dataEvento.splice(index, 1);
  models.errors[index] = "";

  resetSelectedDate();
};

const resetSelectedDate = () => {
  models.dataSelecionada = null;
};

const verifyDate = (value: typeof models.dataSelecionada) => {
  if (value !== null) {
    const formatDate = format(value, "dd/MM/yyyy");
    const find = models.dataEvento.find((item) => item.data == formatDate);

    if (!find) {
      models.dataEvento.push({
        data: formatDate,
        hour: {
          start: null,
          end: null,
        },
      });
    }

    resetSelectedDate();
  }
};

const verifyHours = (value: typeof models.dataEvento) => {
  value.forEach(({ hour }, index) => {
    if (hour.start && hour.end !== null) {
      const hour1 = hour.start!.split(":")[0];
      const hour2 = hour.end!.split(":")[0];

      if (hour2 < hour1) {
        models.errors[index] =
          "Horário de término não pode ser menor que o horário de início";
      } else if (hour2 == hour1) {
        models.errors[index] =
          "Horário de término não pode ser igual ao horário de início";
      } else {
        models.errors[index] = "";
      }
    } else {
      models.errors[index] = "Selecione um horário de início e término";
    }
  });
};

onMounted(() => (models.dataEvento = props.modelValue));

watch(
  () => models.dataSelecionada,
  (value) => verifyDate(value),
  { deep: true }
);

watch(
  () => models.dataEvento,
  (value) => verifyHours(value),
  { deep: true }
);
</script>
