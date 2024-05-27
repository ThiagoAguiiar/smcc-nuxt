<template>
  <UForm
    :state="formState"
    :schema="formValidation"
    @submit="onSubmit"
    class="border border-[#d1d5db] rounded-lg p-7 py-9 w-[420px]"
  >
    <div>
      <h1 class="text-xl font-bold">{{ grettings() }}</h1>
      <p class="text-[15px]">Acesse sua conta para continuar</p>
    </div>

    <div class="space-y-2.5 mt-5 mb-5">
      <UFormGroup label="Selecionar Módulo" name="module">
        <FormModule v-model="formState.module" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput type="text" v-model="formState.email" />
      </UFormGroup>

      <UFormGroup label="Senha" name="password">
        <FormPassword v-model="formState.password" />
      </UFormGroup>
    </div>

    <UButton
      type="submit"
      class="w-full bg-[#277c5b] hover:bg-[#2b8663] font-medium justify-center text-[16px]"
      :disabled="loading"
      :loading="loading"
      :label="loading ? 'Aguarde' : 'Entrar'"
    />
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";

definePageMeta({
  layout: "auth",
});

const formValidation = z.object({
  email: z.string().email(vMessages.email),
  password: z.string().min(1, vMessages.common),
  module: z.string().min(1, vMessages.select),
});

const loading = ref<boolean>(false);

const formState = reactive({
  email: "",
  password: "",
  module: "",
});

const onSubmit = async () => {
  console.log(formState);
};
</script>
