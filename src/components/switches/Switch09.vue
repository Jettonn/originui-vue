<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import Switch from '@/components/ui/Switch.vue'

const checked = ref(false)

const toggleSwitch = () => {
  checked.value = !checked.value
}
</script>

<template>
  <div>
    <Label for="switch-09" class="sr-only">Toggle switch</Label>
    <div
      class="group inline-flex items-center gap-2"
      :data-state="checked ? 'checked' : 'unchecked'"
    >
      <button
        id="switch-off-label"
        class="flex-1 cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
        @click="toggleSwitch"
      >
        Off
      </button>
      <Switch v-model="checked" id="switch-09" aria-labelledby="switch-off-label switch-on-label" />
      <button
        id="switch-on-label"
        class="flex-1 cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
        @click="toggleSwitch"
      >
        On
      </button>
    </div>
  </div>
</template>
