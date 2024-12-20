<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/Accordion'
import { AccordionHeader, AccordionTrigger } from 'radix-vue'
import { Plus } from 'lucide-vue-next'

const items = [
  {
    id: '1',
    title: 'What makes Origin UI different?',
    content:
      'Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.'
  },
  {
    id: '2',
    title: 'How can I customize the components?',
    content:
      'Use our CSS variables for global styling, or class and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.'
  },
  {
    id: '3',
    title: 'Is Origin UI optimized for performance?',
    content:
      'Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.'
  },
  {
    id: '4',
    title: 'How accessible are the components?',
    content:
      'All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.'
  }
]
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Table w/ left plus-minus</h2>
    <Accordion type="single" collapsible class="w-full -space-y-px" default-value="3">
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        class="border bg-background px-4 py-1 first:rounded-t-lg last:rounded-b-lg"
      >
        <AccordionHeader class="flex">
          <AccordionTrigger
            class="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180"
          >
            {{ item.title }}
            <Plus
              :size="16"
              :stroke-width="2"
              class="shrink-0 opacity-60 transition-transform duration-200"
              aria-hidden="true"
            />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="pb-2 text-muted-foreground">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
