<script setup>
import OrdemHeader from './components/OrdemHeader.vue';
import { background } from './composables/useBackground.js';
</script>

<template>
    <div id="app" :style="{ backgroundImage: background }">
        <OrdemHeader />
        <router-view />
    </div>
</template>
