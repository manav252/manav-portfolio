// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Manav Doshi',
  role: 'Deep learning researcher · Computer vision & sequence modeling',
  location: 'Mumbai, India',
  email: 'doshimanav24@gmail.com',
  github: 'https://github.com/manav252',
  linkedin: 'https://linkedin.com/in/manav-doshi-252md',
  status: 'Open to research internships: human motion analysis & medical AI',
  summary: [
    'I am a B.Tech Electronics & Telecommunication student at DJ Sanghvi College of Engineering (graduating June 2027), working on deep learning for computer vision and temporal sequence data.',
    'I have three papers under review: two as first author, on medical image segmentation and facial emotion recognition, and DeepTrust-X as lead author, an explainable unsupervised sequence-anomaly detector evaluated with multi-seed statistical tests and ablations.',
    'I care about results that hold up: fixed false-alarm budgets, several seeds, honest baselines, and explanations a person can actually read.',
  ],
}

export const stats = [
  { value: '3', label: 'papers under review, two as first author' },
  { value: '0.8954', label: 'test Dice on Kvasir-SEG polyp segmentation' },
  { value: '99.78%', label: 'accuracy at a fixed 1% false-alarm budget' },
  { value: '1,600×', label: 'faster per-feature explanations than SHAP' },
]

export const research = [
  {
    id: 'deeptrust-x',
    title: 'DeepTrust-X',
    subtitle: 'Explainable unsupervised anomaly detection in network traffic',
    year: '2026',
    status: 'Under review',
    venue: 'Journal of Network and Systems Management',
    role: 'Lead author · supervised by Dr. Supriya Dicholkar',
    featured: true,
    pipeline: [
      'Sequence autoencoder',
      'Isolation Forest',
      'Conformal tail probabilities',
      'Threshold calibrated on normal data',
    ],
    metrics: [
      { value: '99.78%', label: 'Accuracy' },
      { value: '100%', label: 'Recall' },
      { value: '0.43%', label: 'False-positive rate' },
    ],
    points: [
      'Fused a full-resolution sequence autoencoder (gated dilated convolutions + BiLSTM) with an Isolation Forest through conformal tail probabilities, calibrating the alarm threshold on normal data only.',
      'On CSE-CIC-IDS2018 at a fixed 1% false-alarm budget, averaged over three seeds, against roughly 50% for each component alone.',
      'Benchmarked GRU, TCN and Transformer autoencoders with Welch’s t-tests and ablations, and tested robustness to shortcut features.',
      'Built per-feature explanations about 1,600× faster than SHAP.',
    ],
    links: [
      { label: 'Notebook', href: '/notebooks/DeepTrust_X_v4_1_final.ipynb', download: true },
      { label: 'Dataset: CSE-CIC-IDS2018', href: 'https://www.unb.ca/cic/datasets/ids-2018.html' },
    ],
    tech: ['PyTorch', 'scikit-learn', 'BiLSTM', 'Conformal prediction'],
  },
  {
    id: 'transunet',
    title: 'Polyp Segmentation Using TransUNet',
    subtitle: 'Hybrid CNN–Transformer segmentation on Kvasir-SEG',
    year: '2026',
    status: 'Under review',
    venue: 'IEEE ICICAIEECE-2027',
    role: 'First author',
    metrics: [
      { value: '0.8954', label: 'Test Dice' },
      { value: '0.8173', label: 'IoU' },
      { value: '56.3M', label: 'Parameters' },
    ],
    points: [
      'Implemented a TransUNet with a ResNet-50 encoder and a 12-head Transformer bridge for medical image segmentation.',
      'Outperformed Attention U-Net, ResUNet and TransResNet baselines.',
    ],
    links: [
      { label: 'Notebook', href: '/notebooks/TransUNet_Kvasir_SEG.ipynb', download: true },
      { label: 'Dataset: Kvasir-SEG', href: 'https://datasets.simula.no/kvasir-seg/' },
    ],
    tech: ['PyTorch', 'OpenCV', 'Albumentations'],
  },
  {
    id: 'fer',
    title: 'Facial Emotion Recognition Using Residual Networks',
    subtitle: 'Architecture benchmark on FER2013',
    year: '2026',
    status: 'Under review',
    venue: 'ICAITPR 2026',
    role: 'First author',
    metrics: [
      { value: '72.33%', label: 'Accuracy' },
      { value: '72.17%', label: 'Weighted F1' },
      { value: '6', label: 'Model families' },
    ],
    points: [
      'Benchmarked ResNet, VGG16, DenseNet, EfficientNet, ViT and Swin on the same protocol.',
      'ResNet101 came out best across the comparison.',
    ],
    links: [
      {
        label: 'Dataset',
        href: 'https://www.kaggle.com/datasets/jonathanoheix/face-expression-recognition-dataset',
      },
    ],
    tech: ['PyTorch', 'ResNet', 'ViT', 'Swin'],
  },
  {
    id: 'smart-helmet',
    title: 'IoT Enabled Smart Helmet Breathalyzer',
    subtitle: 'Road-safety helmet that checks for alcohol before the vehicle starts',
    points: [
      'Designed and built an IoT-enabled smart helmet with an integrated breathalyzer.',
      'Detects alcohol levels before vehicle operation to help prevent drunk driving, with real-time monitoring for accident prevention.',
    ],
    links: [
      { label: 'Paper', href: '/research/iot-smart-helmet-paper.pdf' },
      { label: 'Certificate', href: '/research/iot-certificate-manav-doshi.pdf' },
      { label: 'Hardware', href: '/research/iot-smart-helmet-hardware.jpg' },
    ],
    tech: ['IoT', 'Embedded systems', 'Road safety'],
  },
  {
    id: 'waste-segregation',
    title: 'Waste Segregation System',
    github: 'https://github.com/manav252/WASTE-SEGREGATION-SYSTEM-',
    subtitle: 'Automatic sorting of waste into recyclable, organic and general',
    metrics: [{ value: '~90%', label: 'Classification accuracy' }],
    points: [
      'Built an intelligent waste segregation system combining machine learning, image processing, sensors and IoT.',
      'Classifies waste automatically into recyclable, organic and general categories.',
    ],
    links: [
      { label: 'Paper', href: '/research/waste-segregation-paper.pdf' },
      { label: 'Magnet separation demo', href: 'https://youtube.com/shorts/Zl_dG2Z3X8s' },
      { label: 'Sanitary detection demo', href: 'https://youtu.be/JCxUIxPIq0Q' },
    ],
    tech: ['Machine learning', 'Computer vision', 'IoT'],
  },
]

export const projects = [
  {
    title: 'SafeVision AI',
    github: 'https://github.com/manav252/SafeVision-AI',
    demo: 'https://safevision-ai-manav25.streamlit.app',
    date: 'June 2026',
    blurb: 'Real-time industrial safety monitoring from live video.',
    points: [
      'Detects PPE compliance and restricted-zone entry with YOLOv8 and OpenCV.',
      'A risk-fusion engine combines vision, gas, permit and equipment data into a single 0–100 risk score.',
      'FastAPI backend and Streamlit dashboard for live alerts, heatmaps and PostgreSQL incident logging.',
    ],
    tech: ['YOLOv8', 'OpenCV', 'FastAPI', 'PostgreSQL', 'Streamlit'],
  },
  {
    title: 'Document Intelligence RAG Assistant',
    date: 'Dec 2025',
    status: 'In progress',
    blurb: 'Ask questions of your documents and get grounded answers.',
    points: [
      'Retrieval-augmented Q&A pipeline with chunking, embeddings and vector search, behind a Streamlit interface.',
      'Evaluated chunking, retrieval and prompting strategies to improve answer relevance across test queries.',
    ],
    tech: ['Python', 'Embeddings', 'Vector search', 'LLMs'],
  },
  {
    title: 'Customer Behavior Analysis',
    github: 'https://github.com/manav252/customer_behaviour_analysis',
    blurb: 'Why customers engage, repeat or drop off.',
    points: [
      'Segmentation analysis of customer activity with SQL, Python and Pandas.',
      'Identified behavior patterns that support retention, targeting and business decisions.',
    ],
    tech: ['Python', 'SQL', 'Pandas', 'Segmentation'],
  },
  {
    title: 'Healthcare Data Analysis',
    github: 'https://github.com/manav252/healthcare-diabetes-analysis',
    blurb: 'Turning raw healthcare activity into operational insight.',
    points: [
      'KPI dashboards built with Excel and Power BI.',
      'Visualized appointment flow, department performance and care-delivery trends for faster decisions.',
    ],
    tech: ['Power BI', 'Excel', 'KPI dashboards'],
  },
  {
    title: 'YouTube Trend Analyzer',
    github: 'https://github.com/manav252/YouTube-Trend-Analyzer',
    blurb: 'What makes videos trend across categories.',
    points: [
      'Analyzed engagement metrics with Python, Pandas and Matplotlib.',
      'Surfaced patterns in views, likes, timing and categories to guide content strategy.',
    ],
    tech: ['Python', 'Pandas', 'Matplotlib'],
  },
]

export const experience = [
  {
    org: 'Alliant Technologies',
    place: 'Mumbai',
    title: 'Data Analyst & AI Intern',
    date: 'Jan – Mar 2026',
    links: [{ label: 'Certificate of completion', href: '/certificates/alliant-internship-certificate.pdf' }],
    points: [
      'Contributed data preparation and conversational logic to an internal AI chatbot, improving access to internal information.',
      'Built Python (Pandas) and SQL workflows to clean, structure and analyze operational datasets for reporting.',
    ],
  },
]

export const education = {
  school: 'Dwarkadas J. Sanghvi College of Engineering',
  place: 'Mumbai',
  degree: 'B.Tech, Electronics and Telecommunication Engineering',
  date: '2023 – June 2027',
  detail: 'CGPA 7.5 / 10',
  courses: [
    'Machine Learning and Applications',
    'Neural Networks',
    'Data Structures and Algorithms',
    'Data Analysis',
  ],
}

export const leadership = [
  {
    title: 'Student OJT Coordinator',
    org: 'DJSCE',
    date: '2026 – 27',
    text: 'Coordinating on-the-job training placements for students.',
    links: [{ label: 'Letter from the department', href: '/certificates/djsce-ojt-coordinator-letter.pdf' }],
  },
  {
    title: 'TEDx Admin',
    org: 'DJSCE',
    date: '2025 – 26',
    text: 'Managed administration and operations for the college TEDx event.',
  },
]

export const skills = [
  {
    group: 'Computer vision',
    items: ['CNNs', 'ResNet', 'U-Net', 'TransUNet', 'ViT', 'Swin', 'YOLOv8', 'OpenCV', 'Segmentation', 'Detection'],
  },
  {
    group: 'Sequence modeling',
    items: ['LSTM / BiLSTM', 'GRU', 'TCN', 'Transformers', 'Autoencoders', 'Anomaly detection'],
  },
  {
    group: 'Research methods',
    items: ['Multi-seed experiments', 'Ablations', 'Statistical testing', 'SHAP / explainability'],
  },
  {
    group: 'Data analysis & BI',
    items: ['Power BI', 'Tableau', 'Excel', 'Matplotlib', 'PostgreSQL'],
  },
  {
    group: 'Tools',
    items: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'SQL', 'MATLAB', 'Git', 'Docker', 'FastAPI'],
  },
]
