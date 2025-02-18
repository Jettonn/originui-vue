<script setup lang="ts">
// "use client";

// import { Badge } from "@/components/ui/badge";
// import { X } from "lucide-react";
// import { useState } from "react";

// export default function Component() {
//   const [isActive, setIsActive] = useState(true);

//   if (!isActive) return null;

//   return (
//     <Badge variant="outline" className="rounded-md px-2 py-1">
//       Tag
//       <button
//         className="-my-[5px] -me-2 -ms-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
//         onClick={() => setIsActive(false)}
//         aria-label="Delete"
//       >
//         <X size={14} strokeWidth={2} aria-hidden="true" />
//       </button>
//     </Badge>
//   );
// }

import Badge from '@/components/ui/Badge.vue'
import { X } from 'lucide-vue-next'
import { ref } from 'vue'
const isActive = ref(true)
</script>

<template>
  <Badge v-if="isActive" variant="outline" class="rounded-md px-2 py-1">
    Tag
    <button
      class="-my-px -me-1.5 -ms-px inline-flex size-5 shrink-0 items-center justify-center rounded-[inherit] p-0 opacity-60 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
      @click="isActive = false"
    >
      <X :size="12" :stroke-width="2" aria-hidden="true" />
    </button>
  </Badge>
</template>
