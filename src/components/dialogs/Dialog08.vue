<script setup lang="ts">
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Label from '@/components/ui/Label.vue'
import { CircleAlert } from 'lucide-vue-next'
import { ref } from 'vue'

const PROJECT_NAME = "Origin UI"
const inputValue = ref("")
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button variant="outline">Delete project</Button>
    </DialogTrigger>
    <DialogContent>
      <div class="flex flex-col items-center gap-2">
        <div
          class="flex size-9 shrink-0 items-center justify-center rounded-full border border-border"
          aria-hidden="true"
        >
          <CircleAlert class="opacity-80" size="16" stroke-width="2" />
        </div>
        <DialogHeader>
          <DialogTitle class="sm:text-center">Final confirmation</DialogTitle>
          <DialogDescription class="sm:text-center">
            This action cannot be undone. To confirm, please enter the project name
            <span class="text-foreground">Origin UI</span>.
          </DialogDescription>
        </DialogHeader>
      </div>

      <form class="space-y-5">
        <div class="space-y-2">
          <Label for="project-name">Project name</Label>
          <Input
            id="project-name"
            type="text"
            placeholder="Type Origin UI to confirm"
            v-model="inputValue"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" class="flex-1">Cancel</Button>
          </DialogClose>
          <Button
            type="button"
            class="flex-1"
            :disabled="inputValue !== PROJECT_NAME"
          >
            Delete
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
