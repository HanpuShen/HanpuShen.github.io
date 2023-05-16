---
title: my first blog
date: 2022-05-15 16:46:13
tags:
academia: true
---


# Understanding Neural Tangent Kernel

## Inroduction 

A flurry of recent papers in theoretical deep learning tackles the common theme of analyzing **fully connected** neural networks in the **infinite-width** limit. There are three fundimental questions that worth to study

1. Trainning: Why DNN get zero trainning loss?
2. Optimization: Why gradient descent works well, even though this is highly non-convex optimization problem?
3. Generalization: Why DNN has good generalization properties?

To be specific, the NTK theory try to answer the third question. There are a line of research called  **Mean Filed Theory**^[3]^, which analysing the forward-propagation and backward-propagation under gaussian initialization in infinite width limit condition. and they found the pre-activations neural network at every hidden layer $h\in[L]$ has all it entries tending to i.i.d ==centered Gaussian process==. Utilizing this results, Jacob^[1]^ started to study the behavior of DNN during training, we shall refer to this when saying "dynamics of DNN" in the following content. And they found there exists a non-trivial evolution of one kernel called =="Neural Tangent Kernel"==(NTK)  in the infinite-width limit.  

- 这里可以补充一些对NTK的更具体的介绍，比如参考只是用到NTK的论文的intro部分。

## Notation

- Input: $x \in \mathbb{R}^d$

- L-hidden-layer fully connected neural network:
  $$
  f^{(l)}(x) = \mathbf{W}^{(h)} g^{(l-1)}(x) \in \mathbb{R}^{m_l} \\
  g^{(l)}(x) = \frac{1}{\sqrt{m_l}}\sigma(f^{(l-1)}(x)) \in \mathbb{R}^{m_l}
  $$
  where $m_l$ denotes the width/number of nodes at the $l$-th layer, note the neural network is rescaled by the width aiming to avoid the divergence of NTK in the infinite width limit.

- Quadratic Loss: $\mathcal{L}(\mathbf{W}) = \frac{1}{2}\sum_i^n (f(\mathbf{W},x_i)-y_i)^2$

- Gradient of output: $\frac{\part f(\theta,x)}{\part \theta}$, where $\theta$ denotes the parameters in the network

- **NTK** at $x$: $\Theta (x) = \mathbb{E}_{\theta\sim Gaussian} \langle\frac{\part f(\theta,x)}{\part \theta},\frac{\part f(\theta,x)}{\part \theta}\rangle$

- **Empirical NTK** of $f(\theta_t,x)$ at $x$: $\Theta_t(x) = \langle\frac{\part f(\theta_t,x)}{\part \theta_t},\frac{\part f(\theta_t,x)}{\part \theta_t}\rangle$

- **NTK kernel regression**: $f_{ntk}(x') = \Theta(x',x)\Theta^{-1} (x,x) y$  



## Main results

1. Empirical NTK convergeces to a deterministic kernel when the width of Neural Network goes to ==Infinity==.
   $$
   \lim_t\Theta_t^{(L)} \to \Theta^{(L)}
   $$
   
2. NTK remain constant during the trainning process under overparameteric setting.
   $$
   \Theta_t^{(L)} = \Theta_0^{(L)}
   $$
   

Remark: 

- The proof of the convergency of NTK could not only be seen in Jacob's work<sup>[1]</sup>, which varified it in asymptotical way. Arora group<sup>[2]</sup> proposed a **non-asymptotical** proof method.
- This results is heuristic, many useful lemmas could be derived from the above two results, like we could connect the DNN with Kernel regression under the NTK regiem. 
- The idea of NTK is to use the first-order Tayloer expression of $f(\theta,x)$ to approximate the **overparameterized NN trained by SGD**. This is some what insightful, when the neural networks get inifnite number of parameters then change of single parameter should not affect the model much, then it's suffcient to use linear model describe the change.





Why do we choose NTK? ==NTK is a powerful tool to tackle the non-linearality arised in the DNN model.== 

What are the limitations of NTK:

- Gap between NTK to practical networks: The empirical results shows the 
- NTK tends to treat every parameters with equal importance, but this is somehow contradict to the emperical results that deleting part of the network the remained network hasgood properties



## Experiment Results

1.**Convergence properties of NTK: (**[Neural Tangent Kernel: Convergence and Generalization in Neural Networks](https://arxiv.org/abs/1806.07572))

 Test of the The first experiment illustrates the convergence of the NTK Θ(L) of a network of depth L = 4 for two different widths n = 500, 10000. The function Θ(4)(x0, x) is plotted for a fixed x0= (1, 0) and x = (cos(γ), sin(γ)) on the unit circle in Figure 1. To observe the distribution of the NTK, 10 independent initializations are performed for both widths. The kernels are plotted at initialization t = 0 and then after 200 steps of gradient descent with learning rate 1.0 (i.e. at t = 200). We approximate the function $f(x) = x1x2$ with a least-squares cost on random N (0, 1) inputs.

![image-20220516174500128](/Users/flash/Library/Application Support/typora-user-images/image-20220516174500128.png)

2.**Kernel Regression and NN:** For a regression cost, the infinite-width limit network function fθ(t)has a Gaussian distribution for all times t and in particular at convergence t → ∞ . We compared the theoretical Gaussian distribution at t → ∞ to the distribution of the network function fθ(T )of a finite-width network for a large time T = 1000. For two different widths n = 50, 1000 and for 10 random initializations each, a network is trained on a least-squares cost on 4 points of the unit circle for 1000 steps with learning rate 1.0 and then plotted in Figure 2.
We also approximated the kernels Θ(4) ∞ and Σ(4)using a large-width network (n = 10000) and used them to calculate and plot the 10th, 50th and 90-th percentiles of the t → ∞ limiting Gaussian distribution.
The distributions of the network functions are very similar for both widths: their mean and variance appear to be close to those of the limiting distribution t → ∞. Even for relatively small widths (n = 50), the NTK gives a good indication of the distribution of $f_θ(t)$ as $t → ∞$.

3.**Prediction Accuracy on CIFAR-2**  ([On Exact Computation with an Infinitely Wide Neural Net](https://arxiv.org/abs/1904.11955))

![image-20220516175813686](/Users/flash/Library/Application Support/typora-user-images/image-20220516175813686.png)



4.**Test on Synthetic Dataset:**^[4]^ This paper try to answer the question "*What kind of target function could neural network prove to learn?*" ([Learning and Generalization in Overparameterized Neural Networks, Going Beyond Two Layers](https://arxiv.org/abs/1811.04918))

![image-20220516180444757](/Users/flash/Library/Application Support/typora-user-images/image-20220516180444757.png)



## Reference

1. [Neural Tangent Kernel: Convergence and Generalization in Neural Networks](https://arxiv.org/abs/1806.07572)
2. [On Exact Computation with an Infinitely Wide Neural Net](https://arxiv.org/abs/1904.11955)
3. Radford M Neal. Priors for infinite networks. In Bayesian Learning for Neural Networks, pages 29–53. Springer, 1996.
4. [Learning and Generalization in Overparameterized Neural Networks, Going Beyond Two Layers](https://arxiv.org/abs/1811.04918)
5. [Wide Neural Networks of Any Depth Evolve as Linear Models Under Gradient Descent](https://arxiv.org/pdf/1902.06720.pdf)

