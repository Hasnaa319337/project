<script setup lang="ts">
import type { I18nLanguage } from '@layouts/types'

const props = withDefaults(defineProps<Props>(), {
  location: 'bottom end',
})

defineEmits<{
  (e: 'change', id: string): void
}>()

interface Props {
  languages: I18nLanguage[]

  location?: any
}

const { locale } = useI18n({ useScope: 'global' })
let currentLang = ref(localStorage.getItem('lang'))
watch(locale, (val) => {
  document.documentElement.setAttribute('lang', val as string)
  currentLang.value = localStorage.getItem('lang')
})
</script>

<template>
  <button
    v-if="currentLang == 'ar'"
    @click=";(locale = 'en'), $emit('change', 'en')"
    class="mt-1"
  >
    <!-- <img
      width="30"
      height="30"
      src="https://img.icons8.com/emoji/48/united-kingdom-emoji.png"
      alt="united-kingdom-emoji"
    /> -->
    ENGLISH
  </button>
  <button v-else @click=";(locale = 'ar'), $emit('change', 'ar')" class="mt-1">
    <!-- <img
      width="32"
      height="32"
      src="https://img.icons8.com/color/48/saudi-arabia.png"
      alt="saudi-arabia"
    /> -->
    ARABIC
  </button>
</template>

<style lang="scss" scoped>
button {
  margin: 0 !important;
  color: #000;
  font-family: Cairo-Regular;
  font-size: 16px;
  font-weight: 400;
  line-height: 29.98px;
}
</style>
