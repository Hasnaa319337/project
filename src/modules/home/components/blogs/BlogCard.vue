<template>
  <div class="blog-card">
    <div class="card">
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="border-1 border-round m-2 border-style" dir="rtl">
            <div class="mb-3">
              <div class="relative mx-auto">
                <img
                  :src="slotProps.data.image"
                  :alt="slotProps.data.name"
                  class="w-full border-round"
                />
              </div>
            </div>
            <div class="p-3">
              <div class="mb-1 title">{{ slotProps.data.title }}</div>
              <div class="mt-0 mb-1 date">{{ slotProps.data.date }}</div>
              <div class="mt-0 mb-1 text">{{ slotProps.data.text }}</div>
              <div class="flex justify-content-between align-items-center">
                <router-link to="/">
                  <span class="ml-2">أقرأ المزيد</span>
                  <VIcon icon="mdi-arrow-left" class="icon" />
                </router-link>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { ProductService } from '@/modules/home/services/ProductService'

export default {
  data() {
    return {
      buttonContent: 'أقرأ المزيد',
      products: null,
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1,
        },
      ],
    }
  },
  mounted() {
    ProductService.getProductsSmall().then(
      (data) => (this.products = data.slice(0, 9))
    )
  },
  methods: {
    getSeverity(status) {
      switch (status) {
        case 'INSTOCK':
          return 'success'

        case 'LOWSTOCK':
          return 'warning'

        case 'OUTOFSTOCK':
          return 'danger'

        default:
          return null
      }
    },
  },
}
</script>

<style lang="scss">
.blog-card .card {
  padding: 2rem;
  border-radius: 10px;
  background: var(--surface-card);
  font-family: Cairo !important;
  margin-block-end: 1rem;

  .border-style {
    border-color: #fff;
    border-radius: 8px !important;
  }
}

.blog-card .p-carousel {
  direction: rtl;
}

.blog-card .p-carousel-items-content {
  direction: ltr;
  font-family: Cairo !important;

  .title {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 37.48px;
  }

  .date {
    color: #969696;
    font-size: 16px;
    font-weight: 400;
    line-height: 29.98px;
  }

  .text {
    color: #000;
    font-size: 16px;
    font-weight: 300;
    line-height: 29.98px;
  }

  a {
    color: #599dc6;
    font-size: 16px;
    font-weight: 600;
    line-height: 27.2px;

    span {
      border-block-end: 2px solid #599dc6;
    }

    .icon {
      border: 2px solid #599dc6;
      border-radius: 50%;
      font-size: 18px !important;
      font-weight: 700 !important;
    }
  }
}

.blog-card {
  .p-link {
    border: 1px solid #c5dcef;
    border-radius: 50%;

    svg {
      color: #0f578b;
      inline-size: 12px;
    }
  }

  .p-disabled {
    background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);

    svg {
      color: #fff;
    }
  }

  .p-carousel-next {
    transform: rotate(180deg);
  }

  .p-carousel-prev {
    transform: rotate(180deg);
  }
}
</style>
