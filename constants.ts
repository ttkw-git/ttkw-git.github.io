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
    title: 'Autonomous Agricultural Rover Development',
    description: 'Ongoing development of autonomous navigation system using ROS2 for agricultural applications. Building practical skills in robotics programming, sensor integration, and precision agriculture technology.',
    longDescription: 'Active development of autonomous mini rover using ROS2 and Python for agricultural technology research at University of Winnipeg. Project focuses on autonomous navigation, sensor integration, and data collection systems applicable to precision agriculture and field robotics. Work includes Docker containerization, sensor fusion, and real-time control systems.',
    imageUrl: 'images/projects/data_rover.jpg',
    projectUrl: 'https://github.com/ttkw-git/autonomous-mini-rover-ros2',
    demoUrl: '',
    category: 'Agricultural Robotics',
    featured: true,
    tags: ['ROS2', 'Python', 'Agricultural Technology', 'Autonomous Systems'],
    technologies: [
      'ROS2', 'Python', 'Docker', 'Robotics Programming', 'Sensor Integration', 'Autonomous Navigation'
    ],
    achievements: [
      'Developing autonomous navigation system using ROS2 framework',
      'Building sensor integration capabilities for agricultural data collection',
      'Implementing Docker containerization for consistent development environment',
      'Contributing to agricultural technology research at University of Winnipeg'
    ],
    businessImpact: 'Autonomous systems research with direct applications to precision agriculture and field robotics technology',
    learningOutcomes: [
      'Advanced robotics programming with ROS2 in agricultural contexts',
      'Autonomous navigation and sensor fusion system development',
      'Agricultural technology requirements and practical implementation challenges'
    ]
  }
];

// Update core competencies to match the 4 projects
export const CORE_COMPETENCIES = [
  "Computer Vision & Deep Learning",
  "Data Analytics & Customer Intelligence", 
  "Natural Language Processing",
  "Agricultural Robotics & Autonomous Systems",
  "Machine Learning Model Development",
  "Research & Technical Problem-Solving"
];

// Update professional summary to reflect focused expertise areas
export const PROFESSIONAL_SUMMARY = "Experienced technical professional with demonstrated expertise in machine learning, computer vision, and data analytics. Currently pursuing MS Computer Science at Georgia Institute of Technology while developing autonomous systems for agricultural applications. Proven track record in building practical AI solutions with verifiable implementations and measurable business impact.";
