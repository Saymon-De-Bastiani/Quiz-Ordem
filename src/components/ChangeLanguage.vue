<script setup>
import { useI18n } from 'vue-i18n';
import { watch } from 'vue';

const { locale } = useI18n()
const { t } = useI18n();

watch(locale, (newLocale) => {
    localStorage.setItem('language', newLocale)
})
</script>
<template>
    <a href="#" @click.prevent="locale = 'pt'">
        <span class="flag-icon flag-icon-br"></span>
        {{ t('header.lang_pt') }}
    </a>
    <a href="#" @click.prevent="locale = 'en'">
        <span class="flag-icon flag-icon-us"></span>
        {{ t('header.lang_en') }}
    </a>
    <a href="#" @click.prevent="locale = 'es'">
        <span class="flag-icon flag-icon-es"></span>
       {{ t('header.lang_es') }}
    </a>
    <a href="#" @click.prevent="locale = 'fr'">
        <span class="flag-icon flag-icon-fr"></span>
        {{ t('header.lang_fr') }}
    </a>

</template>

<style scoped>
a {
    padding: 10px 15px;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 20px;
}

a:hover {
    background-color: rgba(78, 194, 6, 0.7);
    color: black;
}

.dropdown:hover div {
    display: block;
}

.flag-icon {
    margin-right: 10px;
    font-size: 15px;
}
</style>