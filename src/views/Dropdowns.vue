<template>
  <main>
    <div class="px-4 sm:px-6">
      <div class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Dropdown Menu Components - COSS UI"
          heading="Dropdown Menu"
          description="A growing collection of dropdown menu components built with Vue and TailwindCSS."
        >
          A growing collection of {{ totalComponents }} dropdown menu components built with
          <span class="text-vue">Vue</span> and TailwindCSS.
        </PageHeader>

        <div
          class="-m-px grid grid-cols-12 *:px-1 *:py-12 *:not-first:-ms-px *:not-first:-mt-px sm:*:px-8 xl:*:px-12 overflow-hidden *:before:absolute *:before:bg-border/70 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-border/70 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0]"
        >
          <DemoComponent
            v-for="component in dropdownFiles"
            :key="component"
            class="group/item relative col-span-12 flex items-center justify-center sm:col-span-6"
            :directory="dropdownDirectory"
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

const dropdownFiles = ref(['Dropdown01', 'Dropdown02'])
const dropdownDirectory = 'dropdowns'

const totalComponents = computed(() => dropdownFiles.value.length)
</script>
