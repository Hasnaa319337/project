<script lang="ts" setup>
const tab = ref(null)
import tab1 from '@/assets/images/tab1.svg'
import tab2 from '@/assets/images/tab2.svg'
import tab3 from '@/assets/images/tab3.svg'

const items = [
  { title: 'نظام POS متعدد الاستخدامات الخاص' },
  { title: 'الحل الأمثل لإدارة أعمالك بكفاءة ومرونة' },
  { title: 'نظام POS متعدد الاستخدامات الخاص' },
  { title: 'نظام POS متعدد الاستخدامات الخاص' },
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

      <div class="tabs d-flex justify-center align-center">
        <v-tabs v-model="tab" show-arrows class="mb-4">
          <v-tab :value="1" class="">التقارير</v-tab>
          <v-tab :value="2">ادارت المنتجات</v-tab>
          <v-tab :value="3">الربط مع الانظمة الاخرى</v-tab>
          <v-tab :value="4">ادارة المخازن</v-tab>
        </v-tabs>
      </div>
    </div>

    <!-- End Heading -->

    <!-- Start Tabs -->

    <div class="cards">
      <v-card>
        <v-window v-model="tab" class="window">
          <v-window-item v-for="n in 4" :key="n" :value="n">
            <v-container fluid>
              <v-row v-for="report in reports" class="card-row mb-5">
                <VCol cols="12" lg="6" md="6" sm="12" class="card-info">
                  <div class="d-flex contain" style="flex-direction: column">
                    <h6 class="report-title">التقارير</h6>
                    <p class="report-text">
                      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة
                      أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع
                      بالتجزئة.
                    </p>
                    <VList>
                      <VListItem v-for="item in items">
                        <div class="d-flex item">
                          <div class="item-image">
                            <img src="@/assets/images/check-icon.svg" />
                          </div>
                          <span>{{ item.title }}</span>
                        </div>
                      </VListItem>
                    </VList>
                  </div>
                </VCol>
                <VCol cols="12" lg="6" md="6" sm="12" class="card-image">
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
.properties {
  margin-block-start: 150px;

  .cards {
    background-image: url('@/assets/images/reports.svg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    block-size: 1900px;
    inline-size: 100%;
  }

  .v-slide-group {
    margin-block-end: 48px !important;
  }

  .v-slide-group__content {
    gap: 19px;
  }

  .v-tab.v-tab {
    border: 1px solid #70a1e5;
    border-radius: 27.5px !important;
    background: transparent !important;
    block-size: 55px;
    color: #000 !important;
    font-family: Cairo-Bold;
    font-size: 14px !important;
    font-weight: 700 !important;
    inline-size: 203px;
    line-height: 26.24px;
    padding-block: 11px !important;
    padding-inline: 42px !important;
    text-align: center !important;
  }

  .v-tab.v-tab--selected {
    background: linear-gradient(90deg, #157d99 0%, #70a1e5 100%) !important;
    color: #fff !important;
  }

  .v-tab__slider {
    display: none !important;
  }

  .cards .v-row {
    padding: 33px;
  }

  .cards .window {
    .v-row:nth-child(2) {
      flex-direction: row-reverse;

      .contain {
        margin-inline-start: 48px;
      }
    }

    h6 {
      color: #1c1c1c;
      font-family: Cairo-SemiBold;
      font-size: 32px;
      font-weight: 600;
      line-height: 59.97px;
      margin-block-end: 17px;
    }

    p {
      color: #000;
      font-family: Cairo-Medium;
      font-size: 16px;
      font-weight: 500 !important;
      inline-size: 80%;
      letter-spacing: 0.01em;
      line-height: 29.98px;
      margin-block-end: 0;
    }

    .v-list {
      margin-block-end: 48px !important;

      .v-list-item {
        padding-inline: 0;

        span {
          color: #000;
          font-family: Cairo-Light;
          font-size: 16px;
          font-weight: 300;
          letter-spacing: 0.01em;
          line-height: 29.98px;
          padding-block: 0;
          padding-inline: 24px;
          text-align: center;
        }

        .item-image {
          block-size: 14.55px;
          inline-size: 14.55px;
          margin-block-start: 5px;

          img {
            inline-size: 100%;
          }
        }
      }
    }

    img {
      inline-size: 100%;
    }
  }

  .v-card--variant-elevated {
    box-shadow: none !important;
  }

  .card-row {
    border-radius: 58px;
    background: #fff;
  }

  .report-header {
    background-image: url('@/assets/images/reportHeader.svg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    block-size: 100%;
    inline-size: 100%;
  }
}

.v-container--fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-inline-size: 90%;
}

.v-tabs--density-default {
  block-size: auto !important;
}

@media (max-width: 787px) {
  .properties .cards {
    background-image: url('@/assets/images/reports.svg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    block-size: 100%;
    inline-size: 100%;
  }

  .properties .v-slide-group__content {
    flex-direction: column;
  }

  .properties .cards .v-row {
    margin-block-end: 5px;
    padding-block-start: 0 !important;
  }

  .properties .cards .window p {
    inline-size: 100%;
  }

  .properties .cards .window .v-list .v-list-item span {
    padding-inline: 10px;
    text-align: start;
  }
}
</style>
