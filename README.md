# Electron + Next.js + TypeScript + Tailwind CSS Template

This repository is a template for building an **Electron** desktop application using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It leverages [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) under the hood for the Next.js portion.

## Features

- **Electron** (CommonJS in main process)
- **Next.js** (TypeScript / React in the renderer)
- **Tailwind CSS** for styling
- **Automatic Dev Mode** (runs a local Next.js server and loads it in Electron)
- **Production Build** with [`electron-builder`](https://www.electron.build/)

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Development**

   This will run the Next.js development server on port `3000` and open the Electron app:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the web version, or check the Electron window that will open automatically.

3. **Production Build**

   To build a production-ready desktop app (for distribution on macOS, Windows, etc.):

   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   # or
   bun build
   ```

   This command will:
    1. Run a Next.js production build (generating the `.next` folder, or an export if configured).
    2. Package the Electron app with [electron-builder](https://www.electron.build/).  
       The output (e.g., `.exe`, `.dmg`, etc.) will be in the `dist/` directory.

## Project Structure

- **`main/`**: Contains Electron’s **main process** code (`main.js`, `preload.js`, etc.).
- **`app/`**: Next.js 13+ App Router directory (pages, layouts, etc.).
- **`tailwind.config.js`**: Tailwind CSS configuration.
- **`electron-builder` configuration**: Specified in `package.json` under `build`.

## Dependencies Overview

- **Electron**: Core library for building cross-platform desktop apps.
- **Electron-Builder**: Used to package and distribute the Electron app.
- **Concurrently**: Allows running the Next.js dev server and Electron simultaneously in development.
- **Next.js**: Framework for server-rendered React applications.
- **React + React-DOM**: Core libraries for building the UI.
- **TypeScript**: Adds static typing to help catch errors early.
- **Tailwind CSS**: Utility-first CSS framework for styling.

If you’re on **Windows**, make sure you have **Visual Studio Build Tools** (and possibly **NSIS**) installed so `electron-builder` can generate `.exe` installers.

## Working with Next.js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Running the Next.js Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Next.js app. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Fonts & Styles

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) and **Tailwind CSS** for styling. Check the `tailwind.config.js` file for customization.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) – an interactive tutorial.
- [Next.js GitHub Repository](https://github.com/vercel/next.js) – feedback and contributions are welcome!

For more details about packaging and distributing Electron apps, visit:

- [Electron Documentation](https://www.electronjs.org/docs/latest)
- [electron-builder Documentation](https://www.electron.build/)

## Deploy on Vercel

Even though this project is configured for Electron, you can still deploy the Next.js (web) portion on [Vercel](https://vercel.com/new) if you’d like. Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**Happy coding!** This template should provide you with a solid starting point for an Electron + Next.js + TypeScript + Tailwind CSS application. Feel free to customize and modify it to fit your needs.