<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { sendResults } from "@/features/questions/logic/quizLogic";

const { t } = useI18n();
const username = ref("");
</script>

<template>
  <div>
    <h2>
      {{ t('end_test.title') }}
    </h2>
    <p>
      {{ t('end_test.info') }}
    </p>

    <input
      type="text"
      id="uname"
      v-model="username"
      class="inputName"
      :placeholder="t('end_test.placeholder')"
      maxlength="45"
    />
    <br />
    <button class="sendButton" @click="sendResults">
      {{ t('end_test.send_answer') }}
    </button>
  </div>
</template>

<style scoped>
div {
  width: 30%;
  padding: 20px;
  border: 2px solid gray;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.inputName {
  width: 90%;
  background-color: black;
  border: 2px solid white;
  font-size: 18px;
  text-align: center;
  padding: 10px 28px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.sendButton {
  background-color: black;
  border: 1px solid rgba(255, 255, 255, 0.541);
  width: 90%;
  padding: 10px 28px;
  font-size: 20px;
  margin: 6px;
}

.sendButton:hover {
  background-color: rgba(78, 194, 6, 0.7);
  color: black;
}

.sendButton:active {
  background-color: rgba(78, 194, 6, 0.7);
  color: black;
}

@media (max-width: 992px) {
  div {
    width: 50%;
    top: 45%;
  }

  .sendButton {
    width: 90%;
    font-size: 16px;
    margin: 7px;
  }

  .sendButton:active {
    background-color: white;
    color: black;
  }
}

@media (max-width: 690px) {
  div {
    width: 90%;
    padding: 15px;
  }

  .inputName {
    width: 70%;
    font-size: 16px;
  }

  .sendButton {
    width: 90%;
    font-size: 16px;
    margin: 7px;
  }
}
</style>
