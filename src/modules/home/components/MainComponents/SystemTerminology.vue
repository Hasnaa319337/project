<script lang="ts" setup>
import TerminologyCard from '@/modules/home/components/terminology/TerminologyCard.vue'
let activeData = ref(null)
const subtitle = 'مصطلحات النظام'
const mainPargraph =
  '      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.'

const handleActiveItemUpdated = (data) => {
  // Handle the emitted data here
  activeData.value = data

  console.log(activeData.value)

  console.log('Active item data:', data)
}
</script>

<template>
  <div class="terminology">
    <div
      class="d-flex justify-center align-center mb-4"
      style="flex-direction: column"
    >
      <!-- Start Heading -->

      <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />
      <!-- End Heading -->
    </div>

    <!-- Start:: Active Card -->
    <VContainer>
      <div class="active-card mb-3" v-if="activeData">
        <VRow>
          <VCol cols="12" md="6" sm="12" class="pl-0 pr-0">
            <div class="image pr-4 pt-4">
              <img :src="activeData.image" />
            </div>
          </VCol>
          <VCol cols="12" md="6" sm="12">
            <div class="text">
              <h3>
                {{ activeData.title }}
              </h3>
              <p>
                {{ activeData.text }}
              </p>
            </div>
          </VCol>
        </VRow>
      </div>
    </VContainer>
    <!-- End:: Active Card -->

    <!-- Start:: Terminology -->
    <TerminologyCard @active-item-updated="handleActiveItemUpdated" />

    <!-- End:: Terminology -->
  </div>
</template>

<style lang="scss" scoped>
.terminology {
  .active-card {
    .image {
      border-radius: 24px;
      background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);

      // block-size: 310px;
      inline-size: 70%;

      img {
        display: block;
        block-size: 100%;
        border-end-end-radius: 24px;
        inline-size: 100%;
        margin-block-end: -7px;
        margin-inline-end: 0;
      }
    }

    .text {
      h3 {
        color: #1c1c1c;
        font-size: 32px;
        font-weight: 600;
        line-height: 59.97px;
      }

      p {
        color: #1c1c1c;
        font-size: 16px;
        font-weight: 400;
        inline-size: 80%;
        line-height: 29.98px;
        text-align: justify;
      }
    }
  }
}
</style>
