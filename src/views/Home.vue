<template>
  <main>
    <div class="px-4 sm:px-6">
      <div class="mx-auto w-full max-w-3xl">
        <div class="mb-16">
          <h1
            class="mx-auto mb-4 max-w-3xl text-4xl/[1.1] font-extrabold tracking-tight text-foreground md:text-5xl/[1.1]"
          >
            Beautiful UI components built with Tailwind CSS and
            <span class="text-vue"> Vue </span>
          </h1>
          <p class="mb-4 text-lg text-muted-foreground">
            Origin UI - Vue is an extensive collection of copy-and-paste components for quickly
            building app UIs. It's free, open-source, and ready to drop into your projects.
          </p>
          <p
            class="w-fit max-w-prose text-pretty border-t border-border pt-4 text-sm text-accent-foreground"
          >
            This project is unaffiliated with the original
            <a class="text-vue underline" href="https://originui.com/" rel="noreferrer">Origin UI</a
            >. <br />
            <span class="text-xs text-muted-foreground">
              I appreciate their work and have developed these Vue components based on their design.
            </span>
          </p>
        </div>

        <div class="mb-16">
          <h2 class="mb-5 text-muted-foreground">Latest components</h2>
          <nav>
            <ul class="flex flex-col gap-2">
              <li v-for="link in availableComponents" :key="link.path">
                <router-link
                  v-if="link.path !== '#'"
                  :to="link.path"
                  class="inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-14"
                >
                  {{ link.name }}
                  <ArrowRightIcon class="-mr-1 ml-2 opacity-60" />
                </router-link>
                <span
                  v-else
                  class="inline-flex w-full flex-col justify-between gap-2 whitespace-nowrap rounded-lg border border-border bg-background p-4 font-bold shadow-sm shadow-black/5 sm:h-14 sm:flex-row sm:items-center"
                >
                  <span class="flex items-start gap-2">
                    {{ link.name }}
                    <span
                      class="-mt-1 text-[10px] font-medium uppercase text-zinc-400 dark:text-zinc-600 animate-pulse"
                    >
                      Available soon
                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ArrowRight as ArrowRightIcon } from 'lucide-vue-next'

const availableComponents = [
  { name: 'Input and Textarea', path: '/inputs' },
  { name: 'Button', path: '/buttons' },
  { name: 'Avatar', path: '/avatars' },
  { name: 'Badges', path: '/badges' },
  { name: 'Checkbox, Radio, and Switch', path: '/check-radio-switches' },
  { name: 'Select', path: '/selects' },
  { name: 'Sliders', path: '/sliders' },
  { name: 'Alert, Notification, and Banner', path: '/alerts-notifications-banners' },
  { name: 'Dialogs', path: '/dialogs' },
  { name: 'Accordion', path: '/accordions' },
  { name: 'Tooltip', path: '/tooltips' },
  { name: 'Dropdown and Popover', path: '#' }
]

useHead({
  title: 'Origin UI - Vue Components with Tailwind CSS',
  meta: [
    {
      name: 'description',
      content:
        'Beautiful UI components built with Tailwind CSS and Vue. Origin UI - Vue is an extensive collection of copy-and-paste components for quickly building app UIs.'
    },
    {
      property: 'og:title',
      content: 'Origin UI - Vue Components with Tailwind CSS'
    },
    {
      property: 'og:description',
      content:
        'Beautiful UI components built with Tailwind CSS and Vue. Free and open-source UI components ready to drop into your projects.'
    },
    {
      name: 'keywords',
      content: 'Vue, Tailwind CSS, UI components, Origin UI, Vue components, frontend development'
    }
  ]
})
</script>
