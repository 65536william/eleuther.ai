---
title: "MP-NeRF: A Massively Parallel Method for Accelerating Protein Structure Reconstruction from Internal Coordinates"
date: 2021-06-09T04:02:51-06:00
authors:
  - Eric Alcaide
  - Stella Biderman
  - Amalio Telenti
  - M. Cyrus Maher
description: "The conversion of proteins between internal and cartesian coordinates is a limiting step in many pipelines, such as molecular dynamics simulations and machine learning models. This conversion is typically carried out by sequential or parallel applications of the Natural extension of Reference Frame (NeRF) algorithm. This work proposes a massively parallel NeRF implementation which, depending on the polymer length, achieves speedups between 400-1200x over the previous state-of-the-art. It accomplishes this by dividing the conversion into three main phases: parallel composition of the monomer backbone, assembly of backbone subunits, and parallel elongation of sidechains; and by batching these computations into a minimal number of efficient matrix operations. Special emphasis is placed on reusability and ease of use. We open source the code (available at https://github.com/EleutherAI/mp_nerf) and provide a corresponding python package."
link: https://www.biorxiv.org/content/10.1101/2021.06.08.446214v1
---
