<template>
  <div
    @click="isChevronDown = !isChevronDown"
    class="cursor-pointer select-none"
  >
    <div class="flex items-center justify-between py-0.5" v-if="!path">
      <div class="flex gap-x-1">
        <Icon :name="icon" size="20px" />
        <span class="text-sm font-medium">{{ text }} </span>
      </div>

      <Icon
        v-if="items.length > 0"
        :name="
          isChevronDown
            ? 'fluent:chevron-down-24-regular'
            : 'fluent:chevron-right-24-regular'
        "
      />
    </div>

    <NuxtLink
      v-else
      :to="path"
      class="flex items-center justify-between py-0.5"
    >
      <div class="flex gap-x-1">
        <Icon :name="icon" size="20px" />
        <span class="text-sm font-medium">{{ text }} </span>
      </div>

      <Icon
        v-if="items.length > 0"
        :name="
          isChevronDown
            ? 'fluent:chevron-down-24-regular'
            : 'fluent:chevron-right-24-regular'
        "
      />
    </NuxtLink>

    <transition name="menu-transition">
      <div
        :class="[
          isChevronDown ? 'max-h-[500px] open-menu' : 'max-h-0 closed-menu',
          'overflow-hidden transition-all duration-300 mt-1',
        ]"
      >
        <NuxtLink
          v-for="item in items"
          @click.stop
          :to="item.path"
          class="truncate flex items-center sublink"
        >
          <div class="w-[20px] flex justify-center">
            <span class="decoration"></span>
          </div>

          <div class="space-x-1.5">
            <Icon v-if="item.icon" :name="item.icon" size="20px" />
            <span class="text-sm text-medium">
              {{ item.name }}
            </span>
          </div>
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const isChevronDown = ref<boolean>(false);

defineProps({
  items: {
    type: Array as PropType<SubLink[]>,
    required: false,
    default: [],
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
  text: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: false,
    default: "",
  },
});
</script>

<style scoped>
.decoration {
  display: block;
  width: 2px;
  height: 30px;
  background: #dbdbdb;
  content: "";
  border-radius: 10px;
}

.sublink:hover {
  color: #277c5b;
}

.sublink:hover .decoration {
  background: #277c5b;
}

.open-menu {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 1;
}

.closed-menu {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0;
}

.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: all 0.3s ease-in-out;
}

.menu-transition-enter,
.menu-transition-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
