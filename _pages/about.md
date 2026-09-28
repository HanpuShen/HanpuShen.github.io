---
permalink: /
title: "About me"
excerpt: "Hanpu Shen — Statistics PhD student at UC Irvine."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a PhD student in Statistics at UC Irvine, advised by Prof. Weining Shen and Prof. [Roy Fox](https://royf.org). I work on reinforcement learning.

Before UCI, I received my B.S. in Statistics and Data Science from the Southern University of Science and Technology (SUSTech).

{% if site.data.research and site.data.research.size > 0 %}
<h2 class="home__heading">Research interests</h2>
<ul class="home__tags">
{% for topic in site.data.research %}<li>{{ topic }}</li>{% endfor %}
</ul>
{% endif %}

{% include home/news.html limit=5 %}
{% include home/publications.html limit=5 %}
{% include home/recent-posts.html limit=3 %}
