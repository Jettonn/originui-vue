<template>
  <main>
    <div class="px-4 sm:px-6">
      <div class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Stepper Components - COSS UI"
          heading="Stepper"
          description="A growing collection of stepper components built with Vue and TailwindCSS."
        >
          A growing collection of {{ totalComponents }} stepper components built with
          <span class="text-vue">Vue</span> and TailwindCSS.
        </PageHeader>

        <div
          class="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8 xl:*:px-12 overflow-hidden *:before:absolute *:before:bg-border/70 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-border/70 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0]"
        >
          <DemoComponent
            v-for="component in stepperFiles"
            :key="component"
            class="group/item relative col-span-12 flex items-center justify-center sm:col-span-6"
            :directory="stepperDirectory"
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

const stepperFiles = ref(['Stepper01', 'Stepper02'])
const stepperDirectory = 'steppers'

const totalComponents = computed(() => stepperFiles.value.length)
</script>
