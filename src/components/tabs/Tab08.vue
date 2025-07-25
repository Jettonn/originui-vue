<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import ScrollArea from '@/components/ui/Scroll/ScrollArea.vue'
import ScrollBar from '@/components/ui/Scroll/ScrollBar.vue'
import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from 'lucide-vue-next'
import Badge from '@/components/ui/Badge.vue'
</script>

<template>
  <Tabs defaultValue="tab-1">
    <ScrollArea>
      <TabsList class="mb-3">
        <TabsTrigger value="tab-1">
          <HouseIcon class="-ms-0.5 me-1.5 opacity-60" :size="16" aria-hidden="true" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="tab-2" class="group">
          <PanelsTopLeftIcon class="-ms-0.5 me-1.5 opacity-60" :size="16" aria-hidden="true" />
          Projects
          <Badge
            class="bg-primary/15 ms-1.5 min-w-5 px-1 transition-opacity group-data-[state=inactive]:opacity-50"
            variant="secondary"
          >
            3
          </Badge>
        </TabsTrigger>
        <TabsTrigger value="tab-3" class="group">
          <BoxIcon class="-ms-0.5 me-1.5 opacity-60" :size="16" aria-hidden="true" />
          Packages
          <Badge class="ms-1.5 transition-opacity group-data-[state=inactive]:opacity-50">
            New
          </Badge>
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
