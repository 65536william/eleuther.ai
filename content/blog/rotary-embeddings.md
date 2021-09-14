---
title: "Rotary Embeddings: A Relative Revolution"
publicationDate: 2021-04-20T11:00:09.843Z
authors:
  - Stella Biderman
  - Sid Black
  - Charles Foster
  - Leo Gao
  - Eric Hallahan
  - Horace He
  - Ben Wang
  - Phil Wang
coverImage: public/images/janus.png
lead: Rotary Positional Embedding (RoPE) is a new type of position encoding that
  unifies absolute and relative approaches. We put it to the test.
---
## TL:DR;

Rotary Positional Embedding (RoPE) is a new type of position encoding that unifies absolute and relative approaches. Developed by Jianlin Su in a series of blog posts earlier this year \[12, 13] and in a new preprint \[14], it has already garnered widespread interest in some Chinese NLP circles. This post walks through the method as we understand it, with the goal of bringing it to the attention of the wider academic community. In general we have found that across a large suite of setups including regular, linear, and local self-attention, **it either matches or surpasses all other methods currently available for injecting positional information into transformers.**