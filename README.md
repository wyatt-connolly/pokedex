# Pokedex

> Pokedex made with Next.js

https://user-images.githubusercontent.com/88942814/168428204-c3b5095a-d2da-4f6a-98df-17a1d2ee2a64.mp4

# :crystal_ball: Visual Demo

> **Homepage**

![PPm686f](https://user-images.githubusercontent.com/88942814/163649348-a130903e-e86a-4cb4-9062-d5f0e30e58ac.png)

> **Pokemon Info**

![t2DnQje](https://user-images.githubusercontent.com/88942814/163656609-32859e6b-8e3b-45fa-8f44-62baaa34e660.png)

# 📌 Table of Contents

- [Demo Website](https://pokedex-self-mu.vercel.app/)
- [Technologies](#computer-technologies)
- [Features](#rocket-features)
- [Lessons](#pencil-lessons)
- [Visual Demo](#crystal_ball-visual-demo)

# :computer: Technologies

This project was made using the follow technologies:

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [TailwindCSS](https://tailwindcss.com/)

# :rocket: Features

- SSR (server-side rendering) and SSG (static site generation)
- Pagination
- CSS Grid and responsive UI

# :house: Local Development

After intalling all dependencies (npm i) run this command:

 `npm run dev`

This will start both server and client in dev mode. The app is now available on localhost:3000.

# :pencil: Lessons

Data fetching from an API and displaying that data in an organized manner was the goal of this project. Most if not all projects that use React will have to fetch data at some point. That's just how web applications work. Yes, building a Pokedex is a cliche project, but it's a great project to learn how to data fetch.

One challenge that I ran into in the Pokedex project was choosing between SSR or SSG in my components. The two terms were confusing to me at first because I was only used to the client side. I chose static-site generation in the index.js so that the homepage would load faster, improving customer retention. Then I chose SSR for the individual pokemon pages since I used query parameters.

What did I learn from building this project? I learned:
- How the React DOM works
- Fetching data from the Pokedex API by using the "useEffect" hook.
- Asynchronous functions.
- Functional component lifecycle

I also dipped my hands into Tailwind for this project. After building the Pokedex, I realized that I don't like the Tailwind approach. In my opinion, CSS should be separated from JS. It makes the code unreadable and cramped. For small projects, Tailwind is alright because it streamlines writing CSS. But for big projects, I can't see myself using it. I would much prefer MUI, CSS modules, or styled-components.

# :link: License

Design and assets belong to [pokemon.com](https://www.pokemon.com)

