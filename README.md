# Pokedex

> Pokedex made with Next.js

![PPm686f](https://user-images.githubusercontent.com/88942814/163649348-a130903e-e86a-4cb4-9062-d5f0e30e58ac.png)

# 📌 Table of Contents

- [Demo Website](#eyes-demo-website)
- [Technologies](#computer-technologies)
- [Features](#rocket-features)
- [Lessons](#pencil-lessons)
- [Visual Demo](#crystal_ball-visual-demo)

# :eyes: Demo Website

:point_right: demo: https://pokedex-self-mu.vercel.app/

# :computer: Technologies

This project was made using the follow technologies:

- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [TailwindCSS](https://tailwindcss.com/)

# :rocket: Features

- SSR (server-side rendering) and SSG (static site generation)
- Pagination
- CSS Grid and responsive UI

# :pencil: Lessons

Data fetching from an API and displaying that data in an orginized manner was the goal of this project. Most if not all projects that use React will have to fetch data at some point. That's just how web applications work. Yes, building a Pokedex is a cliche project, but it's a great project to learn how to data fetch. 

One challenge that I ran into the Pokedex project was choosing between SSR or SSG in my components. The two terms were confusing to me at first because I was only used to client side. I chose static-site generation in the index.js so that the homepage would load faster, improving customer retention. Then I chose SSR for the individual pokemon pages since I used query parameters.

What did I learn from building this project? I learned:
> How the React DOM works
> Fetching data from the Pokedex API by using the "useEffect" hook.
> Asynchronous functions.
> Functional component lifecycle

I also dipped my hands into Tailwind for this project. After building the pokedex, I realized that I don't like the Tailwind approach. In my opinion, CSS should be seperated from JS. It makes the code unreadable and cramped. For small projects, Tailwind is alright because it streamlines writing CSS. But for big projects, I can't see myself using it. I would much prefer MUI, CSS modules or styled-components. 

# :crystal_ball: Visual Demo

> **Homepage**

![PPm686f](https://user-images.githubusercontent.com/88942814/163649348-a130903e-e86a-4cb4-9062-d5f0e30e58ac.png)

> **Pokemon Info**

![t2DnQje](https://user-images.githubusercontent.com/88942814/163656609-32859e6b-8e3b-45fa-8f44-62baaa34e660.png)
