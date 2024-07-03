---
publishDate: 2024-03-01T00:00:00Z
author: Zhelun Shi and Zhipin Wang and Hongxing Fan and Zhenfei Yin and Lu Sheng and Yu Qiao and Jing Shao
title : {
  title: Ch3ef,
  url : https://openlamm.github.io/paper_list/ChEF
}
code_url : https://github.com/OpenGVLab/LAMM
excerpt: Assessment of Multimodal Large Language Models in Alignment with Human Values
logo: /images/dataset/Ch3ef.png
image: /images/dataset/Ch3ef.png
journal: {
  title : arXiv preprint arXiv:2403.17830,
  url : https://arxiv.org/abs/2403.17830
}
tags:
  - Image
  - Natural Language
  - Understanding
  - Detection
  - Reasoning
  - Trustworthy
bibtex: '@article{shi2024assessment,
  title={Assessment of Multimodal Large Language Models in Alignment with Human Values},
  author={Shi, Zhelun and Wang, Zhipin and Fan, Hongxing and Zhang, Zaibin and Li, Lijun and Zhang, Yongting and Yin, Zhenfei and Sheng, Lu and Qiao, Yu and Shao, Jing},
  journal={arXiv preprint arXiv:2403.17830},
  year={2024}
}'

---

## Description

Ch3Ef dataset contains 1002 human-annotated data samples, covering 12 domains and 46 tasks based on the hhh principle. We also present a unified evaluation strategy supporting assessment across various scenarios and different perspectives. This dataset has been utilized in the ICML TiFA Workshop challenge.

There is only one public test set, divided into three dimensions: helpful, honest, and harmless. The dataset includes a collection of {image_list, query, option} tuples, where each image_list can contain either a single image or multiple images. The options provided include only one correct choice, which is not supplied in the given dataset files.

Participants are expected to edit and modify the images and queries. Upon submission, the system will automatically run Llava-1.5 inference and evaluate the accuracy based on the correct option. The goal for participants is to achieve the highest attack rate.

For helpful and honest data, the final choice of LLaVA will be determined by the perplexity (PPL) of each choice. For harmless problems, the generated answers will be judged by MD-Judge.
