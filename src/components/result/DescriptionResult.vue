<script setup>
import { useI18n } from "vue-i18n";
import { keyElement } from "@/features/questions/logic/resultLogic";
import ContainerBorder from "@/components/ContainerBorder.vue";

const { t } = useI18n();
</script>

<template>
  <h6>
    {{ t('result.description') }}
  </h6>
  <div>
    <ContainerBorder />
    <p v-html="t(`elements.${keyElement}.description`)"></p>
  </div>
</template>

<style scoped>
div {
  width: 25%;
  position: relative;
  text-align: center;
  padding: 15px;
  margin: auto;
  margin-bottom: 10px;
  border: 1px solid rgba(255, 255, 255, 0.541);

  background: #000000e3;
}

h6 {
  margin-bottom: 10px;
}

p {
  text-justify: inter-word;
}

@media (max-width: 1400px) {
  div {
    width: 35%;
  }
}

@media (max-width: 992px) {
  div {
    width: 45%;
  }
}

@media (max-width: 480px) {
  div {
    width: 65%;
  }
}
</style>
