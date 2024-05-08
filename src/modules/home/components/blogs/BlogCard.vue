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
          <div class="m-2 border-style" dir="rtl">
            <div class="mb-3">
              <div class="blog-image">
                <img :src="slotProps.data.image" :alt="slotProps.data.name" />
              </div>
            </div>
            <div class="p-3">
              <div class="mb-1 title">{{ slotProps.data.title }}</div>
              <div class="mt-0 mb-1 date">{{ slotProps.data.date }}</div>
              <div class="mt-0 mb-1 text">{{ slotProps.data.text }}</div>
              <div class="flex justify-content-between align-items-center">
                <router-link to="/">
                  <span class="ml-2">أقرأ المزيد</span>
                  <img src="@/assets/images/Symbol.svg" />
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
import { BlogService } from '@/modules/home/services/BlogService'

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
    BlogService.getProductsSmall().then(
      (data) => (this.products = data.slice(0, 9))
    )
  },
  methods: {},
}
</script>

<style lang="scss">
.blog-card .card {
  padding: 2rem;
  border-radius: 8px 8px 0 0;

  // background: var(--surface-card);
  font-family: Cairo !important;
  margin-block-end: 1rem;

  .border-style {
    box-sizing: border-box;

    // border: 1px solid #fff;
    border-radius: 8px !important;
    transition: 0.3s all ease-in-out;

    &:hover {
      border: 1px solid #70a1e5 !important;
      transition: 0.3s all ease-in-out;
    }

    .blog-image {
      // block-size: 100px;
      // inline-size: 100px;

      img {
        block-size: 100%;
        inline-size: 100%;
      }
    }
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
    font-family: Cairo-SemiBold;
    font-size: 20px;
    font-weight: 600;
    line-height: 37.48px;
  }

  .date {
    color: #969696;
    font-family: Cairo-Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 29.98px;
  }

  .text {
    color: #000;
    font-family: Cairo-Light;
    font-size: 16px;
    font-weight: 300;
    line-height: 29.98px;
  }

  a {
    display: flex;
    align-items: center;
    color: #599dc6;
    font-family: Cairo-SemiBold;
    font-size: 16px;
    font-weight: 600;
    line-height: 27.2px;

    span {
      // border-block-end: 2px solid #599dc6;
      text-decoration: underline;
    }

    img {
      display: inline-block;
    }
  }
}

.blog-card {
  .p-link {
    border: 1px solid #c5dcef;
    border-radius: 50%;
    block-size: 48px;
    inline-size: 48px;

    svg {
      color: #0f578b;
      inline-size: 22px;
    }
  }

  .p-disabled {
    background: linear-gradient(142.84deg, #157d99 0%, #70a1e5 100%);

    svg {
      color: #fff;
    }
  }

  .p-carousel-next {
    margin-inline-start: 18px;
    transform: rotate(180deg);
  }

  .p-carousel-prev {
    margin-inline-end: 18px;
    transform: rotate(180deg);
  }

  .p-carousel-indicators {
    display: none;
  }
}

@media (max-width: 787px) {
  .blog-card .card {
    padding: 0;
  }

  .blog-card {
    .p-carousel-next,
    .p-carousel-prev {
      display: none;
    }
  }

  .p-carousel-items-content {
    inline-size: 350px;
  }
}

@media (min-width: 1000px) {
  .p-carousel-items-content {
    // inline-size: 1250px;
  }
}
</style>
