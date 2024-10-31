<template>
  <main>
    <div class="px-4 sm:px-6">
      <div class="mx-auto w-full max-w-6xl">
        <PageHeader title="Button">
          A growing collection of over 51 button components built with
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
            class="flex justify-center"
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
  'Button01',
  'Button02',
  'Button03',
  'Button04',
  'Button05',
  'Button06',
  'Button07',
  'Button08',
  'Button09',
  'Button10',
  'Button11',
  'Button12',
  'Button13',
  'Button14',
  'Button15',
  'Button16',
  'Button17',
  'Button18',
  'Button19',
  'Button20',
  'Button21',
  'Button22',
  'Button23',
  'Button24',
  'Button25',
  'Button26',
  'Button27',
  'Button28',
  'Button29',
  'Button30',
  'Button31',
  'Button32',
  'Button33',
  'Button34',
  'Button35',
  'Button36',
  'Button37',
  'Button38',
  'Button39',
  'Button40',
  'Button41',
  'Button42',
  'Button43',
  'Button44',
  'Button45',
  'Button46',
  'Button47',
  'Button48',
  'Button49',
  'Button50',
  'Button51'
])

const directory = 'buttons'
</script>
