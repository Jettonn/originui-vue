<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { CircleCheck, X } from 'lucide-vue-next'
import { h, markRaw } from 'vue'
import { toast } from 'vue-sonner'

const handleClick = () => {
  toast.custom((t, { emit }) => {
    const CustomToast = markRaw(
      h(
        'div',
        { class: 'w-[var(--width)] rounded-lg border border-border bg-background px-4 py-3' },
        [
          h('div', { class: 'flex gap-2' }, [
            h('div', { class: 'flex grow gap-3' }, [
              h(CircleCheck, {
                class: 'mt-0.5 shrink-0 text-emerald-500',
                size: 16,
                'stroke-width': 2,
                'aria-hidden': true
              }),
              h('div', { class: 'flex grow justify-between gap-12' }, [
                h('p', { class: 'text-sm' }, 'Message sent'),
                h('div', { class: 'whitespace-nowrap text-sm' }, [
                  h('button', { class: 'text-sm font-medium hover:underline' }, 'View'),
                  h('span', { class: 'mx-1 text-muted-foreground' }, '·'),
                  h(
                    'button',
                    {
                      class: 'text-sm font-medium hover:underline',
                      onClick: () => emit('closeToast')
                    },
                    'Undo'
                  )
                ])
              ])
            ]),
            h(
              Button,
              {
                variant: 'ghost',
                class: 'group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent',
                onClick: () => emit('closeToast'),
                'aria-label': 'Close banner'
              },
              () =>
                h(X, {
                  size: 16,
                  'stroke-width': 2,
                  class: 'opacity-60 transition-opacity group-hover:opacity-100',
                  'aria-hidden': true
                })
            )
          ])
        ]
      )
    )
    return CustomToast
  })
}
</script>

<template>
  <Button variant="outline" @click="handleClick">Custom sonner</Button>
</template>
