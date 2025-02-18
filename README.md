# Origin UI - Vue

> [!NOTE]  
> This is a fork of the original [Origin UI](https://originui.com/) project. This project is unaffiliated with the original. I appreciate their work and have developed these Vue components based on their design.

> [!NOTE]  
> This is a work in progress. For some components, the implementation is coming soon using (e.g. [Radix Vue](https://www.radix-vue.com/)).

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
- [x] [Radix Vue](https://www.radix-vue.com/) instead of ~~Radix UI~~

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
- [Radix Vue](https://www.radix-vue.com/overview/introduction.html)

#### Utils

In the `src/lib/utils.ts` folder you will find the common `cn` function for Tailwind CSS class merging and the `buttonVariants` function for generating the button classes.

#### Base Components

You need to copy the base components from the `src/lib/components/ui` folder to your project and adjust the imports accordingly.

#### CSS Variables

Import the CSS in your `src/lib/app.css` or `src/lib/main.css` file (the following is based on Tailwind CSS):

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 5.9% 90%;
    --input: 240 4.9% 83.9%;
    --ring: 240 5% 64.9%;
    --radius: 0.5rem;
  }
  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 5.9% 10%;
    --muted-foreground: 240 4.4% 58%;
    --accent: 240 5.9% 10%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 3.8% 46.1%;
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
- [Radix Vue](https://www.radix-vue.com/)

## Contact

For any questions or feedback, please open an issue on this repository.

## Notes

This project is a work in progress, and I am continuously working to improve and expand this collection.
