// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/variables.scss", "@/assets/custom.scss", "@/assets/app.css"],
  modules: ["nuxt-quasar-ui", "@nuxt/content", "@nuxt/image"],
  content: {
    documentDriven: true,
  },
  quasar: {
    plugins: ["Dialog", "Loading", "LoadingBar", "Dark"],
    extras: {
      font: "roboto-font",
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  },
});
