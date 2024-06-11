<template>
  <div class="w-[90%] mx-auto">
    <div>
      <label
        @drop.prevent="onDrop"
        @dragover.prevent="isDrag = !isDrag"
        @dragleave.prevent="isDrag = !isDrag"
        class="block w-full text-center space-y-2 text-gray-800 border-2 transition-all border-dashed border-gray-300 rounded-lg p-5 hover:cursor-pointer"
        :class="{ active: isDrag }"
        for="file"
      >
        <img
          src="/upload.png"
          width="80px"
          class="mx-auto"
          alt="Upload image"
        />

        <div class="leading-[20px]">
          <span class="block text-center text-sea-green-600">
            Arraste seus arquivos ou <span>Procurar</span>
          </span>

          <span class="text-[13px] text-gray-600 font-medium">
            Tamanho Max. 10 MB
          </span>
        </div>
      </label>

      <input type="file" id="file" hidden />
    </div>

    <!-- -->
  </div>
</template>

<script setup lang="ts">
const isDrag = ref<boolean>(false);
const isOpen = ref<boolean>(false);

const onDrop = (e: DragEvent) => {
  const files = e.dataTransfer?.files;
  console.log(files);
};
</script>

<style scoped>
.active {
  background: red;
}
</style>
