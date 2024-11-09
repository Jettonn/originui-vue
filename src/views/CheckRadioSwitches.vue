<template>
  <main>
    <div class="px-4 sm:px-6">
      <div class="mx-auto w-full max-w-6xl">
        <PageHeader title="Checkbox, Radio, and Switch">
          A growing collection of {{ totalComponents }} button components built with Vue and
          TailwindCSS.
        </PageHeader>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent
            v-for="componentName in checboxFiles"
            :key="componentName"
            :directory="checboxDir"
            :component-name="componentName"
          />

          <DemoComponent
            v-for="componentName in radioFiles"
            :key="componentName"
            :directory="radioDir"
            :component-name="componentName"
          />

          <DemoComponent
            v-for="componentName in switchFiles"
            :key="componentName"
            :directory="switchDir"
            :component-name="componentName"
            class="flex justify-center"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import DemoComponent from '@/demo/DemoComponent.vue'
import PageHeader from '@/demo/PageHeader.vue'
import { computed } from 'vue'

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
</script>
