<script lang="ts" setup>
const props = defineProps<Props>()
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
</script>

<template>
  <div
    :class="['package-card', { 'recommanded-bg': $props.package.recommanded }]"
  >
    <div class="recommanded" v-if="$props.package.recommanded">نوصيك بها</div>
    <div class="details">
      <h4>{{ $props.package.title }}</h4>
      <h6>
        {{ $props.package.price }} ر.س

        <span> / سنه</span>
      </h6>
      <span class="package-tax"
        >{{ $props.package.tax }} ر.س / سنويا ضريبة القيمة المضافة</span
      >

      <VList>
        <VListItem v-for="item in $props.package.advantages">
          <div class="item-image">
            <img src="@/assets/images/check-icon.svg" />
          </div>
          <span>{{ item }}</span>
        </VListItem>
      </VList>
    </div>
    <div class="d-flex justify-center button-container">
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
    font-family: Cairo-Bold;
    font-size: 14px;
    font-weight: 700;
    line-height: 26.24px;
    text-align: center;
  }

  .details {
    background-color: transparent;
    padding-block-start: 50px;
    padding-inline-start: 35px;
    text-align: start;

    h4 {
      color: #000;
      font-family: Cairo-Bold;
      font-size: 24px;
      font-weight: 700;
      line-height: 44.98px;
    }

    h6 {
      color: #000;
      font-family: Cairo-Bold;
      font-size: 36px;
      font-weight: 700;
      line-height: 67.46px;
      margin-block-end: 10px;

      span {
        display: inline-block;
        font-family: Cairo-Light;
        font-size: 20px;
        font-weight: 300;
        line-height: 37.48px;
      }
    }

    .package-tax {
      font-family: Cairo-Semibold;
      font-size: 16px;
      font-weight: 600;
      line-height: 29.98px;
    }

    span {
      color: #000;
      font-family: Cairo-Medium;
      font-size: 16px;
      font-weight: 500;
      line-height: 29.98px;
    }
  }

  .v-list {
    background-color: transparent !important;
    padding-inline: 0;
  }

  .v-list-item {
    background-color: transparent !important;
    padding-inline: 0;
  }

  .v-list-item__content {
    background-color: transparent !important;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 29.98px;

    .item-image {
      block-size: 14.55px;
      inline-size: 14.55px;

      img {
        inline-size: 100%;
      }
    }

    span {
      display: inline-block;
      font-family: Cairo-Medium;
      font-size: 16px;
      font-weight: 500;
      line-height: 29.98px;
      margin-block-start: 6px !important;
      padding-block: 0;
      padding-inline: 14.6px;
    }
  }
}
</style>

<style lang="scss">
.button-container {
  inline-size: 100%;
  margin-block-start: 10px;

  div {
    inline-size: 100%;
  }

  button {
    display: inline-block !important;
    border-radius: 27.5px;
    block-size: 55px !important;
    font-family: Cairo-Bold;
    font-size: 14px;
    font-weight: 700;
    inline-size: 80% !important;
    line-height: 26.24px;
    text-align: center;
  }
}

.package-card .v-list-item__content {
  display: flex;
  align-items: center;
}
</style>
