<template>
  <div class="carsouselPackages">
    <Carousel
      :breakpoints="breakpoints"
      :wrap-around="true"
      :autoplay="0"
      :transition="3000"
      dir="rtl"
    >
      <Slide v-for="myPackage in packages" :key="myPackage">
        <div class="carousel__item big_image">
          <PackageCard :package="myPackage" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import PackageCard from './PackageCard.vue'

export default defineComponent({
  name: 'WrapAround',

  components: {
    Carousel,
    Slide,
    Navigation,
    PackageCard,
  },
  props: ['packages'],
  data() {
    return {
      breakpoints: {
        500: {
          itemsToShow: 1,
          snapAlign: 'center',
        },
        // 700px and up
        900: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        // 1024 and up

        1260: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
        750: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
      },
    }
  },

  methods: {},
})
</script>

<style lang="scss">
.carsouselPackages {
  .carousel__next,
  .carousel__prev {
    display: none;
  }

  .carousel__slide .carousel__item {
    inline-size: 90% !important;
  }
}

.carsouselPackages .v-window-item {
  display: block !important;
}
</style>
