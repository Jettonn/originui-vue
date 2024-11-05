<script setup lang="ts">
import { ref, computed } from 'vue'
import { Check, Eye, EyeOff, X } from 'lucide-vue-next'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'

const password = ref('')
const isVisible = ref(false)

const toggleVisibility = () => (isVisible.value = !isVisible.value)

const checkStrength = (pass: string) => {
  const requirements = [
    { regex: /.{8,}/, text: 'At least 8 characters' },
    { regex: /[0-9]/, text: 'At least 1 number' },
    { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
    { regex: /[A-Z]/, text: 'At least 1 uppercase letter' }
  ]

  return requirements.map(req => ({
    met: req.regex.test(pass),
    text: req.text
  }))
}

const strength = computed(() => checkStrength(password.value))

const strengthScore = computed(() => {
  return strength.value.filter(req => req.met).length
})

const getStrengthColor = (score: number) => {
  if (score === 0) return 'bg-border'
  if (score <= 1) return 'bg-red-500'
  if (score <= 2) return 'bg-orange-500'
  if (score === 3) return 'bg-amber-500'
  return 'bg-emerald-500'
}

const getStrengthText = (score: number) => {
  if (score === 0) return 'Enter a password'
  if (score <= 2) return 'Weak password'
  if (score === 3) return 'Medium password'
  return 'Strong password'
}
</script>

<template>
  <div>
    <div class="space-y-2">
      <Label for="input-51">Input with password strength indicator</Label>
      <div class="relative">
        <Input
          id="input-51"
          class="pe-9"
          placeholder="Password"
          :type="isVisible ? 'text' : 'password'"
          v-model="password"
          :aria-invalid="strengthScore < 4"
          aria-describedby="password-strength"
        />
        <button
          class="absolute inset-y-px end-px flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
          @click="toggleVisibility"
          :aria-label="isVisible ? 'Hide password' : 'Show password'"
          :aria-pressed="isVisible"
          aria-controls="password"
        >
          <EyeOff v-if="isVisible" :size="16" :stroke-width="2" aria-hidden="true" />
          <Eye v-else :size="16" :stroke-width="2" aria-hidden="true" />
        </button>
      </div>
    </div>

    <div
      class="mb-4 mt-3 h-1 w-full overflow-hidden rounded-full bg-border"
      role="progressbar"
      :aria-valuenow="strengthScore"
      aria-valuemin="0"
      aria-valuemax="4"
      aria-label="Password strength"
    >
      <div
        :class="['h-full', getStrengthColor(strengthScore), 'transition-all duration-500 ease-out']"
        :style="{ width: `${(strengthScore / 4) * 100}%` }"
      ></div>
    </div>

    <p id="password-strength" class="mb-2 text-sm font-medium text-foreground">
      {{ getStrengthText(strengthScore) }}. Must contain:
    </p>

    <ul class="space-y-1.5" aria-label="Password requirements">
      <li v-for="(req, index) in strength" :key="index" class="flex items-center gap-2">
        <Check v-if="req.met" :size="16" class="text-emerald-500" aria-hidden="true" />
        <X v-else :size="16" class="text-muted-foreground/80" aria-hidden="true" />
        <span :class="['text-xs', req.met ? 'text-emerald-600' : 'text-muted-foreground']">
          {{ req.text }}
          <span class="sr-only">
            {{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
          </span>
        </span>
      </li>
    </ul>
  </div>
</template>
