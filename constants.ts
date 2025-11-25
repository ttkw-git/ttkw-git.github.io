export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Shoe Brand Classification with Computer Vision',
    description: 'Machine learning model using CNN to classify shoe images into brand categories (Adidas, Nike, Converse). Demonstrates practical computer vision applications in e-commerce and product recognition.',
    longDescription: 'Built a convolutional neural network to automatically classify shoe brands from product images. Applied deep learning techniques including image preprocessing, CNN architecture design, and model evaluation to create a practical computer vision solution for automated product categorization.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    demoUrl: '',
    category: 'Computer Vision',
    featured: true,
    tags: ['Computer Vision', 'CNN', 'Python', 'TensorFlow'],
    technologies: [
      'Python', 'TensorFlow/Keras', 'Computer Vision', 'CNN', 'Image Processing', 'Jupyter Notebooks'
    ],
    achievements: [
      'Implemented CNN architecture for multi-class image classification',
      'Achieved high accuracy in automated brand recognition',
      'Built end-to-end ML pipeline from data preprocessing to model evaluation',
      'Demonstrated practical computer vision application for e-commerce'
    ],
    businessImpact: 'Automated product classification system with applications in e-commerce, inventory management, and retail automation',
    learningOutcomes: [
      'Hands-on experience with convolutional neural networks',
      'Image preprocessing and computer vision techniques',
      'End-to-end machine learning project development'
    ]
  },
  {
    id: 2,
    title: 'Customer Segmentation Analysis',
    description: 'Unsupervised learning project analyzing customer data to identify distinct market segments using clustering algorithms. Provides actionable insights for targeted marketing strategies.',
    longDescription: 'Applied K-means clustering and statistical analysis to customer behavior data to discover meaningful market segments. Used data visualization and exploratory data analysis to extract business insights and develop recommendations for targeted marketing campaigns.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    demoUrl: '',
    category: 'Data Analytics',
    featured: true,
    tags: ['Data Analysis', 'K-Means', 'Customer Analytics', 'Python'],
    technologies: [
      'Python', 'Pandas', 'Scikit-learn', 'K-Means Clustering', 'Matplotlib', 'Data Visualization'
    ],
    achievements: [
      'Successfully identified distinct customer behavioral patterns using clustering',
      'Applied statistical analysis to extract actionable business insights',
      'Created comprehensive data visualizations for stakeholder communication',
      'Developed targeted marketing recommendations based on segment analysis'
    ],
    businessImpact: 'Customer segmentation insights enabling data-driven marketing strategies and improved customer relationship management',
    learningOutcomes: [
      'Unsupervised learning and clustering algorithm implementation',
      'Customer behavior analysis and market segmentation',
      'Business intelligence and data-driven recommendation development'
    ]
  },
  {
    id: 3,
    title: 'YouTube Spam Detection with NLP',
    description: 'Natural language processing system to detect spam comments across YouTube videos using machine learning text classification. Trained on diverse comment datasets for content moderation.',
    longDescription: 'Developed a comprehensive NLP pipeline for automated spam detection in social media comments. Applied text preprocessing, feature extraction, and machine learning classification to build a content moderation system with practical applications for online platforms.',
    imageUrl: 'images/projects/3.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/4923c2bfa486086834f6663ed5ad97eb',
    demoUrl: '',
    category: 'Natural Language Processing',
    featured: true,
    tags: ['NLP', 'Text Classification', 'Spam Detection', 'Python'],
    technologies: [
      'Python', 'NLTK', 'Scikit-learn', 'Text Processing', 'Feature Engineering', 'Machine Learning'
    ],
    achievements: [
      'Implemented text classification pipeline for automated spam detection',
      'Applied advanced NLP techniques including text preprocessing and feature extraction',
      'Trained models on diverse YouTube comment datasets for robust performance',
      'Developed practical solution for social media content moderation'
    ],
    businessImpact: 'Automated content moderation system with applications to social media platforms and online community management',
    learningOutcomes: [
      'Natural language processing and text classification techniques',
      'Feature engineering for text data and model optimization',
      'Practical application of NLP to real-world content moderation'
    ]
  },
  {
    id: 4,
    title: 'Advanced Autonomous Navigation Platform with Safety Systems',
    description: 'Developed comprehensive autonomous navigation system featuring GPS-SLAM sensor fusion, Ackermann steering constraints, and multi-layered safety systems. Built complete control architecture with custom GUI, waypoint navigation, and real-time obstacle detection.',
    longDescription: 'Engineered sophisticated autonomous navigation platform combining GPS and SLAM for indoor/outdoor operation. Solved critical steering constraint problems by implementing proper Ackermann formula with physical limitations (±36° angles, 0.213m wheelbase). Built comprehensive safety architecture including LiDAR obstacle detection, emergency stop systems, and competing app management. Developed complete control interface with PyQt5 GUI, waypoint-based navigation, and multi-sensor integration.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://github.com/ttkw-git/autonomous-mini-rover-ros2',
    demoUrl: '',
    category: 'Autonomous Systems Engineering',
    featured: true,
    tags: ['ROS2', 'Autonomous Navigation', 'Safety Systems', 'Sensor Fusion'],
    technologies: [
      'ROS2', 'Python', 'PyQt5', 'SLAM', 'GPS Integration', 'LiDAR', 'Nav2', 'Ackermann Steering', 'Multi-sensor Fusion'
    ],
    achievements: [
      'Solved critical steering constraint problems with mathematical Ackermann formula implementation',
      'Built GPS-SLAM sensor fusion system for indoor/outdoor autonomous navigation',
      'Developed multi-layered safety architecture with LiDAR monitoring and emergency stops',
      'Created complete control GUI with manual and autonomous operation modes',
      'Implemented waypoint-based navigation with bearing calculations and tolerance settings',
      'Engineered professional safety manager with global emergency stop capabilities',
      'Integrated multiple sensor systems (GPS, LiDAR, IMU, cameras) with ROS2 architecture'
    ],
    businessImpact: 'Production-ready autonomous navigation platform with professional-grade safety systems, applicable to agricultural robotics, warehouse automation, and autonomous vehicle development',
    learningOutcomes: [
      'Advanced problem-solving in robotics constraints and mathematical modeling',
      'Professional safety system design and multi-layered emergency protocols',
      'ROS2 system architecture with multi-sensor integration and real-time control',
      'Hardware-software integration with physical constraint enforcement'
    ]
  }
];

// Update core competencies to match the 4 projects
export const CORE_COMPETENCIES = [
  "Autonomous Systems Engineering & Mathematical Modeling",
  "Safety System Design & Emergency Protocol Development", 
  "ROS2 Architecture & Multi-Sensor Integration",
  "Computer Vision & Deep Learning (YOLOv5, CNN)",
  "Data Analytics & Customer Intelligence",
  "Professional Software Engineering & Problem-Solving"
];

// Update professional summary to reflect focused expertise areas
export const PROFESSIONAL_SUMMARY = "Advanced technical professional with demonstrated expertise in autonomous systems engineering, safety system design, and complex problem-solving. Currently pursuing MS Computer Science at Georgia Institute of Technology while developing production-grade robotics platforms. Proven track record in identifying and solving critical engineering problems, implementing mathematical models, and building comprehensive safety architectures with real-world applications.";
