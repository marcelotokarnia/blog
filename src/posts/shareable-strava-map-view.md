---
title: Shareable Latest Strava activities map
summary: How I handled strava tokens for different users in a shareable view in a secure way.
date: 2020-06-15
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: GMaps,Strava,AsyncLocalStorage,Redis
---

My main side project lately has been this _React / Redux / Typescript / Express / Redis / Tachyons_ [Strava Project](https://github.com/marcelotokarnia/strava-maps), so I might come up with later posts on this same topic.

Today I am feeling like writing about my latest released feature: "Shareable maps with dynamic `og` image metatag", and maybe a few images can explain better what that means in practice, or even better, you can visit it yourself, [by clicking here.](https://strava-maps.herokuapp.com)

<div style="text-align: center"><p>signed <code>/activities</code> route</p><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1592595132/projects/strava-map_cvl1pk.png" /><p>Map view of your own latest activities with some collapsable stats on the left</p></div>

So this is the main feature of the app so far, viewing your latest activities in the same map, just gives me a nice feeling if I've been exploring different areas lately 💪🏻

And even though this is behind a login wall, I would like to make it shareable, select a few activities that you deem worthy it, plot a map with it and generate a shareable link to that map.

## Saving shareable info

So I added a simple share button on the map ~~in which you are able to select which activities to include on the shareable map~~ (at least that's the idea, but not yet implemented). And the backend generates a uuid for that map and save the user information and map information.

[Entrypoint below](https://github.com/marcelotokarnia/strava-maps/blob/4d38eeba5943fd6d5b2adf8150cd7018afed58c7/src/map/router.ts#L8) --> [Save Map Reference](https://github.com/marcelotokarnia/strava-maps/blob/4d38eeba5943fd6d5b2adf8150cd7018afed58c7/src/map/utils/saveMap.ts)

```js
router.post('/save', async (req: MapsRequest, res, next) => {
  if (req.cookies?.access_token && req.cookies?.username) {
    if (await refreshToken(req, res)) {
      const store = new Map()
      store.set('username', req.cookies.username)
      store.set('redis', req.redis)
      const { lat, lng, zoom } = req.body
      mapAsyncLocalStorage.run(store, async () => {
        const mapId = saveMap({ lat, lng, zoom })
        res.send({ mapId })
        next()
      })
    }
  }
})
```

`Side note:` this was my first time using this `AsyncLocalStorage` concept, and it was a total overkill, but it just feels nice handling the logic on external files/functions without passing `req` along all the way and/or appending clutter to the `req` object.

## Sharing saved info

By accessing the same url with a new querystring, the authentication flow is ignored and activities information is fetched directly from the saved data instead, therefore, making it accessible to whoever has the link.

<div style="text-align: center"><p>NOT SIGNED <code>/activities?mapId={uuid}</code> route</p><img src="https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,w_600/v1592595132/projects/strava-map_cvl1pk.png" /><p>qs mapId fetches saved information directly 💪🏻</p></div>

[Reference](https://github.com/marcelotokarnia/strava-maps/blob/bb6e63c1beb0c56434b5c57c38f8245d811ee19d/src/graphql/resolvers/query/getStravaActivities.ts#L6)

```js
export default async (_parent, args, context) => {
  let access_token
  if (args.mapId) {
    const { username } = await context.req.redis.get(KEYS.SAVED_MAP(args.mapId))
    access_token = await sudoRefreshToken(context.req, username)
  } else {
    access_token = context.req.cookies.access_token
  }
  return (await strava.getActivities(access_token)).map(parseStravaActivity)
}
```

`And another side note:` If you've noticed that I'm using redis to fetch and store complex objects (not only strings), worry not, this is not breaking Redis API, I have a JSON wrapper around it, basically `get -> parse` & `set -> stringify`.

[Reference](https://github.com/marcelotokarnia/strava-maps/blob/bb6e63c1beb0c56434b5c57c38f8245d811ee19d/src/redisMiddleware.ts#L17)

```js
    redis = new Redis(process.env.REDIS_URL)
    BuffedRedis = assoc(
      'get',
      async key => {
        return JSON.parse(await redis.get(key))
      },
      assoc(
        'set',
        (key, value, ...args) => {
          if (args.length) {
            return redis.set(key, JSON.stringify(value), ...args)
          } else {
            return redis.set(key, JSON.stringify(value))
          }
        },
        redis
      )
    )
  }
  req.redis = BuffedRedis
```

Make sure to read the [next post](/blog/dynamic-og-meta-tags-puppeteer) about some nice dynamic og meta tags on a client rendered app with puppeteer screenshot and a few more tricks.
