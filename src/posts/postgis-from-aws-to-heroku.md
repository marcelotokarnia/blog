---
title: My first Postgis project gave me headaches for 2 years 🤦🏻‍♂️ but I learned a lot 🤷🏻‍♀️
summary: A journey trying to put my first Postgis project live
date: 2020-08-27
author: Marcelo Tokarnia
authorPic: https://res.cloudinary.com/marcelotokarnia/image/upload/c_thumb,g_face:center,r_max,h_150,w_150,f_auto,q_auto/v1590609457/profile/A54I1782_qa84qz.jpg
tags: Postgres,Postgis,AWS,Heroku,Vue,Typescript
---

It always starts [with a push][first-mountain-push]. And that was May 22, 2018, more than 2 years ago. I was starting a hunt for my next job opportunity, and I thought I could create a nice new portfolio project with a lot of new technologies (I mean, new to me) that were hyping at the moment. 

So I basically gathered A LOT of new tech, almost nothing in that project I was already familiarized with previously 😂, or did use, but on a very slight way, not from scratch... but anyways, I decided to take on the challenge, even though most of that tech I never reused in this past 2 years 😂. But it was still a nice new first contact with a lot of cool stuff at once.

- Vue
- Apollo Link State for state management
- Styllus for CSS styling
- Wotan linter for Vue
  
- Postgis (Geo oriented database for spacial queries)
- Graphene (Graphql for Django)
- Django Nose for unit tests and coverage
  
- Docker Commit to initialize a Service Container

The hardest part was to set all the system libs/configs it is necessary to have in place when running your django gis package, seriously, damn, that was so hard, I'm sure I did something wrong, GDAL just had so many undocumented dependencies that had to match versions with this or that in order to make GIS work 🤦🏻‍♂️ so I did not want to do that again and put all of that in the Docker container, which was a great idea 👍🏻💪🏻

So, somehow, a few dozens of commits later I managed to put it all together in a little application with a map that would get your GPS location and place on the map mountains close to you with different colors based on its altitude. I even found a nice website to crawl some mountains from.

![Mountain Catalog][mountain-catalog-preview]

It was all set up, and I thought that was the hard part 😂

So I decided to deploy it to AWS with the docker containers and stuff, et voilá. 

🛑 Browser navigation API does not work on HTTP, so I placed it in a custom domain 🟢, why not ? 🤷🏻‍♀️ 

And it worked 🎉 

🛑 For a year, until I had to renew my certificate 😞

Well, for some months I just gave up on everything and stopped thinking about.

Until I decided to try and revive this project. So I learned why you should use distinct EBS volumes in your servers instead of putting everything in the root volume 😅 I tried to reduce the root volume of the EC2 instance I was using by moving it's content to a smaller one and restarting another instance with that small volume, to save some money 💰

Well, that would work, if only it was not the root volume, I spent the whole night trying to do that, and I seriously don't recommend it. A few hours later I just started all over from a small volume in a new instance and it took me like 20 minutes to set it all up 😂 Talk about a waste of time.

But this time I used [Let's Encrypt][lets-encrypt] to place a 3 months certificate in the server so that I could use the custom domain I already had `tokks.tech`. And it worked 🟢

🛑 For 3 more months until I had to renew it. Then I was just ashamed to be paying for AWS for 3 months (even if it was just $5/mon). And decided to give in for the automated stuff, I was proud to have done everything as manually as it could be, I learned a lot. But I also learned when to let others do stuff that is not worth for you 😂

And I googled a bit and saw that Heroku was offering a Postgis instance as external resource, not exactly as easy as it seemed.

- [You have to install it][install-heroku-postgis] (but that's okay, I also had to do that before)
- [You have to set some undocumented ENV VAR in order to include GEOS and GDAL in your project][undocumented-env-var]
- [Set some env vars in your django settings][django-settings]

But then it finally worked 🎉 and this time, for free 💰

Later I realized the undocumented env var was actually being deprecated and [replaced by a buildpack][geos-buildpack], that's why it was not documented 😅

Anyways, the application was working, on a new database and all, now I just had to run the crawler to fetch the data again.

🛑 The website I was crawling from was not live anymore 🤦🏻‍♂️

After a few moving volumes from AWS here and there (because of course I did not have access to the instance anymore), I could get in the database and [generate a dump][database-dump] from the previously crawled website.

And now, 2 years later, [it's finally live][mountain-catalog], in a way I don't have to tend for it every now and then 😂 It's not my custom domain (because that's paid on Heroku), but it's live, and I'm happy to finally just forget about this project. I'm working on more interesting things right now.

Phew 😅 That was a long fight.

[first-mountain-push]: https://github.com/marcelotokarnia/mountain-catalog/commit/30353be37787afe000e6bffe6c7c5557144a8a4e
[mountain-catalog-preview]: https://res.cloudinary.com/marcelotokarnia/image/upload/c_scale,h_400,q_auto:low/v1590440538/projects/trekkpedia1_ufaolq.png
[lets-encrypt]: https://letsencrypt.org/
[install-heroku-postgis]: https://devcenter.heroku.com/articles/heroku-postgres-extensions-postgis-full-text-search
[undocumented-env-var]: https://stackoverflow.com/questions/39027688/missing-gdal-on-heroku
[django-settings]: https://stackoverflow.com/questions/46383875/heroku-geodjango-issues-with-missing-gdal-and-possibly-geos
[geos-buildpack]: https://help.heroku.com/D5INLB1A/python-s-build_with_geo_libraries-legacy-feature-is-now-deprecated
[database-dump]: https://github.com/marcelotokarnia/mountain-catalog/blob/master/db.dump
[mountain-catalog]: https://mountain-catalog.herokuapp.com/