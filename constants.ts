import { Github, Linkedin } from 'lucide-react';
import { Project, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tony-tk-wong/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ttkw-git',
    icon: Github,
  },
];

// ACCURATELY SCOPED PROJECTS
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Autonomous Robotics: From Agricultural Research to Navigation Systems',
    description: 'Comprehensive autonomous robotics development spanning agricultural research collaboration at University of Winnipeg to advanced navigation system implementation. Features GPS integration, multi-sensor EKF fusion, Ackermann steering constraints, and safety-critical architecture design with PyQt5 control interface.',
    metrics: '30 Hz EKF Fusion Rate • ±36° Ackermann Steering • Multi-Sensor Integration • Safety Architecture',
    technicalDetails: 'Research-to-implementation progression: Agricultural robotics research collaboration focused on field navigation challenges, evolved into comprehensive autonomous navigation system. EKF sensor fusion at ~30 Hz (wheel odometry: 50.5 Hz, IMU: 100 Hz, GPS: 1 Hz bottleneck). Thread-safe global safety manager with estimated <200ms LiDAR-triggered emergency stops. Mathematical solution to Ackermann steering constraints (±36° angles, 0.213m wheelbase).',
    limitations: 'GPS accuracy >5m (consumer-grade, non-RTK). Current testing limited to controlled indoor environments (<0.1km total distance). Emergency stop response benchmarking in progress. Transition from research concepts to hardware implementation ongoing.',
    businessValue: 'Demonstrates end-to-end capability from academic research through practical implementation. Applicable to autonomous vehicle development, agricultural automation, warehouse robotics, and any safety-critical autonomous system requiring precise navigation and emergency protocols.',
    imageUrl: 'images/projects/data_rover.jpg',
    projectUrl: 'https://github.com/ttkw-git/autonomous-mini-rover-ros2',
    tags: ['ROS2', 'Agricultural Robotics', 'EKF Sensor Fusion', 'Safety Systems', 'Research-to-Implementation'],
    featured: true,
  },
  {
    id: 2,
    title: 'EAGL-I: Agricultural Computer Vision Research',
    description: 'Research contribution to automated agricultural labeling systems. Implemented YOLO machine learning achieving 90% accuracy in plant segmentation tasks, addressing lighting and bounding box accuracy challenges. Presented findings at NAPPN 2024 conference.',
    metrics: '90% Plant Segmentation Accuracy • Conference Presentation • YOLO Implementation • Research Collaboration',
    technicalDetails: 'Contributed to Embedded Automated Generator of Labeled Images (EAGL-I) system research at University of Winnipeg TerraByte Research Lab. Solved critical lighting adaptation challenges for agricultural computer vision applications. Implemented YOLO deep learning model achieving 90% accuracy in plant segmentation. Developed automated data pipelines resulting in 50% improvement in data collection reliability.',
    businessValue: 'Advances automated crop monitoring and precision agriculture capabilities. Research findings presented at North American Plant Phenotyping Network 2024 conference, contributing to agricultural AI development and automated farming system advancement.',
    imageUrl: 'images/projects/3.jpg',
    projectUrl: 'https://github.com/ttkw-git/eagl-i-research',
    tags: ['Computer Vision', 'YOLO', 'Agricultural AI', 'Conference Presentation', 'Research Collaboration'],
  },
  {
    id: 3,
    title: 'Branch Data Systems: Banking Operations Optimization',
    description: 'Data processing and business intelligence improvements for assigned branch portfolio at Hang Seng Bank. Built SQL-based reporting systems reducing errors by 25%, automated data processing cutting manual work by 40%, and improved data reliability by 50% through systematic automation.',
    metrics: '25% Error Reduction • 40% Process Automation • 50% Reliability Improvement • Portfolio Management',
    technicalDetails: 'Developed SQL-based reporting systems for branch-level sales data within assigned portfolio operations. Built automated data processing workflows reducing manual handling overhead. Implemented data validation and quality controls improving reliability. Contributed to broader Knowledge Management System implementation using Agile methodology.',
    businessValue: 'Delivered measurable operational improvements in branch banking operations. Reduced manual data processing overhead while maintaining data accuracy and regulatory compliance. Enabled more efficient portfolio management and faster decision-making for branch operations.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://github.com/ttkw-git/banking-data-portfolio',
    tags: ['SQL', 'Data Processing', 'Business Intelligence', 'Branch Operations', 'Process Automation'],
  },
  {
    id: 4,
    title: 'Deep Learning Shoe Brand Classifier',
    description: 'Production-ready CNN classifier achieving 82% validation accuracy using VGG16 transfer learning. Built for automated social media marketing analysis with comprehensive model evaluation, confusion matrix analysis, and successful external image validation testing.',
    metrics: '82% Validation Accuracy • VGG16 Transfer Learning • 15K+ Training Images • External Test Validation',
    technicalDetails: 'Comparative analysis of CNN architectures (custom CNN vs VGG16 vs ResNet50). VGG16 selected for optimal accuracy/speed trade-off with faster training convergence. Implementation includes data augmentation pipelines, comprehensive evaluation metrics, and successful classification of 5/5 external test images demonstrating model robustness.',
    businessValue: 'Enables automated brand monitoring on social platforms, reducing manual classification overhead by estimated 80% for marketing analytics workflows. Demonstrates production ML deployment capabilities and business-focused AI application development.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    tags: ['TensorFlow', 'Transfer Learning', 'Computer Vision', 'Production ML'],
  },
];

// ACCURATELY POSITIONED ABOUT TEXT
export const ABOUT_TEXT_1 = "Currently pursuing MS Computer Science at Georgia Tech while working as AI Trainer at Outlier. My technical focus spans autonomous robotics systems, computer vision for agricultural applications, and data systems optimization. Active research collaborator with conference presentation at NAPPN 2024.";

export const ABOUT_TEXT_2 = "Experience includes 8+ years in banking data systems at Hang Seng Bank, agricultural robotics research collaboration at University of Winnipeg TerraByte Lab, and hands-on autonomous systems development. Combining academic research contributions with practical system implementation and enterprise data operations experience.";
