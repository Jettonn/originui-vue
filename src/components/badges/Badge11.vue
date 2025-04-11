<script setup lang="ts">
import Checkbox from '@/components/ui/Checkbox.vue'
import { badgeVariants, cn } from '@/lib/utils'
import { Check } from 'lucide-vue-next'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <label
    :class="
      cn(
        badgeVariants({ variant: 'default' }),
        'cursor-pointer hover:bg-primary/80 has-data-[state=unchecked]:bg-muted has-data-[state=unchecked]:text-muted-foreground has-focus-visible:outline-2 has-focus-visible:outline-ring/70'
      )
    "
  >
    <div class="flex items-center gap-1">
      <Checkbox
        id="badge-selectable"
        class="peer sr-only after:absolute after:inset-0"
        v-model="checked"
      />
      <Check
        :size="12"
        :stroke-width="2"
        class="hidden peer-data-[state=checked]:block"
        aria-hidden="true"
      />
      <span class="select-none">Selectable</span>
    </div>
  </label>
</template>
