<script setup lang="ts">
import { DateFieldInput, DateFieldRoot } from 'reka-ui'
import Label from '@/components/ui/Label.vue'
</script>

<template>
  <div class="space-y-2">
    <Label class="text-sm font-medium text-foreground" for="date-time-field"
      >Date and time input</Label
    >
    <DateFieldRoot
      id="date-time-field"
      v-slot="{ segments }"
      granularity="minute"
      :hour-cycle="24"
      class="relative inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 text-sm shadow-xs shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:outline-hidden focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 data-disabled:opacity-50"
    >
      <template v-for="item in segments" :key="item.part">
        <DateFieldInput
          :part="item.part"
          class="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 focus:bg-accent focus:text-foreground aria-[valuetext=Empty]:text-muted-foreground/70 focus:aria-[valuetext=Empty]:text-foreground data-disabled:cursor-not-allowed data-invalid:data-focused:bg-destructive data-[type=literal]:px-0 data-invalid:text-destructive data-[segment=literal]:text-muted-foreground/70 data-disabled:opacity-50 data-invalid:focus:data-placeholder:text-destructive-foreground data-invalid:focus:text-destructive-foreground data-invalid:aria-[valuetext=Empty]:text-destructive"
        >
          {{ item.value }}
        </DateFieldInput>
      </template>
    </DateFieldRoot>
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://www.reka-ui.com/components/date-field"
        target="_blank"
        rel="noopener nofollow"
      >
        Reka UI DateField
      </a>
    </p>
  </div>
</template>
