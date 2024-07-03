---
publishDate: 2024-02-07T00:00:00Z
author: Li, Lijun and Dong, Bowen and Wang, Ruohui and Hu, Xuhao and Zuo, Wangmeng and Lin, Dahua and Qiao, Yu and Shao, Jing
title: {
  title : SALAD-Bench,
  url : https://adwardlee.github.io/salad_bench/
}
code_url : https://github.com/OpenSafetyLab/SALAD-BENCH
excerpt: A Hierarchical and Comprehensive Safety Benchmark for Large Language Models
logo: /images/dataset/SALAD-Bench-logo.png
image: /images/dataset/SALAD-Bench.png
journal: {
  title : arXiv preprint arXiv:2402.05044,
  url : https://arxiv.org/abs/2402.05044,
}
tags:
  - Natural Language
  - JSON, Evaluation
  - LLM Safety
  - apache-2.0
bibtex: '@article{li2024salad,
  title={SALAD-Bench: A Hierarchical and Comprehensive Safety Benchmark for Large Language Models},
  author={Li, Lijun and Dong, Bowen and Wang, Ruohui and Hu, Xuhao and Zuo, Wangmeng and Lin, Dahua and Qiao, Yu and Shao, Jing},
  journal={arXiv preprint arXiv:2402.05044},
  year={2024}
}'
---

# Summary

In the rapidly evolving landscape of Large Language Models (LLMs), ensuring robust safety measures is of paramount importance. To address this critical need, we propose **SALAD-Bench**, a safety benchmark specifically designed for evaluating LLMs, attack methods, and defense strategies.

Distinguished by its extensive scope, **SALAD-Bench** surpasses conventional benchmarks with its large scale, rich diversity, intricate three-level taxonomy, and versatile functionalities. **SALAD-Bench** features a meticulously curated array of questions, ranging from standard queries to complex ones enriched with attack and defense modifications, as well as multiple-choice formats.

To effectively manage the inherent complexity, we introduce an innovative evaluator, the LLM-based **MD-Judge**, for QA pairs, with a particular focus on attack-enhanced queries, ensuring a seamless and reliable evaluation process. These components extend **SALAD-Bench** beyond standard LLM safety evaluation to encompass both LLM attack and defense methods evaluation, ensuring its joint-purpose utility. Our extensive experiments illuminate the resilience of LLMs against emerging threats and the efficacy of contemporary defense tactics.

![图片](/images/dataset/SALAD-Bench-img1.png)

## 1. Compact Taxonomy with Hierarchical Levels

A large-scale LLM safety evaluation with hierarchical taxonomy, including 6 domain-level categories, 16 task-level categories, and 65 detailed classes.

![图片](/images/dataset/SALAD-Bench-img2.png)

## 2. Enhanced Difficulty and Complexity

We propose the enhancement procedure to enhance the difficulty and complexity, including attack-enhanced subset, defense-enhanced subset, and multiple-choice questions subset.

![图片](/images/dataset/SALAD-Bench-img3.png)

## 3. Reliable and Seamless Evaluator

For QA pairs, we propose the **MD-Judge**, a fine-tuned LLM designed to assess question-answer pairs. And for MCQs, we propose the **MCQ-Judge**, which employs in-context learning and regex parsing to identify unsafe choices from the options provided.

![图片](/images/dataset/SALAD-Bench-img4.png)

## 4. Joint-Purpose Utility

Comprehensive evaluation for LLMs, attacking methods, and defense methods.
