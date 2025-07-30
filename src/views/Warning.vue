<!-- 
    O correto é deixar essa "View" em components/
    Por agora irei deixar assim, mas depois irei alterar e passará a ser importado
    Pelo componente Home e vai ser utilizado um prop e emit  
-->

<script setup>
import { useI18n } from "vue-i18n";
import { useBackground } from "@/composables/useBackground.js";
import bgWarning from "@/assets/images/backgrounds/bg-warning-diabo.jpg";

const { t } = useI18n();
useBackground(bgWarning);
</script>

<template>
  <router-link class="back-btn" to="/">
    {{ t('warning.back') }}
  </router-link>
  <div class="flex-wrapper">
    <div class="container">
      
      <p v-html="t('warning.desc_1')"></p>
      <p v-html="t('warning.desc_2')"></p>
      <p v-html="t('warning.desc_3')"></p>
      <p>
        {{ t('warning.desc_4') }}
        <a class="rt-a" href='https://x.com/Elementos04'>@Elementos04</a>
      </p>

      <div class="proceed-footer">
        <div class="proceed-check">
          <label class="control control--checkbox">

            <p v-html="t('warning.checkbox')"></p>
            <input type="checkbox" id="checkbox_confirm" />
            <div class="control__indicator"></div>
          </label>
          <router-link to="/teste" class="proceed-btn rt-a">
            {{ t('warning.proceed') }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="@/views/styles/Warning.css" scoped />
