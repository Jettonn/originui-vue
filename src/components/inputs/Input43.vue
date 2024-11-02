<script setup lang="ts">
import {
  DateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerContent,
  DateRangePickerField,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerInput,
  DateRangePickerNext,
  DateRangePickerPrev,
  DateRangePickerRoot,
  DateRangePickerTrigger
} from 'radix-vue'
import Label from '../ui/Label.vue'
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { getLocalTimeZone, isWeekend, today, type DateValue } from '@internationalized/date'

const now = today(getLocalTimeZone())
const disabledRanges: [DateValue, DateValue][] = [
  [now, now.add({ days: 5 })],
  [now.add({ days: 14 }), now.add({ days: 16 })],
  [now.add({ days: 23 }), now.add({ days: 24 })]
]

const isDateUnavailable = (date: DateValue): boolean => {
  if (isWeekend(date, navigator.language)) {
    return true
  }
  return disabledRanges.some(([start, end]) => date.compare(start) >= 0 && date.compare(end) <= 0)
}
</script>

<template>
  <div class="space-y-2">
    <Label class="text-sm text-gray9" for="date-range-picker"
      >Date range picker (unavailable dates)</Label
    >
    <DateRangePickerRoot id="date-range-picker" :is-date-unavailable="isDateUnavailable">
      <div class="flex">
        <DateRangePickerField
          v-slot="{ segments }"
          class="inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 pe-9 text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring data-[disabled]:opacity-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
        >
          <template v-for="item in segments.start" :key="item.part">
            <DateRangePickerInput
              :part="item.part"
              class="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 focus:bg-accent focus:text-foreground aria-[valuetext=Empty]:text-muted-foreground/70 focus:aria-[valuetext=Empty]:text-foreground data-[disabled]:cursor-not-allowed data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[invalid]:text-destructive data-[segment=literal]:text-muted-foreground/70 data-[disabled]:opacity-50 data-[invalid]:focus:data-[placeholder]:text-destructive-foreground data-[invalid]:focus:text-destructive-foreground data-[invalid]:aria-[valuetext=Empty]:text-destructive"
              type="start"
            >
              {{ item.value }}
            </DateRangePickerInput>
          </template>
          <span class="px-2 text-muted-foreground/70"> - </span>
          <template v-for="item in segments.end" :key="item.part">
            <DateRangePickerInput
              :part="item.part"
              class="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 focus:bg-accent focus:text-foreground aria-[valuetext=Empty]:text-muted-foreground/70 focus:aria-[valuetext=Empty]:text-foreground data-[disabled]:cursor-not-allowed data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[invalid]:text-destructive data-[segment=literal]:text-muted-foreground/70 data-[disabled]:opacity-50 data-[invalid]:focus:data-[placeholder]:text-destructive-foreground data-[invalid]:focus:text-destructive-foreground data-[invalid]:aria-[valuetext=Empty]:text-destructive"
              type="end"
            >
              {{ item.value }}
            </DateRangePickerInput>
          </template>
        </DateRangePickerField>
        <DateRangePickerTrigger
          class="z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2"
        >
          <CalendarIcon :size="16" :stroke-width="2" />
        </DateRangePickerTrigger>
      </div>

      <DateRangePickerContent
        :side-offset="4"
        class="z-50 rounded-lg border border-input bg-background text-foreground shadow-lg shadow-black/[.04] outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 max-h-[inherit] overflow-auto p-2"
      >
        <DateRangePickerCalendar v-slot="{ weekDays, grid }" class="w-fit">
          <DateRangePickerHeader class="flex w-full items-center gap-1 pb-1">
            <DateRangePickerPrev
              class="flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2"
            >
              <ChevronLeft :size="16" :stroke-width="2" />
            </DateRangePickerPrev>

            <DateRangePickerHeading class="grow text-center text-sm font-medium" />
            <DateRangePickerNext
              class="flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2"
            >
              <ChevronRight :size="16" :stroke-width="2" />
            </DateRangePickerNext>
          </DateRangePickerHeader>
          <DateRangePickerGrid v-for="month in grid" :key="month.value.toString()">
            <DateRangePickerGridHead>
              <DateRangePickerGridRow>
                <DateRangePickerHeadCell
                  v-for="day in weekDays"
                  :key="day"
                  class="size-9 rounded-lg p-0 text-xs font-medium text-muted-foreground/80"
                >
                  {{ day }}
                </DateRangePickerHeadCell>
              </DateRangePickerGridRow>
            </DateRangePickerGridHead>
            <DateRangePickerGridBody class="[&_td]:px-0">
              <DateRangePickerGridRow
                v-for="(weekDates, index) in month.rows"
                :key="`weekDate-${index}`"
              >
                <DateRangePickerCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                >
                  <DateRangePickerCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    :class="
                      cn(
                        'relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg border border-transparent p-0 text-sm font-normal text-foreground ring-offset-background duration-150 [transition-property:border-radius,box-shadow] focus-visible:outline-none data-[disabled]:pointer-events-none data-[unavailable]:pointer-events-none data-[focus-visible]:z-10 data-[selected]:rounded-none data-[highlighted]:rounded-none data-[selection-end]:rounded-e-lg data-[highlighted-end]:rounded-e-lg data-[selection-start]:rounded-s-lg data-[focus-visible]:border-ring hover:bg-accent data-[invalid]:bg-red-100 data-[selected]:bg-accent data-[highlighted]:bg-accent hover:text-foreground data-[selected]:text-foreground data-[highlighted]:text-foreground data-[unavailable]:line-through data-[disabled]:opacity-30 data-[unavailable]:opacity-30 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2 data-[invalid]:data-[selection-end]:bg-destructive data-[invalid]:data-[selection-start]:bg-destructive data-[selection-end]:bg-primary data-[highlighted-end]:bg-primary data-[selection-start]:bg-primary data-[invalid]:data-[selection-end]:text-destructive-foreground data-[invalid]:data-[selection-start]:text-destructive-foreground data-[selection-end]:text-primary-foreground data-[highlighted-end]:text-primary-foreground data-[selection-start]:text-primary-foreground',
                        weekDate.compare(now) === 0 &&
                          'after:pointer-events-none after:absolute after:bottom-1 after:start-1/2 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full after:bg-primary data-[selection-end]:[&:not(:hover)]:after:bg-background data-[selection-start]:[&:not([:hover])]:after:bg-background'
                      )
                    "
                  />
                </DateRangePickerCell>
              </DateRangePickerGridRow>
            </DateRangePickerGridBody>
          </DateRangePickerGrid>
        </DateRangePickerCalendar>
      </DateRangePickerContent>
    </DateRangePickerRoot>
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://www.radix-vue.com/components/date-range-picker"
        target="_blank"
        rel="noopener nofollow"
      >
        Radix UI DateRangePicker
      </a>
    </p>
  </div>
</template>
