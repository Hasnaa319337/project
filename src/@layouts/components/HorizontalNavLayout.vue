<script lang="ts" setup>
import { HorizontalNav } from '@layouts/components'
import type { HorizontalNavItems } from '@layouts/types'

// ℹ️ Using import from `@layouts` causing build to hangup
// import { useLayouts } from '@layouts'
import NavBarI18n from '@/@core/components/I18n.vue'
import locationIcon from '@/assets/images/icons/location.svg'
import messageIcon from '@/assets/images/icons/message.svg'
import phoneIcon from '@/assets/images/icons/phone.svg'
import logo from '@/assets/images/logo.svg'
import { useLayouts } from '@layouts/composable/useLayouts'

const buttoncontent = 'انضم الينا'
const iconStyle = (color) => {
  return {
    backgroundColor: `${color} !important`,
  }
}

const headers = [
  { title: 'الرئيسية' },
  { title: 'اهم الخصائص' },
  { title: 'مصطلحات النظام' },
  { title: 'المميزات' },
  { title: 'الباقات' },
  { title: 'المدونه' },
  { title: 'تواصل معنا' },
]

const contactInfos = [
  {
    label: 'رقم الجوال ',
    value: '01032014789',
    icon: phoneIcon,
    color: '#E89271',
  },
  {
    label: 'البريد الالكتروني ',
    value: 'aaaaaaaaaaaaaaa@aaaaa.com',
    icon: messageIcon,
    color: '#F0C274',
  },
  {
    label: 'العنوان ',
    value: 'يوضع هنا العنوان بالتفصيل ',
    icon: locationIcon,
    color: '#70A1E5',
  },
]

defineProps<{
  navItems: HorizontalNavItems
}>()

const socials = [
  { icon: 'mdi-facebook' },
  { icon: 'mdi-instagram' },
  { icon: 'mdi-youtube' },
  { icon: 'mdi-twitter' },
]

const { y: windowScrollY } = useWindowScroll()
const { width: windowWidth } = useWindowSize()

const router = useRouter()
const shallShowPageLoading = ref(false)

router.beforeEach(() => {
  shallShowPageLoading.value = true
})
router.afterEach(() => {
  shallShowPageLoading.value = false
})

const { _layoutClasses: layoutClasses, isNavbarBlurEnabled } = useLayouts()
</script>

<template>
  <div
    class="layout-wrapper"
    :class="layoutClasses(windowWidth, windowScrollY)"
  >
    <main class="layout-page-content">
      <div
        class="layout-navbar-and-nav-container d-flex"
        :class="isNavbarBlurEnabled && 'header-blur'"
      >
        <!-- 👉 Navbar -->
        <div class="layout-navbar">
          <div class="navbar-content-container">
            <slot name="navbar" />
          </div>
        </div>

        <!-- 👉 Navigation -->
        <div class="layout-horizontal-nav">
          <div class="horizontal-nav-content-container">
            <HorizontalNav :nav-items="navItems" />
          </div>
        </div>

        <!-- Buttons -->
        <div class="layout-navbar">
          <div class="navbar-content-container d-flex align-center gap-3">
            <!-- <AppBarSearch/> -->
            <div class="searchIcon" style="color: #000 !important">
              <VIcon icon="mdi-magnify" />
            </div>
            <NavBarI18n class="mx-1" />
            <MainButton
              :content="buttoncontent"
              class="headerButton d-flex align-center"
            />
          </div>
        </div>
      </div>
      <template v-if="$slots['content-loading']">
        <template v-if="shallShowPageLoading">
          <slot name="content-loading" />
        </template>
        <template v-else>
          <slot />
        </template>
      </template>
      <template v-else>
        <slot />
      </template>
    </main>

    <!-- 👉 Footer -->
    <!-- <footer class="layout-footer">

      <div class="footer-content-container">
        <slot name="footer" />
      </div>
    </footer> -->

    <footer class="footer">
      <VContainer>
        <VRow>
          <VCol cols="12" md="4" sm="12">
            <div>
              <div class="logo">
                <img :src="logo" />
              </div>
              <div class="content">
                <p>
                  نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة
                  أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع
                  بالتجزئة. نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل
                  لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً
                  للبيع بالتجزئة.
                </p>
              </div>
              <div class="socials">
                <VList>
                  <VListItem v-for="social in socials">
                    <VIcon :icon="social.icon" />
                  </VListItem>
                </VList>
              </div>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="12">
            <div>
              <h3>خريطة الموقع</h3>
              <VList class="headers-list">
                <div class="column">
                  <VListItem
                    v-for="(head, index) in headers.slice(0, 5)"
                    :key="index"
                    class="headers"
                  >
                    <VIcon icon="mdi-chevron-left" />
                    <span>{{ head.title }}</span>
                  </VListItem>
                </div>
                <div class="column">
                  <VListItem
                    v-for="(head, index) in headers.slice(5)"
                    :key="index"
                    class="headers"
                  >
                    <VIcon icon="mdi-chevron-left" />
                    <span>{{ head.title }}</span>
                  </VListItem>
                </div>
              </VList>
            </div>
          </VCol>
          <VCol cols="12" md="4" sm="12">
            <div>
              <h3>بيانات التواصل</h3>
              <div style="margin-block-start: 22px">
                <VRow v-for="contact in contactInfos" class="contactInfos">
                  <VCol cols="12" md="3" sm="3">
                    <div class="iconDiv" :style="iconStyle(contact.color)">
                      <img :src="contact.icon" />
                    </div>
                  </VCol>

                  <VCol
                    cols="12"
                    md="9"
                    sm="9"
                    style="padding: 12px 0"
                    class="d-flex align-center"
                  >
                    <div class="info">
                      <p>{{ contact.value }}</p>
                    </div>
                  </VCol>
                </VRow>
              </div>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </footer>
  </div>
</template>

<style lang="scss">
@use '@configured-variables' as variables;
@use '@layouts/styles/placeholders';
@use '@layouts/styles/mixins';

.layout-wrapper {
  &.layout-nav-type-horizontal {
    display: flex;
    flex-direction: column;

    // // TODO(v2): Check why we need height in vertical nav & min-height in horizontal nav
    // min-height: 100%;
    min-block-size: calc(var(--vh, 1vh) * 100);

    .layout-navbar-and-nav-container {
      z-index: 1;
    }

    .layout-navbar {
      z-index: variables.$layout-horizontal-nav-layout-navbar-z-index;
      block-size: variables.$layout-horizontal-nav-navbar-height;

      // ℹ️ For now we are not independently managing navbar and horizontal nav so we won't use below style to avoid conflicting with combo style of navbar and horizontal nav
      // If we add independent style of navbar & horizontal nav then we have to add :not for avoiding conflict with combo styles
      // .layout-navbar-sticky & {
      //   @extend %layout-navbar-sticky;
      // }

      // ℹ️ For now we are not independently managing navbar and horizontal nav so we won't use below style to avoid conflicting with combo style of navbar and horizontal nav
      // If we add independent style of navbar & horizontal nav then we have to add :not for avoiding conflict with combo styles
      // .layout-navbar-hidden & {
      //   @extend %layout-navbar-hidden;
      // }
    }

    // 👉 Navbar
    .navbar-content-container {
      @include mixins.boxed-content;
    }

    // 👉   Content height fixed
    &.layout-content-height-fixed {
      max-block-size: calc(var(--vh) * 100);

      .layout-page-content {
        overflow: hidden;

        > :first-child {
          max-block-size: 100%;
          overflow-y: auto;
        }
      }
    }

    // 👉 Footer
    // Boxed content
    .layout-footer {
      .footer-content-container {
        @include mixins.boxed-content;
      }
    }
  }

  // If both navbar & horizontal nav sticky
  &.layout-navbar-sticky.horizontal-nav-sticky {
    .layout-navbar-and-nav-container {
      position: sticky;
      inset-block-start: 0;
      will-change: transform;
    }
  }

  &.layout-navbar-hidden.horizontal-nav-hidden {
    .layout-navbar-and-nav-container {
      display: none;
    }
  }
}

// 👉 Horizontal nav nav
.layout-horizontal-nav {
  z-index: variables.$layout-horizontal-nav-z-index;

  // .horizontal-nav-sticky & {
  //   width: 100%;
  //   will-change: transform;
  //   position: sticky;
  //   top: 0;
  // }

  // .horizontal-nav-hidden & {
  //   display: none;
  // }

  .horizontal-nav-content-container {
    @include mixins.boxed-content(true);
  }
}

.footer {
  background: #f3f8f9;
  padding-block-start: 85px;

  .v-list,
  .v-list-item,
  svg {
    background: transparent !important;
  }

  .content {
    p {
      color: #000;
      font-size: 16px;
      font-weight: 300;
      inline-size: 70%;
      line-height: 29.98px;
      margin-block-start: 15px;
      text-align: justify;
    }
  }

  .socials {
    background: transparent;

    .v-list {
      display: flex;
      background: transparent !important;

      .v-list-item {
        background: transparent !important;

        svg {
          background: transparent !important;
          color: #000;
          font-size: 16px;
          font-weight: 400;
          line-height: 20px;
          transition: 0.3s all ease-in-out;

          &:hover {
            color: #157d99 !important;
            cursor: pointer;
            transition: 0.3s all ease-in-out;
          }
        }
      }
    }
  }

  .headers-list {
    display: flex;
    flex-wrap: wrap;

    .column {
      flex: 1;
    }

    .headers {
      display: flex;
      align-items: center;

      span,
      svg {
        color: #000;
        font-size: 16px !important;
        font-weight: 300;
        line-height: 29.98px;
      }
    }
  }

  .contactInfos {
    .info {
      h6 {
        color: #000 !important;
        font-size: 20px;
        font-weight: 700;
        line-height: 37.48px;
      }

      p {
        margin: 0;
        color: #000;
        font-size: 16px;
        font-weight: 500;
        line-height: 29.98px;
      }
    }
  }

  h3 {
    color: #000;
    font-size: 16px;
    font-weight: 700;
    line-height: 29.98px;
  }
}

.headerButton {
  button {
    margin-block-end: 0 !important;
  }
}
</style>
