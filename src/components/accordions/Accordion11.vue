<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion'

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
    <h2 class="text-xl font-bold">Tabs w/ chevron</h2>
    <Accordion type="single" collapsible class="w-full space-y-2" default-value="3">
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        class="rounded-lg border bg-background px-4 py-1"
      >
        <AccordionTrigger class="py-2 text-[15px] leading-6 hover:no-underline">
          {{ item.title }}
        </AccordionTrigger>
        <AccordionContent class="pb-2 text-muted-foreground">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
