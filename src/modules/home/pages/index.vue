<script setup lang="ts">
import HeroComponent from '@/modules/home/components/MainComponents/heroComponent.vue'
import AdvantagesComponent from '../components/MainComponents/advantagesComponent.vue'
import BlogComponent from '../components/MainComponents/blogComponent.vue'
import ContactComponent from '../components/MainComponents/contactComponent.vue'
import PackagesComponents from '../components/MainComponents/packagesComponents.vue'
import PropertiesComponent from '../components/MainComponents/propertiesComponent.vue'
</script>

<template>
  <div>
    <VContainer>
      <HeroComponent />
      <PropertiesComponent />
      <AdvantagesComponent />
      <PackagesComponents />
      <BlogComponent />
      <ContactComponent />
    </VContainer>
  </div>
</template>
