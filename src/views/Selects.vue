<template>
  <main>
    <div class="px-4 sm:px-6">
      <div ref="containerRef" class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Select"
          description="A growing collection of select components built with Vue and TailwindCSS."
        >
          A growing collection of over {{ selectFiles.length }} select components built with
          <span class="text-vue">Vue</span>
          and TailwindCSS.
        </PageHeader>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent
            v-for="component in visibleComponents"
            :key="component"
            :directory="directory"
            :componentName="component"
          />
        </div>

        <!-- Loading indicator -->
        <div v-if="isLoading" class="flex justify-center my-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-vue"></div>
        </div>

        <Cta />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import DemoComponent from '@/demo/DemoComponent.vue'
import PageHeader from '@/demo/PageHeader.vue'

const itemsPerPage = 12
const currentPage = ref(1)
const containerRef = ref<HTMLElement | null>(null)
const isLoading = ref(false)

const selectFiles = ref([
  'Select01',
  'Select02',
  'Select03',
  'Select04',
  'Select05',
  'Select06',
  'Select07',
  'Select08',
  'Select09',
  'Select10',
  'Select11',
  'Select12',
  'Select13',
  'Select14',
  'Select15',
  'Select16',
  'Select17',
  'Select18',
  'Select19',
  'Select20',
  'Select21',
  'Select22',
  'Select23',
  'Select24',
  'Select25',
  'Select26',
  'Select27',
  'Select28',
  'Select29',
  'Select30',
  'Select31',
  'Select32',
  'Select33',
  'Select34',
  'Select35',
  'Select36',
  'Select37',
  'Select38',
  'Select39',
  'Select40',
  'Select41',
  'Select42',
  'Select43',
  'Select44',
  'Select45',
  'Select46',
  'Select47',
  'Select48',
  'Select49',
  'Select50',
  'Select51'
])
const directory = 'selects'

const visibleComponents = computed(() => {
  const startIndex = 0
  const endIndex = currentPage.value * itemsPerPage
  return selectFiles.value.slice(startIndex, endIndex)
})

useInfiniteScroll(
  containerRef,
  async () => {
    if (isLoading.value || visibleComponents.value.length >= selectFiles.value.length) return

    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 300))
    currentPage.value++
    isLoading.value = false
  },
  { distance: 10, direction: 'bottom', interval: 100 }
)
</script>
