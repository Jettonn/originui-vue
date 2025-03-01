<template>
  <main>
    <div class="px-4 sm:px-6">
      <div ref="containerRef" class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Avatar Components | Origin UI Vue"
          heading="Avatar"
          description="A growing collection of avatar components built with Vue and TailwindCSS."
        >
          A growing collection of over {{ avatarFiles.length }} avatar components built with
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
            class="flex justify-center"
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
import DemoComponent from '@/demo/DemoComponent.vue'
import PageHeader from '@/demo/PageHeader.vue'
import { useInfiniteScroll } from '@vueuse/core'
import { computed, ref } from 'vue'

const itemsPerPage = 12
const currentPage = ref(1)
const containerRef = ref<HTMLElement | null>(null)
const isLoading = ref(false)

const avatarFiles = ref([
  'Avatar01',
  'Avatar02',
  'Avatar03',
  'Avatar04',
  'Avatar05',
  'Avatar06',
  'Avatar07',
  'Avatar08',
  'Avatar09',
  'Avatar10',
  'Avatar11',
  'Avatar12',
  'Avatar13',
  'Avatar14',
  'Avatar15',
  'Avatar16',
  'Avatar17',
  'Avatar18',
  'Avatar19',
  'Avatar20',
  'Avatar21',
  'Avatar22',
  'Avatar23'
])
const directory = 'avatars'

const visibleComponents = computed(() => {
  const startIndex = 0
  const endIndex = currentPage.value * itemsPerPage
  return avatarFiles.value.slice(startIndex, endIndex)
})

useInfiniteScroll(
  containerRef,
  async () => {
    if (isLoading.value || visibleComponents.value.length >= avatarFiles.value.length) return

    isLoading.value = true
    await new Promise(resolve => setTimeout(resolve, 300))
    currentPage.value++
    isLoading.value = false
  },
  { distance: 10, direction: 'bottom', interval: 100 }
)
</script>
