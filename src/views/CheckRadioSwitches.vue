<template>
  <main>
    <div class="px-4 sm:px-6">
      <div ref="containerRef" class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Checkbox, Radio, and Switch Components | Origin UI Vue"
          heading="Checkbox, Radio, and Switch"
          description="A growing collection of checkbox, radio, and switch components built with Vue and TailwindCSS."
        >
          A growing collection of {{ totalComponents }} checkbox, radio, and switch components built
          with <span class="text-vue">Vue</span> and TailwindCSS.
        </PageHeader>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent
            v-for="component in visibleComponents"
            :key="component.name"
            :directory="component.directory"
            :component-name="component.name"
            :class="component.directory === switchDir ? 'flex justify-center' : ''"
          />
        </div>

        <!-- Loading indicator -->
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

const checboxDir = 'checkboxes'
const checboxFiles = [
  'Checkbox01',
  'Checkbox02',
  'Checkbox03',
  'Checkbox04',
  'Checkbox05',
  'Checkbox06',
  'Checkbox07',
  'Checkbox08',
  'Checkbox09',
  'Checkbox10',
  'Checkbox11',
  'Checkbox12',
  'Checkbox13',
  'Checkbox14',
  'Checkbox15',
  'Checkbox16',
  'Checkbox17',
  'Checkbox18'
]

const radioDir = 'radios'
const radioFiles = [
  'Radio01',
  'Radio02',
  'Radio03',
  'Radio04',
  'Radio05',
  'Radio06',
  'Radio07',
  'Radio08',
  'Radio09',
  'Radio10',
  'Radio11',
  'Radio12',
  'Radio13',
  'Radio14',
  'Radio15',
  'Radio16',
  'Radio17',
  'Radio18',
  'Radio19'
]

const switchDir = 'switches'
const switchFiles = [
  'Switch01',
  'Switch02',
  'Switch03',
  'Switch04',
  'Switch05',
  'Switch06',
  'Switch07',
  'Switch08',
  'Switch09',
  'Switch10',
  'Switch11',
  'Switch12',
  'Switch13',
  'Switch14',
  'Switch15',
  'Switch16',
  'Switch17'
]

const totalComponents = computed(() => checboxFiles.length + radioFiles.length + switchFiles.length)

const visibleComponents = computed(() => {
  const startIndex = 0
  const endIndex = currentPage.value * itemsPerPage
  const allComponents = [
    ...checboxFiles.map(name => ({ name, directory: checboxDir })),
    ...radioFiles.map(name => ({ name, directory: radioDir })),
    ...switchFiles.map(name => ({ name, directory: switchDir }))
  ]
  return allComponents.slice(startIndex, endIndex)
})

useInfiniteScroll(
  containerRef,
  async () => {
    if (isLoading.value || visibleComponents.value.length >= totalComponents.value) return

    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 300))
    currentPage.value++
    isLoading.value = false
  },
  { distance: 10, direction: 'bottom', interval: 100 }
)
</script>
