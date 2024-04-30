<script setup lang="ts">
import HeroComponent from '@/modules/home/components/MainComponents/heroComponent.vue'
import SystemTerminology from '../components/MainComponents/SystemTerminology.vue'
import AdvantagesComponent from '../components/MainComponents/advantagesComponent.vue'
import BlogsComponent from '../components/MainComponents/blogsComponent.vue'
import ContactComponent from '../components/MainComponents/contactComponent.vue'
import PackagesComponents from '../components/MainComponents/packagesComponents.vue'
import PropertiesComponent from '../components/MainComponents/propertiesComponent.vue'
</script>

<template>
  <div>
    <VContainer>
      <HeroComponent />
      <PropertiesComponent />
    </VContainer>
    <SystemTerminology />
    <VContainer>
      <AdvantagesComponent />
      <PackagesComponents />
      <BlogsComponent />
      <ContactComponent />
    </VContainer>
  </div>
</template>
