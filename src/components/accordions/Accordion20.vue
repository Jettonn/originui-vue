<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/Collapsible'
import { AtSign, ChevronDown, CircleDashed, Command, Eclipse, Gauge, Zap } from 'lucide-vue-next'
import type { LucideIcon } from 'lucide-vue-next'
import { defineComponent, h } from 'vue'

const items = [
  {
    id: '1',
    title: 'What makes Origin UI different?',
    icon: Command,
    collapsibles: [
      {
        title: 'What about performance?',
        content: 'We optimize every component for maximum performance and minimal bundle size.',
        icon: Gauge
      },
      {
        title: 'How is the documentation?',
        content:
          'Our documentation is comprehensive and includes live examples for every component.',
        icon: CircleDashed
      }
    ]
  },
  {
    id: '2',
    title: 'How can I customize the components?',
    icon: Eclipse,
    collapsibles: [
      {
        title: 'Can I use custom themes?',
        content:
          'Yes, our theming system is fully customizable and supports both light and dark modes.',
        icon: Gauge
      },
      {
        title: 'What about Tailwind support?',
        content: 'We have first-class support for Tailwind CSS with custom utility classes.',
        icon: CircleDashed
      }
    ]
  },
  {
    id: '3',
    title: 'Is Origin UI optimized for performance?',
    icon: Zap,
    collapsibles: [
      {
        title: "What's the bundle size impact?",
        content:
          'Our components are tree-shakeable and typically add minimal overhead to your bundle.',
        open: true,
        icon: Gauge
      },
      {
        title: 'How is code splitting handled?',
        content: 'We support automatic code splitting for optimal loading performance.',
        icon: CircleDashed
      }
    ]
  },
  {
    id: '4',
    title: 'How accessible are the components?',
    icon: AtSign,
    collapsibles: [
      {
        title: 'Which screen readers are supported?',
        content: 'We test with NVDA, VoiceOver, and JAWS to ensure broad compatibility.',
        icon: Gauge
      },
      {
        title: 'What about keyboard navigation?',
        content:
          'Full keyboard navigation support is implemented following WAI-ARIA best practices.',
        icon: CircleDashed
      }
    ]
  }
]

const CollapsibleDemo = defineComponent({
  props: {
    title: { type: String, required: true },
    content: { type: String, required: true },
    open: { type: Boolean, default: false },
    icon: { type: Object as () => LucideIcon, required: true }
  },
  setup(props) {
    return () =>
      h(
        Collapsible,
        {
          class: 'space-y-1 border-t border-border py-3 pe-4 ps-6',
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
              h('span', { class: 'flex items-center gap-3' }, [
                h(props.icon, {
                  size: 16,
                  strokeWidth: 2,
                  class: 'shrink-0 opacity-60',
                  'aria-hidden': true
                }),
                h('span', props.title)
              ])
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
    <h2 class="text-xl font-bold">Multi-level w/ icon</h2>
    <Accordion type="single" collapsible class="w-full" default-value="3">
      <AccordionItem v-for="item in items" :key="item.id" :value="item.id">
        <AccordionTrigger
          class="justify-start gap-3 text-[15px] leading-6 hover:no-underline [&>svg]:-order-1"
        >
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
        <AccordionContent class="p-0">
          <CollapsibleDemo
            v-for="(collapsible, index) in item.collapsibles"
            :key="index"
            :title="collapsible.title"
            :content="collapsible.content"
            :open="collapsible.open"
            :icon="collapsible.icon"
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
