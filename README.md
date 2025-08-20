# Augment Ascension

A futuristic e-commerce platform showcasing cyberpunk-inspired products and technology.

![Augment Ascension Banner](https://i.imgur.com/oB0hVqo.png)

## Features

- **Cybernetics**: Advanced cybernetic enhancements and implants
- **Streetwear**: Futuristic fashion and streetwear collections
- **Smart Glasses**: Next-generation augmented reality eyewear
- **Neurotech**: Neural interface technology and brain-computer interfaces
- **Energy Cores**: High-performance power sources and energy systems

## Technology Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Tailwind CSS with custom SCSS
- **UI Components**: React functional components with modern design patterns
- **Component Library**: [shadcn/ui](https://ui.shadcn.com/) for accessible, customizable React components

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser
5. To run Storybook: `npm run storybook`

## Project Structure

```
augment-ascension/
├── components/          # React components
│   ├── Categories.tsx   # Main categories display
│   └── CategoryItem.tsx # Individual category items
├── public/             # Static assets
│   ├── bannerimage.png # Main banner image
│   └── *.jpg          # Category images
├── src/
│   └── app/           # Next.js app directory
└── styles/            # SCSS styling files
```

## Development

This project uses modern React patterns with TypeScript for type safety and Tailwind CSS for styling. Zod is used for form validation. Storybook is available for component development and documentation. The component structure is modular and reusable, making it easy to extend with new features.

## Recent Updates

- **Global Dark Mode:** The site now defaults to dark mode using Tailwind CSS. The `dark` class is applied globally in the layout for consistent dark styling.
- **Form Prototype:** Signup and Login forms are implemented using React Hook Form and Zod for schema validation. See `components/SignupForm.tsx` and `components/LoginForm.tsx`.
- **Zod Installed:** Zod is used for form validation schemas. See `lib/schemas/user.ts` for examples.
- **Storybook Installed:** Storybook is set up for UI component development and documentation. Dark mode is enabled for Storybook previews.
