<script setup>

import { currentQuestion } from '@/features/questions/logic/quizLogic.js'
import ContainerBorder from '@/components/ContainerBorder.vue'
</script>

<template>
  <div class="question">
    <ContainerBorder />
    {{ currentQuestion }}
  </div>
</template>

<style scoped>
.question {
  font-size: 30px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.541);
  background: rgba(0, 0, 0, 0.549);
  padding: 1rem;
  margin: 35px;
}
@media only screen and (max-width: 992px) {
  .question {
    width: 90%;
    margin: auto;
    margin-bottom: 35px;
  }
}
</style>
