<template>
  <section class="hero">
    <div class="container">
      <div class="hero_block">
        <div class="hero_left">
          <h2 class="hero_left_title">
            Автоматизация работы
            <p class="left_bold_title">таксопарков</p>
            <br />
            и
            <p class="left_bold_title">служб доставки</p>
          </h2>
          <div class="hero_advantages_block">
            <div class="advantage_item">
              <div class="advan_img">
                <img src="../assets/images/advan_item1.svg" alt="" />
              </div>
              <p class="advan_title">Выбираете удобный для вас банк партнер</p>
            </div>
            <div class="advantage_item">
              <div class="advan_img">
                <img src="../assets/images/advan_item2.svg" alt="" />
              </div>
              <p class="advan_title">
                Эквайринг - принимайте оплату за аренду автомобиля
              </p>
            </div>
            <div class="advantage_item">
              <div class="advan_img">
                <img src="../assets/images/advan_item3.svg" alt="" />
              </div>
              <p class="advan_title">
                Моментальные выплаты за 3-5 секунд на карту
              </p>
            </div>
            <div class="advantage_item">
              <div class="advan_img">
                <img src="../assets/images/advan_item4.svg" alt="" />
              </div>
              <p class="advan_title">Удобное приложение для водителей</p>
            </div>
          </div>
        </div>
        <div class="hero_right">
          <div class="right_top">
            <p class="right_top_title">
              Избавьте себя от ежедневной рутины с водителями
            </p>
            <div class="person_img">
              <img src="../assets/images/hero_right_person.png" alt="" />
            </div>
          </div>

          <div class="right_bottom">
            <form class="right_form">
              <div class="form_top">
                <div class="form_number">
                  <img src="../assets/images/30.svg" alt="" />
                </div>
                <div class="form_top_title">Бесплатный доступ к системе</div>
              </div>
              <p class="form_desc">
                Заполните форму и получите тестовый доступ в течение часа
              </p>
              <div class="form_inputs">
                <input
                  v-model="name"
                  type="text"
                  placeholder="Имя"
                  name="name" />
                <input
                  v-maska
                  data-maska="+7##########"
                  v-model="phone"
                  type="tel"
                  placeholder="Телефон"
                  name="tel" />
                <button @click.prevent="onSubmit">Отправить заявку</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Advice section -->
  <section class="advice">
    <div class="container">
      <p class="advice_top_title">Не знаете с чего начать?</p>
      <div class="advice_top">
        <div class="advice_top_left">
          <h3 class="advice_left_title">Открыть таксопарк</h3>
        </div>
        <div class="advice_top_right">
          <div class="right_img">
            <img src="../assets/images/clients_img.svg" alt="" />
          </div>
          <p class="advice_right_desc">
            Наши специалисты помогут выбрать агрегатора заказов и открыть
            диспетчерскую.
          </p>
        </div>
      </div>
      <div class="advice_swiper d-sm-none advice_block swiper">
        <div class="swiper-wrapper">
          <Swiper
            class="swiper-cards"
            :width="360"
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            :slides-per-view="1"
            :loop="true"
            :effect="'cards'"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
            }">
            <SwiperSlide
              ><div class="swiper-slide">
                <!--  -->
                <div class="advice_item advice0">
                  <div class="item_img">
                    <img src="../assets/images/advice1.png" alt="" />
                  </div>
                  <p class="advice_item_desc">Открытие юридического лица</p>
                </div>
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div class="swiper-slide">
                <!--  -->
                <div class="advice_item advice1">
                  <div class="item_img">
                    <img src="../assets/images/advice2.png" alt="" />
                  </div>
                  <p class="advice_item_desc">Договор с агрегатором</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              ><div class="swiper-slide">
                <!--  -->
                <div class="advice_item advice2">
                  <div class="item_img">
                    <img src="../assets/images/advice3.png" alt="" />
                  </div>
                  <p class="advice_item_desc">Подключение сервиса PayTaxi</p>
                </div>
              </div>
            </SwiperSlide>

            <!-- useSwiper() within a swiper instance -->
          </Swiper>
        </div>
        <!--  -->
        <div class="advice_location">
          <p class="advice_location_desc">
            Получить инструкцию по открытию в вашем городе таксопарка
          </p>
          <div class="location_img">
            <img src="../assets/images/advice_location.png" alt="" />
          </div>
          <div @click="openInstructionModal" class="location_button">
            <a>Получить инструкцию</a>
          </div>
        </div>
      </div>

      <div class="advice_block d-none d-sm-flex">
        <!--  -->
        <div class="advice_item advice0">
          <div class="item_img">
            <img src="../assets/images/advice1.png" alt="" />
          </div>
          <p class="advice_item_desc">Открытие юридического лица</p>
        </div>
        <!--  -->
        <div class="advice_item advice1">
          <div class="item_img">
            <img src="../assets/images/advice2.png" alt="" />
          </div>
          <p class="advice_item_desc">Договор с агрегатором</p>
        </div>
        <!--  -->
        <div class="advice_item advice2">
          <div class="item_img">
            <img src="../assets/images/advice3.png" alt="" />
          </div>
          <p class="advice_item_desc">Подключение сервиса PayTaxi</p>
        </div>
        <!--  -->
        <div class="advice_location">
          <p class="advice_location_desc">
            Получить инструкцию по открытию в вашем городе таксопарка
          </p>
          <div class="location_img">
            <img src="../assets/images/advice_location.png" alt="" />
          </div>
          <div class="location_button">
            <a @click="openInstructionModal">Получить инструкцию</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Service section -->
  <section class="service">
    <div class="container">
      <h3 class="service_title">Поможем настроить сервис PayTaxi</h3>
    </div>
    <div class="service_block">
      <div class="container">
        <div class="service_block_wrapper position-relative">
          <!--  -->
          <div class="service_iphone">
            <img src="../assets/images/service_phone.png" alt="" />
          </div>
          <div class="service_top">
            <div class="service_item service_item1">
              <div class="service_img">
                <img src="../assets/images/service_icon2.svg" alt="" />
              </div>
              <p class="service_desc">
                Групповые настройки выплат и комиссий помогут эффективно
                распределять ваше рабочее время
              </p>
            </div>
            <div class="service_item service_item2">
              <div class="service_img">
                <img src="../assets/images/service_icon1.svg" alt="" />
              </div>
              <p class="service_desc">
                Постоянная поддержка вашего проекта со стороны PayTaxi
              </p>
            </div>
          </div>
          <div class="service_bottom">
            <div class="service_item service_item3">
              <div class="service_img">
                <img src="../assets/images/service_icon3.svg" alt="" />
              </div>
              <p class="service_desc">
                Водители самостоятельно выводят деньги через мобильное
                приложение
              </p>
            </div>
            <div class="service_form">
              <p class="service_form_text">
                Заполните форму для получения <span>коммерческого</span>
                <span>предложения</span>
              </p>
              <div class="service_arrow">
                <a @click="openKPModal" class="service_btn">Получить КП</a>
                <div class="service_top_arrow">
                  <img src="../assets/images/service_arrow.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partner section -->
  <section class="partner index_partner">
    <div class="container">
      <div class="partner_top">
        <p class="bank_partner">Банки партнёры</p>
        <p class="comission">*Комиссия на моментальные выплаты от 0,5%</p>
      </div>
      <div
        class="swiper partner_block mobile_partner d-sm-none position-relative">
        <div class="swiper-wrapper">
          <Swiper
            :width="350"
            :modules="[SwiperAutoplay]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }">
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="partner_item">
                  <div class="partner_img">
                    <img src="../assets/images/partner1.svg" alt="" />
                  </div>
                </div></div
            ></SwiperSlide>
            <SwiperSlide
              ><div class="swiper-slide">
                <div class="partner_item">
                  <div class="partner_img">
                    <img src="../assets/images/partner2.svg" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              ><div class="swiper-slide">
                <div class="partner_item">
                  <div class="partner_img">
                    <img src="../assets/images/partner3.svg" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="partner_item">
                  <div class="partner_img">
                    <img src="../assets/images/partner4.svg" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="partner_item">
                  <div class="partner_img">
                    <img src="../assets/images/partner5.svg" alt="" />
                  </div>
                </div></div
            ></SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="partner_item">
                  <div class="partner_img">
                    <img src="../assets/images/partner6.svg" alt="" />
                  </div>
                </div></div
            ></SwiperSlide>

            <!-- useSwiper() within a swiper instance -->
            <SwiperControls />
          </Swiper>
        </div>
      </div>
      <div class="partner_block d-none d-sm-flex">
        <div class="partner_item">
          <div class="partner_img">
            <div class="partner_img_active">
              <img src="../assets/images/partner1.svg" alt="" />
            </div>
            <img
              class="no_active"
              src="../assets/images/partner_n1.svg"
              alt="" />
          </div>
        </div>
        <div class="partner_item">
          <div class="partner_img">
            <div class="partner_img_active">
              <img src="../assets/images/partner2.svg" alt="" />
            </div>
            <img
              class="no_active"
              src="../assets/images/partner_n2.svg"
              alt="" />
          </div>
        </div>
        <div class="partner_item">
          <div class="partner_img">
            <div class="partner_img_active">
              <img src="../assets/images/partner3.svg" alt="" />
            </div>
            <img
              class="no_active"
              src="../assets/images/partner_n3.svg"
              alt="" />
          </div>
        </div>
        <div class="partner_item">
          <div class="partner_img">
            <div class="partner_img_active">
              <img src="../assets/images/partner4.svg" alt="" />
            </div>
            <img
              class="no_active"
              src="../assets/images/partner_n4.svg"
              alt="" />
          </div>
        </div>
        <div class="partner_item">
          <div class="partner_img">
            <div class="partner_img_active">
              <img src="../assets/images/partner5.svg" alt="" />
            </div>
            <img
              class="no_active"
              src="../assets/images/partner_n5.svg"
              alt="" />
          </div>
        </div>
        <div class="partner_item">
          <div class="partner_img">
            <div class="partner_img_active">
              <img src="../assets/images/partner6.svg" alt="" />
            </div>
            <img
              class="no_active"
              src="../assets/images/partner_n6.svg"
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- platform section -->
  <section class="platform">
    <div class="container">
      <p class="platform_mini_title">Где брать водителей?</p>
      <h3 class="platform_title">На платформе PayTaxi</h3>
      <div class="platform_block">
        <div class="platform_top">
          <p class="platform_number">01</p>
          <p class="platform_desc">Создадите сайт и настроите рекламу</p>
        </div>
        <div class="platform_body">
          <div class="grey_block">
            <div class="white_block"></div>
          </div>
          <div class="platform_advice">
            <p class="advice_border">
              <span>Сможете создать рекламу</span> сайта на всех площадках
            </p>
            <div class="platform_girl">
              <img src="../assets/images/platform_person.svg" alt="" />
            </div>
            <div class="platform_location">
              <p class="location_txt">
                Получить инструкцию по открытию в вашем городе таксопарка
              </p>
              <a @click="openInstructionModal" class="location_btn"
                >Получить инструкцию</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- about section -->
  <section class="about">
    <div class="container">
      <div class="about_block">
        <div class="platform_top">
          <p class="platform_number">02</p>
          <p class="platform_desc">
            Сделаем брендированное приложение и настроим реферальную программу
          </p>
        </div>
        <div class="mobile_iphone d-lg-none text-center">
          <img src="../assets/images/mobile_iphone.png" alt="" />
        </div>
        <div class="about_advice">
          <div class="about_item1">
            <p class="about_border">
              Решили <span>развивать свой бренд</span> – сделаем брендированное
              приложение
            </p>
            <div class="about_girl">
              <img src="../assets/images/about_person.svg" alt="" />
            </div>
          </div>
          <div class="about_item2">
            <p class="about_border">
              Для брендированных приложений доступна
              <span>авторегистрация</span> сразу в ваш парк
            </p>
            <div class="about_girl">
              <img src="../assets/images/about_person.svg" alt="" />
            </div>
          </div>

          <div class="about_bottom">
            <div class="about_item3">
              <p class="about_border">
                Настройка
                <span>реферальной программы для водителей </span> поможет найти
                новых
              </p>
              <div class="about_girl">
                <img src="../assets/images/about_person.svg" alt="" />
              </div>
            </div>
            <div class="platform_location">
              <p class="location_txt">
                Получить инструкцию по открытию в вашем городе таксопарка
              </p>
              <a @click="openInstructionModal" class="location_btn"
                >Получить инструкцию</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- referal section -->
  <section class="referal">
    <div class="container">
      <div class="referal_top">
        <h3 class="referal_title">Реферальная программа для водителей</h3>
        <p class="referal_desc">
          Настройка реферальной программы поможет увеличить таксопарк. Ваш
          водитель приглашает своих знакомых водителей, они проходят регистрацию
          и получают бонус.
        </p>
      </div>
      <div class="referal_block">
        <!--  -->
        <div class="referal_item">
          <p class="referal_name">Ваш водитель</p>
          <div class="referal_img">
            <img src="../assets/images/referal_car.svg" alt="" />
          </div>
        </div>
        <div class="referal_arrow">
          <div class="arrow_text">Отправил реферальную ссылку</div>
          <div class="arrow_img">
            <img src="../assets/images/referal_arrow.svg" alt="" />
          </div>
        </div>
        <!--  -->
        <div class="referal_item">
          <p class="referal_name">Его знакомый</p>
          <div class="referal_img">
            <img src="../assets/images/referal_friends.svg" alt="" />
          </div>
        </div>
        <div class="referal_arrow">
          <div class="arrow_text">
            Прошел <br />
            регистрацию
          </div>
          <div class="arrow_img">
            <img src="../assets/images/referal_arrow.svg" alt="" />
          </div>
        </div>
        <!--  -->
        <div class="referal_item">
          <p class="referal_name">Новый водитель</p>
          <div class="referal_img">
            <img src="../assets/images/referal_double_car.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CRM section -->
  <section class="crm_section">
    <div class="container">
      <div class="crm_block" id="real_crm">
        <div class="crm_top">
          <div class="platform_top">
            <p class="platform_number">03</p>
            <p class="platform_desc">CRM система в рамках сервиса PayTaxi </p>
          </div>
          <p class="crm_desc">
            Поможет поддерживать высокий уровень эффективности при работе не
            только с новыми водителями, но и теми, кто давно работает в вашем
            парке.
          </p>
        </div>
        <!--  -->
        <div class="crm_rectangle crm_rectangle2"></div>
        <div class="crm_main_top">
          <!--  -->
          <div class="crm_item1">
            <p class="about_border">
              <span> Сокращение стоимости </span> &nbsp; привлечения водителей
            </p>
            <div class="about_girl">
              <img src="../assets/images/crm_bro.svg" alt="" />
            </div>
          </div>
          <div class="crm_item2">
            <p class="about_border">
              <span>Удобство контроля</span> &nbsp; базы входящих заявок
            </p>
            <div class="about_girl">
              <img src="../assets/images/crm_bro.svg" alt="" />
            </div>
          </div>
        </div>
        <!--  -->
        <div class="crm_bottom">
          <div class="crm_item3">
            <p class="about_border">
              <span>Повышение эффективности</span>&nbsp; работы с базой
            </p>
            <div class="about_girl">
              <img src="../assets/images/crm_bro.svg" alt="" />
            </div>
          </div>
          <!--  -->
          <div class="crm_item4">
            <p class="about_border">
              <span>Сокращение времени</span> &nbsp; на окупаемость водителей
            </p>
            <div class="about_girl">
              <img src="../assets/images/crm_bro.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="crm_user">
          <h4 class="crm_user_title">
            Автоматическое получение <br />
            ЛИДов из
          </h4>

          <div class="crm_bottom_list">
            <ul class="crm_list">
              <li>Диспетчерской Яндекса</li>
              <li>Приложения PayTaxi</li>
              <li>Вашего сайта</li>
              <li>Ваших почт</li>
              <li>С интегрированной сети WhatsApp</li>
              <li>С интегрированной телефонии</li>
            </ul>
            <div class="crm_user_img">
              <img src="../assets/images/crm_user.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Safety section -->
  <section class="crm_section safety_section">
    <div class="container">
      <div class="crm_block safety_block">
        <div class="crm_top">
          <div class="platform_top">
            <p class="platform_number">04</p>
            <p class="platform_desc">Антифрод защита</p>
          </div>
          <p class="crm_desc">
            Поможем сохранить ваш доход от нечестных водителей. <br />
            Непорядочные водители избегают наш сервис.
          </p>
        </div>
        <!--  -->
        <div class="crm_rectangle"></div>
        <div class="crm_main_top">
          <!--  -->
          <div class="crm_item1">
            <p class="about_border">
              <span>Автоматизируем</span>&nbsp; блокировки
            </p>
            <div class="about_girl">
              <img src="../assets/images/antifrod-face.svg" alt="" />
            </div>
          </div>
          <div class="crm_item2">
            <p class="about_border">
              <span>Отслеживаем</span> &nbsp; аномальное изменение баланса
            </p>
            <div class="about_girl">
              <img src="../assets/images/antifrod-face.svg" alt="" />
            </div>
          </div>
        </div>
        <!--  -->
        <div class="crm_item4">
          <p class="about_border">
            <span>Оперативно уведомляем</span> &nbsp; о подозрительном случае
          </p>
          <div class="about_girl">
            <img src="../assets/images/antifrod-face.svg" alt="" />
          </div>
        </div>
        <div class="safety_submit">
          <div class="safety_submit_title">
            Заполните форму для получения
            <p>коммерческого</p>
            <p>предложения</p>
          </div>
          <div class="safety_buttons">
            <a @click="openKPModal" class="take_btn">Получить КП</a>
            <div class="safety_img">
              <img src="../assets/images/safety_arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- secret section -->
  <section class="secret">
    <div class="container">
      <h3 class="secret_title">Безопасно и конфиденциально</h3>
      <div class="secret_swiper swiper secret_block d-sm-none">
        <div class="swiper-wrapper">
          <Swiper
            class="swiper-cards"
            :width="350"
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            :slides-per-view="1"
            :loop="true"
            :effect="'cards'"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
            }">
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="secret_item secret_item1 secret_left">
                  <div class="secret_img">
                    <img src="../assets/images/secret1.svg" alt="" />
                  </div>
                  <h4 class="secret_title">Защищенные сервера</h4>
                  <p class="secret_desc">
                    Вся база хранится на защищенных серверах в России по всем
                    требованиям законов РФ и Роскомнадзора
                  </p>
                </div>
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="secret_item secret_item2 secret_left">
                  <div class="secret_img">
                    <img src="../assets/images/secret2.svg" alt="" />
                  </div>
                  <h4 class="secret_title">Контроль действий</h4>
                  <p class="secret_desc">
                    Все действия наших сотрудников фиксируются и находятся под
                    постоянным контролем
                  </p>
                </div>
              </div></SwiperSlide
            >
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="secret_item secret_item3">
                  <div class="secret_img">
                    <img src="../assets/images/secret3.svg" alt="" />
                  </div>
                  <h4 class="secret_title">Двухфакторная авторизация</h4>
                  <p class="secret_desc">
                    При каждом входе, кроме пароля, нужно ввести код из sms или
                    почты (двухфакторная авторизация) Такой защитой пользуются
                    все корпорации, например, Google и Яндекс
                  </p>
                </div>
              </div></SwiperSlide
            >
          </Swiper>
        </div>
      </div>
      <div class="secret_block d-none d-sm-flex">
        <div class="secret_item secret_item1 secret_left">
          <div class="secret_img">
            <img src="../assets/images/secret1.svg" alt="" />
          </div>
          <h4 class="secret_title">Защищенные сервера</h4>
          <p class="secret_desc">
            Вся база хранится на защищенных серверах в России по всем
            требованиям законов РФ и Роскомнадзора
          </p>
        </div>
        <div class="secret_item secret_item2 secret_left">
          <div class="secret_img">
            <img src="../assets/images/secret2.svg" alt="" />
          </div>
          <h4 class="secret_title">Контроль действий</h4>
          <p class="secret_desc">
            Все действия наших сотрудников фиксируются и находятся под
            постоянным контролем
          </p>
        </div>
        <div class="secret_item secret_item3">
          <div class="secret_img">
            <img src="../assets/images/secret3.svg" alt="" />
          </div>
          <h4 class="secret_title">Двухфакторная авторизация</h4>
          <p class="secret_desc">
            При каждом входе, кроме пароля, нужно ввести код из sms или почты
            (двухфакторная авторизация) Такой защитой пользуются все корпорации,
            например, Google и Яндекс
          </p>
        </div>
      </div>
      <div class="secret_button">
        <a @click="openKPModal">Бесплатный доступ</a>
      </div>
    </div>
  </section>

  <!-- document section -->
  <section class="document">
    <div class="container">
      <p class="document_small">
        Как высчитать свой доход? Как отчитаться в налоговой?
      </p>
      <div class="document_title_block">
        <h4 class="document_title">Необходимые документы для налоговой</h4>
        <p class="doc_desc">
          В личном кабинете PayTaxi есть все необходимые для бухгалтерии отчеты
          за весь период работы.
        </p>
      </div>
      <div class="document_swiper swiper document_block d-sm-none">
        <div class="swiper-wrapper">
          <Swiper
            class="swiper-cards"
            :width="350"
            :modules="[SwiperAutoplay, SwiperEffectCards]"
            :slides-per-view="1"
            :loop="true"
            :effect="'cards'"
            :autoplay="{
              delay: 2000,
              disableOnInteraction: true,
            }">
            <SwiperSlide>
              <div class="swiper-slide">
                <!-- document -->
                <div class="document_item">
                  <p class="item_title">Отчет об комиссии с выплат</p>
                  <div class="item_img">
                    <img src="../assets/images/document1.svg" alt="" />
                  </div>
                </div></div
            ></SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <!-- document -->
                <div class="document_item">
                  <p class="item_title">Отчет агента</p>
                  <div class="item_img">
                    <img src="../assets/images/document1.svg" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <!-- document -->
                <div class="document_item">
                  <p class="item_title">Отчет о комиссии с заказов</p>
                  <div class="item_img">
                    <img src="../assets/images/document1.svg" alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="document_block d-none d-sm-flex">
        <!-- document -->
        <div class="document_item">
          <p class="item_title">Отчет об комиссии с выплат</p>
          <div class="item_img">
            <img src="../assets/images/document1.svg" alt="" />
          </div>
        </div>
        <!-- document -->
        <div class="document_item">
          <p class="item_title">Отчет агента</p>
          <div class="item_img">
            <img src="../assets/images/document1.svg" alt="" />
          </div>
        </div>
        <!-- document -->
        <div class="document_item">
          <p class="item_title">Отчет о комиссии с заказов</p>
          <div class="item_img">
            <img src="../assets/images/document1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- tarif -->
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
    :isModalOpen="isModalOpen"
    :title="modalTitle"
    :text="modalText"
    :isEmail="isEmail"
    @error="handleModalError"
    @submit="handleModalSubmit" />
</template>
<script setup>
const { $csrfFetch } = useNuxtApp();

const isModalOpen = ref(false);
const modalTitle = ref("");
const modalText = ref("");
const succes = ref(false);
const error = ref(false);
const name = ref("");
const phone = ref("");
const isEmail = ref(false);

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

const openKPModal = () => {
  isModalOpen.value = true;
  modalTitle.value = "Получить КП";
  modalText.value = "Заполните форму, и мы отправим вам КП в течение часа";
  isEmail.value = true;
};
const closeForm = () => {
  isModalOpen.value = false;
};

const openInstructionModal = () => {
  isModalOpen.value = true;
  modalTitle.value = "Получить инструкцию";
  modalText.value =
    "Заполните форму, и мы отправим вам инструкцию в течение часа";
  isEmail.value = false;
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
