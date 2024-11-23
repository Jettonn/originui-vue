<script setup lang="ts">
import Label from '@/components/ui/Label.vue'
import Slider from '@/components/ui/Slider.vue'
</script>

<template>
  <div class="space-y-4">
    <legend class="text-sm font-medium text-foreground">Equalizer</legend>
    <div class="flex h-48 justify-center gap-8">
      <div class="flex flex-col items-center gap-2">
        <Slider
          :model-value="[2]"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
          aria-label="60 Hz"
          show-tooltip
        />
        <Label class="flex w-0 justify-center text-xs text-muted-foreground">60</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          :model-value="[1]"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
          aria-label="250 Hz"
          show-tooltip
        />
        <Label class="flex w-0 justify-center text-xs text-muted-foreground">250</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          :model-value="[-1]"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
          aria-label="1k"
          show-tooltip
        />
        <Label class="flex w-0 justify-center text-xs text-muted-foreground">1k</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          :model-value="[-3]"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
          aria-label="4k"
          show-tooltip
        />
        <Label class="flex w-0 justify-center text-xs text-muted-foreground">4k</Label>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Slider
          :model-value="[2]"
          :min="-5"
          :max="5"
          orientation="vertical"
          class="[&>:last-child>span]:h-6 [&>:last-child>span]:w-4 [&>:last-child>span]:rounded"
          aria-label="16k"
          show-tooltip
        />
        <Label class="flex w-0 justify-center text-xs text-muted-foreground">16K</Label>
      </div>
    </div>
  </div>
</template>
