<script lang="ts" setup>
interface Props {
  subtitle: string
  mainPargraph: string
}

const props = defineProps<Props>()
</script>

<template>
  <!-- Start Heading -->
  <div class="heading d-flex align-center">
    <h3 class="subtitle">
      {{ props.subtitle }}
    </h3>
    <p class="mainPargraph">
      {{ $props.mainPargraph }}
    </p>
  </div>
  <!-- End Heading -->
</template>

<style lang="scss" scoped>
.heading {
  flex-direction: column;
  inline-size: 50%;
  margin-block-end: 20px;
  margin-block-start: 40px;
}

// Responsive Style

@media (max-width: 600px) {
  .subtitle {
    font-size: 30px;
  }

  .mainPargraph {
    font-size: 14px;
    margin-block-end: 25px;
  }
}
</style>
