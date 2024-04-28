<script lang="ts" setup>
import PackageCard from '../packages/PackageCard.vue'
const subtitle = 'الباقات'
const mainPargraph =
  '      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.'

const tab = ref('monthly')
const items = ref([
  { title: 'شهري', value: 'monthly' },
  { title: 'سنوي', value: 'yearly' },
])
const packages = ref([
  {
    title: 'بلاس',
    price: '2500',
    tax: '+354',
    recommanded: false,
    advantages: [
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
    ],
  },
  {
    title: 'بريميوم',
    price: '2500',
    tax: '+354',
    recommanded: true,
    advantages: [
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
    ],
  },
  {
    title: 'بلاس',
    price: '2500',
    tax: '+354',
    recommanded: false,
    advantages: [
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
      'نظام POS متعدد الاستخدامات الخاص',
    ],
  },
])
</script>

<template>
  <div
    class="d-flex justify-center align-center packages"
    style="flex-direction: column"
  >
    <!-- Start Heading -->

    <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />

    <!-- End Heading -->

    <!-- Start:: Packages -->
    <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
      <v-tab v-for="(item, index) in items" :key="item.value" :value="index">
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-card>
      <v-window v-model="tab" class="window">
        <v-window-item class="row d-flex">
          <VCol
            v-for="pack in packages"
            flat
            class="package-card"
            cols="12"
            lg="6"
            md="6"
            sm="12"
          >
            <PackageCard :package="pack" />
          </VCol>
        </v-window-item>
      </v-window>

      <!-- End:: Packages -->
    </v-card>
  </div>
</template>

<style lang="scss">
.packages .v-slide-group__content {
  padding: 6px;
  border: 1px solid #70a1e5;
  border-radius: 27.5px !important;
  block-size: 53px !important;
  gap: 2px;
}

.packages .v-tab.v-tab {
  background: transparent !important;
  block-size: 39px !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 700 !important;

  // padding-block: 11px !important;
  // padding-inline: 42px !important;
  text-align: center !important;

  &:hover {
    border-radius: 27.5px !important;
  }
}

.packages .v-tab.v-tab--selected {
  border-radius: 27.5px !important;
  background: linear-gradient(90deg, #157d99 0%, #70a1e5 100%) !important;
  color: #fff !important;
  font-size: 14px;
  font-weight: 700;
  line-height: 26.24px !important;
}

.packages .v-tabs--density-default {
  block-size: auto !important;
}

.packages .v-tab__slider {
  display: none !important;
}

.properties .tabs .window {
  .v-row:nth-child(2) {
    flex-direction: row-reverse;
  }

  h6 {
    color: #1c1c1c;
    font-size: 32px;
    font-weight: 500;
    line-height: 59.97px;
  }

  p {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.01em;
    line-height: 29.98px;
  }

  span {
    color: #000;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.01em;
    line-height: 29.98px;
    text-align: center;
  }

  img {
    inline-size: 80%;
  }
}

.v-card--variant-elevated {
  box-shadow: none !important;
}

.package-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.package-card {
  flex: 1;
  margin: 16px;
}

.package-card:nth-of-type(2) {
  margin-block-start: 0;
}
</style>
