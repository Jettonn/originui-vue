<script setup lang="ts">
import Button from '../ui/Button.vue'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/Tooltip'
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline" size="sm">Chart</Button>
      </TooltipTrigger>
      <TooltipContent class="py-3">
        <div class="space-y-2">
          <div class="text-[13px] font-medium">Tuesday, Aug 13</div>
          <div class="flex items-center gap-2 text-xs">
            <svg
              width="8"
              height="8"
              fill="currentColor"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0 text-indigo-500"
              aria-hidden="true"
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span class="flex grow gap-2"> Sales <span class="ml-auto">$40</span> </span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <svg
              width="8"
              height="8"
              fill="currentColor"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0 text-purple-500"
              aria-hidden="true"
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span class="flex grow gap-2"> Revenue <span class="ml-auto">$74</span> </span>
          </div>
          <div class="flex items-center gap-2 text-xs">
            <svg
              width="8"
              height="8"
              fill="currentColor"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
              class="shrink-0 text-rose-500"
              aria-hidden="true"
            >
              <circle cx="4" cy="4" r="4" />
            </svg>
            <span class="flex grow gap-2"> Costs <span class="ml-auto">$410</span> </span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
