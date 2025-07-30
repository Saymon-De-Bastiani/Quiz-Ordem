<script setup>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { changeQuestionSet, questionSet } from "@/features/questions/useQuestions.js";

const route = useRoute();
const { t } = useI18n();
</script>

<template>
    <div class="dropdown_content">
        <a href="#" @click.prevent="
            route.name !== 'teste' && changeQuestionSet('default')
            " :class="[
                { active: questionSet === 'default' },
                { disabled: route.name === 'teste' },
            ]">
            {{ t('header.new_questions') }}
        </a>
        <a href="#" @click.prevent="
            route.name !== 'teste' && changeQuestionSet('old')
            " :class="[
                { active: questionSet === 'old' },
                { disabled: route.name === 'teste' },
            ]">
            {{ t('header.old_questions') }}
        </a>
    </div>
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

.version-dropdown .dropdown_content {
  min-width: 120px; 
}

.version-dropdown .dropdown_content a {
  justify-content: start;
  text-align: left;      
}

.dropdown_content a.active {
  background-color: rgba(78, 194, 6, 0.7);
  color: black;
}

.dropdown_content a.disabled {
  pointer-events: none;
  opacity: 0.4;
}
</style>