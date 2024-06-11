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

  build: {
    transpile: ["maska"],
  },

  imports: {
    dirs: ["types/**", "validations/**", "./models"],
  },

  runtimeConfig: {
    public: {
      smccSettingsCookie: "smcc-settings",
    },
  },
});
