import type { Component } from 'vue'

const components = import.meta.glob('/src/lib/components/**/*.vue', {
  eager: true,
  import: 'default'
})
const rawComponents = import.meta.glob('/src/lib/components/**/*.vue', {
  query: '?raw',
  eager: true,
  import: 'default'
})

export async function readComponent(directory: string, componentName: string) {
  const path = `/src/lib/components/${directory}/${componentName}.vue`

  if (components[path]) {
    const Component = components[path] as Component
    const source = rawComponents[path] as string

    return { Component, source }
  } else {
    return { Component: null, source: null }
  }
}
