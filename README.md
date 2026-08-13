# benjaminnashel.com

Personal portfolio site for Benjamin Nashel — about, art, music, and movies/books pages, with a three.js background and a Matter.js physics title on the home page.

Live at [www.benjaminnashel.com](https://www.benjaminnashel.com), deployed on Vercel.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) (plain JavaScript)
- [react-router-dom](https://reactrouter.com/) for routing
- [three.js](https://threejs.org/) for the animated background
- [Matter.js](https://brm.io/matter-js/) for the physics-driven title
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

Output goes to `dist/`. Vercel serves it as a single-page app (see `vercel.json`).
