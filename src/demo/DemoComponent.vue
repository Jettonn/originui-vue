<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { cn } from '@/lib/utils'
import { defineAsyncComponent } from 'vue'
import CopyButton from './CopyButton.vue'

interface Props {
  directory: string
  componentName: string
  className?: string
}

const props = defineProps<Props>()

const Component = defineAsyncComponent(
  () => import(`@/components/${props.directory}/${props.componentName}.vue`)
)

const source = ref('')

const loadSource = async () => {
  try {
    const rawModule = await import(`@/components/${props.directory}/${props.componentName}.vue?raw`)
    source.value = rawModule.default
  } catch (error) {
    console.error('Failed to load component source:', error)
    source.value = ''
  }
}

onMounted(() => {
  loadSource()
})
</script>

<template>
  <div :class="cn('group/item relative', className)">
    <component :is="Component" />
    <CopyButton :code="source" />
  </div>
</template>
