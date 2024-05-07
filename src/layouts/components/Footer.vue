<template>
  <!-- 👉 Footer: left content -->

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
                لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع
                بالتجزئة.
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
                  <img src="@/assets/images/Icon-Stroke.svg" />
                  <span>{{ head.title }}</span>
                </VListItem>
              </div>
              <div class="column">
                <VListItem
                  v-for="(head, index) in headers.slice(5)"
                  :key="index"
                  class="headers"
                >
                  <img src="@/assets/images/Icon-Stroke.svg" />
                  <span>{{ head.title }}</span>
                </VListItem>
              </div>
            </VList>
          </div>
        </VCol>
        <VCol cols="12" md="4" sm="12">
          <div>
            <h3>بيانات التواصل</h3>
            <div style="margin-block-start: 39px">
              <VRow
                v-for="contact in contactInfos"
                class="contactInfos"
                style="gap: 8px; margin-block-end: 25px"
              >
                <div class="iconDiv" :style="iconStyle(contact.color)">
                  <img :src="contact.icon" />
                </div>

                <div class="info">
                  <p>{{ contact.value }}</p>
                </div>
              </VRow>
            </div>
          </div>
        </VCol>
      </VRow>
    </VContainer>
  </footer>
</template>
<script setup lang="ts">
import locationIcon from '@/assets/images/icons/location.svg'
import messageIcon from '@/assets/images/icons/message.svg'
import phoneIcon from '@/assets/images/icons/phone.svg'
import logo from '@/assets/images/logo.svg'

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
</script>

<style lang="scss"></style>
