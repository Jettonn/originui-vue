<script setup lang="ts">
import Input from '../ui/Input.vue'
import Label from '../ui/Label.vue'
</script>

<template>
  <div class="space-y-2" style:--ring="234 89% 74%">
    <Label for="input-05">Input with colored border and ring</Label>
    <Input id="input-05" placeholder="Email" type="email" />
  </div>
</template>
