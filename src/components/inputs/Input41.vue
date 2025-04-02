<script setup lang="ts">
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger
} from 'reka-ui'
import Label from '@/components/ui/Label.vue'
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { getLocalTimeZone, today } from '@internationalized/date'
import { cn } from '@/lib/utils'

const now = today(getLocalTimeZone())
</script>

<template>
  <div class="space-y-2">
    <Label class="text-sm font-medium text-foreground" for="date-picker">Date Picker</Label>
    <DatePickerRoot id="date-picker">
      <div class="flex">
        <DatePickerField
          v-slot="{ segments }"
          class="inline-flex h-9 w-full items-center overflow-hidden whitespace-nowrap rounded-lg border border-input bg-background px-3 py-2 pe-9 text-sm shadow-sm shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring data-[disabled]:opacity-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2"
        >
          <template v-for="item in segments" :key="item.part">
            <DatePickerInput
              :part="item.part"
              class="inline rounded p-0.5 text-foreground caret-transparent outline outline-0 focus:bg-accent focus:text-foreground aria-[valuetext=Empty]:text-muted-foreground/70 focus:aria-[valuetext=Empty]:text-foreground data-[disabled]:cursor-not-allowed data-[invalid]:data-[focused]:bg-destructive data-[type=literal]:px-0 data-[invalid]:text-destructive data-[segment=literal]:text-muted-foreground/70 data-[disabled]:opacity-50 data-[invalid]:focus:data-[placeholder]:text-destructive-foreground data-[invalid]:focus:text-destructive-foreground data-[invalid]:aria-[valuetext=Empty]:text-destructive"
            >
              {{ item.value }}
            </DatePickerInput>
          </template>
        </DatePickerField>
        <DatePickerTrigger
          class="z-10 -me-px -ms-9 flex w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:text-foreground focus-visible:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2"
        >
          <CalendarIcon :size="16" :stroke-width="2" />
        </DatePickerTrigger>
      </div>

      <DatePickerContent
        :side-offset="4"
        class="z-50 rounded-lg border border-input bg-background text-foreground shadow-lg shadow-black/[.04] outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 max-h-[inherit] overflow-auto p-2"
      >
        <DatePickerCalendar v-slot="{ weekDays, grid }" class="w-fit">
          <DatePickerHeader class="flex w-full items-center gap-1 pb-1">
            <DatePickerPrev
              class="flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2"
            >
              <ChevronLeft :size="16" :stroke-width="2" />
            </DatePickerPrev>

            <DatePickerHeading class="grow text-center text-sm font-medium" />
            <DatePickerNext
              class="flex size-9 items-center justify-center rounded-lg text-muted-foreground/80 ring-offset-background transition-shadow hover:bg-accent hover:text-foreground focus-visible:outline-none data-[focus-visible]:border data-[focus-visible]:border-ring data-[focus-visible]:text-foreground data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2"
            >
              <ChevronRight :size="16" :stroke-width="2" />
            </DatePickerNext>
          </DatePickerHeader>
          <DatePickerGrid v-for="month in grid" :key="month.value.toString()">
            <DatePickerGridHead>
              <DatePickerGridRow>
                <DatePickerHeadCell
                  v-for="day in weekDays"
                  :key="day"
                  class="size-9 rounded-lg p-0 text-xs font-medium text-muted-foreground/80"
                >
                  {{ day }}
                </DatePickerHeadCell>
              </DatePickerGridRow>
            </DatePickerGridHead>
            <DatePickerGridBody class="[&_td]:px-0">
              <DatePickerGridRow
                v-for="(weekDates, index) in month.rows"
                :key="`weekDate-${index}`"
              >
                <DatePickerCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                >
                  <DatePickerCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    :class="
                      cn(
                        'relative flex size-9 items-center justify-center whitespace-nowrap rounded-lg border border-transparent p-0 text-sm font-normal text-foreground ring-offset-background transition-shadow focus-visible:outline-none disabled:pointer-events-none unavailable:pointer-events-none focus-visible:z-10 data-[focus-visible]:border-ring hover:bg-accent data-[selected]:bg-primary hover:text-foreground data-[selected]:text-primary-foreground data-[unavailable]:line-through data-[disabled]:opacity-30 data-[unavailable]:opacity-30 data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-offset-2 data-[invalid]:data-[selected]:[&:not([data-hover])]:bg-destructive data-[invalid]:data-[selected]:[&:not([data-hover])]:text-destructive-foreground',
                        weekDate.compare(now) === 0 &&
                          'after:pointer-events-none after:absolute after:bottom-1 after:start-1/2 after:z-10 after:size-[3px] after:-translate-x-1/2 after:rounded-full after:bg-primary data-[selected]:after:bg-background'
                      )
                    "
                  />
                </DatePickerCell>
              </DatePickerGridRow>
            </DatePickerGridBody>
          </DatePickerGrid>
        </DatePickerCalendar>
      </DatePickerContent>
    </DatePickerRoot>
    <p class="mt-2 text-xs text-muted-foreground" role="region" aria-live="polite">
      Built with
      <a
        class="underline hover:text-foreground"
        href="https://www.reka-ui.com/components/date-picker"
        target="_blank"
        rel="noopener nofollow"
      >
        Reka UI DatePicker
      </a>
    </p>
  </div>
</template>
