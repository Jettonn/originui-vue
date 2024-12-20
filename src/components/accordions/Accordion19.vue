<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/Collapsible'
import { ChevronDown } from 'lucide-vue-next'
import { defineComponent, h } from 'vue'

const items = [
  {
    id: '1',
    title: 'What makes Origin UI different?',
    collapsibles: [
      {
        title: 'What about performance?',
        content: 'We optimize every component for maximum performance and minimal bundle size.'
      },
      {
        title: 'How is the documentation?',
        content:
          'Our documentation is comprehensive and includes live examples for every component.'
      }
    ]
  },
  {
    id: '2',
    title: 'How can I customize the components?',
    collapsibles: [
      {
        title: 'Can I use custom themes?',
        content:
          'Yes, our theming system is fully customizable and supports both light and dark modes.'
      },
      {
        title: 'What about Tailwind support?',
        content: 'We have first-class support for Tailwind CSS with custom utility classes.'
      }
    ]
  },
  {
    id: '3',
    title: 'Is Origin UI optimized for performance?',
    collapsibles: [
      {
        title: "What's the bundle size impact?",
        content:
          'Our components are tree-shakeable and typically add minimal overhead to your bundle.',
        open: true
      },
      {
        title: 'How is code splitting handled?',
        content: 'We support automatic code splitting for optimal loading performance.'
      }
    ]
  },
  {
    id: '4',
    title: 'How accessible are the components?',
    collapsibles: [
      {
        title: 'Which screen readers are supported?',
        content: 'We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.'
      },
      {
        title: 'What about keyboard navigation?',
        content:
          'Full keyboard navigation support is implemented following WAI-ARIA best practices.'
      }
    ]
  }
]

const CollapsibleDemo = defineComponent({
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    open: { type: Boolean, default: false }
  },
  setup(props) {
    return () =>
      h(
        Collapsible,
        {
          class: 'space-y-1 border-t border-border bg-accent px-4 py-3',
          defaultOpen: props.open
        },
        [
          h(
            CollapsibleTrigger,
            {
              class:
                'flex gap-2 text-[15px] font-semibold leading-6 [&[data-state=open]>svg]:rotate-180'
            },
            [
              h(ChevronDown, {
                size: 16,
                strokeWidth: 2,
                class: 'mt-1 shrink-0 opacity-60 transition-transform duration-200',
                'aria-hidden': true
              }),
              props.title
            ]
          ),
          h(
            CollapsibleContent,
            {
              class:
                'overflow-hidden ps-6 text-sm text-muted-foreground transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down'
            },
            props.content
          )
        ]
      )
  }
})
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">Multi-level</h2>
    <Accordion type="single" collapsible class="w-full -space-y-px" default-value="3">
      <AccordionItem
        v-for="item in items"
        :key="item.id"
        :value="item.id"
        class="overflow-hidden border bg-background first:rounded-t-lg last:rounded-b-lg"
      >
        <AccordionTrigger class="px-4 py-3 text-[15px] leading-6 hover:no-underline">
          {{ item.title }}
        </AccordionTrigger>
        <AccordionContent class="p-0">
          <CollapsibleDemo
            v-for="(collapsible, index) in item.collapsibles"
            :key="index"
            :title="collapsible.title"
            :content="collapsible.content"
            :open="collapsible.open"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
