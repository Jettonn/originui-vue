<template>
  <main>
    <div class="px-4 sm:px-6">
      <div class="mx-auto w-full max-w-6xl">
        <PageHeader title="Input">
          A growing collection of over 50 input components built with
          <span class="text-vue">Vue</span>
          and TailwindCSS.
        </PageHeader>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent
            v-for="componentName in inputFiles"
            :key="componentName"
            :directory="directory"
            :componentName="componentName"
          />
        </div>

        <Cta />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import DemoComponent from '@/demo/DemoComponent.vue'
import PageHeader from '@/demo/PageHeader.vue'
import { ref } from 'vue'

// Define an array of input file names
const inputFiles = ref([
  'Input01',
  'Input02',
  'Input03',
  'Input04',
  'Input05',
  'Input06',
  'Input07',
  'Input08',
  'Input09',
  'Input10',
  'Input11',
  'Input12',
  'Input13',
  'Input14',
  'Input15',
  'Input16',
  'Input17',
  'Input18',
  'Input19',
  'Input20',
  'Input21',
  'Input22',
  'Input23',
  'Input24',
  'Input25',
  'Input26',
  'Input27',
  'Input28',
  'Input29',
  'Input30',
  'Input31',
  'Input32',
  'Input33',
  'Input34',
  'Input35',
  'Input36',
  'Input37',
  'Input38',
  'Input39',
  'Input40',
  'Input41',
  'Input42',
  'Input43',
  'Input44',
  'Input45',
  'Input46',
  'Input47',
  'Input48',
  'Input49',
  'Input50'
  // 'Input51'
])

const directory = 'inputs'
</script>
