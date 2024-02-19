# Joint Jam Website

## Getting started

Requirements:
- [Node.js](https://nodejs.org/en/download)
- [PNPM](https://pnpm.io/installation)

Steps:
1. Clone the repo.
2. Run `pnpm install` to install dependencies.
3. Run `pnpm run dev` to start the development server.

## Development notes

- ESLint is automatically ran on save for VS Code. Other IDEs may have similar features.
- React Router v6 is used.
- Tailwind CSS is installed.
- Typings are automatically generated for .css files.

## Folders

- public: Website assets. Directly copied to output
- src/assets: Website assets. Processed by bundler.
- src/components: Reusable components.
- src/pages: Individual pages of the website.
- src/styles: Shared styles. CSS for specific components should be located next to the component.
