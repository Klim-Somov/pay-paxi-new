// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/scss/main.scss"],
  modules: ["nuxt-swiper", "nuxt-csurf"],

  app: {
    head: {
      title: "PayTaxi",
      link: [
        {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js",
        },
      ],
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
    public: {
      site: "",
      phone: "",
    },
  },
});
