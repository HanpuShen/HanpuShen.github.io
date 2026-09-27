---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a PhD student in Statistics at UC Irvine, fortunate to be advised by [Roy Fox](https://royf.org).
My recent work focuses on developing efficient algorithms for offline-to-online reinforcement learning fine-tuning.
More broadly, I am interested in research at the intersection of statistics and computer science, and in using it to solve complex real-world problems.
In my free time, I enjoy exploring new technologies and sharing what I learn through writing and mentoring.

<h2 class="home__heading">Research interests</h2>
<ul class="home__tags">
{% for topic in site.data.research %}<li>{{ topic }}</li>{% endfor %}
</ul>

{% include home/news.html limit=5 %}
{% include home/publications.html limit=5 %}
{% include home/recent-posts.html limit=3 %}
