<template>
  <!-- <div class="px-5 py-3 bg-gray-50 relative">
    <!-- <UForm class="space-y-3" :state="filterState" @submit="onSubmit">
      <div class="flex mt-3 flex-wrap justify-between">
        <div class="flex gap-x-2.5 flex-wrap">
          <UFormGroup>
            <UInput class="w-[230px]" v-model="filterState.tituloEvento" />
            <template #label>
              <span class="text-[13px]">Título</span>
            </template>
          </UFormGroup>

          <UFormGroup>
            <USelect class="w-[230px]" v-model="filterState.categoria" />

            <template #label>
              <span class="text-[13px]">Categoria</span>
            </template>
          </UFormGroup>

          <UFormGroup>
            <UInput class="w-[200px]" v-model="filterState.valor" />

            <template #label>
              <span class="text-[13px]">Valor (R$)</span>
            </template>
          </UFormGroup>

          <UFormGroup>
            <UInput type="number" v-model="filterState.numParticipantes" />

            <template #label>
              <span class="text-[13px]">Nº de Participantes</span>
            </template>
          </UFormGroup>
        </div>

        <div class="flex gap-x-2.5">
          <UFormGroup>
            <template #label>
              <span class="text-[13px]">Data Inscrição</span>
            </template>

            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton
                icon="i-heroicons-calendar-days-20-solid"
                :label="format(filterState.dataInscricao, 'dd/MM/yyy')"
                color="white"
                variant="solid"
              />

              <template #panel="{ close }">
                <FormDatePicker
                  v-model="filterState.dataInscricao"
                  is-required
                  @close="close"
                />
              </template>
            </UPopover>
          </UFormGroup>

          <UFormGroup>
            <template #label>
              <span class="text-[13px]">Data Solicitação</span>
            </template>

            <UPopover :popper="{ placement: 'bottom-start' }">
              <UButton
                icon="i-heroicons-calendar-days-20-solid"
                :label="format(filterState.dataSolicitacao, 'dd/MM/yyy')"
                color="white"
                variant="solid"
              />

              <template #panel="{ close }">
                <FormDatePicker
                  v-model="filterState.dataSolicitacao"
                  is-required
                  @close="close"
                />
              </template>
            </UPopover>
          </UFormGroup>
        </div>
      </div>

      <div class="flex justify-end gap-x-2.5">
        <UButton
          color="red"
          variant="outline"
          label="Limpar"
          icon="iconamoon:close-fill"
          @click="clearFilters"
        />

        <UButton color="blue" icon="fluent:search-20-regular" label="Buscar" />
      </div>
    </UForm> 
  </div> -->
</template>

<script setup lang="ts">
const emits = defineEmits(["filter"]);

import { format } from "date-fns";

const filterState = reactive<IFilterEvent>({
  tituloEvento: "",
  categoria: "",
  valor: "",
  numParticipantes: 0,
  dataSolicitacao: new Date(),
  dataInscricao: new Date(),
});

const clearFilters = () => {
  filterState.categoria = "";
  filterState.valor = "";
  filterState.tituloEvento = "";
  filterState.dataInscricao = new Date();
  filterState.dataSolicitacao = new Date();
  filterState.numParticipantes = 0;
};

const onSubmit = () => {
  emits("filter", filterState);
};
</script>
