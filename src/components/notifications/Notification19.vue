<script setup lang="ts">
import { h } from 'vue'
import { ToastAction } from '../ui/Toast'
import { useToast } from '@/composables/useToast'
import Button from '../ui/Button.vue'

const { toast } = useToast()

const showToast = () => {
  toast({
    title: "We couldn't complete your request!",
    description: 'There was a problem with your request.',
    action: h(ToastAction, { altText: 'Try again' }, () => [h('span', 'Try again')])
  })
}
</script>

<template>
  <Button variant="outline" @click="showToast">Show toast</Button>
</template>
