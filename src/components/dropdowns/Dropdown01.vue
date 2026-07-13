<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/DropdownMenu'
import { ChevronDown } from 'lucide-vue-next'
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button variant="outline">
        Options
        <ChevronDown />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuItem>
        Profile
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        Settings
        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Log out</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
