---
title: "New functionality: Gisqus! Also, image normalisation"
layout: post
date: 2024-11-28 03:33:56
categories: meta
comments: enabled
---
The website now supports comments as handled by Github Discussions.  
The name needs work, but it's supposedly a portmanteau of 'Disqus' and 'Git', but you can take it up with them.  

Each post now has a box at the bottom where comments can be read and written. You need a Github account to do that, but it's probably more reliable than Disqus, because the comments are stored in the repository.

Also, I spent the past five hours arguing with ChatGPT on how to implement a system to normalise the size of images (because they are often taken with Windows Clipping Tool, and have arbitrary sizes), before I decided "fuck it". I tried to have a system that would just inject a width parameter into the image, which would work retroactively and proactively (that is, with new images as well as images that have already been posted). It worked alright until GitHub Pages got involved. It hates plugins. It hates <i>fun</i> and <i>innovation</i>. I guess that explains why Remote Themes was also broken.

Anyway, what's important is there are now comments. Find your favourite shape and hoot about it, or something. I'm going to bed.

Next non-shape-related update is going to be adding a theme (not through Remote Themes). Because while I am touched in the brain, even I think Light Mode is for sickos.


