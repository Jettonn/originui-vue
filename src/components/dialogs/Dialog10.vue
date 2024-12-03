<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/Dialog'
import Button from '@/components/ui/Button.vue'
import Textarea from '@/components/ui/Textarea.vue'
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Feedback</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Send us feedback</DialogTitle>
        <DialogDescription>
          Watch
          <a class="text-foreground hover:underline" href="#">tutorials</a>, read Origin UI's
          <a class="text-foreground hover:underline" href="#">documentation</a>, or join our
          <a class="text-foreground hover:underline" href="#">Discord</a> for community help.
        </DialogDescription>
      </DialogHeader>
      <form class="space-y-5">
        <Textarea
          id="feedback"
          placeholder="How can we improve Origin UI?"
          aria-label="Send feedback"
        />
        <div class="flex flex-col sm:flex-row sm:justify-end">
          <Button type="button">Send feedback</Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
</template>
