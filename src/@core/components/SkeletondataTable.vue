<template>
  <div
    :class="themeConfig"
    class="skeleton-data-table v-table v-table--has-bottom v-table--hover v-table--density-default v-data-table text-no-wrap rounded-0"
  >
    <v-table style="width: 100%">
      <thead class="v-data-table__thead">
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            style="text-align: center"
          >
            {{ $t(header.title) }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in skeletonRows" :key="row">
          <td v-for="(header, index) in headers" :key="index">
            <div class="skeleton-cell"></div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { themeConfig } from '@themeConfig'

export default {
  props: {
    headers: {
      type: Array,
      required: true,
    },
    rowCount: {
      type: Number,
      default: 5, // Default number of rows
    },
  },
  setup(props) {
    const skeletonRows = ref([])

    // Generate skeleton rows
    for (let i = 0; i < props.rowCount; i++) {
      skeletonRows.value.push(i)
    }

    return {
      skeletonRows,
    }
  },
}
</script>

<style scoped>
/* Add your styling for the skeleton data table here */
.skeleton-data-table {
  /* Add styling for the data table container */
}

.skeleton-data-table table {
  inline-size: 100%;
}

table thead {
  block-size: 56px !important;
}

.skeleton-cell {
  border-radius: 3px;
  animation: loading-animation-181d2a9b 1.5s infinite;
  background-color: rgb(var(--v-table-header-background)) !important;
  block-size: 40px;
  inline-size: 96%;
  margin-block: 9px;
  margin-inline: auto;
}

@keyframes loading-animation {
  0% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.6;
  }
}
</style>
