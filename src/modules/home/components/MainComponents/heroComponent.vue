<script lang="ts" setup>
const buttonContent = 'انضم الينا'
</script>

<template>
  <div
    class="d-flex justify-center align-center"
    style="flex-direction: column;"
  >
    <div class="heading d-flex align-center">
      <h3 class="text-h3 mainHeading">
        قم بتطوير أعمالك اليوم مع نظام POS المبتكر
      </h3>
      <p class="mainPargraph">
        نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة
        ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.
      </p>
    </div>
    <MainButton :content="buttonContent" />
    <div class="dashboardImage moveUpDown">
      <img src="@/assets/images/dashboard.svg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.heading {
  flex-direction: column;
  gap: 25px;
  inline-size: 50%;
}

.dashboardImage {
  margin: auto;

  img {
    inline-size: 100%;
  }
}

.moveUpDown {
  animation: moveUpDownAnimation 2s infinite alternate;
}

@keyframes moveUpDownAnimation {
  0% {
    transform: translateY(0); /* Start position */
  }

  100% {
    transform: translateY(20px); /* End position */
  }
}
</style>
