<script setup lang="ts">
import axios from '@axios'

interface UserData {
  id: number | null
  name: string
  username: string
  phone: string
  email: string

  avatar: string
}

interface Props {
  userData?: UserData
  isDialogVisible: boolean
}

interface Emit {
  (e: 'submit', value: UserData): void
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  userData: () => ({
    id: 0,
    name: '',
    username: '',
    phone: '',
    email: '',

    avatar: '',
  }),
})

const emit = defineEmits<Emit>()

const userData = ref<UserData>(structuredClone(toRaw(props.userData)))

watch(props, () => {
  userData.value = structuredClone(toRaw(props.userData))
})

const onFormSubmit = () => {
  emit('update:isDialogVisible', false)
  // emit('submit', userData.value)

  axios({
    method: 'put',
    url: '/user/users/' + userData._rawValue.id,
    data: {
      name: userData._rawValue.name,
      username: userData._rawValue.username,
      email: userData._rawValue.email,
      phone: userData._rawValue.phone,
    },
  }).then((res) => {
    // userData._rawValue = res.data.body.user
  })
}

const onFormReset = () => {
  userData.value = structuredClone(toRaw(props.userData))

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
            <!-- 👉 Full Name -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="userData.name"
                label="Name"
                placeholder="John Doe"
              />
            </VCol>

            <!-- 👉 Username -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="userData.username"
                label="Username"
                placeholder="johndoe"
              />
            </VCol>

            <!-- 👉 Billing Email -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="userData.email"
                label="Email"
                placeholder="johndoe@email.com"
              />
            </VCol>

            <!-- 👉 phone -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="userData.phone"
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
