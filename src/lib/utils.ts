import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm shadow-black/5 hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm shadow-black/5 hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm shadow-black/5 hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-lg px-3 text-xs',
        lg: 'h-10 rounded-lg px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)
