---
title: How to upgrade your Customer Support Experience with Correlation Ids
summary: If you have a default error screen on your app and you have seen a few (or a bunch) of customers showing you a screenshot of this default screen complaining about whatever you know what it means to be clueless about what happened.
date: 2021-09-01
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: React,Logs,CustomerSupport,Troubleshooting
hidden: true
---

If you still don't know what a Correlation ID is, I would suggest you start by [reading about this awesome pattern.][:correlation-id]

In a few words, it will allow you have a deeper understanding on how logs from different systems are connected to each other and to a specific user action on the frontend. So that's great if you are querying your logs for a specific error or if a not so tech savvy user reported a bug and you were able to find some kind of unique identifier from their report.

But we know that the average user might just take a screenshot of your broken system, even if it's just that tiny red toaster saying: "ooopsie, something went wrong". 

Me and you both know that this is of ZERO help in troubleshooting exactly what happened. Depending on how this information got relayed to you, by now you might even have lost track of the specific user or any hope of start troubleshooting.

And that's exactly the best place to print that correlation id of the last failing request. And today I'm going to give you an example of how to implement that with react and axios using the latest apis 💪🏻

<!-- REFERENCES -->
[:correlation-id]: https://hilton.org.uk/blog/microservices-correlation-id
