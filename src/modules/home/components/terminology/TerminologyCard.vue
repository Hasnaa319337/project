<template>
  <div class="terminology-card">
    <div class="card">
      <div class="border-1 border-round border-style">
        <div
          class="image-card"
          :style="{ backgroundImage: 'url(' + $props.Terminology.image + ')' }"
        ></div>

        <div class="card-text">
          <div class="mb-1 title">{{ $props.Terminology.title }}</div>
          <div class="mt-0 mb-1 text">{{ $props.Terminology.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<Props>()
interface Props {
  Terminology: {
    title: string
    image: string
    text: string
  }
}

console.log(props.Terminology)
</script>

<style lang="scss">
.terminology-card .card {
  border-radius: 16px;
  font-family: Cairo !important;
  margin-block-end: 1rem;

  .border-style {
    border: 1px solid;
    border-color: #70a1e5;
    border-radius: 8px !important;
  }

  .carousel__slide--active {
    border-radius: 8px;
    background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);

    .title,
    .text {
      color: #fff;
    }
  }

  .p-carousel-container {
    margin: auto;
    inline-size: 92%;
  }
}

.terminology-card {
  text-align: start;

  .image-card {
    border-radius: 8px;
    background-size: cover;
    block-size: 238px;
    inline-size: 365px;
    margin-block: 14px;
    margin-inline: auto;

    img {
      block-size: 100%;
      inline-size: 100%;
    }
  }

  .card-text {
    margin-block: 0;
    margin-inline: 21px;
  }

  .title {
    color: #000;
    font-family: Cairo-SemiBold;
    font-size: 20px;
    font-weight: 600;
    line-height: 37.48px;
  }

  .text {
    color: #000;
    font-family: Cairo-Light;
    font-size: 16px;
    font-weight: 300;
    line-height: 29.98px;
    padding-block-end: 30px;
  }
}
</style>
