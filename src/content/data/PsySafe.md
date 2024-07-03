---
publishDate: 2024-01-01T00:00:00Z
author: Zhang, Zaibin and Zhang, Yongting and Li, Lijun and Gao, Hongzhi and Wang, Lijun and Lu, Huchuan and Zhao, Feng and Qiao, Yu and Shao, Jing
title : {
  title: PsySafe,
  url : https://github.com/AI4Good24/PsySafe
}
code_url : https://github.com/AI4Good24/PsySafe
excerpt: A Comprehensive Framework for Psychological-based Attack, Defense, and Evaluation of Multi-agent System Safety
logo: /images/dataset/PsySafe.png
image: /images/dataset/PsySafe.png
journal: {
  title : arXiv preprint arXiv:2401.11880,
  url : https://arxiv.org/abs/2401.11880
}
tags:
  - Natural Language
  - Agent
  - Trustworthy
bibtex: '@article{zhang2024psysafe,
  title={PsySafe: A Comprehensive Framework for Psychological-based Attack, Defense, and Evaluation of Multi-agent System Safety},
  author={Zhang, Zaibin and Zhang, Yongting and Li, Lijun and Gao, Hongzhi and Wang, Lijun and Lu, Huchuan and Zhao, Feng and Qiao, Yu and Shao, Jing},
  journal={arXiv preprint arXiv:2401.11880},
  year={2024}
}'

---

## Introduction

We propose the **PsySafe** dataset for modern multi-agent systems. This dataset focuses on three key aspects:

- Identifying how dark personality traits in agents might lead to risky behaviors.
- Designing defense strategies to mitigate these risks.
- Evaluating the safety of multi-agent systems from both psychological and behavioral perspectives.

## Main Findings and Contributions

### Identification of Safety Vulnerabilities

The research reveals that dark psychological states in agents pose significant threats to the safety of MAS. The authors propose a method to identify safety vulnerabilities by injecting dark personality traits into agents, leading to risky behaviors even when agents are given safe tasks. Key observations include:

- Collective dangerous behaviors among agents.
- Agents' self-reflection during dangerous behavior.
- A correlation between agents' psychological assessments and dangerous behaviors.

### Comprehensive Evaluation of Safety

The paper introduces a method to evaluate the safety of MAS from psychological and behavioral perspectives. The evaluations include:

- **Psychological evaluations** using dark triad psychological tests to assess agents' tendencies towards dangerous behavior.
- **Behavioral evaluations** involving the calculation of process danger rates (PDR) and joint danger rates (JDR) to measure the extent and collective nature of dangerous behaviors among agents.

### Defense Strategies

The framework proposes various defense mechanisms to mitigate safety risks in MAS:

- **Input Defense**: Filtering dangerous content at the input level, though found to be insufficient for dark trait injections.
- **Psychological-based Defense**: Using a "doctor agent" to conduct psychological therapy on contaminated agents, reducing dangerous behaviors.
- **Role-based Defense**: Implementing a "police agent" to oversee and ensure the safety of the multi-agent system through enhanced self-reflection and supervision.

### Experimental Findings

Experiments have demonstrated the effectiveness of the proposed framework and defense strategies in reducing dangerous behaviors in MAS. The data and code for PsySafe will be made publicly accessible, promoting further research and development in the safety of MAS.

## Conclusion

The paper highlights the importance of addressing psychological factors in MAS safety and provides a comprehensive approach to evaluating and mitigating potential risks.
