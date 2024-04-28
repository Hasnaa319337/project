<script lang="ts" setup>
const subtitle = 'تواصل معنا'
const mainPargraph =
  '      نظام POS متعدد الاستخدامات الخاص بنا هو الحل الأمثل لإدارة أعمالك بكفاءة ومرونة. سواء كنت تدير مطعماً، متجراً للبيع بالتجزئة.'

const buttonContent = 'ارسال'
import locationIcon from '@/assets/images/icons/location.svg';
import messageIcon from '@/assets/images/icons/message.svg';
import phoneIcon from '@/assets/images/icons/phone.svg';
const contacts = [
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
const iconStyle = (color) => {
  return {
    backgroundColor: `${color} !important`,
  }
}
</script>

<template>
  <div class="d-flex contact" style="flex-direction: column;">
    <!-- Start Heading -->

    <div class="d-flex justify-center align-center">
      <AppHeading :subtitle="subtitle" :mainPargraph="mainPargraph" />
    </div>

    <!-- End Heading -->

    <!-- Start:: contact info -->
    <VRow>
      <VCol cols="12" md="6" sm="12">
        <span class="card-title">اتصل بنا</span>
        <div class="single-contact">
         
          <div class="contact-form">
            <div class="input-container">
              <input placeholder="الاسم" class="input-field" type="text" />
              <label for="name" class="input-label">الاسم</label>
            </div>

            <div class="input-container">
              <input placeholder="الهاتف" class="input-field" type="text" />
              <label for="phone" class="input-label">الهاتف</label>
            </div>
            <div class="input-container">
              <textarea placeholder="ملاحظات" class="input-field" type="text" />
              <label for="notes" class="input-label">ملاحظات</label>
            </div>

            <MainButton :content="buttonContent" class="buttonDiv" />
          </div>
        </div>
      </VCol>
      <VCol cols="12" md="6" sm="12">
        <span class="card-title"> معلومات التواصل</span>
        <div class="single-contact">
          <div class="contact-info">
            <div v-for="contact in contacts" class="single-contact-info">
              <div class="iconDiv" :style="iconStyle(contact.color)">
                <img :src="contact.icon" />
              </div>
              <div class="info">
                <h6>{{ contact.label }}</h6>
                <p>{{ contact.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </VCol>
    </VRow>
    <!-- End:: contact info -->
  </div>
</template>

<style lang="scss">
.contact {
  .card-title {
    display: block;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    line-height: 44.98px;
    margin-block-end: 10px;

    // margin-inline-start: 10px;
  }

  .single-contact {
    padding: 5px;
    border: 1px solid #b2d3e2;
    border-radius: 48px;
    inline-size: 100%;

    .contact-form,
    .contact-info {
      display: flex;
      flex-direction: column;
      padding: 5px;
      gap: 14px;
      margin-block-start: 10px;

      input,
      textarea {
        border: none;
        border-radius: 30px !important;
        background-color: #f3f8f9;
        block-size: 60px !important;
        outline: 0;
        padding-block: 5px;
        padding-inline: 22px;

        &::placeholder {
          color: #000;
          font-family: Cairo;
          font-size: 16px;
          font-weight: 500;
          line-height: 29.98px;
        }

        &:focus-visible {
          border: 1px solid #3a8cb8 !important;
        }
      }

      textarea {
        block-size: 104px !important;
        padding-block-start: 23px;
      }

      .buttonDiv {
        block-size: 55px;
        inline-size: 120px;

        button {
          padding: 0;
          border-radius: 27.5px;
          margin: 0;
          block-size: 100%;
          inline-size: 100%;
        }
      }
    }

    .single-contact-info {
      display: flex;
      border-radius: 32px;
      background-color: #f3f8f9;
      gap: 10px;
      padding-block: 16px 0;
      padding-inline: 27px;

      .iconDiv {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        block-size: 64px;
        inline-size: 64px;
      }

      .info {
        h6 {
          color: #000;
          font-size: 20px;
          font-weight: 700;
          line-height: 37.48px;
        }

        p {
          color: #000;
          font-size: 16px;
          font-weight: 500;
          line-height: 29.98px;
        }
      }
    }

    /* Input container */
    .input-container {
      position: relative;
    }

    /* Input field */
    .input-field {
      display: block;
      padding: 10px;
      border: none;
      background-color: transparent;
      border-block-end: 2px solid #ccc;
      font-size: 16px;
      inline-size: 100%;
      outline: none;
    }

    /* Input label */
    .input-label {
      position: absolute;
      color: rgba(204, 204, 204, 0%);
      font-size: 15px;
      inset-block-start: 0;
      inset-block-start: 3px !important;
      inset-inline-start: 22px;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    /* Input field:focus styles */
    .input-field:focus + .input-label {
      color: #000;
      font-size: 12px;
      font-weight: 300;
      inset-block-start: -20px;
      line-height: 22.49px;
      margin-block-end: 2px;
    }

    .input-field:focus::placeholder {
      color: transparent !important;
    }
  }
}
</style>
