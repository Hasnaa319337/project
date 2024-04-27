<script setup lang="ts">
import createI18n from '@core/plugins/i18n/index'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

import { useThemeConfig } from '@core/composable/useThemeConfig'

const { isAppRtl } = useThemeConfig()
const router = useRouter()

const userData = JSON.parse(localStorage.getItem('userData') || 'null')

const logout = () => {
  // JwtService.destroyToken()
  // Remove "userData" from localStorage
  // UserService.destroyUserData()
  localStorage.setItem('lang', 'ar')
  localStorage.setItem('whatsapploxa-isRtl', 'true')
  createI18n.global.locale.value = 'ar'
  isAppRtl.value = true

  // Redirect to login page
  router.push('/auth/login').then(() => {
    // ℹ️ We had to remove abilities in then block because if we
    // don't nav menu items mutation is visible while redirecting
    // user to login page
  })
}

const userProfileList = [
  { type: 'divider' },
  {
    type: 'navItem',
    icon: 'mdi-account-outline',
    title: 'Profile',
    to: { name: 'auth-current' },
  },
  {
    type: 'navItem',
    icon: 'mdi-cog-outline',
    title: 'settings',
    to: { name: 'user-account-settings-tab', params: { tab: 'account' } },
  },
  { type: 'divider' },
  { type: 'navItem', icon: 'mdi-logout', title: 'logout', onClick: logout },
]
</script>

<template>
  <VBadge
    dot
    bordered
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      :color="!(userData && userData.avatar) ? 'primary' : undefined"
      :variant="!(userData && userData.avatar) ? 'tonal' : undefined"
    >
      <VImg v-if="userData && userData.avatar" :src="userData.avatar" />
      <VIcon v-else icon="mdi-account-outline" />

      <!-- SECTION Menu -->
      <VMenu activator="parent" width="230" location="bottom end" offset="14px">
        <VList>
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    :color="
                      !(userData && userData.avatar) ? 'primary' : undefined
                    "
                    :variant="
                      !(userData && userData.avatar) ? 'tonal' : undefined
                    "
                  >
                    <VImg
                      v-if="userData && userData.avatar"
                      :src="userData.avatar"
                    />
                    <VIcon v-else icon="mdi-account-outline" />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-medium">
              {{ userData.name || userData.username }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userData.role }}</VListItemSubtitle>
          </VListItem>

          <PerfectScrollbar :options="{ wheelPropagation: false }">
            <template v-for="item in userProfileList" :key="item.title">
              <VListItem
                v-if="item.type === 'navItem'"
                :to="item.to"
                @click="item.onClick && item.onClick()"
              >
                <template #prepend>
                  <VIcon class="me-2" :icon="item.icon" size="22" />
                </template>

                <VListItemTitle>{{ $t(item.title) }}</VListItemTitle>

                <!-- <template v-if="item.badgeProps" #append>
                  <VBadge v-bind="item.badgeProps" />
                </template> -->
              </VListItem>

              <VDivider v-else class="my-2" />
            </template>
          </PerfectScrollbar>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
