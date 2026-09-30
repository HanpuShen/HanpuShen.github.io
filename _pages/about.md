---
permalink: /
title: "About me"
excerpt: "Hanpu Shen — Statistics PhD student at UC Irvine."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hey folks! I'm a PhD student at UC Irvine advised by Prof. [Roy Fox](https://royf.org). I'm interested in developing sample efficient and scalable reinforcement learning (RL) algorithms. More specifically, I design offline RL and maximum-entropy RL algorithms from first principles to enable sample-efficient robot learning. I'm also increasingly interested in pre-training generalist policies and leveraging world models for physical intelligence.

{% if site.data.research and site.data.research.size > 0 %}
<h2 class="home__heading">Research interests</h2>
<ul class="home__tags">
{% for topic in site.data.research %}<li>{{ topic }}</li>{% endfor %}
</ul>
{% endif %}

{% include home/news.html limit=5 %}
{% include home/publications.html limit=5 %}
{% include home/recent-posts.html limit=3 %}
