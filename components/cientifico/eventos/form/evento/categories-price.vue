<template>
  <div class="space-y-5">
    <div class="flex items-center gap-x-3">
      <UInput
        class="flex-1"
        placeholder="Categoria"
        size="xs"
        v-model="modelValue.category"
      />

      <UInput
        class="flex-1"
        placeholder="Preço (R$)"
        size="xs"
        v-model="modelValue.price"
      />

      <UTooltip text="Adicionar">
        <UButton
          size="xs"
          type="button"
          @click="addCategoryPrice"
          icon="fluent:add-24-regular"
        />
      </UTooltip>
    </div>

    <div
      class="border border-gray-300 rounded-lg"
      v-if="categoriesPrice.length > 0"
    >
      <UTable :rows="categoriesPrice" :columns="columns">
        <template #actions-data="{ row, index }">
          <UButton
            v-if="!edit[index]"
            label="Editar"
            size="xs"
            variant="soft"
            color="blue"
            type="button"
            class="mr-3"
            @click="edit[index] = true"
          />

          <UButton
            v-else
            label="Salvar"
            size="xs"
            variant="solid"
            type="button"
            class="mr-3"
            @click="saveCategoryPrice(row, index)"
          />

          <UButton
            label="Remover"
            size="xs"
            color="red"
            variant="soft"
            type="button"
            @click="removeCategoryPrice(row)"
          />
        </template>

        <template #category-data="{ row, index }">
          <UInput
            v-if="edit[index]"
            v-model="row.category"
            size="xs"
            :placeholder="`Editar categoria &quot;${row.category}&quot;`"
          />
          <span v-else>{{ row.category }}</span>
        </template>

        <template #price-data="{ row, index }">
          <UInput
            v-if="edit[index]"
            v-model="row.price"
            size="xs"
            :placeholder="`Editar preço &quot;${row.price}&quot;`"
          />
          <span v-else>{{ row.price }}</span>
        </template>
      </UTable>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Object as PropType<ICategoriesPrice[]>,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

interface ICategoriesPrice {
  price: string;
  category: string;
}

const modelValue = ref<ICategoriesPrice>({
  price: "",
  category: "",
});

const categoriesPrice = ref<ICategoriesPrice[]>([]);
const edit = ref<{ [key: number]: boolean }>({});

const addCategoryPrice = () => {
  if (
    modelValue.value.price.trim().length > 0 &&
    modelValue.value.category.trim().length > 0
  ) {
    categoriesPrice.value.push({ ...modelValue.value });
    modelValue.value = { price: "", category: "" };
    emits("update:modelValue", categoriesPrice.value);
  }
};

const removeCategoryPrice = (row: ICategoriesPrice) => {
  categoriesPrice.value.splice(categoriesPrice.value.indexOf(row), 1);
  emits("update:modelValue", categoriesPrice.value);
};

const saveCategoryPrice = (row: ICategoriesPrice, index: number) => {
  edit.value[index] = false;
  emits("update:modelValue", categoriesPrice.value);
};

onMounted(() => {
  categoriesPrice.value = props.modelValue;
});

const columns = [
  {
    label: "Categoria",
    key: "category",
  },
  {
    label: "Preço",
    key: "price",
  },
  {
    key: "actions",
  },
];
</script>
