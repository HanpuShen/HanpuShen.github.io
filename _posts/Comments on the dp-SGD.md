---
title: 'Comments on the dp-SGD'
date: 2023-05-15
permalink: /posts/Comments on the dp-SGD/
tags:
  - cool posts
  - category1
  - category2
---
# Comments on the dp-SGD

## Background:

1.  Differential privacy!
2. ![image-20220721131158989](/Users/flash/Library/Application Support/typora-user-images/image-20220721131158989.png)
3. ![See the source image](https://ts1.cn.mm.bing.net/th/id/R-C.b2f102abbe5a9ae02ffeb0ac4f8e06a3?rik=92%2fIJiNJB2aQ4w&riu=http%3a%2f%2fwww.cs.tau.ac.il%2f%7eiftachh%2fCourses%2fSeminars%2fDP%2fDP.png&ehk=Wj%2f4UTjGF2sglf1Gk%2fwsCSj%2bcSdZvrlcvOXm%2fKWFo2M%3d&risl=&pid=ImgRaw&r=0)
4. Advanced machine learning algorithm: DNN
5. Dp-Neural network = DP combine DNN

Review of privacy analysis on DP-SGD: 1) 2014 advanced composition 2) 2016 abadi Chu Goodfellow they moment accountant 3) 2019 f-dp (hypothesis testing approach)

However the utility guarantee anlysis doesn't have any progress, here we analysis

**Motivation:** Training multi-layer neural networks is non-convex, and typically solved by an application of SGD, whose theoretical guarantees are poorly understood.

Question: Can we use DP-SGD to learn a arbitrary large neural network, which is very common used in practice? 



Follow up question: How to quantitatively analysis the utility of the DP-NN? What factors will contribute to the degeneration of DP-NN?

Excessive Population Risk: 

Overall Map:

1. We consider to use NTK theory to address the non-convexity raised from NN.
2. Analysis the Empirical Cummulative loss
3. Use online-to-batch conversion argument 

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

![image-20220720002053441](/Users/flash/Library/Application Support/typora-user-images/image-20220720002053441.png)



## Main results

![image-20220604235849136](/Users/flash/Library/Application Support/typora-user-images/image-20220604235849136.png)



==$T = n^{1/2}$ and $m = n$ then we can obtain a bound $O(\frac{1}{n^{1/6}}+\frac{SR\log(1/\delta)\max(L,d/m)}{\epsilon^2 n^{1/4}})$. Then we can conclude there exists a good.==

There are two major problem needed to be explained:

1. The term introduced by random noise

   1) ==$\max(L,\frac{d}{m})$==: 
      - this term implies when $m = \Theta(d)$, which means the scale of network width $m$ is comparable to the data dimension $d$, our generalization error is dimensional independent.
      
   2) ==$O(\frac{RT^{1/2}\log(1/\delta)m^{3/2}}{n^2\epsilon^2})$==: 
   
      - This term describes the generalization degeneration that caused by the randomness of DP-SGD algorithm. 
   
      - Since this term is monotonically increase with respect to $m, T$, we suggests to choose $n^{1/2}\leq m\leq n^{4/3}$ .
      -  Suppose the dataset is sufficiently large that we can ignore this bias term, then our results would converge to the nonprivate result.
   
2. How large is the NTK feature space

   We claims the NTK feature space $\mathcal{F}(\mathbf{W}^{(0)},R/\sqrt{m})$ is pertty large space when the $m$ is large enough. 

   Recall the definition of **Empirical NTK**
   $$
   \Theta_t(x,y) = \langle\part_Wf_{W^{(0)}}(x),\part_Wf_{W^{(0)}}(y)\rangle
   $$
   ​	As the NTK theory (Jacot et al. 2018) rigiously proofed that empirical NTK above converges to the deterministic Kernel $\Theta_{\infin}$ when the network is sufficiently large. Under this condition, the NTK feature space $\mathcal{F}$ is a RKHS induced by NTK. Because $M$ be a closed set restrict to $\mathbb{R}^{mL}$ , $d(x,y) = (x-y)^T\Theta_{\infin} (x-y)$  for any $x,y \in M$, then $\mathcal{F} = \{f_{W^{(0)}}(x)+\part_Wf_{W^{(0)}}(x) W\} |W \in \mathcal{B}(\mathbf{W}^{(0)},R/\sqrt{m})\}$ meets the definition of RKHS. NTK theory tells us that for every large scale ReLU Neural Network $f^*$ we could find a "good" approximation to it in the reference space $\mathcal{F}$, which means $\inf_{f\in\mathcal{F}}\{\ell(f)-\ell(f^*)\} \to 0$ as $m\to \infin$.

   ​	Despite the theoretical guarantee, one recent research's experiments (Sanjeev et al. 2019) found the SVM epuiped with NTK could achieve superior performance on ==small dataset==, this justify the NTK induced RKHS is considerable more informative than many existing reference space. ![image-20220606211759181](/Users/flash/Library/Application Support/typora-user-images/image-20220606211759181.png)

   

   ## 

**Definition** 1. (Space of function) $\mathcal{H}$ is the set of all functions that map from $\mathbb{R}^d \to \mathbb{R}$, $\mathcal{H} = \{f:\mathbb{R}^d\to\mathbb{R}\}$

**Definition** 2. (Reproducing Kernel Map)

Suppose $K:\mathbb{R}^d\times\mathbb{R}^d\to \mathbb{R}$ is a kernel, then the *reproducing map* is a map $\Phi:\mathbb{R}^d \to \mathcal{H}$ such that 
$$
\Phi(z) = K(\cdot,z) \\
\phi_z(x) = \Phi(z)(x)
$$
Now we are ready to define the *desirable structure* of the Reproducing Kernel Vector Space

**Definition** 3. (Hilbert Space)

A **Hilbert space** $\mathcal{H}$ is a real inner product space that is also a complete metric space with respect to the distance function induced by the inner product.

- What is Complete metric space?

  *A metric space $M$ is called complete if every Cauchy sequence of points in $M$ has a limit in $M$. In another word, we know the limit exists once we find the series is Cauchy sequence.*

- **Example**

  Let $E$ be a measurable subset of $\mathbb{R}^d$ With $m(E)> 0$, we let $L^2(E)$ denotes the space of square Lebesgue intergrable function that supported on $E$, 
  $$
  L^2(E) = \{f|supp(f) = E,\int_E|f(x)|^2dx<\infin\}.
  $$
  The inner product and norm equiped on $L^2(E)$ are
  $$
  \langle f,g\rangle = \int_Ef(x)g(x)dx\ \textrm{and} \ ||f|| = (\int_E|f(x)|^2dx)^{1/2}.
  $$
  

**Definition** 4. (Reproducing Kernel Hilbert Space)

Suppose $M$ is a Hilbert space equipt with inner product $\langle\cdot,\cdot\rangle$, if there exists a Kernel $K$  such that 

## Idea about experiment design

- **To justify the reference space is informative and provide practical insight**

  We can plot the first term in the bound of our result with different value of $R$ and $m$, where the value are approximated by solving the convex optimization problem $\inf_{f\in\mathcal{F}(W^{(0)},R/\sqrt{m})}\{\frac{1}{｜S｜}\sum_{x\in S}\ell(f(x))\}$ with projected ==stochastic gradient descent==.
  
  **Dataset**: 
  
  **WHAT KIND OF TARGET FUNCTION SHOULD WE CONSIDER?**
  
  In previous experiment (Cao and Guo et al. 2020), they conducted an experiment on the MNIST dataset by considering the NTK feature space of the five-layer fully connected NN.
  
  ![image-20220627212545030](/Users/flash/Library/Application Support/typora-user-images/image-20220627212545030.png)
  
  The results indicate the error from the reference space tends to decay as the wides of the network $m$ increase. In addition, the larger size of reference function class ($R$ ), the small the approximation error will be.
  
- **Verify the influence of NN structure and training iteration on the generalization performance of DP-SGD **

  [The following results are from the work of [Marlon 2022](https://helda.helsinki.fi/bitstream/handle/10138/345424/Tobaben_Marlon_thesis_2022.pdf?sequence=2&isAllowed=y). He conducted a series of experiments to test the effects of the hyperparameters in DP-DL on the dataset MIMIC-III (sample size: ~50K, dim = 714) ] 
  
  Controlled factors: 
  
  1. Network width m: (Ideal result) n = 10000
  
     ![2341659265316_.pic](/Users/flash/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/766901a1337f59e72b38a3095cfeedce/Message/MessageTemp/9e3312d8eee13e732ce99585f73a266e/Image/2341659265316_.pic.jpg)
  
  2. Trainning Steps T: (Ideal result) n = 10000
  
     ![image-20220720165519397](/Users/flash/Library/Application Support/typora-user-images/image-20220720165519397.png)
  
  3. sample size n: We suggests the larger datasize will reduce the Excessive Population risk as $n \to \infin$.
  
     1. Fix m and T:![621658090931_.pic](/Users/flash/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/766901a1337f59e72b38a3095cfeedce/Message/MessageTemp/9e3312d8eee13e732ce99585f73a266e/Image/621658090931_.pic.jpg)
  
     2. Fix n/m =1 and T:
  
        ![image-20220720165133808](/Users/flash/Library/Application Support/typora-user-images/image-20220720165133808.png)
  
     3. Fix $ n/m = r$ and $T = s\sqrt{n}$, 这里我们可以尝试多组$(r,s)$ :r 在0.5附近的区域， s在[1,5]之间
  
        ![2081658403858_.pic](/Users/flash/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/766901a1337f59e72b38a3095cfeedce/Message/MessageTemp/9e3312d8eee13e732ce99585f73a266e/Image/2081658403858_.pic.jpg)
  
        
  
        
  
        
  
  In this experiment, we aim to explore the influence of the above controlled factors on the generalization error of DP-SGD. 
  
  **Dataset**: Use real dataset MINIST to compute the testing error to replace the expectation or Synthetic dataset calculate the expected error. 

​	

(We shell show the large datasize is crucial to DP-SGD considering the generalization) Evidence from small-data under non-private case: [Harnessing the Power of Infinitely Wide Deep Nets on Small-data Tasks](https://arxiv.org/pdf/1910.01663.pdf)
