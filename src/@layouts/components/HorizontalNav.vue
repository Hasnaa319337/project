<script lang="ts" setup>
import { HorizontalNavGroup, HorizontalNavLink } from '@layouts/components'
import type { HorizontalNavItems, NavGroup, NavLink } from '@layouts/types'

defineProps<{
  navItems: HorizontalNavItems
}>()

const resolveNavItemComponent = (item: NavLink | NavGroup) => {
  if ('children' in item) return HorizontalNavGroup

  return HorizontalNavLink
}
</script>

<template>
  <ul class="nav-items">
    <Component
      :is="resolveNavItemComponent(item)"
      v-for="(item, index) in navItems"
      :key="index"
      :item="item"
    />
  </ul>
</template>

<style lang="scss">
.layout-wrapper.layout-nav-type-horizontal {
  .nav-items {
    display: flex;
    flex-wrap: wrap;
  }
}

.layout-horizontal-nav .nav-link a::before {
  background: transparent !important;
  transition: 0.2s all ease-in-out !important;
}

.layout-horizontal-nav .nav-link a:hover {
  color: #63a8bb !important;
  transition: 0.2s all ease-in-out !important;
}
</style>
