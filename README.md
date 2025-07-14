<div align="center">
  <a href="" target="_blanck"><img src="./public" alt=""></a>
   <div align="center">
      <img src="https://camo.githubusercontent.com/36aa3f9d0250d285d322005ff1f4d216512f13c31e434a013c34dd864fa1c4b2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742d626c75653f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d7768697465" alt="react" />
      <img src="https://camo.githubusercontent.com/807d5ee9099d29a72a272dde7a881f0bc4a9918095513f4d5209110958c62ef9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d475341502d3838434530323f7374796c653d666f722d7468652d6261646765266c6f676f3d677265656e736f636b266c6f676f436f6c6f723d7768697465" alt="GSAP" />
      <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" height="28px" alt="tailwindcss" />
      <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
    </div>
  <h3 align="center">GTA VI landing page</h3>
</div>

## <br /> 📋 <a name="table">Summary</a>

- ✨ [Introduction](#introduction)
- 🛠 [Technology Used](#tech-stack)
- 🚀 [Launch App](#launch-app)
- 🎨 [Styling](#style)

## <br /> <a name="introduction">✨ Introduction</a>

**[ENG]**

**[FR]**

## <br /> <a name="tech-stack">🛠 Technology Used</a>

- [TailwindCSS](https://tailwindcss.com/docs/installation)
  Tailwind CSS is a valuable tool for developers who want to build modern, responsive, and visually appealing websites without sacrificing development speed.

- [GSAP](https://greensock.com/gsap/)
  GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations

- [react-responsive](https://www.npmjs.com/package/react-responsive)
  react-responsive is a library that allows you to create responsive components in React applications, enabling you to render different components or styles based on the device's screen size or orientation.

## <br /> <a name="launch-app">🚀 Launch App</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

> [!NOTE]
> Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) _(Node Package Manager)_

**Cloning the Repository**

```bash
git clone {git remote URL}
cd {git project..}
```

**Installation**

> After cloning the repository, run the command `npm i` or `yarn i` to install the project's dependencies.

> Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## <br /> <a name="style">🎨 Styling</a>

Global styling are defined using **CSS** & **TailwindCSS**

<details>
<summary><code>index.css</code></summary>

```css
@import "tailwindcss";

@font-face {
  font-family: "Long";
  src: url("/fonts/long.woff");
}

@font-face {
  font-family: "Round";
  src: url("/fonts/round.woff");
}

@font-face {
  font-family: "Round Bold";
  src: url("/fonts/round-bold.woff");
}

@theme {
  --font-long: "Long", sans-serif;
  --font-sans: "Round Bold", sans-serif;
  --font-round-bold: "Round Bold", sans-serif;
  --color-yellow: #fff9cb;
  --color-pink: #ffb0c4;
  --breakpoint-sm: 40rem; /* 640px */
  --breakpoint-xs: 20rem; /* 320px */
  --breakpoint-3xl: 120rem; /* 1920px */
}

body {
  width: 100%;
  overflow-x: hidden;
  font-family: "Round", sans-serif;
  background-color: black;
}

main {
  @apply black-gradient-bg;
}

@layer utilities {
  .flex-center {
    @apply flex items-center justify-center;
  }

  .col-center {
    @apply flex flex-col items-center justify-center;
  }

  .abs-center {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
  }
}

@layer components {
  main {
    @apply w-dvw overflow-x-hidden;
  }

  nav {
    @apply fixed top-0 left-0 w-full flex justify-between items-center md:p-16 p-5 z-[100];
  }

  gradient-title {
    @apply text-[5rem] md:text-[8rem] font-round-bold font-extrabold uppercase md:leading-[7rem] leading-[4.5rem] text-center bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400 bg-clip-text text-transparent;
  }

  .hero-section {
    @apply w-dvw h-dvh relative overflow-hidden;

    .scale-out {
      @apply object-cover md:scale-125 h-full;
    }

    .title-logo {
      @apply absolute h-full md:scale-125 top-0 object-cover;
    }

    .trailer-logo {
      @apply absolute -bottom-5 w-48 left-1/2 -translate-x-1/2;
    }

    .play-img {
      @apply rounded-full md:size-28 size-20 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center;
    }

    .fake-logo-wrapper {
      @apply absolute z-50 xs:top-[9.5rem] sm:top-[12.8rem] md:top-[8.5rem] 2xl:top-44 3xl:top-48 left-1/2 -translate-x-1/2;
    }

    .overlay-logo {
      @apply size-full object-cover opacity-0 w-60 md:w-60 2xl:w-72 3xl:w-80;
    }
  }

  .first-vd-wrapper {
    .first-vd {
      @apply size-full object-cover md:[object-position:50%_center] [object-position:75%_center];
    }
  }

  .entrance-message {
    @apply absolute inset-0 w-full h-dvh overflow-hidden z-20 opacity-100;

    .entrance-logo {
      @apply 2xl:w-72 3xl:w-80 md:w-60 w-48 absolute xs:top-[9.5rem] sm:top-[12.8rem] md:top-[8.5rem] 2xl:top-44 3xl:top-48 left-1/2 -translate-x-1/2;
    }

    .text-wrapper {
      @apply mt-40 md:mt-60 2xl:mt-44 3xl:top-48;
    }
  }

  .jason {
    @apply relative z-10 lg:ps-40 2xl:ps-80 ps-10 py-40 mt-60 flex lg:flex-row flex-col justify-between gap-5 w-dvw overflow-x-hidden;

    h1 {
      @apply text-yellow font-long uppercase text-8xl mb-20;
    }

    h2 {
      @apply text-pink md:text-5xl text-3xl mb-7 md:pe-20 pe-10;
    }

    p {
      @apply text-white md:text-2xl text-lg md:pe-28 pe-14;
    }

    .jason-1 {
      @apply bg-yellow lg:h-[80vh] w-auto -translate-x-5;

      img {
        @apply size-full object-cover [object-position:5%_center] hover:scale-[0.98] transition duration-700 ease-in-out;
      }
    }

    .jason-2 {
      @apply bg-yellow h-[90vh] w-auto md:mt-36 mt-20 -translate-x-5;

      img {
        @apply size-full object-cover [object-position:80%_center] hover:scale-x-[0.97] hover:scale-y-[0.98] transition duration-700 ease-in-out;
      }
    }

    .jason-3 {
      @apply bg-yellow h-[50vh] md:w-[60%] -translate-x-5;

      img {
        @apply size-full object-cover [object-position:42%_center] hover:scale-[0.97] transition duration-700 ease-in-out;
      }
    }
  }

  .lucia {
    @apply relative;
  }

  .lucia-life {
    @apply relative z-10 py-40 mt-60 flex lg:flex-row flex-col justify-between gap-5 w-dvw overflow-x-hidden;

    h1 {
      @apply text-yellow font-long uppercase text-8xl mb-20;
    }

    h2 {
      @apply text-pink md:text-5xl text-3xl mb-7 md:pe-20 pe-10;
    }

    p {
      @apply text-white md:text-2xl text-lg md:pe-28 pe-14;
    }

    p:last-of-type {
      @apply md:hidden block xl:block;
    }

    .lucia-1 {
      @apply bg-yellow lg:h-[80vh] w-auto -translate-x-5;

      img {
        @apply size-full object-cover [object-position:85%_center] hover:scale-[0.98] transition duration-700 ease-in-out;
      }
    }

    .lucia-2 {
      @apply bg-yellow lg:h-[60vh] lg:w-[70%] w-[80%] md:my-36 my-20 lg:-translate-x-5 translate-x-5;

      img {
        @apply size-full object-cover [object-position:50%_center] hover:scale-x-[0.98] hover:scale-y-[0.98] transition duration-700 ease-in-out;
      }
    }

    .lucia-3 {
      @apply bg-yellow lg:h-[90vh] md:w-[60%] -translate-x-5;

      img {
        @apply size-full object-cover [object-position:62%_center] hover:scale-x-[0.98] hover:scale-y-[0.99] transition duration-700 ease-in-out;
      }
    }
  }

  .post-card {
    @apply relative flex justify-center items-center pb-80 shadow-2xl;

    .animated-gradient-bg {
      @apply absolute w-full md:h-[200vh] h-[220vh] left-0 xl:-bottom-1/2 md:-bottom-5/6;
    }

    .post-card-wrapper {
      @apply xl:mx-56 md:mx-12 mx-5 xl:h-[85vh] md:h-[40vh] h-[30vh] w-full flex justify-center items-center overflow-hidden relative;

      video {
        @apply w-full h-full 2xl:scale-x-105 object-cover;
      }

      img {
        @apply absolute z-10 w-full h-full;
      }

      button {
        @apply rounded-full bg-white absolute left-1/2 -translate-x-1/2 md:bottom-16 -bottom-28 md:w-fit w-2/3 px-5 md:px-7 py-4 text-lg;
      }
    }

    .final {
      @apply relative h-dvh overflow-hidden;

      .final-content {
        @apply scale-110;
      }
    }

    .final-message {
      @apply absolute w-full h-dvh overflow-hidden z-50 opacity-100;
    }
  }
}

@layer utilities {
  .black-gradient-bg {
    background: linear-gradient(
      223.17deg,
      rgb(28, 24, 41) 0%,
      rgb(27, 24, 40) 8.61%,
      rgb(25, 23, 36) 17.21%,
      rgb(22, 21, 32) 25.82%,
      rgb(20, 19, 28) 34.42%,
      rgb(18, 18, 24) 43.03%,
      rgb(17, 17, 23) 51.63%
    );
  }

  .entrance-message {
    mask-image: url("/images/big-hero-text.svg");
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
  }

  .mask-wrapper {
    mask-image: url("/images/big-hero-text.svg");
    mask-repeat: no-repeat;
  }

  .animated-gradient-bg {
    background: linear-gradient(135deg, #1e2a52 0%, #6e4b91 100%);
  }

  .jason-content {
    background: radial-gradient(ellipse, #111117 20%, transparent 70%);
  }

  .lucia-life-content {
    background: radial-gradient(ellipse, #111117 20%, transparent 70%);
  }
}
```
</details>