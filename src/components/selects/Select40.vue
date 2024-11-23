<script setup lang="ts">
import Label from '../ui/Label.vue'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-40">Options with portrait</Label>
    <Select default-value="s1">
      <SelectTrigger
        id="select-40"
        class="h-auto ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
      >
        <SelectValue placeholder="Choose a plan" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
      >
        <SelectItem value="s1">
          <span class="flex items-center gap-2">
            <img
              class="size-10 rounded-full"
              src="@/assets/avatar-40-01.jpg"
              alt="Jenny Hamilton"
              width="40"
              height="40"
            />
            <span>
              <span class="block font-medium">Jenny Hamilton</span>
              <span class="mt-0.5 block text-xs text-muted-foreground">@jennycodes</span>
            </span>
          </span>
        </SelectItem>
        <SelectItem value="s2">
          <span class="flex items-center gap-2">
            <img
              class="size-10 rounded-full"
              src="@/assets/avatar-40-02.jpg"
              alt="Paul Smith"
              width="40"
              height="40"
            />
            <span>
              <span class="block font-medium">Paul Smith</span>
              <span class="mt-0.5 block text-xs text-muted-foreground">@paulsmith</span>
            </span>
          </span>
        </SelectItem>
        <SelectItem value="s3">
          <span class="flex items-center gap-2">
            <img
              class="size-10 rounded-full"
              src="@/assets/avatar-40-03.jpg"
              alt="Luna Wyen"
              width="40"
              height="40"
            />
            <span>
              <span class="block font-medium">Luna Wyen</span>
              <span class="mt-0.5 block text-xs text-muted-foreground">@wyen.luna</span>
            </span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
