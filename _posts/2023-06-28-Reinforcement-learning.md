# Reinforcement Learning

## Finite Markov Game

**Setup**:

1. finite state space $\mathcal{S}$
2. finite action space $\mathcal{A}$
3. Transition model $\mathbb{P}\in \mathbb{R}^{S\cdot A\times A}$ where $\mathbb{P}(s'\vert s',a)$ is the probability of transitioning into state $s'$ upon taking action $a$ in state s. 
4. Reward function: $r: \mathcal{S}\times\mathcal{A}\to[-1,1]$.
5. Discount factor $\gamma\in [0,1)$.
6. $\phi$ is the initial state distribution



## Proximal Policy Optimization

![image-20231006120130464](_posts/img/2023-06-28-Reinforcement-learning/image-20231006120130464.png)

![image-20231006121412260](_posts/img/2023-06-28-Reinforcement-learning/image-20231006121412260.png)

## RL as Supervised learning

A blog "[Reinforcement learning is supervised learning on optimized data](https://bair.berkeley.edu/blog/2020/10/13/supervised-rl/)" from BAIR lab is a good reference. They discussed the connection between **Dynamic programming**(Policy learning), **Optimization**(Q-learning, TD learning) and **Supervised learning**(Optimization on policy and data). 







