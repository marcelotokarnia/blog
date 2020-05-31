---
title: Geekle Node.js Conference Day 1
summary: I was just now in this remote conference, and would like to share some key takeaways from it.
date: 2020-05-30
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: NodeJs,Conference,Remote,Geekle
---

First of all, it was my first fully remote live conference.
And it is a pretty clever concept, specially for times like these we are living now (note for future readers, I'm talking about the Covid-19 crisis).

As expected of any live presentations, specially involving demos, and globally broadcasting, there were a few technical issues here and there, but let's focus on what went right instead. I did learn a few things and I would like to share those.

I'll first add a disclaimer that I'm merely reproducing the information I wrote down from watching the presentations, I'm by no means an expert in any of the following topics, in fact, most of it I was hearing for the very first time and further research is encouraged if you are interested.

---

### [Adrien Maret](https://www.linkedin.com/in/maretadrien/) - How V8 Engine works

The very first presentation of the senior track was about how v8 engine works under the hood and a few performance tricks to have in mind while writing JS code. Things that would seem interchangeably can have a huge performance impact on your platform.

```js
const x = {a: 1, b: 2}

// can be around 26% faster compared to

const x = {}
x.a = 1
x.b = 2
```

```js
const x = {a: 1, b: 2, c: 3}
const y = {b: 1, c: 2, c: 3}
const z = {c: 1, b: 2, c: 3}

function foo(bar) {
  return bar.a
}

[x,y,z].map(foo)

// can be around 73% faster if the keys on x,y,z were ordered (yes, object keys order matter!!!) due to the fact that the v8 engine will interpret foo as a polimorphic function and can't optimize for that

```

takeaways: 

1. Stick to typings (typescript helps a lot), to avoid polimorphic functions
   
2. Avoid unnecessary closures, because the closure has access to the external scope and that can't be garbage collected, it will also make your code cleaner and avoid callback hells.
   
3. Use eslint sort-keys rule to avoid having the same object with different key order, to help v8 optimize for that.

---

### [Gil Tayar](https://www.linkedin.com/in/giltayar/) - ES6 modules in Node.js

I must say this guy was one of the most enthusiastic presenter I've seen in a long while, congratulations Gil! You seemed very excited about the topic through the whole 40 minutes!

So this presentation was about how es6 modules are not just a `replaceAll` command from `require` to `import` compared to `commonjs`.

My biggest takeaway from this is that commonjs is parsed and executed while loading on the browser, so basically line by line, and if it bumps into a `require(something)` line it will basically continue executing from the next file instead of finishing parsing the same previous file before.

So if you `require` something wrong through a `commonjs` file, you get an runtime error that what you were looking for is `undefined` (suppose you `require`d a non-default function with a typo, when you try and use it, you will bump into something `undefined is not a function`).

But `es6 modules` are first loaded and parsed before executed, and that brings 2 main benefits: 

1. Tons of files can be loaded and parsed in parallel (which is not uncommon these days, to have hundreds of modules)
2. If you `import` something wrong, you would then, get a parsing error, way more detailed than the runtime error mentioned before.

They are browser compatible(-ish) now, but I won't go into much details about it. So soon you won't need `Babel`, `Webpack`, `Rollup` or whatever to "prepare" your code to be browser compatible, because, let's agree everyone has been using es6 modules for a long time now, but it being compiled to commonjs before shipped just forfeits us from a lot of module benefits like the ones just mentioned. 

I'm going to add on top of this presentation's content, because I've been following the topic for a while now and, just to illustrate further the potential of ES6 modules, specially on the browser: 

Imagine a world where you can directly import each module separately, the browser will be able to cache that request, so whenever you go in a website that uses common packages like `React`, `Vue`, `Axios`, `Redux`... all of this would be most likely ALREADY CACHED in your browser, so no need to implicitly redownload bundled dependencies on every different website you visit. Wonderful potential, isn't it ? 🤗

---

### [Roy Mor](https://www.linkedin.com/in/roy-mor/) - Graphql2Rest

Roy explained how `Rest` is more server centric compared to `Graphql`, which is more client centric. It went through all the cliche benefits of Graphql over rest, like smaller payloads, more control on the client side, stronger "schema contract" between client and server.

But on the other side, it was also discussed how this increases the learning curve of your clients, in case you are, for example, publishing a public API. You can get some users frustrated by having to learn a not so straight forward new api approach when they just wanted to fetch some simple data.

To solve this problem, they developed this open source tool called [graphql2rest](https://github.com/sisense/graphql2rest) where you can expose your graphql api through rest endpoints with a fair amount of customizations, just by adding a `manifest.json` file in front of your API. And you get a lot of graphql features "for free", like param type checking on your generated rest api, Sweet 🧁.