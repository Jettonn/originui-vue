<script setup lang="ts">
import { ref } from 'vue'
import Label from '../ui/Label.vue'
import Switch from '../ui/Switch.vue'
import { Moon, Sun } from 'lucide-vue-next'

const checked = ref(false)

const toggleSwitch = () => {
  checked.value = !checked.value
}
</script>

<template>
  <div>
    <Label for="switch-11" class="sr-only">Toggle switch</Label>
    <div
      class="group inline-flex items-center gap-2"
      :data-state="checked ? 'checked' : 'unchecked'"
    >
      <button
        id="switch-off-label"
        class="flex-1 cursor-pointer text-right text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
        @click="toggleSwitch"
      >
        <Moon :size="16" stroke-width="2" aria-hidden="true" />
      </button>
      <Switch
        id="switch-11"
        v-model="checked"
        aria-labelledby="switch-off-label switch-on-label"
        aria-label="Toggle between dark and light mode"
      />
      <button
        id="switch-on-label"
        class="flex-1 cursor-pointer text-left text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
        @click="toggleSwitch"
      >
        <Sun :size="16" stroke-width="2" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
