<script lang="ts" setup>
interface Props {
  package: {
    title: string
    price: string
    tax: string
    recommanded: Boolean
    advantages: Array
  }
}
const buttonContent = ref('اشترك الان')
const props = defineProps<Props>()
</script>

<template>
  <div
    :class="['package-card', { 'recommanded-bg': $props.package.recommanded }]"
  >
    <div class="recommanded" v-if="$props.package.recommanded">نوصيك بها</div>
    <div class="details">
      <h4>{{ $props.package.title }}</h4>
      <h6>{{ $props.package.price }} R.S</h6>
      <span>{{ $props.package.tax }} ر.س / سنويا ضريبة القيمة المضافة</span>

      <VList>
        <VListItem v-for="item in $props.package.advantages">
          <VIcon icon="mdi-check" />
          <span>{{ item }}</span>
        </VListItem>
      </VList>
    </div>
    <div class="d-flex justify-center">
      <MainButton :content="buttonContent" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.package-card {
  border: 1px solid #70a1e5; // Border width
  border-radius: 16px !important;
  border-image-repeat: stretch; // Repeat value
  border-image-slice: 1; // Slicing value
  margin-block: 20px;
  margin-inline: 0;

  // padding-inline-start: 10px;

  .recommanded-bg {
    background: #f3f8f9;

    // margin-block: 20px;
  }

  .recommanded {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px 15px 0 0;
    background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);
    block-size: 55px;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 26.24px;
    text-align: center;
  }

  .details {
    background-color: transparent;
    padding-block: 2px;
    padding-inline: 8px;

    h4 {
      color: #000;
      font-size: 24px;
      font-weight: 700;
      line-height: 44.98px;
    }

    h6 {
      color: #000;
      font-size: 36px;
      font-weight: 700;
      line-height: 67.46px;
    }

    span {
      color: #000;
      font-size: 16px;
      font-weight: 500;
      line-height: 29.98px;
    }
  }

  .v-list {
    background-color: transparent !important;
  }

  .v-list-item {
    background-color: transparent !important;
  }

  .v-list-item__content {
    background-color: transparent !important;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 29.98px;

    svg {
      background-color: transparent !important;
      block-size: 18px !important;
      color: #000 !important;
      font-size: 16px;
      font-weight: 300 !important;
    }

    span {
      margin-inline-start: 6px;
    }
  }
}
</style>
