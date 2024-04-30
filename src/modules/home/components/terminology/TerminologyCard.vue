<template>
  <div class="terminology-card">
    <div class="card">
      <Carousel
        :value="products"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :autoplayInterval="3000"
        @update:page="updateActiveItem"
      >
        <template #item="slotProps">
          <div class="border-1 border-round m-2 border-style" dir="rtl">
            <div class="mb-3">
              <div class="relative mx-auto p-3">
                <img
                  :src="slotProps.data.image"
                  :alt="slotProps.data.name"
                  class="w-full border-round"
                />
              </div>
            </div>
            <div class="p-3">
              <div class="mb-1 title">{{ slotProps.data.title }}</div>
              <div class="mt-0 mb-1 text">{{ slotProps.data.text }}</div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TerminologyService } from '@/modules/home/services/TerminologyService'
const activeItem = ref(0)
const products = ref(null)
const responsiveOptions = [
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
]

onMounted(() => {
  TerminologyService.getProductsSmall().then(
    (data) => (products.value = data.slice(0, 9))
  )
})
interface Emit {
  (e: 'active-item-updated', value: string[]): void
}

const emit = defineEmits<Emit>()
const updateActiveItem = (value) => {
  activeItem.value = value
  console.log(activeItem.value)
  console.log(products.value['0'])

  emit('active-item-updated', products.value[activeItem.value])
}

const getSeverity = (status) => {
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
}
</script>

<style lang="scss">
.terminology-card .card {
  border-radius: 10px;
  background: var(--surface-card);
  font-family: Cairo !important;
  margin-block-end: 1rem;

  .border-style {
    border: 1px solid;
    border-color: #70a1e5;
    border-radius: 8px !important;
  }

  .p-carousel-item-end .border-1 {
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

.terminology-card .p-carousel {
  direction: rtl;
}

.terminology-card .p-carousel-items-content {
  direction: ltr;
  font-family: Cairo !important;

  .title {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 37.48px;
  }

  .text {
    color: #000;
    font-size: 16px;
    font-weight: 300;
    line-height: 29.98px;
  }
}

.terminology-card {
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

  .p-carousel-indicators {
    display: none;
  }
}
</style>
