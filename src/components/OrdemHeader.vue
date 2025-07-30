<script setup>
import { useI18n } from "vue-i18n";

import ChangeLanguage from "./ChangeLanguage.vue";
import ChangeQuestion from "./ChangeQuestion.vue";

const { t } = useI18n();
</script>

<template>
  <header>
    <router-link to="/" class="logo">
      {{ t("header.logo") }}
    </router-link>

    <nav>
      <ul>
        <li class="dropdown version-dropdown">
          <a href="#" class="dropbtn">
            {{ t("header.version") }}
          </a>
          <ul class="dropdown">
            <ChangeQuestion />
          </ul>
        </li>

        <li class="dropdown">
          <a href="#">
            {{ t("header.languages") }}
          </a>
          <ul class="dropdown_content">
            <ChangeLanguage />
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style src="@/components/styles/OrdemHeader.css" scoped />

<style scoped>
header {
  height: 100px;
  display: flex;
  background: rgba(0, 0, 0, 0.349);
  align-items: center;
  padding: 0 8%;
  border-bottom: 2px solid gray;
  z-index: 2;
}

.logo {
  font-size: 35px;
  width: 250px;
  text-decoration: none;
  cursor: pointer;
}

nav {
  flex: 1;
  text-align: right;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
  margin-left: 60px;
  position: relative;
}

nav ul li a {
  font-size: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
}

nav ul li a:hover {
  color: rgba(78, 194, 6);
}

@media (max-width: 1024px) {
  header {
    height: 80px;
    padding: 0 5%;
  }

  .logo {
    font-size: 28px;
    width: auto;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 24px;
    width: auto;
    margin-bottom: 0;
    color: #fff;
  }
}
</style>
