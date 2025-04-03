# Origin UI - Vue

> [!NOTE]  
> This is a fork of the original [Origin UI](https://originui.com/) project. This project is unaffiliated with the original. I appreciate their work and have developed these Vue components based on their design.

> [!NOTE]  
> This is a work in progress. For some components, the implementation is coming soon using (e.g. [Reka UI](https://www.reka-ui.com/)).

Origin UI - Vue is a collection of copy-and-paste components for quickly building app UIs using Vue. The collection currently features 90+ components and is updated with new examples if the original library is updated.

## Demo

[originui-vue.pages.dev/](https://originui-vue.pages.dev/)

## Features

- Built with Vue and TailwindCSS
- Fully customizable
- Responsive design

## Differences from the original [Origin UI](https://originui.com/)

- [x] [Vue](https://vuejs.org) instead of ~~Next.js~~
- [x] [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next) instead of ~~Lucide React~~
- [x] [Reka UI](https://www.reka-ui.com/) instead of ~~Radix UI~~

## Getting Started

### Development

> [!NOTE]  
> This project uses [pnpm](https://pnpm.io/) as package manager.

1. Clone the repository:

   ```
   git clone https://github.com/Jettonn/originui-vue.git
   ```

2. Install dependencies:

   ```
   pnpm install
   ```

3. Run the development server:

   ```
   pnpm dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Usage

You can copy and use the components in your Vue project. Note that some components may require additional libraries - refer to the code comments at the top of each file for specific requirements.

### Prerequisites

If you want to use the components in your project, you need to setup the following:

- [Vue](https://vuejs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Reka UI](https://www.reka-ui.com/overview/introduction.html)

#### Utils

In the `src/lib/utils.ts` folder you will find the common `cn` function for Tailwind CSS class merging and the `buttonVariants` function for generating the button classes.

#### Base Components

You need to copy the base components from the `src/lib/components/ui` folder to your project and adjust the imports accordingly.

#### CSS Variables

Import the CSS in your `src/lib/app.css` or `src/lib/main.css` file (the following is based on Tailwind CSS):

```css
@layer base {
  :root {
    --background: oklch(1 0 0); /* --color-white */
    --foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
    --card: oklch(1 0 0); /* --color-white */
    --card-foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
    --popover: oklch(1 0 0); /* --color-white */
    --popover-foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
    --primary: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --primary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --secondary: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
    --secondary-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --muted: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
    --muted-foreground: oklch(0.55 0.01 286); /* --color-zinc-500 */
    --accent: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
    --accent-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --destructive: oklch(0.637 0.237 25.331); /* --color-red-500 */
    --destructive-foreground: oklch(0.637 0.237 25.331); /* --color-red-500 */
    --border: oklch(0.92 0 286); /* --color-zinc-200 */
    --input: oklch(0.871 0.006 286.286); /* --color-zinc-300 */
    --ring: oklch(0.871 0.006 286.286); /* --color-zinc-300 */
    --radius: 0.625rem;
    --sidebar: oklch(0.985 0 0); /* --color-zinc-50 */
    --sidebar-foreground: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
    --sidebar-primary: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --sidebar-primary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --sidebar-accent: oklch(0.967 0.001 286.375); /* --color-zinc-100 */
    --sidebar-accent-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --sidebar-border: oklch(0.92 0.004 286.32); /* --color-zinc-200 */
    --sidebar-ring: oklch(0.871 0.006 286.286); /* --color-zinc-300 */
    --animate-accordion-down: accordion-down 0.2s ease-out;
    --animate-accordion-up: accordion-up 0.2s ease-out;
    --animate-collapsible-down: collapsible-down 0.2s ease-out;
    --animate-collapsible-up: collapsible-up 0.2s ease-out;
  }

  .dark {
    --background: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
    --foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --card: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
    --card-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --popover: oklch(0.141 0.005 285.823); /* --color-zinc-950 */
    --popover-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --primary: oklch(0.985 0 0); /* --color-zinc-50 */
    --primary-foreground: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --secondary: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
    --secondary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --muted: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --muted-foreground: oklch(0.65 0.01 286); /* Between zinc-400 and zinc-500 */
    --accent: oklch(0.21 0.006 285.885); /* --color-zinc-900 */
    --accent-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --destructive: oklch(0.396 0.141 25.723); /* --color-red-900 */
    --destructive-foreground: oklch(0.637 0.237 25.331); /* --color-red-500 */
    --border: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
    --input: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
    --ring: oklch(0.442 0.017 285.786); /* --color-zinc-600 */
    --sidebar: oklch(0.205 0 0); /* --color-zinc-900 */
    --sidebar-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --sidebar-primary: oklch(0.488 0.243 264.376); /* --color-blue-700 */
    --sidebar-primary-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --sidebar-accent: oklch(0.269 0 0); /* --color-zinc-800 */
    --sidebar-accent-foreground: oklch(0.985 0 0); /* --color-zinc-50 */
    --sidebar-border: oklch(0.274 0.006 286.033); /* --color-zinc-800 */
    --sidebar-ring: oklch(0.442 0.017 285.786); /* --color-zinc-600 */
  }
}
```

<!-- #### Runes (optional)

If you want to use the helpers used in some components you need to copy the `src/lib/runes` folder to your project and adjust the imports accordingly. -->

## Components

- Inputs and Textarea
- Buttons
- Badges
- Checkbox, Radio, and Switch
- Select
- Sliders
- Alert, Notification, and Banner (available soon)
- Dialogs
- (More components coming soon)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Terms of Use

Feel free to use these components in personal and commercial projects. However, while the tutorials and demos are available for your use as-is, they cannot be redistributed or resold.

## Acknowledgements

- [Origin UI](https://originui.com/) - The original project from which this Vue version is adapted
- [Vue](https://vuejs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Reka UI](https://www.reka-ui.com/)

## Contact

For any questions or feedback, please open an issue on this repository.

## Notes

This project is a work in progress, and I am continuously working to improve and expand this collection.
