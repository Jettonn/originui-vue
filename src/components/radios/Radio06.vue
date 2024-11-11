<script setup lang="ts">
import { ref } from 'vue'
import Label from '@/components/ui/Label.vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup'
import { Star } from 'lucide-vue-next'

const selectedValue = ref('all')
</script>

<template>
  <RadioGroup v-model="selectedValue">
    <div class="flex items-center gap-2">
      <RadioGroupItem value="all" id="radio-06-all" />
      <Label for="radio-06-all">
        All reviews
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (12,921) </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="5-stars" id="radio-06-5-stars" />
      <Label for="radio-06-5-stars" class="inline-flex items-center gap-1">
        <span class="inline-flex items-center text-amber-500" aria-hidden="true">
          <Star v-for="i in 5" :key="i" width="16" height="16" aria-hidden="true" />
        </span>
        <span class="sr-only">5 stars</span>
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (5,168) </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="4-stars" id="radio-06-4-stars" />
      <Label for="radio-06-4-stars" class="inline-flex items-center gap-1">
        <span class="inline-flex items-center text-amber-500" aria-hidden="true">
          <Star v-for="i in 4" :key="i" width="16" height="16" aria-hidden="true" />
          <Star width="16" height="16" aria-hidden="true" class="opacity-30" />
        </span>
        <span class="sr-only">4 stars</span>
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (4,726) </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="3-stars" id="radio-06-3-stars" />
      <Label for="radio-06-3-stars" class="inline-flex items-center gap-1">
        <span class="inline-flex items-center text-amber-500" aria-hidden="true">
          <Star v-for="i in 3" :key="i" width="16" height="16" aria-hidden="true" />
          <Star
            v-for="i in 2"
            :key="i + 3"
            width="16"
            height="16"
            aria-hidden="true"
            class="opacity-30"
          />
        </span>
        <span class="sr-only">3 stars</span>
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (3,234) </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="2-stars" id="radio-06-2-stars" />
      <Label for="radio-06-2-stars" class="inline-flex items-center gap-1">
        <span class="inline-flex items-center text-amber-500" aria-hidden="true">
          <Star v-for="i in 2" :key="i" width="16" height="16" aria-hidden="true" />
          <Star
            v-for="i in 3"
            :key="i + 2"
            width="16"
            height="16"
            aria-hidden="true"
            class="opacity-30"
          />
        </span>
        <span class="sr-only">2 stars</span>
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground"> (1,842) </span>
      </Label>
    </div>
    <div class="flex items-center gap-2">
      <RadioGroupItem value="1-star" id="radio-06-1-star" />
      <Label for="radio-06-1-star" class="inline-flex items-center gap-1">
        <span class="inline-flex items-center text-amber-500" aria-hidden="true">
          <Star width="16" height="16" aria-hidden="true" />
          <Star
            v-for="i in 4"
            :key="i + 4"
            width="16"
            height="16"
            aria-hidden="true"
            class="opacity-30"
          />
        </span>
        <span class="sr-only">1 star</span>
        <span class="text-xs font-normal leading-[inherit] text-muted-foreground">(452)</span>
      </Label>
    </div>
  </RadioGroup>
</template>
