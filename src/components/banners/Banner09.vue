<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { TicketPercent, X } from 'lucide-vue-next'
import Button from '../ui/Button.vue'

// Define the sale end date - eg: new Date('2024-12-31T23:59:59');
const saleEndDate = new Date(Date.now() + 9 * 60 * 60 * 1000 + 45 * 60 * 1000 + 24 * 1000) // Setting 9h 45m 24s from now for demo purposes

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isExpired: boolean
}

const isVisible = ref(true)
const timeLeft = ref<TimeLeft>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isExpired: false
})

const calculateTimeLeft = () => {
  const now = new Date()
  const difference = saleEndDate.getTime() - now.getTime()

  if (difference <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true }
    return
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24))
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((difference % (1000 * 60)) / 1000)

  timeLeft.value = {
    days,
    hours,
    minutes,
    seconds,
    isExpired: false
  }
}

let timer: ReturnType<typeof setInterval>
onMounted(() => {
  calculateTimeLeft()
  timer = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div v-if="!timeLeft.isExpired && isVisible" class="dark bg-muted px-4 py-3 text-foreground">
    <div class="flex gap-2 md:items-center">
      <div class="flex grow gap-3 md:items-center">
        <div
          class="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 max-md:mt-0.5"
          aria-hidden="true"
        >
          <TicketPercent class="opacity-80" :size="16" :stroke-width="2" />
        </div>
        <div class="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
          <div class="space-y-0.5">
            <p class="text-sm font-medium">Black Friday Sale!</p>
            <p class="text-sm text-muted-foreground">
              It kicks off today and is available for just 24 hours—don't miss out!
            </p>
          </div>
          <div class="flex gap-3 max-md:flex-wrap">
            <div
              class="flex items-center divide-x divide-primary-foreground rounded-lg bg-primary/15 text-sm tabular-nums"
            >
              <span v-if="timeLeft.days > 0" class="flex h-8 items-center justify-center p-2">
                {{ timeLeft.days }}
                <span class="text-muted-foreground">d</span>
              </span>
              <span class="flex h-8 items-center justify-center p-2">
                {{ timeLeft.hours.toString().padStart(2, '0') }}
                <span class="text-muted-foreground">h</span>
              </span>
              <span class="flex h-8 items-center justify-center p-2">
                {{ timeLeft.minutes.toString().padStart(2, '0') }}
                <span class="text-muted-foreground">m</span>
              </span>
              <span class="flex h-8 items-center justify-center p-2">
                {{ timeLeft.seconds.toString().padStart(2, '0') }}
                <span class="text-muted-foreground">s</span>
              </span>
            </div>
            <Button size="sm" class="text-sm">Buy now</Button>
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
        @click="isVisible = false"
        aria-label="Close banner"
      >
        <X
          :size="16"
          :stroke-width="2"
          class="opacity-60 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  </div>
</template>
