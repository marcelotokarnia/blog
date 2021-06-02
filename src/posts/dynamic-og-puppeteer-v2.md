---
title: Dynamic OG Meta tags with Puppeteer - Netlify Serverless Functions
summary: How the previous iteration got even better and scalable
date: 2020-06-27
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: Puppeteer,Strava,Redis,meta,OG
---

If you haven't read [the previous post](/coding-blog/dynamic-og-meta-tags-puppeteer), please check that before continuing.

As mentioned on my previous post, I couldn't use a lightweighted Puppeteer due to some Heroku limitations, which were mitigated by using the full blown Puppeteer and installing a new buildpack.

So basically I had two pain points, a moral one for not being able to use `puppeteer-core` instead of `puppeteer`. And a measurable one, this new buildpack just made my builds go from 1~2 minutes to 10~15, for the sake of one single feature, which I won't change much, and to be honest, not even going to use much either.

So it just feels impractical to have to wait some extra minutes EVERY build, for EVERY small change, UNRELATED to puppeteer, just because at some part of the service I wanted to use puppeteer.

So it just felt like the perfect opportunity to isolate that into it's own service, which I called [screenshooter](https://github.com/marcelotokarnia/screenshooter), which I deployed in Netlify to make use of the serverless functions their service provides, and indeed Netlify serverless functions do support `chrome-aws-lambda` out of the box, so I could finally use `puppeteer-core` with it! And it's deploy is SO BLOODY FAST! Someone is doing something right! 🎉

[/saveOGImageTag reference](https://github.com/marcelotokarnia/strava-maps/blob/59d28c2c71ced1dd4dc84df38d228634afa4b39d/src/map/utils/saveMap.ts#L7)

```js
const saveOGImagetag = async ({ redis, access_token, username, uuid }, waitTimes) => {
  const waitTime = waitTimes.pop()
  if (!waitTime) {
    return // TODO maybe place a default
  }
  try {
    const url = `https://strava-maps.herokuapp.com/login?code=${username}::${access_token}&redirectTo=/map`
    const cloudinaryUrl = await screenshooter.shoot({ url, waitTime, filename: uuid })
    return await redis.set(KEYS.STRAVA_SCREENSHOT(uuid), cloudinaryUrl, 'EX', 7 * TIME.DAY)
  } catch (e) {
    wait(waitTime)
    return saveOGImagetag({ redis, access_token, username, uuid }, waitTimes)
  }
}
```

So now, instead of running the puppeteer locally on the heroku dyno, we call the screenshooter endpoint with "exponential backoff", which returns a cloudinary url for the saved file of the screenshot taken, and this is saved to a redis instance to be used as og image meta tag 🎉 so now, also instead of saving the cached base64 image in redis, we are only saving a reference to it, which also takes way less space on redis.

And the result is awesomely the same.

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1592605579/blog/facebook-sharing-og-preview_udmmon.png" /><p>Facebook post of shareable map</p></div>
