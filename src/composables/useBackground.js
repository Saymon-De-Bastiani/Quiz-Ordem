import { onMounted, onUnmounted, ref } from "vue";

export const background = ref('')

export function useBackground(newBackground, defaultBackground) {
    onMounted(() => {
        background.value = `url(${newBackground})`;
    });

    onUnmounted(() => {
        background.value = `url(${defaultBackground})`;
    });
}