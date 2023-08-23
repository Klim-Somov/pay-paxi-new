// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/main.scss"],
  modules: ["nuxt-swiper", "nuxt-csurf"],

  app: {
    head: {
      title: "PayTaxi",
    },
  },

  csurf: {
    cookie: {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
    },
    methodsToProtect: ["POST", "PUT", "PATCH"],
    encryptAlgorithm: "aes-256-cbc",
  },
  runtimeConfig: {
    mailport: 25,
    mailhost: "smtp",
    mailfrom: "info@paytaxi.ru",
    mailto: "info@paytaxi.ru",
    public: {
      site: "https://paytaxi.ru/",
      phone: "",
    },
  },
});
