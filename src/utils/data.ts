// /src/data/data.js
export const dataList = [
  {
    id: 'Ch3ef',
    title: 'Ch^3EF Dataset',
    authors:
      'Zhelun Shi, Zhipin Wang, Hongxing Fan, Zaibin Zhang, Lijun Li, Yongting Zhang, Zhenfei Yin, Lu Sheng, Yu Qiao, Jing Shao',
    publication: 'arXiv:2403.17830',
    description : 'Ch^3EF dataset is the extended version of ChEF dataset to assess whether a multimodal large language model is well aligned in semantic, logic, and human values aspects. ',
    time: '2024/03/26',
    link:'/data/Ch3ef',
    imageSrc: '/images/dataset/Ch3ef.png',
    tags: {
      data: ['Image', 'Natural Language'],
      format: ['Image-Text-Option', 'Triplet'],
      task: ['Understanding', 'Detection', 'Reasoning', 'Trustworthiness'],
      license : []
    }
  },
  {
    id: 'Chef',
    title: 'ChEF Dataset',
    authors: 'Zhelun Shi*, Zhipin Wang*, Hongxing Fan*, Zhenfei Yin, Lu Sheng†, Yu Qiao, Jing Shao†',
    publication: 'arXiv:2311.02692',
    description : 'ChEF dataset is designed for standardized assessment of Multimodal Large Language Models (MLLMs) to assess whether a MLLM is well aligned in semantic, logic, and human values aspects.',
    time: '2023/11/05',
    link:'/data/Chef',
    imageSrc: '/images/dataset/Chef.png',
    tags: {
      data: ['Image', 'Natural Language'],
      format: ['Image-Text-Option', 'Triplet'],
      task: ['Understanding', 'Detection', 'Reasoning', 'Trustworthiness'],
      license : []
    }
  },
  {
    id: 'Gemini',
    title: 'Gemini Trustworthy Evaluation Dataset',
    authors:
      'Chaochao Lu, Chen Qian, Guodong Zheng, Hongxing Fan, Hongzhi Gao, Jie Zhang, Jing Shao, Jingyi Deng, Jinlan Fu, Kexin Huang, Kunchang Li, Lijun Li, Limin Wang, Lu Sheng, Meiqi Chen, Ming Zhang, Qibing Ren, Sirui Chen, Tao Gui, Wanli Ouyang, Yali Wang, Yan Teng, Yaru Wang, Yi Wang, Yinan He, Yingchun Wang, Yixu Wang, Yongting Zhang, Yu Qiao, Yujiong Shen, Yurong Mou, Yuxi Chen, Zaibin Zhang, Zhelun Shi, Zhenfei Yin, Zhipin Wang',
    publication: 'Technicle Report',
    description: 'Gemini Trustworthy Evaluation Dataset is a manually constructed evaluation dataset to comprehensively assess Gemini in various tasks (i.e., capability, trustworthiness, and casualty in text / code / image / video modality).' ,
    time: '2024/01/26',
    link:'/data/Gemini',
    imageSrc: '/images/dataset/Gemini.png',
    tags: {
      data: ['Image', 'Natural Language', 'Code', 'Video'],
      format: [' Instructions with Auxiliary Data'],
      task: ['Trustworthiness',' Agent Safety',' Question Answering'],
      license : []
    }
  },
  {
    id: 'PsySafe',
    title:
      'PsySafe Dataset',
    authors:
      'Zaibin Zhang, Yongting Zhang, Lijun Li, Hongzhi Gao, Lijun Wang, Huchuan Lu, Feng Zhao, Yu Qiao, Jing Shao',
    publication: 'ACL(Annual Meeting of the Association for Computational Linguistics) 2024',
    description: 'PsySafe dataset is a specially designed dataset to evaluate the safety of multi-agent systems from both psychological and behavioral perspectives.',
    time: '2024/01/22',
    link:'/data/PsySafe',
    imageSrc: '/images/dataset/PsySafe-logo.png',
    tags: {
      data: ['Natural Language'],
      format: ['Task-Label-Dimension','Triplet'],
      task: ['Trustworthiness',' Agent Safety',' Question Answering'],
      license : []
    }
  },
  {
    id: 'SALAD-Bench',
    title: 'SALAD-Bench Dataset',
    authors: 'Lijun Li, Bowen Dong, Ruohui Wang, Xuhao Hu, Wangmeng Zuo, Dahua Lin, Yu Qiao, Jing Shao',
    publication: 'ACL(Annual Meeting of the Association for Computational Linguistics) 2024',
    description: 'A large-scale comprehensive safety benchmark specifically designed for evaluating LLMs, attack methods, and defense strategies.',
    time: '2024/02/07',
    link:'/data/SALAD-Bench',
    imageSrc: '/images/dataset/SALAD-Bench-logo.png',
    tags: {
      data: ['Natural Language'],
      format: ['JSON'],
      task: ['LLM Safety'],
      license : ['apache 2.0']
    }
  },
];
