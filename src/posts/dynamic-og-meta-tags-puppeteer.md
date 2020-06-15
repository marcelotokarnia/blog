---
title: Dynamic OG Meta tags with Puppeteer
summary: How puppeteer handled the og meta tags of my shareable strava maps
date: 2020-06-16
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: Puppeteer,Strava,Redis,meta,OG
---

First of all I would like to put up a disclaimer that on my first implementation I was really trying to follow some lightweighted Puppeteer guidelines, such as described by [Önder](/blog/geekle-node-conference-day2#önder-ceylanhttpswwwlinkedincominonderceylan---puppeteer-can-automate-that), and by following some other blog posts I tried using [puppeter-core](https://www.npmjs.com/package/puppeteer-core) + [chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda) because I think it works out of the box for serverless functions on Netlify (or so I read).

But since my service is deployed on Heroku for now I struggled a lot to make it work 😅 but then I stumbled upon this solution, using [this heroku buildpack](https://github.com/jontewks/puppeteer-heroku-buildpack). It installs all the required linux packages on each build (which takes forever, so I might migrated this to a netlify microservice).

Anyhow, with that in place I was able to run puppeteer on my service, then I created another route on my frontend application to solely render the map

<div style="text-align: center"><p><code>/map</code> route</p><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1592603940/blog/strava-map-og-image-tag_osnnri.png" /><p>Satellite view of your own latest activities</p></div>

And that is basically all puppeteer would need to navigate in there and take a screenshot of that page to serve as og tag for the shareable map, so I created a backend route to do that

[/screenshot/:uuid reference](https://github.com/marcelotokarnia/strava-maps/blob/bb6e63c1beb0c56434b5c57c38f8245d811ee19d/src/strava/router.ts#L55)

```js
const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1680, height: 1030, deviceScaleFactor: 1 })
const url = `${getHost(isDev)}/login?code=${username}::${accessToken}&redirectTo=/map`
await page.goto(url)
await wait(10000) /*  wait for the authentication and redirect and map render,
                      10s is even a bit too much but it's cached for a day still 🤷🏻‍♀️ */
const buffer = await page.screenshot({ type: 'png' })
base64Image = buffer.toString('base64')
req.redis.set(KEYS.STRAVA_SCREENSHOT(username), base64Image, 'EX', TIME.DAY)
```

So now we have an endpoint in place that returns a dynamic screenshot of the [shared map](/blog/shareable-strava-map-view) and all that is left is to insert that in the header of each specific shared map.

And it may come as a surprise to a few people, but most of the og crawlers don't interpret JS, so solutions like [React Helmet](https://github.com/nfl/react-helmet) wouldn't work in this scenario.

So I ended up "hacking" it with a simple find and replace on the pure HTML file before it was served, by adding a placeholder tag on the HTML file and replacing that before served:

[Code Reference](https://github.com/marcelotokarnia/strava-maps/blob/e2013d85a2a4207012c91ddb4d76153fbed5e0c3/src/server.ts#L14)

```js
const generatedMetaTags = ({ path, query }) => {
  if (path === '/activities') {
    if (query.mapId) {
      return `<meta
        property="og:image"
        content="https://strava-maps.herokuapp.com/strava/screenshot/${query.mapId}"
      />`
    }
  }
  return ''
}

app.get('/*', function (req, res) {
  fs.readFile(frontendPath('build/index.html'), 'utf8', function (err, data) {
    res.send(data.replace('<meta name="$$GENERATED_META_TAGS"/>', generatedMetaTags(req)))
  })
})
```

Sweet, now everything is in place, and dynamic meta tags work for sharing your latest activities on social media with nice previews! Hooray 🎉

<div style="text-align: center"><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1592605579/blog/facebook-sharing-og-preview_udmmon.png" /><p>Facebook post of shareable map</p></div>
