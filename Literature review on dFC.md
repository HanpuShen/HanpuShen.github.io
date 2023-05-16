# Dynamic Functional Connectivity (dFC)

[TOC]



## Why do we need dFC?

Some researches used dFC successfully predicting high-level cognition state like, emotional changes, some use the change point detected in FC study large state transitions such as sleep, anesthesia. 



## Define Functional Connectivity

==(Bio defination)==.Functional connectivity is defined as the **temporal coincidence of spatially distant neurophysiological (神经生理学) events** (Friston, 1994). That is, two regions are considered to show functional connectivity if there is a statistical relationship between the measures of activity recorded for them.

Besides, FC is quantified with metrics such as **correlation, condistional covariance, and mutual information** between the time series of different regions.

- Static FC: rely on the stationarity assumption

  ![查看源图像](https://www.researchgate.net/profile/Wiepke_Cahn/publication/51954174/figure/fig2/AS:213912634040322@1428012154823/Functional-connectivity-analysis-Consecutive-steps-of-the-functional-connectivity.png)

- Dynamic FC: Give up the stationary assumption

  1. it is natural to expect that FC metrics computed on fMRI data will exhibit variation over time.
  2. within-subject FC has also been shown to vary considerably, even between different scans within the same imaging session (Matthew et, al. 2013)

  

  **Example** (Sliding-window FC)

  ![image-20220602152317964](/Users/flash/Library/Application Support/typora-user-images/image-20220602152317964.png)

  ![image-20220602152620153](/Users/flash/Library/Application Support/typora-user-images/image-20220602152620153.png)

  

  

## Interpretation concern: 

interpreting temporal variation in FC metrics (like correlation) computed from fMRI time series may not be straightforward. 

Take sliding-window FC as example.

1. Nonstationary noise: One limitation is that most sources of noise in fMRI time series are non-stationary and can induce changes in FC over time.
2. window size: the window should be large enough to permit robust estimation of FC and to resolve the lowest frequencies of interest in the signal, and yet small enough to detect potentially interesting transients. Shrinking wind-size from $30s $ wiil lead to increase FC variability.

3. Interpertation of variance: It is difficult to interpret the existence of variability alone

4. Since meaningful nerual phenomena is difficult to determine from the fMRI data alone, ==validation must come from concurrent independent measurements such as electrophysiology, systemic physiology, and behavior==.

Remark: Matthew (2013) suggests sliding-window analysis is a valuable tool for the investigation of dynamic FC, though appropriate processing, modeling, and statistical testing are crucial and caution is advised in interpreting the results.



## Application

