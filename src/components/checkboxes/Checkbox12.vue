<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-start gap-2">
    <Checkbox
      v-model="checked"
      id="checkbox-12"
      class="order-1"
      aria-describedby="checkbox-12-description"
    />
    <div class="grid grow gap-2">
      <Label for="checkbox-12">
        Label
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
          (Sublabel)
        </span>
      </Label>
      <p id="checkbox-12-description" class="text-xs text-muted-foreground">
        You can use this checkbox with a label and a description.
      </p>
    </div>
  </div>
</template>
