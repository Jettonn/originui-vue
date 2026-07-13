<template>
  <main>
    <div class="px-4 sm:px-6">
      <div ref="containerRef" class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Tabs Components - Origin UI"
          heading="Tabs"
          description="A growing collection of tabs components built with Vue and TailwindCSS."
        >
          A growing collection of {{ totalComponents }} tabs components built with
          <span class="text-vue">Vue</span> and TailwindCSS.
        </PageHeader>

        <div
          class="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8 xl:*:px-12 overflow-hidden *:before:absolute *:before:bg-border/70 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-border/70 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0]"
        >
          <DemoComponent
            v-for="component in tabsFiles"
            :key="component"
            class="group/item relative col-span-12 sm:col-span-6 lg:col-span-6 text-center"
            :directory="tabsDirectory"
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

const tabsFiles = ref([
  'Tab01',
  'Tab02',
  'Tab03',
  'Tab04',
  'Tab05',
  'Tab06',
  'Tab07',
  'Tab08',
  'Tab09',
  'Tab10',
  'Tab11',
  'Tab12',
  'Tab13',
  'Tab14',
  'Tab15',
  'Tab16',
  'Tab17',
  'Tab18',
  'Tab19',
  'Tab20'
])
const tabsDirectory = 'tabs'

const totalComponents = computed(() => tabsFiles.value.length)
</script>
