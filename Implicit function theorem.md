

# Implicit function theorem

## Preliminary

- Let $\mathbf{f}\in \ell'$ be a first-order continuously differentiable real function ($f'\in C^1$ )
- $\mathbf{x} = (x_1,x_2,\cdots,x_n) \in \mathbb{R}^n$ and $\mathbf{y} = (y_1,y_2,\cdots,y_m)\in \mathbb{R}^m$ 
- Equation $f(\mathbf{x},\mathbf{y}) = 0 \in \mathbb{R}^n$, solve $x$ 

## Main results

**Theorem**. Let $\mathbf{f} \in \ell'$ map from $E \subset \mathbb{R}^{n+m}$ to $\mathbb{R}^n$, such that $\mathbf{f}(\mathbf{x},\mathbf{y}) = \mathbf{0}$ for some point $(\mathbf{a},\mathbf{b})$. Let $\mathbf{f}_x(a) =  \mathbf{f}'(\mathbf{a},\mathbf{0})$ be invertable. Then there exists open set $(a,b)\in O \in \mathbb{R}^{n+m}$ and $W \sub \mathbb{R}^m$ such that 
$$
(x,y) \in O\ \ \ \  and \ \ \ \mathbf{f}(x,y) = \mathbf{0}\\
$$
(a) $x = \mathbf{g}(y)\ \ \ (y\in W) \\$

(b) $\mathbf{g}'(b) = -(\mathbf{f}'_x(a))^{-1}_{n\times n}\mathbf{f}'_y(b)$

*Proof of the theorem*. First, we consider the augement of Equation $f$:
$$
F(x,y) = [f(x,y),y]
$$
if $(a,b) \in E$ then $f(a,b) = 0$.
$$
f(a+\alpha,b+\beta) = 0+ f_x(a)\cdot \alpha + f_y(b)\cdot\beta + r(\alpha,\beta)
$$
where $r(\alpha,\beta)$ denotes the reminder. Therefore the differential form of $F$ would be
$$
\begin{align}
F(a+\alpha,b+\beta) &= [f_x(a)\cdot \alpha + f_y(b)\cdot\beta,\beta]\\
& = [f_x(a),0]\alpha+[f_y(b), \textrm{I}]\beta
\end{align}
$$
