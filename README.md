# RocketStore 🚀

A modern e-commerce store built with React, TypeScript, and Tailwind CSS.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm

## Getting Started

Follow these steps to get the project running on your local machine:

1. **Clone the repository**
   ```bash
   git clone https://github.com/DiogoHMC/RocketStore.git
   cd RocketStore
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```
   > If you're using npm instead of pnpm, replace `pnpm` with `npm` in all commands

3. **Install Tailwind dependencies**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
    ```bash
   npx tailwindcss init -p
   ```

4. **Start the development server**
   ```bash
   pnpm dev
   ```
   The application will start and be available at [http://localhost:5173](http://localhost:5173)

## Project Structure

```
RocketStore/
├── src/
│   ├── components/     # React components
│   ├── contexts/       # React contexts (e.g., CartContext)
│   ├── assets/        # Static assets (images, icons)
│   ├── pages/         # Page components
│   └── products.ts    # Product data
├── public/            # Public assets
└── package.json       # Project dependencies and scripts
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM

