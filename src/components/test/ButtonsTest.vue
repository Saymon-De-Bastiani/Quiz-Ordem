<script setup>
import { useI18n } from "vue-i18n";
import { next, prev } from "@/features/questions/logic/quizLogic";

const { t } = useI18n();
</script>

<template>
  <button @click="next(2)">
    {{ t('test.agree_st') }}
  </button>
  <br />
  <button @click="next(1)">
    {{ t('test.agree') }}
  </button>
  <br />
  <button @click="next(0)">
    {{ t('test.neutral') }}
  </button>
  <br />
  <button @click="next(-1)">
    {{ t('test.disagree') }}
  </button>
  <br />
  <button @click="next(-2)">
    {{ t('test.disagree_st') }}
  </button>
  <br />

  <button class="previous"  @click="prev">
    {{ t('test.back') }}
  </button>
</template>

<style scoped>
button {
  background: #000000af;
  border: 1px solid rgba(255, 255, 255, 0.541);
  width: 400px;
  padding: 10px 28px;
  text-align: center;
  display: inline-block;
  font-size: 23px;
  margin: 6px;
  cursor: pointer;
}

button:hover {
  background-color: rgba(78, 194, 6, 0.7);
  color: black;
}

button:active {
  background-color: white;
  color: black;
}

.previous {
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .previous {
    margin-top: 20px;
  }

  button {
    width: 90%;
    padding: 10px 28px;
    font-size: 16px;
    margin: 7px;
  }
}
</style>
