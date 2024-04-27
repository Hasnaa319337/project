<script setup lang="ts">
import { useGenerateImageVariant } from '@/@core/composable/useGenerateImageVariant'

import miscComingSoonObj from '@images/pages/misc-coming-soon-object.png'
import miscComingSoon from '@images/pages/misc-coming-soon.png'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'
import HiloxaForm from '@core/components/forms/HiloxaForm.vue'

const miscThemeMask = useGenerateImageVariant(miscMaskLight, miscMaskDark)

const email = ref('')
const props = defineProps({
  errorMessage: {
    type: String,
  },
})
</script>

<template>
  <div class="misc-wrapper">
    <div>
      <!-- 👉 Title and subtitle -->
      <div class="text-center mb-10" v-if="props.errorMessage">
        <h5 class="text-h5 mb-3">{{ props.errorMessage }}</h5>
      </div>
      <div class="text-center mb-10" v-else>
        <h5 class="text-h5 mb-3">{{ $t('lanuching_soon') }}🚀</h5>
        <p class="text-sm">
          {{ $t('opening_soon') }}
        </p>
      </div>

      <!-- 👉 Email input -->

      <VForm
        class="align-center justify-center flex-wrap gap-4"
        @submit.prevent="() => {}"
      >
        <HiloxaForm />
      </VForm>
    </div>

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 mt-10">
      <VImg
        :src="miscComingSoon"
        alt="Coming Soon"
        class="d-none d-md-block footer-coming-soon-obj"
        :max-width="150"
        :height="$vuetify.display.xs ? 400 : 450"
      />
      <VImg
        :src="miscThemeMask"
        class="d-none d-md-block footer-coming-soon"
        cover
      />

      <VImg
        :src="miscComingSoonObj"
        class="d-none d-md-block footer-coming-soon-obj"
        :max-width="20"
        height="158"
      />
    </div>
  </div>
</template>

<style lang="scss">
@use '@core/scss/template/pages/misc.scss';

@media (max-width: 1200px) {
  .footer-coming-soon-obj {
    inset-block-end: 5%;
  }
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
