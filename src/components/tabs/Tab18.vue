<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
</script>

<template>
  <Tabs defaultValue="tab-1" orientation="vertical" class="w-full flex-row">
    <TabsList class="flex-col rounded-none border-l bg-transparent p-0">
      <TabsTrigger
        value="tab-1"
        class="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
      >
        Overview
      </TabsTrigger>
      <TabsTrigger
        value="tab-2"
        class="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
      >
        Projects
      </TabsTrigger>
      <TabsTrigger
        value="tab-3"
        class="data-[state=active]:after:bg-primary relative w-full justify-start rounded-none after:absolute after:inset-y-0 after:start-0 after:w-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
      >
        Packages
      </TabsTrigger>
    </TabsList>
    <div class="grow rounded-md border text-start">
      <TabsContent value="tab-1">
        <p class="text-muted-foreground px-4 py-3 text-xs">Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab-2">
        <p class="text-muted-foreground px-4 py-3 text-xs">Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab-3">
        <p class="text-muted-foreground px-4 py-3 text-xs">Content for Tab 3</p>
      </TabsContent>
    </div>
  </Tabs>
</template>
