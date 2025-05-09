<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/Accordion'
import { AccordionHeader, AccordionTrigger } from 'reka-ui'
import { ChevronDown } from 'lucide-vue-next'

const items = [
  {
    id: '1',
    title: 'Connected accounts',
    sub: 'Manage your linked social and work accounts',
    content:
      'Connect your accounts from Google, GitHub, or Microsoft to enable single sign-on and streamline your workflow. Connected accounts can be used for quick login and importing your preferences across platforms. You can revoke access to any connected account at any time.'
  },
  {
    id: '2',
    title: 'Notifications',
    sub: 'Customize your notification preferences',
    content:
      'Choose which updates you want to receive. You can get notifications for: security alerts, billing updates, newsletter and product announcements, usage reports, and scheduled maintenance. Notifications can be delivered via email, SMS, or push notifications.'
  },
  {
    id: '3',
    title: '2-step verification',
    sub: 'Add an extra layer of security to your account',
    content:
      'Protect your account with two-factor authentication. You can use authenticator apps like Google Authenticator or Authy, receive SMS codes, or use security keys like YubiKey. We recommend using an authenticator app for the most secure experience.'
  },
  {
    id: '4',
    title: 'Contact support',
    sub: "We're here to help 24/7",
    content:
      'Our support team is available around the clock to assist you. For billing inquiries, technical issues, or general questions, you can reach us through live chat, email at support@example.com, or schedule a call with our technical team. Premium support is available for enterprise customers.'
  }
]
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-xl font-bold">W/ sub-header and chevron</h2>
    <Accordion type="single" collapsible class="w-full" default-value="3">
      <AccordionItem v-for="item in items" :key="item.id" :value="item.id" class="py-2">
        <AccordionHeader class="flex">
          <AccordionTrigger
            class="flex flex-1 items-center justify-between py-2 text-left text-[15px] font-semibold leading-6 transition-all [&[data-state=open]>svg]:rotate-180"
          >
            <span class="flex flex-col space-y-1">
              <span>{{ item.title }}</span>
              <span v-if="item.sub" class="text-sm font-normal">{{ item.sub }}</span>
            </span>
            <ChevronDown
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
