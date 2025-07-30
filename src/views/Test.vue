<script setup>
import { useBackground } from "@/composables/useBackground.js";
import { quizFinished } from "@/features/questions/logic/quizLogic.js";

import QuestionTest from "@/components/test/QuestionTest.vue";
import ButtonsTest from "@/components/test/ButtonsTest.vue";
import EndTest from "@/components/test/EndTest.vue";
import bgTest from "@/assets/images/backgrounds/bg-test.jpg";

useBackground(bgTest);
</script>

<template>
  <div class="quiz-container" v-if="!quizFinished">

    <QuestionTest />
    <ButtonsTest />
  </div>

  <EndTest v-else />
</template>

<style scoped>
.quiz-container {
  width: 50%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.question {
  font-size: 30px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.541);
  background: rgba(0, 0, 0, 0.549);
  padding: 1rem;
  margin: 35px;
}

@media only screen and (max-width: 992px) {
  .quiz-container {
    width: 90%;
    margin: auto;
    padding: 15px;
  }
  .question {
    width: 90%;
    margin: auto;
    margin-bottom: 35px;
  }
}
</style>
