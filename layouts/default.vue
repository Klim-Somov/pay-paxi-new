<template>
  <div>
    <!-- header -->

    <header class="header" id="header">
      <div class="container">
        <div class="header_block">
          <div class="header_left">
            <div class="header_logo">
              <NuxtLink to="/">
                <img src="../assets/images/logo.svg" alt="" />
              </NuxtLink>
            </div>
            <div :class="{ 'modal-overlay': isMenu }"></div>

            <ul :class="{ active: isMenu }" class="header_menus">
              <li>
                <NuxtLink @click="isMenu = false" to="/partners"
                  >Партнерам</NuxtLink
                >
              </li>
              <li>
                <NuxtLink @click="isMenu = false" to="/drivers"
                  >Водителям</NuxtLink
                >
              </li>
              <li>
                <NuxtLink @click="isMenu = false" to="/">Тарифы</NuxtLink>
              </li>
              <li>
                <NuxtLink @click="isMenu = false" to="/">CRM PayTaxi</NuxtLink>
              </li>
              <li>
                <NuxtLink @click="isMenu = false" to="/">Контакты</NuxtLink>
              </li>
              <div class="header_phone d-lg-none">
                <div @click="menuToggle" class="closer">
                  <img src="../assets/images/close.svg" alt="" />
                </div>
                <a href="tel:+78002225756">+7 (800) 222 57-56</a>
              </div>
              <div class="header_phone d-lg-none">
                <a href="mailto:info@paytaxi.ru">info@paytaxi.ru</a>
              </div>
              <li class="d-lg-none">
                <div class="driver_apps extra_apps-menu">
                  <!--  -->
                  <div class="extra_item-menu">
                    <div class="extra_img">
                      <img src="../assets/images/app_gallery.svg" alt="" />
                    </div>
                    <p class="extra_title">App Gallery</p>
                  </div>
                  <!--  -->
                  <div class="extra_item-menu">
                    <div class="extra_img">
                      <img src="../assets/images/app_store.svg" alt="" />
                    </div>
                    <p class="extra_title">App store</p>
                  </div>
                  <!--  -->
                  <div class="extra_item-menu">
                    <div class="extra_img">
                      <img src="../assets/images/google_play.svg" alt="" />
                    </div>
                    <p class="extra_title">Google play</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="header_phone d-none d-lg-block">
            <a href="tel:+78002225756">+7 (800) 222 57-56</a>
          </div>
          <!-- hamburger_mobile -->
          <div @click="menuToggle" class="hamurger_menu d-lg-none">
            <a>
              <img src="../assets/images/mobile_hamburger.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
    <slot />

    <footer>
      <div class="container">
        <div class="footer_call">
          <div class="call_left">
            <p class="call_mini_title">Остались вопросы?</p>
            <h4 class="call_title">Оставьте заявку на обратный звонок</h4>
            <p class="call_subtitle">
              И наш менеджер свяжется с вами в течение часа
            </p>
          </div>
          <div class="call_right">
            <div class="call_form">
              <input
                v-model="name"
                type="text"
                placeholder="Имя"
                name="name"
                id="" />
              <input
                v-maska
                data-maska="+7##########"
                v-model="phone"
                type="tel"
                placeholder="Телефон"
                name="tel"
                id="" />
              <button @click="onSubmit" class="call_send">
                Отправить заявку
              </button>
            </div>
            <Success v-if="succes" />
            <Error v-if="error" />
          </div>
        </div>
        <div class="footer_block">
          <div class="footer_left">
            <div class="left_block">
              <div class="left_block_img">
                <img src="../assets/images/footer_logo.svg" alt="" />
              </div>
              <p class="left_block_year">© Paytaxi.ru 2023 г.</p>
              <p class="left_cards">
                ООО «Доступный город» <br />
                ИНН 6686079161 <br />
                ОГРН 1169658044742
              </p>
            </div>
            <div class="right_block">
              <ul class="right_block_list">
                <li><a href="#">Стоимость</a></li>
                <li><a href="#">Обучение бизнесу</a></li>
                <li><a href="#">Как получать водителей</a></li>
                <li><a href="#">Отзывы</a></li>
              </ul>
              <p class="footer_rules">
                Пользовательское соглашение <br />
                Политика конфиденциальности
              </p>
            </div>
          </div>
          <div class="footer_right">
            <a href="tel:+78002225756" class="footer_tel">+7 (800) 222 57-56</a>
            <a href="mailto:info@paytaxi.ru" class="footer_mail"
              >info@paytaxi.ru</a
            >
            <div class="footer_right_extra">
              <!--  -->
              <div class="extra_item">
                <div class="extra_img">
                  <img src="../assets/images/app_gallery.svg" alt="" />
                  <div class="active_img">
                    <img src="../assets/images/active_app.svg" alt="" />
                  </div>
                </div>
                <p class="extra_title">App Gallery</p>
              </div>
              <!--  -->
              <div class="extra_item">
                <div class="extra_img">
                  <img src="../assets/images/app_store.svg" alt="" />
                  <div class="active_img">
                    <img src="../assets/images/active_store.svg" alt="" />
                  </div>
                </div>
                <p class="extra_title">App store</p>
              </div>
              <!--  -->
              <div class="extra_item">
                <div class="extra_img">
                  <img src="../assets/images/google_play.svg" alt="" />
                  <div class="active_img">
                    <img src="../assets/images/active_google.svg" alt="" />
                  </div>
                </div>
                <p class="extra_title">Google play</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
const { $csrfFetch } = useNuxtApp();

const isMenu = ref(false);
const succes = ref(false);
const error = ref(false);
const name = ref("");
const phone = ref("");

const handleModalError = () => {
  error.value = true;
  setTimeout(() => {
    error.value = false;
  }, 3500);
};

const handleModalSubmit = () => {
  succes.value = true;
  setTimeout(() => {
    succes.value = false;
  }, 3500);
};

const onSubmit = () => {
  if (!name.value || !phone.value) return;

  $csrfFetch("/api/contact", {
    method: "POST",
    body: {
      from: name.value,
      phone: phone.value,
      email: "",
    },
  })
    .then(() => {
      handleModalSubmit();
    })
    .catch((e) => {
      handleModalError();
      console.log(e);
    });
  name.value = "";
  phone.value = "";
};

const menuToggle = () => {
  isMenu.value = !isMenu.value;
};
</script>
<style></style>
