<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import ScrollArea from '@/components/ui/Scroll/ScrollArea.vue'
import ScrollBar from '@/components/ui/Scroll/ScrollBar.vue'
import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from 'lucide-vue-next'
</script>

<template>
  <Tabs defaultValue="tab-1">
    <ScrollArea>
      <TabsList class="bg-background mb-3 h-auto -space-x-px p-0 shadow-xs rtl:space-x-reverse">
        <TabsTrigger
          value="tab-1"
          class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
        >
          <HouseIcon class="-ms-0.5 me-1.5 opacity-60" :size="16" aria-hidden="true" />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
        >
          <PanelsTopLeftIcon class="-ms-0.5 me-1.5 opacity-60" :size="16" aria-hidden="true" />
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
        >
          <BoxIcon class="-ms-0.5 me-1.5 opacity-60" :size="16" aria-hidden="true" />
          Packages
        </TabsTrigger>
      </TabsList>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
    <TabsContent value="tab-1">
      <p class="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 1</p>
    </TabsContent>
    <TabsContent value="tab-2">
      <p class="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 2</p>
    </TabsContent>
    <TabsContent value="tab-3">
      <p class="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 3</p>
    </TabsContent>
  </Tabs>
</template>
