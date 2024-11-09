<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '../ui/RadioGroup'
import Label from '../ui/Label.vue'
import Input from '../ui/Input.vue'

const selectedValue = ref('without-expansion')
const inputElement = ref<HTMLInputElement | null>(null)

// const handleTransitionEnd = (event: TransitionEvent) => {
// 	if (selectedValue.value === 'with-expansion' && inputElement.value) {
// 		inputElement.value.focus();
// 	}
// };
</script>

<template>
  <RadioGroup class="gap-6" v-model="selectedValue">
    <div>
      <div class="flex items-start gap-2">
        <RadioGroupItem
          value="with-expansion"
          id="radio-05-with-expansion"
          aria-describedby="radio-05-with-expansion-description"
          aria-controls="radio-input-05"
        />
        <div class="grow">
          <div class="grid grow gap-2">
            <Label for="radio-05-with-expansion">Radio with expansion</Label>
            <p id="radio-05-with-expansion-description" class="text-xs text-muted-foreground">
              You can use this radio with a label and a description.
            </p>
          </div>
          <!-- Expandable field -->
          <div
            role="region"
            id="radio-input-05"
            aria-labelledby="radio-05-with-expansion"
            class="grid transition-all ease-in-out data-[state=collapsed]:grid-rows-[0fr] data-[state=expanded]:grid-rows-[1fr] data-[state=collapsed]:opacity-0 data-[state=expanded]:opacity-100"
            :data-state="selectedValue === 'with-expansion' ? 'expanded' : 'collapsed'"
          >
            <div class="-m-2 overflow-hidden p-2">
              <div class="mt-3">
                <Input
                  ref="inputElement"
                  type="text"
                  id="radio-05-additional-info"
                  placeholder="Enter details"
                  aria-label="Additional Information"
                  :disabled="selectedValue !== 'with-expansion'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-start gap-2">
      <RadioGroupItem
        value="without-expansion"
        id="radio-05-without-expansion"
        aria-describedby="radio-05-without-expansion-description"
      />
      <div class="grid grow gap-2">
        <Label for="radio-05-without-expansion">Radio without expansion</Label>
        <p id="radio-05-without-expansion-description" class="text-xs text-muted-foreground">
          You can use this checkbox with a label and a description.
        </p>
      </div>
    </div>
  </RadioGroup>
</template>
