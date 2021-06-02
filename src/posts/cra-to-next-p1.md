---
title: From Create React App to Next - The problem
summary: My heroku hosted CRA app couldn't be served under a custom domain for free, so I decided to migrate it to Next and host it in Vercel (Now)
date: 2020-07-19
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: CRA,React,Next,CustomDomain,SSR
---

When this pandemic situation started back in March I decided to launch a running data visualization site as a personal project and pass time to help cope with the situation.

I decided to host it in Heroku since it was a serverful implementation at first (for no real reason, simply because that's how I'm used to work). And Heroku just might be the best tool available for it today. Serverful, automatic deployments (github integration), extra resources (databases and logs), free.

And I was very happy with my hosting until I bought a domain a few months later and realized Heroku does not provide free support for custom domains. 

Damn, that's a shame.

So what if I move my CRA to Vercel as it is ? Then I lose server side rendered meta tags, therefore google indexing and social media pretty thumbnails. No way, that was hard work to implement.

So what if I convert it all to Next and host it in Vercel ? Then I lose Heroku extra resources, such as the Redis I'm making use for sessions 🤔 Also not an option.

So what if I convert it to Next and communicate with the backend in Heroku ? I did try that, and believe me, it's not easy to handle all the cors problems you will have.

So what if on top of that I add Next Api Routes and the frontend only communicates with Next's own backend and from there to Heroku? That sounds like it could work, but then I would have to refactor all the cookie structure I have on Heroku, since that server would not have access to cookies anymore 🤔

Well, that can be worked around 😜

[Next](/coding-blog/cra-to-next-p2) (pun intended)