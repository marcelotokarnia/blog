---
title: Geekle Node.js Conference Day 2
summary: Continuation of 👇🏼
date: 2020-05-31
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: NodeJs,Conference,Remote,Geekle
---

Being on a remote conference in a world a few months in Covid was somewhat interesting, to get some more insights about how different companies around the globe are handling this whole Work From Home situation.

The same disclaimer of the previous post applies: I'm merely reproducing the information I wrote down from watching the presentations, I'm by no means an expert in any of the following topics, in fact, most of it I was hearing for the very first time and further research is encouraged if you are interested.

---

### [Vladimir de Turckheim](https://www.linkedin.com/in/vladimirdeturckheim/) - Request context tracking (AsyncLocalStorage use cases and best practices)

Vladimir was the main contributor of this new Node.js API in the Async Hooks module, introduced in Node 13.10: AsyncLocalStorage.

This tool was built inspired by multithreaded APIs where basically each request spins up another thread and everything is unique to that request in that thread context.

Which is not possible in single threaded Node, that's why one of the most common NodeJS patterns is "send down the `req` object everywhere", that's your context, and further down the flow you will most likely need to extract something from it, but along the way, it just makes your code noiser and noiser, a lot of functions take in the `req` object only to send it further down and not do anything with it.

A code snippet might illustrate how this powerful tool works:

```js
const { AsyncLocalStorage } = require('async_hooks')
const asyncLocalStorage = new AsyncLocalStorage()
const log = message => {
  const requestId = asyncLocalStorage.getStore()
  console.log(requestId ? `[${requestId}] ${message}` : message)
}

app.get('/', (request, response) => {
  const requestId = uuid()
  asyncLocalStorage.run(requestId, async () => {    
    log('Start processing')
    await emailService.notify(request.body.emails)
    response.writeHead(200)
  })
})
```

There is no need to append `requestId` to the `request` object or send down the `request` object to the `log` function, because with `asyncLocalStorage` in place all the asynchronous context inside `asyncLocalStorage.run` can have access to that `store` that was initialized as first parameter (in this example `requestId`)

I even got inspired by this possibility and added this on a route in one of my personal projects, I named this commit: ["async local storage, its crazy because it works"](https://github.com/marcelotokarnia/strava-maps/commit/bb8cc897934acadc791534fdf1d5b1ffbfa3a796). It definitely opens up a whole lot of possibilities for the future. Thanks Vladimir.

---

### [Önder Ceylan](https://www.linkedin.com/in/onderceylan/) - Puppeteer can automate that

This talk was about the [Puppeteer](https://www.npmjs.com/package/puppeteer) tool, which is heavily used as a testing tool for visual tests, performance benchmarks and integration tests.

Önder shows how much more powerful than this the tool is, you can even load files offline (as you would in a normal browser), and inject some javascript and css manually (which you would also be able to do in the developer tools tab of your browser), and apply some transformations for a image file loaded offline, similar to instagram filters for example, and take a screenshot out of it. 

So basically you are using puppeteer to programmatically edit an image. Awesome! 

It can also be used by coverage reports of specific flows and a few other pretty cool scenarios.

He finishes the presentation suggesting a more lightweighted approach to `puppeteer` package, for example combining `puppeteer-core` and `chrome-launcher` packages to save you some hundreds of mbs. 

The whole presentation is available [HERE](https://www.youtube.com/watch?v=d2WSO3w5E94)