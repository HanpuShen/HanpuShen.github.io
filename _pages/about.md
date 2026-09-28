---
permalink: /
title: "About me"
excerpt: "Hanpu Shen — Statistics PhD student at UC Irvine working on reinforcement learning and generative models."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a PhD student in Statistics at UC Irvine, advised by Prof. Weining Shen and Prof. [Roy Fox](https://royf.org), and expect to graduate in 2027.

My research is on **reinforcement learning with expressive generative policies**.
I study how to make maximum-entropy RL work with diffusion- and flow-style policies without paying for multi-step sampling, how to sample from high-dimensional Boltzmann policies in a single step, and how to learn from offline data without querying out-of-distribution actions.
I evaluate these methods on continuous control and humanoid tasks, with embodied AI as the long-term goal.
Earlier, I worked on differential privacy for non-convex learning, from generalized linear models to deep neural networks.

In summer 2025 I was an Applied Scientist Intern at Amazon (Supply Chain Optimization Technologies), where I built a probabilistic choice model that fuses behavioral logs with external market data.
Before UCI, I received my B.S. in Statistics and Data Science from the Southern University of Science and Technology (SUSTech).

<h2 class="home__heading">Research interests</h2>
<ul class="home__tags">
{% for topic in site.data.research %}<li>{{ topic }}</li>{% endfor %}
</ul>

{% include home/news.html limit=5 %}
{% include home/publications.html limit=5 %}
{% include home/recent-posts.html limit=3 %}
