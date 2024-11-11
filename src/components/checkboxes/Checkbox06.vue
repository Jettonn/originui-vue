<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox
      id="checkbox-06"
      class="rounded-full data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
      v-model="checked"
    />
    <Label
      for="checkbox-06"
      class="peer-data-[state=checked]:line-throgh relative after:absolute after:left-0 after:top-1/2 after:h-px after:w-full after:origin-bottom after:-translate-y-1/2 after:scale-x-0 after:bg-muted-foreground after:transition-transform after:ease-in-out peer-data-[state=checked]:text-muted-foreground peer-data-[state=checked]:after:origin-bottom peer-data-[state=checked]:after:scale-x-100"
    >
      Fancy todo item
    </Label>
  </div>
</template>
