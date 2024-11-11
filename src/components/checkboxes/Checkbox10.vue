<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'

const checked = ref(true)
</script>

<template>
  <div class="flex items-start gap-2">
    <Checkbox v-model="checked" id="checkbox-10" aria-describedby="checkbox-10-description" />
    <div class="grid grow gap-2">
      <Label for="checkbox-10">
        Label
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground">
          (Sublabel)
        </span>
      </Label>
      <p id="checkbox-10-description" class="text-xs text-muted-foreground">
        You can use this checkbox with a label and a description.
      </p>
    </div>
  </div>
</template>
