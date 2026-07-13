import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Button styling adapted from the COSS design system (packages/ui/src/components/button.tsx).
// Base UI conventions are translated to Vue/Reka: `data-pressed:` -> `active:`, and the
// inset highlight uses rgba() so it compiles without COSS's --theme() helper.
export const buttonVariants = cva(
  "relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg border text-sm font-medium outline-none transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground shadow-xs shadow-primary/24 not-disabled:inset-shadow-[0_1px_rgba(255,255,255,0.16)] hover:bg-primary/90 active:bg-primary/90 active:inset-shadow-[0_1px_rgba(0,0,0,0.08)] active:shadow-none disabled:shadow-none",
        destructive:
          "border-destructive bg-destructive text-white shadow-xs shadow-destructive/24 not-disabled:inset-shadow-[0_1px_rgba(255,255,255,0.16)] hover:bg-destructive/90 active:bg-destructive/90 active:inset-shadow-[0_1px_rgba(0,0,0,0.08)] active:shadow-none disabled:shadow-none focus-visible:ring-destructive/40",
        outline:
          "border-input bg-popover text-foreground shadow-xs hover:bg-accent/50 active:bg-accent/50 dark:bg-input/32 dark:hover:bg-input/64 dark:active:bg-input/64",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80",
        ghost: "border-transparent text-foreground hover:bg-accent active:bg-accent",
        link: "border-transparent text-foreground underline-offset-4 hover:underline active:underline",
      },
      size: {
        default: "h-9 px-3 sm:h-8",
        sm: "h-8 gap-1.5 rounded-md px-2.5 text-xs sm:h-7",
        lg: "h-10 px-3.5 sm:h-9",
        icon: "size-9 sm:size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-1.5 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70',
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

export const avatarVariant = cva(
  'inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden',
  {
    variants: {
      size: {
        xs: 'h-8 w-8 text-xs',
        sm: 'h-10 w-10 text-xs',
        base: 'h-16 w-16 text-2xl',
        lg: 'h-32 w-32 text-5xl'
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md'
      }
    }
  }
)
