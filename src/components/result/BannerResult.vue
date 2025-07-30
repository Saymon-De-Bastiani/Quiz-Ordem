<script setup>
import { useI18n } from "vue-i18n";
import { Name, keyElement } from "@/features/questions/logic/resultLogic";
import { imageElement } from "@/composables/useResultBanners";

const { t } = useI18n();
</script>

<template>
  <div>
    <p>
      {{ t('result.greeting', { name: Name }) }}
    </p>

    <p v-html="t(`elements.${keyElement}.affinity`)"></p>
    <a href="https://ordemparanormal.fandom.com/wiki/Elementos_do_Outro_Lado">
      <img :src="imageElement" />
    </a>
    <p v-html="t(`elements.${keyElement}.phrase`)"></p>
  </div>
</template>

<style scoped>
div {
  width: 25%;
  height: auto;
  margin: auto;
}

img {
  max-width: 100%;
  width: 400px;
  height: auto;
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
