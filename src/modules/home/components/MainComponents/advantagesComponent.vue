<script lang="ts" setup>
const cards = [
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: 'mdi-chart-bar',
    color: '#F0C274',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: 'mdi-spa',
    color: '#E89271',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: 'mdi-bag-personal',
    color: '#70A1E5',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: 'mdi-file',
    color: '#D398E7',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: 'mdi-chart-bar',
    color: '#F0C274',
  },
  {
    title: 'نص مؤقت',
    subtitle:
      'نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة. نظام POS متعدد الاستخدامات .... ',
    icon: 'mdi-bag-personal-outline',
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
      style="flex-direction: column;"
    >
      <!-- Start Heading -->

      <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />
      <!-- End Heading -->

      <!-- Start:: Cards -->
      <VRow class="cards">
        <VCol cols="12" md="4" sm="6" v-for="card in cards">
          <div class="card" style="flex-direction: column;">
            <VIcon
              :icon="card.icon"
              class="iconCircle"
              :style="iconStyle(card.color)"
            />

            <h6>{{ card.title }}</h6>
            <p>{{ card.subtitle }}</p>
          </div>
        </VCol>
      </VRow>

      <!-- End:: Cards -->
    </div>
  </div>
</template>

<style lang="scss">
.cards {
  color: #000;

  // gap: 5px;

  .card {
    padding: 15px;
    border: 1px solid #70a1e5;
    border-radius: 16px;
    background: transparent;
    block-size: 278px;
    gap: 2px;
    margin-block: 5px;
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
      padding: 9px;
      border-radius: 50%;
      block-size: 44px;
      color: #fff;
      inline-size: 44px;
    }

    h6 {
      color: #000;
      font-size: 20px;
      font-weight: 600;
      line-height: 37.48px;
    }

    p {
      color: #000;
      font-size: 16px;
      font-weight: 300;
      line-height: 29.98px;
    }
  }
}

.card:hover p,
.card:hover h6 {
  color: #fff;
}

</style>
