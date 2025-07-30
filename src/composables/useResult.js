import { onMounted, watch, nextTick } from 'vue'
import { Name, Spectrum, keyElement } from "@/features/questions/logic/resultLogic";
import { setBackgroundElement, setBannerElement } from "@/composables/useResultBanners";

export function initResultado() {
  onMounted(() => {
    const raw = localStorage.getItem('quizResult')
    if (!raw) return

    const quiz = JSON.parse(raw)
    const { name, result, espectro } = quiz

    Name.value = name
    keyElement.value = result
    Spectrum.value = espectro


  })
  
  setBackgroundElement()
  setBannerElement()
  
  watch(keyElement, () => nextTick())
}
