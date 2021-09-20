---
title: Activation Function Ablation
date: 2021-05-24T11:00:47.559Z
authors:
  - Leo Gao
description: An ablation of activation functions in GPT-like autoregressive language models.
---

This was an ablation of activation functions on GPT-like models of ~100M params that I ran ages ago. Each model was run for 10k iters, which isn’t very long. My original goal was to show that activation function doesn’t matter than much, but to do so I’d need to run a bunch more runs to get variance and show no statistical significance, and I don’t plan on running a more exhaustive version of this experiment any time soon. So, I’m just dumping these results here in case anyone has any use for them. All the activation definitions are [here](https://github.com/EleutherAI/gpt-neo/blob/master/models/activations.py#L44).
