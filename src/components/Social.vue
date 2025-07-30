<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <footer>
    <a href="https://twitter.com/Elementos04">
      <img src="/src/assets/images/socials/social-twitter.png" alt="Twitter" />
    </a>
    <a href="https://github.com/04Elementos/4elementos">
      <img src="/src/assets/images/socials/social-github.png" alt="GitHub" />
    </a>
    <p>
      {{ t("result.footer") }}
    </p>
  </footer>
</template>

<style scoped>
footer {
  width: 25%;
  margin: auto;
}

img {
  margin: 5px;
  margin-bottom: 0px;
  width: 60px;
  height: auto;
}

img:hover {
  transition-duration: 200ms;
  transform: translateY(-0.2rem);
}

p {
  margin-top: 10px;
}

@media (max-width: 1400px) {
  footer {
    width: 35%;
  }
}

@media (max-width: 992px) {
  footer {
    width: 45%;
  }
}

@media (max-width: 480px) {
  footer {
    width: 65%;
  }
}
</style>