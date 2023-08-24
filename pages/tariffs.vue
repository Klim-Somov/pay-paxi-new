<template>
  <section class="tarif">
    <div class="container">
      <div class="tarif_wrapper">
        <div class="tarif_top">
          <p class="tarif_title">Тарифы</p>
          <div class="top_right">
            <div class="top_right_desc">
              *Фиксированная цена без скрытых условий
            </div>
            <label class="top_right_docs">
              <div class="docs_image">
                <img src="../assets/images/tarif_doc.svg" alt="" />
              </div>
              <a class="docs_title"> Смотреть пример договора </a>
            </label>
          </div>
        </div>
        <div class="tarif_block">
          <!--  -->
          <div class="tarif_item tarif_item1">
            <div class="tarif_main">
              <p class="tarif_name">Базовый</p>
              <p class="tarif_subtitle">Любой оборот</p>
              <div class="tarif_img">
                <img src="../assets/images/tarif1.svg" alt="" />
              </div>
            </div>
            <div class="tarif_bottom">
              <p class="tarif_price">Бесплатно</p>
              <div class="tarif_btn">
                <a @click="openKPModal">Выбрать</a>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="tarif_item tarif_item2">
            <div class="tarif_main">
              <p class="tarif_name">Выгодный</p>
              <p class="tarif_subtitle">Оборот 500 тыс - 3 млн руб</p>
              <div class="tarif_img">
                <img src="../assets/images/tarif2.svg" alt="" />
              </div>
            </div>
            <div class="tarif_bottom">
              <p class="tarif_price">6 000 руб/мес</p>
              <div class="tarif_btn">
                <a @click="openKPModal">Выбрать</a>
              </div>
            </div>
          </div>

          <!--  -->
          <div class="tarif_item tarif_item1">
            <div class="tarif_main">
              <p class="tarif_name">Выгодный +</p>
              <p class="tarif_subtitle">Оборот выше 3 млн руб</p>
              <div class="tarif_img">
                <img src="../assets/images/tarif3.svg" alt="" />
              </div>
            </div>
            <div class="tarif_bottom">
              <p class="tarif_price">10 000 руб/мес</p>
              <div class="tarif_btn">
                <a @click="openKPModal">Выбрать</a>
              </div>
            </div>
          </div>
          <!--  -->
          <div class="tarif_item tarif_item4">
            <div class="tarif_main">
              <p class="tarif_name">VIP</p>
              <p class="tarif_subtitle">Любой оборот</p>
              <div class="tarif_img">
                <img src="../assets/images/tarif4.svg" alt="" />
              </div>
            </div>
            <div class="tarif_bottom">
              <p class="tarif_price">50 000 руб/мес</p>
              <div class="tarif_btn">
                <a @click="openKPModal">Выбрать</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="offer_wrapper">
        <h3 class="offer_title">Запуск и внедрение сервиса за 1 день</h3>
        <div class="offer_block">
          <!-- offer_item -->
          <div class="offer_item">
            <p class="offer_text">Выбор схемы партнерства</p>
            <div class="offer_img">
              <img src="../assets/images/offer1.png" alt="" />
            </div>
          </div>
          <div class="offer_arrow">
            <img src="../assets/images/offer_arrow.svg" alt="" />
          </div>
          <!-- offer_item -->
          <div class="offer_item">
            <p class="offer_text">Выбор банка</p>
            <div class="offer_img">
              <img src="../assets/images/offer2.png" alt="" />
            </div>
          </div>
          <div class="offer_arrow">
            <img src="../assets/images/offer_arrow.svg" alt="" />
          </div>
          <!-- offer_item -->
          <div class="offer_item">
            <p class="offer_text">Настройки</p>
            <div class="offer_img">
              <img src="../assets/images/offer3.png" alt="" />
            </div>
          </div>
          <div class="offer_arrow">
            <img src="../assets/images/offer_arrow.svg" alt="" />
          </div>
          <!-- offer_item -->
          <div class="offer_item">
            <p class="offer_text">Сервис готов к работе</p>
            <div class="offer_img">
              <img src="../assets/images/offer4.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Success v-if="succes" />
  <Error v-if="error" />
  <ModalForm
    @close="closeForm"
    v-if="isModalOpen"
    :title="modalTitle"
    :text="modalText"
    :inputs="modalInputs"
    @error="handleModalError"
    @submit="handleModalSubmit" />
</template>
<script setup>


const isModalOpen = ref(false);
const modalTitle = ref("");
const modalText = ref("");
const modalInputs = ref([]);
const succes = ref(false);
const error = ref(false);



const openKPModal = () => {
  isModalOpen.value = true;
  modalTitle.value = "Получить КП";
  modalText.value = "Заполните форму, и мы отправим вам КП в течение часа";
  modalInputs.value = [
    { placeholder: "Имя", value: "" },
    { placeholder: "Телефон", value: "" },
    { placeholder: "Почта", value: "" },
  ];
};
const closeForm = () => {
  isModalOpen.value = false;
};


const handleModalError = () => {
  error.value = true;
  setTimeout(() => {
    error.value = false;
  }, 3500);
  isModalOpen.value = false;
};

const handleModalSubmit = () => {
  succes.value = true;
  setTimeout(() => {
    succes.value = false;
  }, 3500);
  isModalOpen.value = false;
};
</script>
