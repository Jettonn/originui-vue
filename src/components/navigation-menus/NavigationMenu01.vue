<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/NavigationMenu'

const components = [
  { title: 'Alert Dialog', description: 'A modal dialog that interrupts the user with content.' },
  { title: 'Hover Card', description: 'For sighted users to preview content behind a link.' },
  { title: 'Progress', description: 'Displays an indicator showing completion progress.' },
  { title: 'Tabs', description: 'Layered sections of content shown one at a time.' }
]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[340px] gap-1 p-2 md:grid-cols-2">
            <li v-for="component in components" :key="component.title">
              <NavigationMenuLink href="#">
                <div class="text-sm font-medium text-foreground">{{ component.title }}</div>
                <p class="line-clamp-2 text-xs text-muted-foreground">
                  {{ component.description }}
                </p>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink :class="navigationMenuTriggerStyle()" href="#">
          Documentation
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
