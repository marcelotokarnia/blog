---
title: From Create React App to Next - The solution
summary: The first steps on tackling the migration
date: 2020-07-21
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: CRA,React,Next,CustomDomain,SSR
---

So this is a description of a series of steps that I took in the migration from CRA to Next in my application. If you are interested in the motivation to do so, [read the previous post](/coding-blog/cra-to-next-p1)

This is no official way to migrate from one to the other, but a series of steps that worked for me in my FIRST Next project, and as you can see in the commits, I went back on a few decisions here and there, so I was really experimenting.

- [Export common dependencies to packages](https://github.com/marcelotokarnia/strava-maps/commit/bde7c5cdeadee5a96be40ebc22e252d7d4c63b99)

First I did some house cleaning, by finally decoupling the frontend and the backend, by extracting their common dependencies (basically typings) to separate packages that could be imported from both environments.

- [WithRouter, static assets, point api to different host](https://github.com/marcelotokarnia/strava-maps/commit/35af9a0aab300e3a67cb49f05220ce7cf05caf10)

So at first I thought about consuming an API hosted in a different domain (yes, cors intended), if I managed it in a good fashion I would be able to barely change the backend, and that would make the transition smooth. But, spoiler alert, I gave up on that idea, due to my application being cookie heavy and just didn't feel like the right way to go. So even though in this commit I change the API host, let's not focus too much on that.

But instead, the two things worth mentioning about this PR are, first, whenever I needed to reach for `window.location` attributes such as pathname or query string, instead I had to do that from the `next router` object, because when server side rendering, there is no `window`, for that I used either the `withRouter` container or `useRouter` hook.

Secondly, static assets can be placed in the `static` folder and accessed directly via url, for example `<img src="/static/asset.png" />` instead of relying on the bundler to do so and importing it like `import asset from './static/asset.png'` and `<img src={asset} />`.

- [Add Custom Headers to pages, getInitialProps](https://github.com/marcelotokarnia/strava-maps/commit/4d30dbce140fd41a289d3eb6da0cf149b6ba108d)

By using the component method `static async getInitialProps(ctx)` I was able to fetch some server side props for the component, for example, based on cookie.

By using `Head` from `next/head` I was able to inject page specific headers, for example for meta tags for social media sharing. Similarly from what `react-helmet` would do on the client side, but on server side.

- [Next Redux Wrapper and Dynamic Components](https://github.com/marcelotokarnia/strava-maps/commit/7b589c649b0774dcc8af6f050cb781383a4dbfa6)

Since my application was using redux, I found this [`next-redux-wrapper`](https://www.npmjs.com/package/next-redux-wrapper) to deal with how redux on the client side communicates with redux on the server side and keep them both in sync.

And at this point I realized that maybe my application was getting more complex than it could have been without redux, but I was still aiming for minimal changes, I did not want to rethink all the stack at this point. Then I bumped into this very handy tool `next/dynamic` to explicitly tell next which parts of each page you want to force it to render client side instead. Yey, now I could continue using `window` and everything my application was first written to use and things were still working 🎉

AND still keep the server side headers for example, that was the biggest gain I was looking for when deciding to migrate to Next, Awesome! Best of both worlds.

- [Next API Routes forward to Remote](https://github.com/marcelotokarnia/strava-maps/commit/54b516f1a6c631792486c2a7c84c2111d5f8ac6a#diff-ddff7d35e674436b7d8f3a42d54d4443)

So I decided to rollback on the cors implementation, it was getting very tricky and inconsistent with the cookie management (funny enough it did work perfectly on my machine 😂), well, locally everything was in `localhost`, right ? (even though on different ports)

So it was not exactly a CORS scenario, I had high hopes because I was testing on a different environment than my application would be deployed to.

So I decided to implement this `forwardToRemote` helper and create a bunch of `next api routes`, which would be the only backend my client would be communicating with directly, then from there communicate with the other one on Heroku.

So this would basically forward body,headers,cookie and everything to the Heroku application and back.

- [X-Cookie](https://github.com/marcelotokarnia/strava-maps/commit/01aaf7587c7f355a03f852cc755404df3938ee07)

But for your own application's security, most servers don't forward cookies and don't accept cookies from/to different hosts.

So I had to explicitly make that happen by renaming my `cookie` to `x-cookie` 🍪 and that did the trick! Finally! 🎉🏆

- [Fix ts-jest tests](https://github.com/marcelotokarnia/strava-maps/commit/83854b73d1b22dae02207510b820585e9e24414c)

And the last tricky bump was that if you are running `next` with `ts`, it needs your tsconfig `jsx` compilerOptions to be `preserve` and in fact, Next changes it for you when you run your application.

But my ts-jest tests needed it to be `react` instead, and for that I had to create an extension of my tsconfig file just to be used in the test environment.

Now all the tests are back to green 💚✅

And the application is happily running at my own custom domain, with Heroku addons, with ssr headers and for free!

[See it for yourself](https://strava.tokarnia.tech)
