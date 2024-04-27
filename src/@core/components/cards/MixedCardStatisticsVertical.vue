<script setup lang="ts">
interface Props {
  title1: string
  color1?: string
  icon1: string
  stats1: string
  change1: number
  subtitle1: string

  title2: string
  color2?: string
  icon2: string
  stats2: string
  change2: number
  subtitle2: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
})

const isPositive = controlledComputed(
  () => props.change,
  () => Math.sign(props.change) === 1
)
</script>

<template>
  <VCard height="">
    <VCardText class="d-flex" style="justify-content: space-between">
      <VRow>
        <VCol cols="12" sm="12" md="6" lg="6">
          <VAvatar
            style="margin-bottom: 25px"
            v-if="props.icon1"
            rounded
            size="38"
            variant="tonal"
            :color="props.color1"
          >
            <VIcon :icon="props.icon1" size="24" />
          </VAvatar>
          <p class="text-sm">
            {{ $t(props.title1) }}
          </p>
          <VSpacer />
          <h3 class="text-h3 me-2 mt-2 mb-1" v-if="props.stats1 == 0">
            {{ props.stats1 }}
          </h3>
          <h3 class="text-h3 me-2 mt-2 mb-1" v-else>
            {{
              props.stats1
                ? props.stats1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : ''
            }}
          </h3>
        </VCol>
        <VCol cols="12" sm="12" md="6" lg="6">
          <VAvatar
            style="margin-bottom: 25px"
            v-if="props.icon2"
            rounded
            size="38"
            variant="tonal"
            :color="props.color2"
          >
            <VIcon :icon="props.icon2" size="24" />
          </VAvatar>
          <p class="text-sm">
            {{ $t(props.title2) }}
          </p>
          <VSpacer />
          <h3 class="text-h3 me-2 mt-2 mb-1" v-if="props.stats2 == 0">
            {{ props.stats2 }}
          </h3>
          <h3 class="text-h3 me-2 mt-2 mb-1" v-else>
            {{
              props.stats2
                ? props.stats2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                : ''
            }}
          </h3>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
