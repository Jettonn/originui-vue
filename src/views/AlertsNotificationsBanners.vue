<template>
  <main>
    <div class="px-4 sm:px-6">
      <div ref="containerRef" class="mx-auto w-full max-w-6xl">
        <PageHeader
          title="Alert, Notification, and Banner Components - Origin UI"
          heading="Alert, Notification, and Banner"
          description="A growing collection of alert and banner components built with Vue and TailwindCSS."
        >
          A growing collection of over {{ totalComponents }} alert and banner components built with
          <span class="text-vue">Vue</span>
          and TailwindCSS.
        </PageHeader>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden border-b border-border/70 sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent
            v-for="component in alertFiles"
            :key="component"
            :directory="alertDirectory"
            :componentName="component"
          />
        </div>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden border-b border-border/70 sm:grid-cols-2 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent
            v-for="component in notificationFiles"
            :key="component"
            :directory="notificationDirectory"
            :componentName="component"
            class="flex items-center justify-center"
          />
        </div>

        <div
          class="grid max-w-6xl grid-cols-1 overflow-hidden [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:bg-border/70 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-border/70 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12"
        >
          <DemoComponent directory="notifications" componentName="Notification23" />
          <DemoComponent
            v-for="component in bannerFiles"
            :key="component"
            :directory="bannerDirectory"
            :componentName="component"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import DemoComponent from '@/demo/DemoComponent.vue'
import PageHeader from '@/demo/PageHeader.vue'

const alertDirectory = 'alerts'
const alertFiles = ref([
  'Alert01',
  'Alert02',
  'Alert03',
  'Alert04',
  'Alert05',
  'Alert06',
  'Alert07',
  'Alert08',
  'Alert09',
  'Alert10',
  'Alert11',
  'Alert12'
])

const notificationDirectory = 'notifications'
const notificationFiles = ref([
  'Notification01',
  'Notification02',
  'Notification03',
  'Notification04',
  'Notification05',
  'Notification06',
  'Notification07',
  'Notification08',
  'Notification09',
  'Notification10',
  'Notification11',
  'Notification12',
  'Notification13',
  'Notification14',
  'Notification15',
  'Notification16',
  'Notification17',
  'Notification18',
  'Notification19',
  'Notification20',
  'Notification21',
  'Notification22'
])

const bannerDirectory = 'banners'
const bannerFiles = ref([
  'Banner01',
  'Banner02',
  'Banner03',
  'Banner04',
  'Banner05',
  'Banner06',
  'Banner07',
  'Banner08',
  'Banner09',
  'Banner10',
  'Banner11',
  'Banner12'
])

const totalComponents = computed(
  () => alertFiles.value.length + notificationFiles.value.length + bannerFiles.value.length + 1
)
</script>
