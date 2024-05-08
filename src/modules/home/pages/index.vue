<script setup lang="ts">
import HeroComponent from '@/modules/home/components/MainComponents/heroComponent.vue'
import SystemTerminology from '../components/MainComponents/SystemTerminology.vue'
import AdvantagesComponent from '../components/MainComponents/advantagesComponent.vue'
import ContactComponent from '../components/MainComponents/contactComponent.vue'
import PackagesComponents from '../components/MainComponents/packagesComponents.vue'
import PropertiesComponent from '../components/MainComponents/propertiesComponent.vue'

import BlogsComponent from '@/modules/home/components/MainComponents/blogsComponent.vue'
</script>

<template>
  <div class="home">
    <!-- <VContainer> -->
    <HeroComponent />
    <!-- </VContainer> -->
    <div class="both1">
      <PropertiesComponent />
      <SystemTerminology />
    </div>

    <div class="both">
      <AdvantagesComponent />
      <PackagesComponents />
    </div>
    <!-- <div class="blogs"> -->
    <BlogsComponent />
    <!-- </div> -->
    <VContainer>
      <ContactComponent />
    </VContainer>
  </div>
</template>
<style lang="scss">
.home {
  .both {
    background-image: url('@/assets/images/advantages.svg') !important;
    background-repeat: no-repeat;
    background-size: cover;
    block-size: 100%;
    inline-size: 100%;
  }

  .blogs {
    background-image: url('@/assets/images/blogs.svg') !important;
    background-repeat: no-repeat;
    background-size: 50%;
    block-size: 100%;
    inline-size: 100%;
  }
}
</style>
