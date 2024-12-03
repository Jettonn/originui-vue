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
import Textarea from '@/components/ui/Textarea.vue'
import { Check, ImagePlus, X } from 'lucide-vue-next'
import { ref } from 'vue'
import { useCharacterLimit } from '@/composables/useCharacterLimit'

const maxLength = 180
const { text: bioText, remainingCharacters } = useCharacterLimit({ maxLength })

import defaultProfileBgImage from '@/assets/profile-bg.jpg'
import defaultAvatarImage from '@/assets/avatar-72-01.jpg'

const profileBgImage = ref(defaultProfileBgImage)
const avatarImage = ref(defaultAvatarImage)

function handleProfileBgChange(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    profileBgImage.value = URL.createObjectURL(file)
  }
}

function handleAvatarChange(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    avatarImage.value = URL.createObjectURL(file)
  }
}
</script>

<template>
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit profile</Button>
    </DialogTrigger>
    <DialogContent class="flex flex-col gap-0 overflow-y-visible p-0 sm:max-w-lg [&>button:last-child]:top-3.5">
      <DialogHeader class="contents space-y-0 text-left">
        <DialogTitle class="border-b border-border px-6 py-4 text-base">
          Edit profile
        </DialogTitle>
      </DialogHeader>
      <DialogDescription class="sr-only">
        Make changes to your profile here. You can change your photo and set a username.
      </DialogDescription>
      <div class="overflow-y-auto">
        <div class="h-32">
          <div class="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted">
            <img
              v-if="profileBgImage"
              :src="profileBgImage"
              alt="Profile Background"
              class="h-full w-full object-cover"
            />
            <div class="absolute inset-0 flex items-center justify-center gap-2">
              <button
                type="button"
                class="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                @click="$refs.profileBgInput.click()"
                aria-label="Change background"
              >
                <ImagePlus size="16" stroke-width="2" aria-hidden="true" />
              </button>
              <button
                v-if="profileBgImage"
                type="button"
                class="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                @click="profileBgImage = ''"
                aria-label="Remove background"
              >
                <X size="16" stroke-width="2" aria-hidden="true" />
              </button>
            </div>
          </div>
          <input
            ref="profileBgInput"
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleProfileBgChange"
          />
        </div>

        <div class="-mt-10 px-6">
          <div class="relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-muted shadow-sm shadow-black/10">
            <img
              v-if="avatarImage"
              :src="avatarImage"
              alt="Profile Avatar"
              class="h-full w-full object-cover"
            />
            <button
              type="button"
              class="absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
              @click="$refs.avatarInput.click()"
              aria-label="Change profile picture"
            >
              <ImagePlus size="16" stroke-width="2" aria-hidden="true" />
            </button>
            <input
              ref="avatarInput"
              type="file"
              class="hidden"
              accept="image/*"
              @change="handleAvatarChange"
            />
          </div>
        </div>

        <div class="px-6 pb-6 pt-4">
          <form class="space-y-4">
            <div class="flex flex-col gap-4 sm:flex-row">
              <div class="flex-1 space-y-2">
                <Label for="edit-first-name">First name</Label>
                <Input
                  id="edit-first-name"
                  placeholder="Matt"
                  value="Margaret"
                  type="text"
                  required
                />
              </div>
              <div class="flex-1 space-y-2">
                <Label for="edit-last-name">Last name</Label>
                <Input
                  id="edit-last-name"
                  placeholder="Welsh"
                  value="Villard"
                  type="text"
                  required
                />
              </div>
            </div>
            <div class="space-y-2">
              <Label for="edit-username">Username</Label>
              <div class="relative">
                <Input
                  id="edit-username"
                  class="peer pe-9"
                  placeholder="Username"
                  value="margaret-villard-69"
                  type="text"
                  required
                />
                <div class="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <Check
                    size="16"
                    stroke-width="2"
                    class="text-emerald-500"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <Label for="edit-website">Website</Label>
              <div class="flex rounded-lg shadow-sm shadow-black/5">
                <span class="inline-flex items-center rounded-s-lg border border-input bg-background px-3 text-sm text-muted-foreground">
                  https://
                </span>
                <Input
                  id="edit-website"
                  class="-ms-px rounded-s-none shadow-none"
                  placeholder="yourwebsite.com"
                  value="www.margaret.com"
                  type="text"
                />
              </div>
            </div>

            <div class="space-y-2">
              <Label for="edit-bio">Biography</Label>
              <Textarea
                id="edit-bio"
                v-model="bioText"
                :maxlength="maxLength"
                aria-describedby="characters-left-textarea"
                placeholder="Write a few sentences about yourself"
              />
              <p
                id="characters-left-textarea"
                class="mt-2 text-right text-xs text-muted-foreground"
                role="status"
                aria-live="polite"
              >
                <span class="tabular-nums">{{ remainingCharacters }}</span> characters left
              </p>
            </div>
          </form>
        </div>
      </div>
      <DialogFooter class="border-t border-border px-6 py-4">
        <DialogClose asChild>
          <Button type="button" variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button type="button">Save changes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
