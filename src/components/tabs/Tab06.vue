<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
</script>

<template>
  <Tabs defaultValue="tab-1" class="items-center">
    <TabsList class="bg-background h-auto -space-x-px p-0 shadow-xs rtl:space-x-reverse">
      <TabsTrigger
        value="tab-1"
        class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
      >
        Tab 1
      </TabsTrigger>
      <TabsTrigger
        value="tab-2"
        class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
      >
        Tab 2
      </TabsTrigger>
      <TabsTrigger
        value="tab-3"
        class="data-[state=active]:bg-muted data-[state=active]:after:bg-primary relative overflow-hidden rounded-none border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e"
      >
        Tab 3
      </TabsTrigger>
    </TabsList>
    <TabsContent value="tab-1">
      <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 1</p>
    </TabsContent>
    <TabsContent value="tab-2">
      <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 2</p>
    </TabsContent>
    <TabsContent value="tab-3">
      <p class="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
    </TabsContent>
  </Tabs>
</template>
