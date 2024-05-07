<script lang="ts" setup>
import BlogCard from '@/modules/home/components/blogs/BlogCard.vue'

const subtitle = 'المدونه'
const mainPargraph =
  '      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.'
</script>

<template>
  <div class="blogs">
    <div
      class="d-flex justify-center align-center"
      style="flex-direction: column"
    >
      <!-- Start Heading -->

      <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />
      <!-- End Heading -->

      <!-- Start:: Blogs -->
      <!-- <VContainer> -->
      <BlogCard />
      <!-- </VContainer> -->

      <!-- End:: Blogs -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
