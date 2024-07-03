---
publishDate: 2023-11-01T00:00:00Z
author: Zhelun Shi and Zhipin Wang and Hongxing Fan and Zhenfei Yin and Lu Sheng and Yu Qiao and Jing Shao
title: {
  title : ChEF,
  url : https://openlamm.github.io/paper_list/ChEF
}
code_url : https://github.com/OpenGVLab/LAMM
excerpt: A Comprehensive Evaluation Framework for Standardized Assessment of Multimodal Large Language Models
logo: /images/dataset/Chef.png
image: /images/dataset/Chef.png
journal: {
  title : 	arXiv:2311.02692,
  url : https://arxiv.org/abs/2311.02692,
}
tags:
  - Image
  - Natural Language
  - Understanding
  - Detection
  - Reasoning
  - Trustworthy
bibtex: '@misc{shi2023chefcomprehensiveevaluationframework,
      title={ChEF: A Comprehensive Evaluation Framework for Standardized Assessment of Multimodal Large Language Models}, 
      author={Zhelun Shi and Zhipin Wang and Hongxing Fan and Zhenfei Yin and Lu Sheng and Yu Qiao and Jing Shao},
      year={2023},
      eprint={2311.02692},
      archivePrefix={arXiv},
      primaryClass={cs.CV}
      url={https://arxiv.org/abs/2311.02692}, 
}'

---

## Overview

The Comprehensive Evaluation Framework (ChEF) is designed for standardized assessment of Multimodal Large Language Models (MLLMs). It consists of four modular components:

### Components

- **Scenario**: A collection of scalable multimodal datasets for various tasks such as image classification, object detection, and multimodal question-answering.
- **Instruction**: Flexible methods for posing questions and setting instruction examples to MLLMs, including in-context example (ICE) retrieving strategies for in-context learning (ICL).
- **Inferencer**: Reliable question-answering strategies, such as Direct, Perplexity (PPL), and Chain-of-Thought (CoT) prompting.
- **Metric**: Task-specific score functions to evaluate MLLM performance, including accuracy, mAP, BLEU, Expected Calibration Error (ECE), and GPT-based metrics.

## Main Findings

### Evaluation Coverage

- ChEF offers a standardized framework to comprehensively profile MLLMs and compare different models.
- It supports versatile evaluations through systematic selection of the four components, enabling new evaluations by designing new Recipes.

### Six New Recipes

1. **Calibration**: Measures uncertainty and confidence.
2. **In-context Learning**: Assesses the ability to learn from instruction examples.
3. **Instruction Following**: Evaluates adherence to instructions.
4. **Language Performance**: Checks the readability of generated descriptions.
5. **Hallucination**: Ensures the model does not mention nonexistent objects.
6. **Robustness**: Tests resilience to input corruptions.

### Evaluation Results

- Conducted on 9 prominent MLLMs across 9 scenarios and 6 desiderata.
- Recent MLLMs struggle to perform well across all scenarios, indicating a tug-of-war issue between tasks.
- Significant difficulties in in-context learning, instruction following, and robustness, highlighting limitations in real-world multimodal interactions.
- Strong correlation found between desiderata and visual performance, revealing intrinsic properties required for effective multimodal interactions.

## Conclusion

ChEF provides a comprehensive and scalable framework for evaluating the capabilities and limitations of MLLMs, contributing to a deeper understanding and improvement of these models in multimodal tasks.
