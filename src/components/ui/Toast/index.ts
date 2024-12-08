export { ToastProvider } from 'radix-vue'
export { default as ToastViewport } from './ToastViewport.vue'
export { default as Toast } from './Toast.vue'
export { default as ToastAction } from './ToastAction.vue'
export { default as ToastClose } from './ToastClose.vue'
export { default as ToastTitle } from './ToastTitle.vue'
export { default as ToastDescription } from './ToastDescription.vue'

export interface ToastProps {
  variant?: 'default' | 'destructive'
  class?: string
}
