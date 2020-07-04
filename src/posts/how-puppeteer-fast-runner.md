---
title: How Puppeteer made me a faster runner ?
summary: That's a click bait title, but I have a story about Puppeteer and Running.
date: 2020-07-04
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: Puppeteer,Automation,Running,Strava
---

I'm going to tell a story about a Virtuous Cycle, when your hobbies motivate you to code and your code motivates you on your hobbies.

### So first a bit of context:

For those who don't know what [Strava](https://www.strava.com) is, that's my favourite activity tracking app and I use it mainly for Running. And one of the key features of it is allow users to register a "Segment".

A segment is basically a common stretch for that activity, take running as an example, so let's say a Segment would be running a full loop around the main park of your city, probably starting from the main entrance/access of that park.

So athletes can run on those segments and compete for the best time, as "micro races" within your running routine. It's pretty cool!

<div style="text-align: center"><p>Strava Segment Overview</p><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1593938886/blog/strava-segment_maqzfh.png" /><p>Map, your effort stats (speed and heartbeat over elevation and distance), the leaderboard and your current best rank</p></div>

### And the "problem":

So whenever I run and track it with Strava, most likely I passed by a few segments, so it's fun to check and compare myself with the best runners on that segment.

But if you are competitive like me, you will agree that this is not the most efficient way to reach the top of any leaderboard (and become the King of the Mountain, as described by Strava).

So I would like to know beforehand which segments are in my way, so I can sprint those and get a better ranking.

### Available tools and restrictions:

For that Strava provides you the Segment Explorer, and it's even accessible by [API](https://developers.strava.com/docs/reference/#api-Segments-exploreSegments)

<div style="text-align: center"><p>Strava Segment Explorer</p><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1593939442/blog/strava-segment-explorer_ebce8h.png" /><p>10 "best" segments in that map</p></div>

But there is a catch, both on the API and in the GUI, it only returns, at most 10 segments in the specified area, which means if you have a broader area you are missing out on a lot of segments.

### The implemented solution:

So the first thing I would like to do is get a comprehensive list of ALL the segments around me (or in any specified area).

For that I can fire the API multiple times with sections of smaller areas composing the bigger area I want to look for.

[Reference](https://github.com/marcelotokarnia/strava-maps/blob/0632bfe93750035ffebe8288bcebbc99e3ec0260/scripts/crawlLeaderboard.mjs#L10)

```js
const BOUNDS = [59.3784, 18.008432, 59.416227, 18.094667] // DANDERYD NEIGHBOURHOOD
const INC = 0.01
const divideBounds = () => {
  const [startLat, referenceLng, endLat, endLng] = BOUNDS
  const bounds = []
  let myLat = startLat
  while (myLat < endLat) {
    let myLng = referenceLng
    while (myLng < endLng) {
      bounds.push([myLat, myLng, myLat + INC, myLng + INC])
      myLng += INC
    }
    myLat += INC
  }
  return bounds
}
const splitBounds = divideBounds()
const segments = []
for (const bound of splitBounds) {
  const { data } = await axios.get(
    `https://www.strava.com/api/v3/segments/explore?bounds=${decodeURIComponent(
      bound
    )}&activity_type=running&min_cat=0max_cat=5`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER}`,
      },
    }
  )
  segments.push(...data.segments)
}
```

Great, so now, whenever I go running I know beforehand where each segment starts and ends, so I can sprint on that segment and probably get a better result.

### Going the extra mile (pun intended), added features:

But there is still one small thing missing.

Out of this big list of segments I now have at hand, I would like to filter, sort and iterate through those, specially based on leaderboard metrics, so that I know which segments I have better chances at topping.

Unfortunately leaderboard is not exposed through API, so I will have to crawl over strava web app and extract the metrics that interest me, but it's not that simple since it's all behind a login wall, but that can be done with puppeteer.

[Reference](https://github.com/marcelotokarnia/strava-maps/blob/0632bfe93750035ffebe8288bcebbc99e3ec0260/scripts/crawlLeaderboard.mjs#L27)

```js
const authenticatePuppeteer = async page => {
  const url = `https://www.strava.com/segments/14927298/leaderboard?filter=overall&gender=${GENDER}&partial=true`
  await page.goto(url)
  await page.click('.fb-button')
  await page.waitForNavigation({ waitUntil: 'load' })
  await page.type('#email', 'marcelo.tokarnia@gmail.com')
  await page.type('#pass', process.env.FACEBOOKPASS)
  await page.click('#loginbutton')
  await page.waitForNavigation({ waitUntil: 'load' })
}

const crawlLeaderboard = async (page, id) => {
  const url = `https://www.strava.com/segments/${id}/leaderboard?filter=overall&gender=${GENDER}&partial=true`
  await page.goto(url)
  await wait(500)

  const [
    myCurrentPosition,
    totalAthletes,
    myTime,
    bestPace,
    _,
    bestTime,
  ] = await page.evaluate(() => [
    ...[...document.querySelector('.standing .text-title1').textContent.split('/')].map(a =>
      a.trim()
    ),
    document.querySelector('.time .text-title1').textContent.trim(),
    ...document
      .querySelector('.table-leaderboard tbody tr')
      .textContent.split('\n')
      .filter(Boolean)
      .slice(-3),
  ])
  console.log(i++)
  return { bestPace, bestTime, myCurrentPosition, myTime, totalAthletes }
}
```

<div style="text-align: center"><p>Strava Segment Crawler</p><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/v1594121276/blog/strava-leaderboard-crawler_n45klw.gif" /><p>Partial outputs are printed to the console while puppeteer orchestrates the scraping</p></div>

### And the practical result:

<div style="text-align: center"><p>And in the end it DID pay out the effort</p><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1594121751/blog/strava-crowns_ffrouz.png" /><p><a href="https://www.strava.com/activities/3704016033">On this run</a> I came in FIRST on two specific segments.</p></div>
