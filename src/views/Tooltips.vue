<template>
  <main>
    <div class="px-4 sm:px-6">
      <div ref="containerRef" class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Tooltip and Hover Card Components - Origin UI"
          heading="Tooltip"
          description="A growing collection of tooltip and hover card components built with Vue and TailwindCSS."
        >
          A growing collection of over {{ totalComponents }} tooltip and hover card components built
          with <span class="text-vue">Vue</span> and TailwindCSS.
        </PageHeader>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent
            v-for="component in tooltipFiles"
            :key="component"
            class="flex justify-center items-center"
            :directory="tooltipDirectory"
            :componentName="component"
          />
          <DemoComponent
            v-for="component in hoverCardFiles"
            :key="component"
            class="flex justify-center items-center"
            :directory="hoverCardDirectory"
            :componentName="component"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import DemoComponent from '@/demo/DemoComponent.vue'
import PageHeader from '@/demo/PageHeader.vue'
import { computed, ref } from 'vue'

const tooltipFiles = ref([
  'Tooltip01',
  'Tooltip02',
  'Tooltip03',
  'Tooltip04',
  'Tooltip05',
  'Tooltip06',
  'Tooltip07',
  'Tooltip08',
  'Tooltip09'
])
const tooltipDirectory = 'tooltips'

const hoverCardFiles = ref(['HoverCard01', 'HoverCard02', 'HoverCard03'])
const hoverCardDirectory = 'hoverCards'

const totalComponents = computed(() => tooltipFiles.value.length + hoverCardFiles.value.length)
</script>
