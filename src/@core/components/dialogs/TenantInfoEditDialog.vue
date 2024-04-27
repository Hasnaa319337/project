<script setup lang="ts">
import axios from '@axios'

interface tenantData {
  id: number | null

  username: string
  phone: string
  email: string
  slug: string
}

interface Props {
  tenantData?: tenantData
  isDialogVisible: boolean
}

interface Emit {
  (e: 'submit', value: tenantData): void
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  tenantData: () => ({
    id: 0,

    username: '',
    phone: '',
    email: '',
    slug: '',
    status: '',
    plan: '',
  }),
})

const emit = defineEmits<Emit>()

const tenantData = ref<tenantData>(structuredClone(toRaw(props.tenantData)))

watch(props, () => {
  tenantData.value = structuredClone(toRaw(props.tenantData))
})

const onFormSubmit = () => {
  emit('update:isDialogVisible', false)
  // emit('submit', tenantData.value)

  axios({
    method: 'put',
    url: '/tenancy/tenants/' + tenantData._rawValue.id,
    data: {
      username: tenantData._rawValue.username,
      email: tenantData._rawValue.email,
      phone: tenantData._rawValue.phone,
      slug: tenantData._rawValue.password,
    },
  }).then((res) => {
    // tenantData._rawValue = res.data.body.user
  })
}

const onFormReset = () => {
  tenantData.value = structuredClone(toRaw(props.tenantData))

  emit('update:isDialogVisible', false)
}

const dialogVisibleUpdate = (val: boolean) => {
  emit('update:isDialogVisible', val)
}
</script>

<template>
  <VDialog
    :width="$vuetify.display.smAndDown ? 'auto' : 800"
    :model-value="props.isDialogVisible"
    @update:model-value="dialogVisibleUpdate"
  >
    <VCard class="pa-sm-9 pa-5">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn variant="text" size="small" @click="onFormReset" />

      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-2"> Edit User Information </VCardTitle>
        <VCardSubtitle>
          Updating user details will receive a privacy audit.
        </VCardSubtitle>
      </VCardItem>

      <VCardText>
        <!-- 👉 Form -->
        <VForm class="mt-6" @submit.prevent="onFormSubmit">
          <VRow>
            <!-- 👉 Username -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="tenantData.username"
                label="Username"
                placeholder="johndoe"
              />
            </VCol>

            <!-- 👉 Slug -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="tenantData.slug"
                label="Slug"
                placeholder="johndoe"
              />
            </VCol>

            <!-- 👉 Billing Email -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="tenantData.email"
                label="Email"
                placeholder="johndoe@email.com"
              />
            </VCol>

            <!-- 👉 phone -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="tenantData.phone"
                label="Phone"
                placeholder="+1 9876543210"
              />
            </VCol>

            <!-- 👉 Submit and Cancel -->
            <VCol cols="12" class="d-flex flex-wrap justify-center gap-4">
              <VBtn type="submit"> Submit </VBtn>

              <VBtn color="secondary" variant="outlined" @click="onFormReset">
                Cancel
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </VDialog>
</template>
