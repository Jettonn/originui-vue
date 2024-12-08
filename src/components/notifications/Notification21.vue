<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { toast } from 'vue-sonner'

const handleClick = () => {
  toast('Your request was completed!', {
    description: 'It was a long journey, but we made it!',
    action: {
      label: 'Undo',
      onClick: () => console.log('Undo')
    }
  })
}
</script>

<template>
  <Button variant="outline" @click="handleClick"> Show sonner </Button>
</template>
