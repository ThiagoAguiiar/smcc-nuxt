<template>
  <section class="w-full min-h-screen">
    <DashboardNavbar />

    <div class="h-[calc(100vh-65px)] flex items-center justify-center">
      <slot></slot>
    </div>
  </section>
</template>
