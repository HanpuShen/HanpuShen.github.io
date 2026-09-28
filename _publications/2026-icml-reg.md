---
title: "REG: In-Sample RL via Regularizing the Evaluation Gap"
collection: publications
permalink: /publication/2026-icml-reg
authors: "<b>Hanpu Shen</b>, Weining Shen, Roy Fox"
excerpt: 'An offline RL method that never queries out-of-distribution actions, derived by bounding the off-policy evaluation gap.'
date: 2026-07-01
venue: 'ICML 2026'
---
Offline reinforcement learning methods must avoid evaluating actions that are not supported by the data.

- We bound the off-policy evaluation gap and use Fenchel duality to turn the resulting optimization into an equivalent RL algorithm. This replaces IQL's expectile regression with a simpler critic loss that comes with a theoretical guarantee on the gap.
- We propose an orthogonal policy gradient that adds on-policy information to the in-sample gradient, encouraging mode-seeking policies. It matches or outperforms a diffusion-policy baseline on D4RL MuJoCo and AntMaze.
- The learned critic can also be used to select good policies, reaching under 5% regret relative to the Top@10 trajectories.
