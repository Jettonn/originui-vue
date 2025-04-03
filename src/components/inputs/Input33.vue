<template>
  <div
    class="relative rounded-lg border border-input bg-background shadow-xs shadow-black/[.04] ring-offset-background transition-shadow focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 has-disabled:cursor-not-allowed has-disabled:opacity-50 [&:has(input:is(:disabled))_*]:pointer-events-none"
  >
    <label for="input-33" class="block px-3 pt-2 text-xs font-medium text-foreground">
      Input with inset label
    </label>
    <input
      id="input-33"
      class="flex h-10 w-full bg-transparent px-3 pb-2 text-sm text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-hidden"
      placeholder="Email"
      type="email"
    />
  </div>
</template>
