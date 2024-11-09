<script setup lang="ts">
import Checkbox from '../ui/Checkbox.vue'
import Label from './Label.vue'

interface TreeNode {
  id: string
  label: string
  checked: boolean | 'indeterminate'
  children?: TreeNode[]
}

interface Props {
  node: TreeNode
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:node': [node: TreeNode]
}>()

const isChecked = (node: TreeNode): boolean | 'indeterminate' => {
  if (!node.children) {
    return node.checked
  }

  const childrenChecked = node.children.map(isChecked)
  if (childrenChecked.every(status => status === true)) {
    return true
  }
  if (childrenChecked.some(status => status === true || status === 'indeterminate')) {
    return 'indeterminate'
  }
  return false
}

const handleCheck = (node: TreeNode, checked: boolean) => {
  const toggleNode = (n: TreeNode, check: boolean) => {
    n.checked = check
    n.children?.forEach(child => toggleNode(child, check))
  }

  toggleNode(node, checked)
  isChecked(props.node)
  emit('update:node', props.node)
}
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox
      :modelValue="isChecked(node)"
      :label="node.label"
      :id="node.id"
      @update:modelValue="checked => handleCheck(node, checked)"
    />
    <Label :for="node.id">{{ node.label }}</Label>
  </div>
  <div v-if="node.children" class="ms-6 space-y-3">
    <CheckboxTree
      v-for="child in node.children"
      :key="child.id"
      :node="child"
      @update:node="$emit('update:node', props.node)"
    />
  </div>
</template>
