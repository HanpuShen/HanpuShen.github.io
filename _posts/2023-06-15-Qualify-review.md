---
title: 'Qualify-review'
date: 2023-06-15
permalink: /posts/2023/06/Qualify-review/
tags:
  - Statistics
---

# Qualify Exam Review:



## Probability transformation

**Theorem** (Bivariate Transformation) For $(u,v) = g(x,y)$, suppose $g$ is a invertable map, then the p.d.f can be written as:
$$
\begin{align*}
f_{u,v}(u,v) = f_{x,y}(g^{-1}(u,v))\cdot|\frac{\partial g^{-1}(u,v)}{\partial(u,v)}|
\end{align*}
$$
$\color{red}Remark:$ The support of  $(u,v) \in \{g(x,y): f(x,y)>0\}$.



## Convergence Theory

**Definition**. (Converge in Prob.) 

> We say a sequence of random variables (r.v) $\{x_n\}$ converge in probability measure to $x$, if $\forall \epsilon>0$, $\mathbb{P}(|x_n-x|>\epsilon) = 0\ as\ n\to\infty$. Denote as $x_n\overset{P}{\to}x$.

**Lemma**. ==Continuity of Prob. Convergence==, for any continuous function $h()$, if $x_n\overset{P}{\to}x$ then $h(x_n)\overset{P}{\to}h(x)$.

**Lemma**. (Chebysheve Inequality) 

**Definition**. (Almost surely convergence)

> $x_n\overset{a.s}{\to}x$ if $\mathbb{P}(\lim_{n\to\infty}|x_n-x|=0)=1$

**Lemma**. If $x_n,y_n$ a.s convergence to $x,y$ then $x_n+y_n\overset{a.s}{\to}x+y$, $x_ny_n\overset{a.s}{\to}xy$. (Usually, this can be combined with Strong LLN to show almost surely convergence)

**Theorem** (Strong LLN)

> If $x_1,\cdots,x_n$ are iid with $\mu$ and $\sigma^2<\infty$, then $\bar{x}_n\overset{a.s}{\to}\mu$.

**Definition**. (Convergence in distribution)

> $x_n\overset{D}{\to}x$ or called weakly convergence, if $\lim_{\to\infty} F(x_n) = F(x)$ for all test function $F \in C$.

**Theorem**. (Central limit theorem)

> If $x_1,\cdots,x_n$ are i.i.d with mean $\mu$ and finite variance $Var(x_1)= \sigma^2<\infty$, then
> $$
> \begin{align*}
> \frac{\sum_ix_i-n\mu}{\sqrt{n\sigma^2}}=\frac{\sqrt{n}(\bar{x}_n-\mu)}{\sigma}\overset{D}{\to}N(0,1)
> \end{align*}
> $$

**Theorem**. (Slutsky)

>If $X_n\overset{D}{\to}X$ and $Y_n\overset{D/P}{\to}C$ where C is a constant, then 
>$$
>\begin{align*}
>& X_nY_n\overset{D}{\to}CX\\
>& X_n+Y_n\overset{D}{\to}X+C
>\end{align*}
>$$

$\color{red}Remark:$

1. Almost surely convergence ==> Convergence in Prob ==> Convergence in Dist.
2. Convergence in distribution doesn't holds under addition and multiply operation. (Under cerntain conditions can be true, e.g. _Slutsky theorem_)

In order to extend the result from CLT to some function of a convergence r.vs. Here we introduce the _Delta Method_. 

**Theorem** (Delta method)

> If $\sqrt{n}(X_n-\mu)\overset{D}{\to}N(0,\sigma^2)$, and $g \in C_1$ then we have the following statement holds
> $$
> \begin{align*}
> \sqrt{n}(g(X_n)-g(\mu))\overset{D}{\to}N(0,g'(\mu)^2\sigma^2)
> \end{align*}
> $$

## Estimation Theory



## Hypothesis Testing



