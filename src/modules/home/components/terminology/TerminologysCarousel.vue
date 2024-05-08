<template>
  <div class="carsouselTerminologys">
    <Carousel
      :breakpoints="breakpoints"
      :wrap-around="true"
      :autoplay="0"
      :transition="3000"
      dir="rtl"
      @slide-start="handleSlideStart"
    >
      <Slide v-for="myTerminology in Terminologys" :key="myTerminology">
        <div class="carousel__item big_image">
          <TerminologyCard :Terminology="myTerminology" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import TerminologyCard from './TerminologyCard.vue'

export default defineComponent({
  name: 'WrapAround',

  components: {
    Carousel,
    Slide,
    Navigation,
    TerminologyCard,
  },
  props: ['Terminologys'],
  data() {
    return {
      slideWidth: '200px',
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

  setup(props, { emit }) {
    const activeItem = ref(0)
    emit('active-item-updated', props.Terminologys[activeItem.value])
    const handleSlideStart = (data) => {
      activeItem.value = data.currentSlideIndex

      emit('active-item-updated', props.Terminologys[activeItem.value + 1])
    }

    return { activeItem, handleSlideStart }
  },
})
</script>

<style lang="scss">
.carsouselTerminologys {
  @media (min-width: 1280px) {
    .v-container {
      max-inline-size: 1200px;
      max-inline-size: 1371px;
    }
  }

  .carousel__next {
    inset-inline-end: -72px;
  }

  .carousel__prev {
    inset-inline-start: -72px;
  }

  .carousel__next,
  .carousel__prev {
    position: absolute;
    border: 1px solid #5396cd;
    border-radius: 50%;
    background: #fff;
    block-size: 48px;
    inline-size: 48px;
    opacity: 0.8px;

    svg {
      // block-size: 14px;
      color: #5396cd;
      inline-size: 25px;
    }
  }

  .carousel__prev {
    background: #5396cd;

    svg {
      color: #fff;
    }
  }

  .carousel__slide .carousel__item {
    inline-size: 90% !important;
  }
}

.carsouselTerminologys {
  .carousel__viewport {
    overflow: hidden;
    margin: auto;

    // inline-size: 85%;
  }

  .carousel__slide {
    // inline-size: 458px !important;
  }

  .carousel__slide--active {
    .border-style {
      border: 1px solid;
      border-color: #70a1e5;
      border-radius: 8px;
      background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);
    }

    .title,
    .text {
      color: #fff;
    }
  }
}

@media (max-width: 787px) {
  .carousel__next,
  .carousel__prev {
    display: none;
  }

  .carsouselTerminologys {
    .carousel__viewport {
      inline-size: 100% !important;
    }
  }
}
</style>
