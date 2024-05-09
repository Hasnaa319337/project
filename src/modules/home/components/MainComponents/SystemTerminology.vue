<script lang="ts" setup>
import TerminologysCarousel from '../terminology/TerminologysCarousel.vue'
let activeData = ref(null)
const subtitle = 'مصطلحات النظام'
const mainPargraph =
  '      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.'

const handleActiveItemUpdated = (data) => {
  // Handle the emitted data here
  activeData.value = data
}

import term1 from '@/assets/images/term1.svg'

const Terminologys = ref([
  {
    image: term1,
    title: '1 نص مؤقت',

    text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات ',
  },
  {
    image: term1,
    title: '2 نص مؤقت',

    text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات ',
  },
  {
    image: term1,
    title: '3 نص مؤقت',

    text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات ',
  },
  {
    image: term1,
    title: '4 نص مؤقت',

    text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات ',
  },
  {
    image: term1,
    title: '5 نص مؤقت',

    text: 'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات ',
  },
])
</script>

<template>
  <div class="terminology">
    <img class="hero-circel1" src="@/assets/images/hero-circle1.svg" alt="" />
    <div
      class="d-flex justify-center align-center mb-4"
      style="flex-direction: column"
    >
      <!-- Start Heading -->

      <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />
      <!-- End Heading -->
    </div>

    <!-- Start:: Terminology -->

    <!-- <TerminologyCard  /> -->
    <VContainer>
      <TerminologysCarousel
        :Terminologys="Terminologys"
        @active-item-updated="handleActiveItemUpdated"
      />
    </VContainer>

    <!-- End:: Terminology -->

    <!-- Start:: Active Card -->
    <VContainer class="pl-6 pr-6">
      <div class="active-card mb-5" v-if="activeData">
        <VRow>
          <VCol cols="12" md="5" sm="12" class="pl-0 pr-0 activeImage">
            <div class="image pr-4 pt-4">
              <img :src="activeData.image" />
            </div>
          </VCol>
          <VCol cols="12" md="7" sm="12" class="showText">
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

    <img class="hero-circel2" src="@/assets/images/hero-circle2.svg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.terminology {
  position: relative;
  background-image: url('@/assets/images/terminology-background.svg') !important;
  background-repeat: no-repeat;
  background-size: 50%;
  block-size: 100%;
  inline-size: 100%;

  .hero-circel1 {
    position: absolute;
    inset-block-start: 40%;
  }

  .hero-circel2 {
    position: absolute;
    inset-block-end: 36%;
    inset-inline-end: 0;
  }

  .heading {
    inline-size: 41%;
    margin-block-end: 0;

    .mainPargraph {
      margin-block-end: 11px;
    }
  }

  .active-card {
    .image {
      border-radius: 24px;
      background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);
      block-size: 427.47px;
      inline-size: 564px;

      img {
        display: block;
        block-size: 100%;
        border-end-end-radius: 24px;
        inline-size: 100%;
        margin-block-end: -7px;
        margin-inline-end: 0;
      }
    }

    .showText {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .text {
      margin-inline-start: 49px;

      h3 {
        color: #1c1c1c;
        font-family: Cairo-SemiBold;
        font-size: 32px;
        font-weight: 600;
        line-height: 59.97px;
        margin-block-end: 10px;
      }

      p {
        color: #1c1c1c;
        font-family: Cairo-Regular;
        font-size: 16px;
        font-weight: 400;
        inline-size: 80%;
        line-height: 29.98px;
        text-align: justify;
      }
    }
  }
}

@media (max-width: 1000px) {
  .terminology {
    .hero-circel1,
    .hero-circel2 {
      display: none;
    }
  }

  .active-card {
    .image {
      border-radius: 24px;
      background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);
      block-size: auto !important;
      inline-size: auto !important;
    }
  }
}

.activeImage {
  animation: slideAnimation1 ease-in-out;
  animation-range-end: 500px;
  animation-range-start: cover;
  animation-timeline: view();
}

.showText {
  animation: slideAnimation2 ease-in-out;
  animation-range-end: 500px;
  animation-range-start: cover;
  animation-timeline: view();
}

@keyframes slideAnimation1 {
  0% {
    transform: translateX(400px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes slideAnimation2 {
  0% {
    transform: translateX(-400px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
