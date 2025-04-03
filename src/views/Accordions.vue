<template>
  <main>
    <div class="px-4 sm:px-6">
      <div ref="containerRef" class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Accordion Components | Origin UI Vue"
          heading="Accordion"
          description="A growing collection of accordion components built with Vue and TailwindCSS."
        >
          A growing collection of over {{ accordionFiles.length }} accordion components built with
          <span class="text-vue">Vue</span>
          and TailwindCSS.
        </PageHeader>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 *:relative *:px-1 *:py-12 *:before:absolute *:before:bg-border/70 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-border/70 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] sm:*:px-8 xl:*:px-12"
        >
          <DemoComponent
            v-for="component in visibleComponents"
            :key="component"
            :directory="directory"
            :componentName="component"
          />
        </div>

        <div v-if="isLoading" class="flex justify-center my-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-vue"></div>
        </div>
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

const accordionFiles = ref([
  'Accordion01',
  'Accordion02',
  'Accordion03',
  'Accordion04',
  'Accordion05',
  'Accordion06',
  'Accordion07',
  'Accordion08',
  'Accordion09',
  'Accordion10',
  'Accordion11',
  'Accordion12',
  'Accordion13',
  'Accordion14',
  'Accordion15',
  'Accordion16',
  'Accordion17',
  'Accordion18',
  'Accordion19',
  'Accordion20'
])
const directory = 'accordions'

const visibleComponents = computed(() => {
  const startIndex = 0
  const endIndex = currentPage.value * itemsPerPage
  return accordionFiles.value.slice(startIndex, endIndex)
})

useInfiniteScroll(
  containerRef,
  async () => {
    if (isLoading.value || visibleComponents.value.length >= accordionFiles.value.length) return

    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 300))
    currentPage.value++
    isLoading.value = false
  },
  { distance: 10, direction: 'bottom', interval: 100 }
)
</script>
