<script setup>
import { useI18n } from "vue-i18n";
import { Spectrum } from "@/features/questions/logic/resultLogic";
import ContainerBorder from "@/components/ContainerBorder.vue";

const { t } = useI18n();
</script>

<template>
  <div>
    <h6>
      {{ t('result.spectrum') }}
    </h6>
    <div class="spectrum">
      <ContainerBorder />

      <div class="row">
        <h6>
          {{ t('result.death_per') }}
        </h6>
        <p>{{ Spectrum[1] }}%</p>
      </div>

      <div class="row">
        <h6>{{ t('result.blood_per') }}</h6>
        <p>{{ Spectrum[0] }}%</p>
      </div>

      <div class="row">
        <h6>{{ t('result.knowledge_per') }}</h6>
        <p>{{ Spectrum[2] }}%</p>
      </div>

      <div class="row">
        <h6>{{ t('result.energy_per') }}</h6>
        <p>{{ Spectrum[3] }}%</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spectrum {
  width: 25%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.541);
  padding: 15px;
  margin: auto;
  text-align: center;
  background: #000000e3;
}

.row {
  display: inline-block;
  padding-inline: 8px;
}

h6 {
  margin-bottom: 10px;
}

p {
  text-align: center;
}

@media (max-width: 1400px) {
  .spectrum {
    width: 35%;
  }
}

@media (max-width: 992px) {
  .spectrum {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .spectrum {
    width: 65%;
  }
}
</style>