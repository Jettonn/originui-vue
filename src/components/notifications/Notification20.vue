<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import Button from '@/components/ui/Button.vue'
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/components/ui/Toast'
import { CircleCheck, X } from 'lucide-vue-next'

interface UseProgressTimerProps {
  duration: number
  interval?: number
  onComplete?: () => void
}

function useProgressTimer({ duration, interval = 100, onComplete }: UseProgressTimerProps) {
  const progress = ref(duration)
  const timerRef = ref(0)
  const timerState = ref({
    startTime: 0,
    remaining: duration,
    isPaused: false
  })

  const cleanup = () => {
    window.clearInterval(timerRef.value)
  }

  const reset = () => {
    cleanup()
    progress.value = duration
    timerState.value = {
      startTime: 0,
      remaining: duration,
      isPaused: false
    }
  }

  const start = () => {
    const state = timerState.value
    state.startTime = Date.now()
    state.isPaused = false

    timerRef.value = window.setInterval(() => {
      const elapsedTime = Date.now() - state.startTime
      const remaining = Math.max(0, state.remaining - elapsedTime)

      progress.value = remaining

      if (remaining <= 0) {
        cleanup()
        onComplete?.()
      }
    }, interval)
  }

  const pause = () => {
    const state = timerState.value
    if (!state.isPaused) {
      cleanup()
      state.remaining = Math.max(0, state.remaining - (Date.now() - state.startTime))
      state.isPaused = true
    }
  }

  const resume = () => {
    const state = timerState.value
    if (state.isPaused && state.remaining > 0) {
      start()
    }
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    progress,
    start,
    pause,
    resume,
    reset
  }
}

const open = ref(false)
const toastDuration = 5000

const { progress, start, pause, resume, reset } = useProgressTimer({
  duration: toastDuration,
  onComplete: () => (open.value = false)
})

const handleOpenChange = (isOpen: boolean) => {
  open.value = isOpen
  if (isOpen) {
    reset()
    start()
  }
}

const handleButtonClick = () => {
  if (open.value) {
    open.value = false
    // Wait for the close animation to finish
    window.setTimeout(() => {
      handleOpenChange(true)
    }, 150)
  } else {
    handleOpenChange(true)
  }
}
</script>

<template>
  <ToastProvider swipe-direction="left">
    <Button variant="outline" @click="handleButtonClick"> Custom toast </Button>
    <Toast :open="open" @update:open="handleOpenChange" @pause="pause" @resume="resume">
      <div class="flex w-full justify-between gap-3">
        <CircleCheck
          class="mt-0.5 shrink-0 text-emerald-500"
          :size="16"
          :stroke-width="2"
          aria-hidden="true"
        />
        <div class="flex grow flex-col gap-3">
          <div class="space-y-1">
            <ToastTitle>Your request was completed!</ToastTitle>
            <ToastDescription>
              It demonstrates that the task or request has been processed.
            </ToastDescription>
          </div>
          <div>
            <ToastAction alt-text="Undo changes" :as-child="true">
              <Button size="sm">Undo changes</Button>
            </ToastAction>
          </div>
        </div>
        <ToastClose :as-child="true">
          <Button
            variant="ghost"
            class="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
            aria-label="Close notification"
          >
            <X
              :size="16"
              :stroke-width="2"
              class="opacity-60 transition-opacity group-hover:opacity-100"
              aria-hidden="true"
            />
          </Button>
        </ToastClose>
      </div>
      <div class="contents" aria-hidden="true">
        <div
          class="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-emerald-500"
          :style="{
            width: `${(progress / toastDuration) * 100}%`,
            transition: 'width 100ms linear'
          }"
        />
      </div>
    </Toast>
    <ToastViewport class="sm:left-0 sm:right-auto" />
  </ToastProvider>
</template>
