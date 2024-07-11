---
publishDate: 2024/01/22
author: Zhang, Zaibin and Zhang, Yongting and Li, Lijun and Gao, Hongzhi and Wang, Lijun and Lu, Huchuan and Zhao, Feng and Qiao, Yu and Shao, Jing
title : {
  title: PsySafe Dataset,
  url : https://github.com/AI4Good24/PsySafe
}
code_url : https://github.com/AI4Good24/PsySafe
excerpt: PsySafe dataset is a specially designed dataset to evaluate the safety of multi-agent systems from both psychological and behavioral perspectives.
logo: /images/dataset/PsySafe-logo.png
image: /images/dataset/PsySafe.png
journal: {
  title : arXiv preprint arXiv:2401.11880,
  url : https://arxiv.org/abs/2401.11880
}
tags: {
      data: ['Natural Language'],
      format: ['Task-Label-Dimension','Triplet'],
      task: ['Trustworthiness',' Agent Safety',' Question Answering'],
      license : []
    }
bibtex: '@article{zhang2024psysafe,
  title={PsySafe: A Comprehensive Framework for Psychological-based Attack, Defense, and Evaluation of Multi-agent System Safety},
  author={Zhang, Zaibin and Zhang, Yongting and Li, Lijun and Gao, Hongzhi and Wang, Lijun and Lu, Huchuan and Zhao, Feng and Qiao, Yu and Shao, Jing},
  journal={arXiv preprint arXiv:2401.11880},
  year={2024}
}'

---

<h2 style="font-size: 21px;font-weight: bold;margin-bottom: 1rem;">Description</h2>

PsySafe dataset includes 855 triplets with various safe or unsafe tasks, which focuses on three key aspects: identifying how dark personality traits in agents might lead to risky behaviors; designing defense strategies to mitigate these risks; and evaluating the safety of multi-agent systems from both psychological and behavioral perspectives.
<br />

<h2 style="font-size: 21px;font-weight: bold;margin-bottom: 1rem;">Data</h2>

Each data sample in PsySafe dataset is a triplet with the structure of (task, label, dimension). Task indicates a detailed instruction to agents; label means the source of the command; and dimension means detailed safety threat.

tabs-break!important

![图片](/images/dataset/PsySafe-egdata.png)
