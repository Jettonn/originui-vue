// New file to store types and variants
import { cva, type VariantProps } from 'class-variance-authority'

export const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground'
      },
      size: {
        default: 'h-9 px-3',
        sm: 'h-8 px-2',
        lg: 'h-10 px-3'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ToggleVariants = VariantProps<typeof toggleVariants>

export interface ToggleProps extends ToggleVariants {
  modelValue?: boolean
  class?: string
}
