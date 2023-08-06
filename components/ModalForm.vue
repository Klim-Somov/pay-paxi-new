<template>
  <div class="moedal-overlay">
    <div class="modal-form">
      <div class="modal-content">
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
        <input
          v-maska
          :data-maska="maska(input.placeholder)"
          v-for="(input, index) in inputs"
          :key="index"
          v-model="input.value"
          :placeholder="input.placeholder" />
        <a @click="submit">Отправить заявку</a>
        <span
          >Нажимая на кнопку, вы соглашаетесь с «политикой
          конфиденциальности»</span
        >
      </div>
    </div>
    <!-- <Success/> -->

  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";


const { title, inputs, text } = defineProps(["title", "inputs", "text"]);
const emit = defineEmits(["submit"]);
const maska = (v) => {
  if (v === "Телефон") return "+7##########";
};
const submit = () => {
 
  emit(
    "submit",
    inputs.map((input) => input.value)
  );
};
</script>

<style lang="scss">


.modal-form {
  margin: 0 20px;
  max-width: 800px;
  border-radius: 50px;
  background: #fdfdfd;
  flex-grow: 1;
  border: none;
  width: 100%;
}

.modal-content {
  padding: 0 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
    color: #222328;
    text-align: center;
    font-size: 50px;
    font-weight: 400;
  }
  p {
    color: #222328;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 30px;
  }
  a {
    padding: 30px 0;
    flex-grow: 1;
    width: 100%;
    color: #f6f6f9 !important;
    font-size: 20px;
    max-width: 561px;
    font-weight: 500;
    line-height: normal;
    border-radius: 60px;
    background: #1c37b0;
    margin-bottom: 10px;
  }
  span {
    max-width: 450px;
    color: #a0a9b1;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 22px;
  }
  input {
    flex-grow: 1;
    width: 100%;
    padding: 23px 0px 23px 30px;
    margin-bottom: 10px;
    border-radius: 60px;
    border: 1px solid #e2e2e2;
    background: rgba(255, 255, 255, 0.3);
    max-width: 561px;
  }
}
</style>
