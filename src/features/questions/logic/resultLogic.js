import { ref } from 'vue';
import router from '@/router/index.js';

export const Name = ref('');
export const Element = ref('');
export const Spectrum = ref([0, 0, 0, 0]);
export const keyElement = ref('');

const raw = localStorage.getItem('quizResult');
if (!raw) {
  router.push('/');
} else {
  const quiz = JSON.parse(raw);
  const { name, result, espectro } = quiz;
  Name.value = name;
  keyElement.value = result;
  Spectrum.value = espectro;
}

