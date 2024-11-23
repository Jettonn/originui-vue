<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { computed } from 'vue'

// @ts-expect-error: Intl.supportedValuesOf is not supported in all browsers
const timezones = Intl.supportedValuesOf('timeZone')

type TimezoneOption = {
  value: string
  label: string
  numericOffset: number
}

const formattedTimezones = computed(() => {
  return timezones
    .map((timezone: string) => {
      const formatter = new Intl.DateTimeFormat('en', {
        timeZone: timezone,
        timeZoneName: 'shortOffset'
      })
      const parts = formatter.formatToParts(new Date())
      const offset = parts.find(part => part.type === 'timeZoneName')?.value || ''
      const modifiedOffset = offset === 'GMT' ? 'GMT+0' : offset

      return {
        value: timezone,
        label: `(${modifiedOffset}) ${timezone.replace(/_/g, ' ')}`,
        numericOffset: parseInt(offset.replace('GMT', '').replace('+', '') || '0')
      }
    })
    .sort((a: TimezoneOption, b: TimezoneOption) => a.numericOffset - b.numericOffset)
})
</script>

<template>
  <div class="space-y-2">
    <Label for="select-30">Timezone select</Label>
    <Select default-value="Europe/London">
      <SelectTrigger id="select-30">
        <SelectValue placeholder="Select timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem v-for="{ value, label } in formattedTimezones" :key="value" :value="value">
          {{ label }}
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
