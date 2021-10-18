---
slug: /blog/blog-hero
date: 2021-09-09
title: Blog Hero Image Test
hero: hero2.jpg
alt: Alternative text for hero image
---
The above **title**, **date** and **hero image** should be *automatically* inserted from the **frontmatter** meta-data embedded at the top of the markdown file that this post is generated from.

The **image below** is the same as the hero image above except it was **linked inline** later within the markdown file.
![hero image again](hero.jpg)

And now, here is an image that is **not** served from my domain[^1].

[^1]: Currently no Gatsby-plugin-image performance magic on these kinds of links

![Currently no Gatsby-plugin-image performance magic on these kinds of links](https://images.unsplash.com/photo-1461887197298-4b315a1472f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60)