<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import SelectNative from '../ui/SelectNative.vue'
import { Clock } from 'lucide-vue-next'

const selectedOption = ref('s1')
</script>

<template>
  <div class="space-y-2">
    <Label for="select-03">Select with icon (native)</Label>
    <div class="group relative">
      <SelectNative v-model="selectedOption" id="select-03" class="ps-9">
        <option value="s1">00:00 AM - 11:59 PM</option>
        <option value="s2">01:00 AM - 12:59 PM</option>
        <option value="s3">02:00 AM - 01:59 PM</option>
        <option value="s4">03:00 AM - 02:59 PM</option>
      </SelectNative>
      <div
        class="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 group-has-[[disabled]]:opacity-50"
      >
        <Clock :size="16" :stroke-width="2" aria-hidden="true" />
      </div>
    </div>
  </div>
</template>
