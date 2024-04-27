<script setup lang="ts">
import axios from '@axios'

const plans = [
  { title: 'Free', value: 'free' },
  { title: 'Premium', value: 'premium' },
]

interface featureData {
  id: number | null
  title: string
  slug: string
  plan: string
}

interface Props {
  featureData?: featureData
  isDialogVisible: boolean
}

interface Emit {
  (e: 'submit', value: featureData): void
  (e: 'update:isDialogVisible', val: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  featureData: () => ({
    id: 0,
    title: '',
    slug: '',
    paln: '',
  }),
})

const emit = defineEmits<Emit>()

const featureData = ref<featureData>(structuredClone(toRaw(props.featureData)))

watch(props, () => {
  featureData.value = structuredClone(toRaw(props.featureData))
})

const onFormSubmit = () => {
  emit('update:isDialogVisible', false)

  axios({
    method: 'put',
    url: '/feature-toggle/features/' + featureData._rawValue.id,
    data: {
      title: featureData._rawValue.title,
      slug: featureData._rawValue.slug,
      plan: featureData._rawValue.plan,
    },
  }).then((res) => {})
}

const onFormReset = () => {
  featureData.value = structuredClone(toRaw(props.featureData))

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
        <VCardTitle class="text-h5 mb-2"> Edit Feature Information </VCardTitle>
      </VCardItem>

      <VCardText>
        <!-- 👉 Form -->
        <VForm class="mt-6" @submit.prevent="onFormSubmit">
          <VRow>
            <!-- 👉 Title -->
            <VCol cols="12" md="6">
              <VTextField
                v-model="featureData.title"
                label="Title"
                placeholder="John Doe"
                readonly
              />
            </VCol>

            <!-- 👉 Slug -->
            <VCol cols="12" md="6">
              <VTextField
                readonly
                v-model="featureData.slug"
                label="Slug"
                placeholder="johndoe"
              />
            </VCol>

            <!-- 👉 Select Role -->
            <VCol cols="12" sm="4">
              <VSelect
                v-model="featureData.plan"
                label="Select Plan"
                placeholder="Select Plan"
                :items="plans"
                clearable
                clear-icon="mdi-close"
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
