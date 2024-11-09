<script setup lang="ts">
import { ref } from 'vue'
import CheckboxTree from '../ui/CheckboxTree.vue'
// import Checkbox from '../ui/Checkbox.vue'

interface TreeNode {
  id: string
  label: string
  checked: boolean | 'indeterminate'
  children?: TreeNode[]
}

const initialTree = ref<TreeNode>({
  children: [
    { checked: true, id: 'mountains', label: 'Mountains' },
    {
      children: [
        { checked: false, id: 'niagara', label: 'Niagara Falls' },
        { checked: true, id: 'angel-falls', label: 'Angel Falls' }
      ],
      id: 'waterfalls',
      label: 'Waterfalls',
      checked: 'indeterminate'
    },
    { checked: false, id: 'grand-canyon', label: 'Grand Canyon' }
  ],
  id: 'natural-wonders',
  label: 'Natural Wonders',
  checked: 'indeterminate'
})
</script>

<template>
  <div class="space-y-3">
    <CheckboxTree :node="initialTree" @update:node="newVal => (initialTree = newVal)" />
  </div>
</template>
