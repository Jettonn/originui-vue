<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion'
import { AtSign, Command, Eclipse, Zap } from 'lucide-vue-next'

const items = [
  {
    id: '1',
    icon: Command,
    title: 'What makes Origin UI different?',
    content:
      'Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.'
  },
  {
    id: '2',
    icon: Eclipse,
    title: 'How can I customize the components?',
    content:
      'Use our CSS variables for global styling, or class and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.'
  },
  {
    id: '3',
    icon: Zap,
    title: 'Is Origin UI optimized for performance?',
    content:
      'Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.'
  },
  {
    id: '4',
    icon: AtSign,
    title: 'How accessible are the components?',
    content:
      'All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.'
  }
]
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">W/ icon and chevron</h2>
    <Accordion type="single" collapsible class="w-full" default-value="3">
      <AccordionItem v-for="item in items" :key="item.id" :value="item.id" class="py-2">
        <AccordionTrigger class="py-2 text-[15px] leading-6 hover:no-underline">
          <span class="flex items-center gap-3">
            <component
              :is="item.icon"
              :size="16"
              :stroke-width="2"
              class="shrink-0 opacity-60"
              aria-hidden="true"
            />
            <span>{{ item.title }}</span>
          </span>
        </AccordionTrigger>
        <AccordionContent class="pb-2 ps-7 text-muted-foreground">
          {{ item.content }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
