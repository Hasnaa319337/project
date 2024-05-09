<script lang="ts" setup>
import advantageIcon1 from '@/assets/images/advantage-icon1.svg'
import advantageIcon2 from '@/assets/images/advantage-icon2.svg'
import advantageIcon3 from '@/assets/images/advantage-icon3.svg'
import advantageIcon4 from '@/assets/images/advantage-icon4.svg'

const cards = [
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: advantageIcon1,
    color: '#F0C274',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: advantageIcon2,
    color: '#E89271',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: advantageIcon3,
    color: '#70A1E5',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: advantageIcon4,
    color: '#D398E7',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: advantageIcon1,
    color: '#F0C274',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: advantageIcon2,
    color: '#E89271',
  },
]

const subtitle = 'المميزات'
const mainPargraph =
  '      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.'

const iconStyle = (color) => {
  return {
    backgroundColor: `${color} !important`,
  }
}
</script>

<template>
  <div class="advantages">
    <div
      class="d-flex justify-center align-center"
      style="flex-direction: column"
    >
      <!-- Start Heading -->

      <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />
      <!-- End Heading -->
    </div>

    <!-- Start:: Cards -->
    <VContainer>
      <VRow class="cards">
        <VCol
          cols="12"
          md="4"
          sm="6"
          v-for="card in cards"
          style="padding-top: 0; padding-inline-end: 0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div class="card" style="flex-direction: column">
            <div :style="iconStyle(card.color)" class="iconCircle">
              <img :src="card.icon" />
            </div>

            <h6>{{ card.title }}</h6>
            <p>{{ card.subtitle }}</p>
          </div>
        </VCol>
      </VRow>
    </VContainer>

    <!-- End:: Cards -->
  </div>
</template>

<style lang="scss">
.advantages {
  margin-block-start: 74px;

  .cards {
    color: #000;

    // gap: 5px;

    .card {
      padding: 23px;
      border: 1px solid #70a1e5;
      border-radius: 16px;

      // animation: fade-in ease-in-out;
      animation-range-end: 200px;
      animation-range-start: cover;
      animation-timeline: view();
      background: transparent;

      // block-size: 278px;
      gap: 2px;
      margin-block-start: 5px;
      margin-inline-start: 5px;
      transition: all 0.5s ease-in-out;

      &:hover {
        border: none;
        background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);
        box-shadow: #70a1e5 0 0 5px 2px;
        color: #fff;
        transform: scale(1.06);
        transition: 0.5s all ease-in-out;
      }

      .iconCircle {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        block-size: 64px;
        color: #fff;
        inline-size: 64px;
        margin-block-end: 27px;

        img {
          block-size: 32px;
          inline-size: 32px;
        }
      }

      h6 {
        color: #000;
        font-family: Cairo-SemiBold;
        font-size: 20px;
        font-weight: 600;
        line-height: 37.48px;
        margin-block-end: 7px;
      }

      p {
        color: #000;
        font-family: Cairo-Light;
        font-size: 16px;
        font-weight: 300;
        line-height: 29.98px;
        text-align: justify;
      }
    }
  }

  .card:hover p,
  .card:hover h6 {
    color: #fff;
  }
}

@media (max-width: 600px) {
  .advantages {
    .card {
      margin-inline: 10px !important;

      &:hover {
        transform: scale(1.03) !important;
        transition: 0.5s all ease-in-out;
      }

      .iconCircle {
        margin-block-end: 23px !important;
      }

      h6 {
        font-size: 18px !important;
        margin-block-end: 5px;
      }

      p {
        font-size: 14px !important;
      }
    }
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
