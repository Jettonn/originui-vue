<script setup lang="ts">
import Label from '../ui/Label.vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '../ui/Select'
</script>

<template>
  <div class="space-y-2">
    <Label for="select-38">Options with avatar</Label>
    <Select default-value="s1">
      <SelectTrigger
        id="select-38"
        class="ps-2 [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_img]:shrink-0"
      >
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent
        class="[&_*[role=option]>span]:end-2 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pe-8 [&_*[role=option]]:ps-2"
      >
        <SelectGroup>
          <SelectLabel class="ps-2">Impersonate user</SelectLabel>
          <SelectItem value="s1">
            <img
              class="size-5 rounded"
              src="@/assets/avatar-20-01.jpg"
              alt="Frank Allison"
              width="20"
              height="20"
            />
            <span class="truncate">Jenny Hamilton</span>
          </SelectItem>
          <SelectItem value="s2">
            <img
              class="size-5 rounded"
              src="@/assets/avatar-20-02.jpg"
              alt="Xavier Guerra"
              width="20"
              height="20"
            />
            <span class="truncate">Paul Smith</span>
          </SelectItem>
          <SelectItem value="s3">
            <img
              class="size-5 rounded"
              src="@/assets/avatar-20-03.jpg"
              alt="Anne Kelley"
              width="20"
              height="20"
            />
            <span class="truncate">Luna Wyen</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>
