/* eslint-disable import/order */
import i18n from '@/@core/plugins/i18n'
import layoutsPlugin from '@/@core/plugins/layouts'
import vuetify from '@/@core/plugins/vuetify'
import { loadFonts } from '@/@core/plugins/webfontloader'
import '@/@fake-db/db'
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'

import SkeletonDataTable from './@core/components/SkeletondataTable.vue'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import ApiService from '@core/services/ApiService'
import 'maz-ui/css/main.css' // or  import 'maz-ui/styles';
import Vue3Toasity, { toast, type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

//Wizard

import Vue3FormWizard from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/style.css'

loadFonts()
// Create vue app
const app = createApp(App)

app.use(Vue3Toasity, {
  theme: 'colored',
  autoClose: 3000,
  position: toast.POSITION.BOTTOM_RIGHT,
  // ...
} as ToastContainerOptions)

// Use plugins
loadFonts()
// initSentry()

// Register the SkeletonDataTable component globally
app.component('SkeletonDataTable', SkeletonDataTable)

ApiService.init(app)
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(Vue3FormWizard)
app.use(i18n)
// Mount vue app

app.mount('#app')
