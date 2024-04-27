<script setup lang="ts">
const shortcuts = [
  {
    icon: 'mdi-view-dashboard-outline',
    title: 'Dashboard',
    subtitle: 'Dashboard Analytics',
    to: { name: 'dashboard-analytics' },
  },

]
</script>

<template>
  <Shortcuts :shortcuts="shortcuts" />
</template>
