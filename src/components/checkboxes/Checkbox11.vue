<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'

const checked = ref(false)
const inputElement = ref<InstanceType<typeof Input> | null>(null)

watch(checked, async newValue => {
  if (newValue) {
    await nextTick()
    inputElement.value?.$el?.focus()
  }
})
</script>

<template>
  <div>
    <div class="flex items-start gap-2">
      <Checkbox
        id="checkbox-11"
        v-model="checked"
        aria-controls="checkbox-input-11"
        class="h-4 w-4"
      />
      <div class="grow">
        <div class="grid gap-2">
          <Label for="checkbox-11">Checkbox with expansion</Label>
          <p id="checkbox-11-description" class="text-xs text-muted-foreground">
            You can use this checkbox with a label and a description.
          </p>
        </div>
        <!-- Expandable field -->
        <div
          role="region"
          id="checkbox-input-11"
          aria-labelledby="checkbox-11"
          class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
          :data-state="checked ? 'expanded' : 'collapsed'"
        >
          <div class="-m-2 overflow-hidden p-2">
            <div class="mt-3">
              <Input
                ref="inputElement"
                id="checkbox-11-additional-info"
                placeholder="Enter details"
                aria-label="Additional Information"
                :disabled="!checked"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
