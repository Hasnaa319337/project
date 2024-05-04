<script lang="ts" setup>
const tab = ref(null)
import tab1 from '@/assets/images/tab1.svg'
import tab2 from '@/assets/images/tab2.svg'
import tab3 from '@/assets/images/tab3.svg'

const items = [
  { title: 'نظام POS متعدد الاستخدامات الخاص', icon: ' mdi-check' },
  { title: 'الحل الأمثل لإدارة أعمالك بكفاءة ومرونة', icon: ' mdi-check' },
  { title: 'نظام POS متعدد الاستخدامات الخاص', icon: ' mdi-check' },
  { title: 'نظام POS متعدد الاستخدامات الخاص', icon: ' mdi-check' },
]
const reports = [{ image: tab1 }, { image: tab2 }, { image: tab3 }]
const tabs = [
  {
    title: 'التقارير',
    value: '1',
  },
  {
    title: 'ادارت المنتجات',
    value: '2',
  },
  {
    title: 'الربط مع الانظمة الاخرى',
    value: '3',
  },
  {
    title: 'ادارة المخازن',
    value: '4',
  },
]

const subtitle = 'اهم الخصائص'
const mainPargraph =
  '      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.'
</script>

<template>
  <div class="properties">
    <div
      class="d-flex justify-center align-center report-header"
      style="flex-direction: column"
    >
      <!-- Start Heading -->

      <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />
    </div>

    <!-- End Heading -->

    <!-- Start Tabs -->

    <div class="tabs d-flex justify-center align-center">
      <v-tabs v-model="tab" show-arrows class="mb-4">
        <v-tab :value="1" class="">التقارير</v-tab>
        <v-tab :value="2">ادارت المنتجات</v-tab>
        <v-tab :value="3">الربط مع الانظمة الاخرى</v-tab>
        <v-tab :value="4">ادارة المخازن</v-tab>
      </v-tabs>
    </div>

    <div class="cards">
      <v-card>
        <v-window v-model="tab" class="window">
          <v-window-item v-for="n in 4" :key="n" :value="n">
            <v-container fluid>
              <v-row v-for="report in reports" class="card-row mb-5">
                <VCol cols="12" lg="6" md="6" sm="12">
                  <div class="d-flex" style="flex-direction: column">
                    <h6 class="">التقارير</h6>
                    <p>
                      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة
                      أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع
                      بالتجزئة.
                    </p>
                    <VList>
                      <VListItem v-for="item in items">
                        <div class="d-flex">
                          <VIcon :icon="item.icon" />
                          <span>{{ item.title }}</span>
                        </div>
                      </VListItem>
                    </VList>
                  </div>
                </VCol>
                <VCol cols="12" lg="6" md="6" sm="12">
                  <img :src="report.image" />
                </VCol>
              </v-row>
            </v-container>
          </v-window-item>
        </v-window>
      </v-card>
    </div>

    <!-- End Tabs -->
  </div>
</template>

<style lang="scss">
.properties .cards {
  background-image: url('@/assets/images/reports.svg') !important;
  background-repeat: no-repeat;
  background-size: cover;
  block-size: 100%;
  inline-size: 100%;
}

.properties .v-slide-group__content {
  gap: 6px;
}

.properties .v-tab.v-tab {
  border: 1px solid #70a1e5;
  border-radius: 24px !important;
  background: transparent !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 700 !important;
  padding-block: 11px !important;
  padding-inline: 42px !important;
  text-align: center !important;
}

.properties .v-tab.v-tab--selected {
  background: linear-gradient(90deg, #157d99 0%, #70a1e5 100%) !important;
  color: #fff !important;
}

.properties .v-tab__slider {
  display: none !important;
}

.properties .cards .v-row {
  padding: 33px;
}

.properties .cards .window {
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
    font-family: Cairo-Medium;
    font-size: 16px;
    font-weight: 500 !important;
    inline-size: 80%;
    letter-spacing: 0.01em;
    line-height: 29.98px;
  }

  span {
    color: #000;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 0.01em;
    line-height: 29.98px;
    padding-block: 0;
    padding-inline: 24px;
    text-align: center;
  }

  svg {
    color: #000;
    inline-size: 21px;
  }

  img {
    inline-size: 100%;
  }
}

.v-card--variant-elevated {
  box-shadow: none !important;
}

.properties .card-row {
  border-radius: 58px;
  background: #fff;
}

.v-container--fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-inline-size: 90%;
}

.properties .report-header {
  background-image: url('@/assets/images/reportHeader.svg') !important;
  background-repeat: no-repeat;
  background-size: cover;
  block-size: 100%;
  inline-size: 100%;
}
</style>
