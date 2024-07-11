---
publishDate: 2024/03/26
author: Zhelun Shi and Zhipin Wang and Hongxing Fan and Zhenfei Yin and Lu Sheng and Yu Qiao and Jing Shao
title : {
  title: Ch^3EF Dataset,
  url : https://openlamm.github.io/paper_list/ChEF
}
code_url : https://github.com/OpenGVLab/LAMM
excerpt: Ch^3EF dataset is the extended version of ChEF dataset to assess whether a multimodal large language model is well aligned in semantic, logic, and human values aspects.
logo: /images/dataset/Ch3ef.png
image: /images/dataset/Ch3ef.png
journal: {
  title : arXiv preprint arXiv:2403.17830,
  url : https://arxiv.org/abs/2403.17830
}
tags: {
      data: ['Image', 'Natural Language'],
      format: ['Image-Text-Option', 'Triplet'],
      task: ['Understanding', 'Detection', 'Reasoning', 'Trustworthiness'],
      license : []
    }
bibtex: '@article{shi2024assessment,
  title={Assessment of Multimodal Large Language Models in Alignment with Human Values},
  author={Shi, Zhelun and Wang, Zhipin and Fan, Hongxing and Zhang, Zaibin and Li, Lijun and Zhang, Yongting and Yin, Zhenfei and Sheng, Lu and Qiao, Yu and Shao, Jing},
  journal={arXiv preprint arXiv:2403.17830},
  year={2024}
}'

---

<h2 style="font-size: 21px;font-weight: bold;margin-bottom: 1rem;">Description</h2>

Ch3Ef dataset contains 1002 human-annotated data samples, covering 12 domains and 46 tasks based on the hhh principle. We also present a unified evaluation strategy supporting assessment across various scenarios and different perspectives. This dataset has been utilized in the ICML TiFA Workshop challenge.
<br />

<h2 style="font-size: 21px;font-weight: bold;margin-bottom: 1rem;">Data</h2>

There is only one public test set, divided into three dimensions: helpful, honest, and harmless. The dataset includes a collection of {image_list, query, option} triplets, where each image_list can contain either a single image or multiple images. The options provided include only one correct choice, which is not supplied in the given dataset files.
