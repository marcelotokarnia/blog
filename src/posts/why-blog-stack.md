---
title: Why a Blog ?
summary: This is my first blog post, so let's start off with the why's about this blog and the stack of choice.
date: 2020-05-27
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: Sapper,Svelte,SSR,JAMstack
---

First of all, I'm very excited to be writing this very first blog post, which is going to be about the blog itself, so let's say it's a meta post 😆

It is no secret that I do like streamline, document and automate as most as I can, whoever already worked with me might know that.

Due to this whole quarantine season we are facing I ended up relying on code as a coping mechanism 😅, And among other projects I'm working on this [Strava Project](https://www.github.com/marcelotokarnia/strava-maps), and I've made some interesting decisions I would like to write down (if anything for my own future reference 😂)

So I wanted a blog that would be easy enough to manipulate content but also could teach me a thing or two about something new on the javascript world in the process. I wouldn't like to start over the same old stack I'm very used to.

So my first stack candidates were [Next.js](https://nextjs.org/) or [Nuxt.js](https://nuxtjs.org/) because I would like to try out some server side rendering, because up until now I had not tested it myself yet 😱 and I guess those are the obvious choices when you talk about server side rendering in the javascript world these days.

Since this is a purely static website, I considered some of the popular JAMstack technologies like [Gatsby.js](https://www.gatsbyjs.org/) or [Hugo](https://gohugo.io/) due to big communities around it, then I thought about maybe trying something a bit more recent and a bit less mainstream, just for the fun of it, right ? I mean, it's a small project, and that's what those are for, experimenting, so I remembered hearing about [Blitz.js](https://blitzjs.com/) and [RedwoodJS](https://redwoodjs.com/).

And I must say, I almost went with [RedwoodJS](https://redwoodjs.com/), the website looks pretty neat and consistent, and more importantly, full of examples, you should definitely have a look at that if you are also wondering on some new technology to learn.

But in the end, I flipped it all over and decided to abandon the consolidated dynamic duo on leading frontend frameworks (Yeah, I'm talking about React and Vue), which are what the listed options above are based on. And decided to try something even more bleeding edge.

I remembered hearing about [Svelte](https://svelte.dev/) framework for the first time from the [Nordic.js](https://nordicjs.com/). It seemed pretty interesting and I kept that on the back of my mind, **until today**. So after a bit more research I found out that "Svelte also have it's own Next.js", and it's called [Sapper](https://sapper.svelte.dev/). So that's a perfect match for what I was looking for.

Which according to the official website:

```
- Why the name?

In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions
all under combat conditions — are known as sappers.

Sapper, which is short for S velte APP mak ER

- Comparison with Next.js

Sapper is powered by Svelte instead of React, so it's faster and your apps are smaller
```

Pretty neat right ? So I was convinced. Svelte is supposed to deliver faster and smaller apps, because it's big selling point is that it "compiles away", leaving only pure vanilla javascript in your application.

I'm stocked about that, so I pick that to see it in action! Seeing is believing right ? 🎉

On the next post I should talk about how I implemented this blog structure and how it works.

Thank you,
