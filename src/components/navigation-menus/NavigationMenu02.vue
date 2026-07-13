<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/NavigationMenu'

const links = ['Home', 'Features', 'Pricing', 'About']
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem v-for="link in links" :key="link">
        <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="#">
          {{ link }}
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
