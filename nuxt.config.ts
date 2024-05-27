// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "@nuxt/ui"],
  css: ["@/assets/css/global.css"],

  pinia: {
    storesDirs: ["./stores/**"],
  },

  colorMode: {
    preference: "light",
  },

  imports: {
    dirs: ["types/**", "test/**"],
  },
});
