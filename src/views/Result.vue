<script setup>
import { initResultado } from "@/composables/useResult";

import BannerResult from "@/components/result/BannerResult.vue";
import SpectrumResult from "@/components/result/SpectrumResult.vue";
import DescriptionResult from "@/components/result/DescriptionResult.vue";
import Social from "@/components/Social.vue";

initResultado();
</script>

<template>
  <div class="container">
    <BannerResult />
    <br />
    <SpectrumResult />
    <br />
    <DescriptionResult />
    <Social />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: auto;
  margin: auto;
  margin-top: 10px;
  text-align: center;
}

/* @media (max-width: 1400px) {
  .container{
    width: 65%;
  }
}

@media (max-width: 1200px) {
  .container{
    width: 70%;
  }
}

@media (max-width: 992px) {
  .container{
    width: 100%;
  }
}

@media (max-width: 480px) {

} */
</style>
