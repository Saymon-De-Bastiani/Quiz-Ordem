<script setup>
import { useI18n } from "vue-i18n";

import { useBackground } from "@/composables/useBackground.js";
import bgHome from "@/assets/images/backgrounds/bg-home.webp";

const { t } = useI18n();
useBackground(bgHome);
</script>

<template>
  <div class="box-content">
    <p v-html="t('home.title')"></p>

    <router-link to="/aviso">
      <button class="start-btn">
        {{ t('home.start') }}
      </button>
    </router-link>
  </div>

  <div class="footer">
    <p>
      {{ t('home.footer') }}
    </p>
  </div>
</template>

<style src="@/views/styles/Home.css" scoped />
