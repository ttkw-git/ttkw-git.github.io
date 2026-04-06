import { Github, Linkedin } from 'lucide-react';
import { Project, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
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

// COMBINED AUTONOMOUS ROBOTICS PROJECT
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
    title: 'Deep Learning Shoe Brand Classifier',
    description: 'Production-ready CNN classifier achieving 82% validation accuracy using VGG16 transfer learning. Built for automated social media marketing analysis with comprehensive model evaluation, confusion matrix analysis, and successful external image validation testing.',
    metrics: '82% Validation Accuracy • VGG16 Transfer Learning • 15K+ Training Images • External Test Validation',
    technicalDetails: 'Comparative analysis of CNN architectures (custom CNN vs VGG16 vs ResNet50). VGG16 selected for optimal accuracy/speed trade-off with faster training convergence. Implementation includes data augmentation pipelines, comprehensive evaluation metrics, and successful classification of 5/5 external test images demonstrating model robustness.',
    businessValue: 'Enables automated brand monitoring on social platforms, reducing manual classification overhead by estimated 80% for marketing analytics workflows. Demonstrates production ML deployment capabilities and business-focused AI application development.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    tags: ['TensorFlow', 'Transfer Learning', 'Computer Vision', 'Production ML'],
  },
  {
    id: 3,
    title: 'Customer Segmentation Analytics Pipeline',
    description: 'Scalable unsupervised learning pipeline using K-means clustering to identify distinct market segments from mall customer data. Delivered actionable business insights for targeted marketing strategies with quantified customer behavior patterns and automated reporting capabilities.',
    metrics: '4 Distinct Segments Identified • 95% Variance Explained • Scalable Data Pipeline',
    technicalDetails: 'End-to-end data science pipeline featuring automated preprocessing, optimal cluster determination via elbow method and silhouette analysis, and comprehensive segmentation validation. Includes automated visualization generation and business-readable insights extraction for marketing team consumption.',
    businessValue: 'Provided quantified customer segmentation enabling targeted marketing campaigns with measurably improved conversion rates. Demonstrates data-driven business decision support and automated analytics pipeline development.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    tags: ['Scikit-learn', 'K-Means Clustering', 'Data Pipeline', 'Business Intelligence'],
  },
];

// ENHANCED ABOUT TEXT - Professional positioning
export const ABOUT_TEXT_1 = "Currently pursuing MS Computer Science at Georgia Tech while working as AI Trainer at Outlier. My research and development focus spans autonomous robotics systems, sensor fusion architectures, and safety-critical system design, bridging academic research with practical engineering implementation.";

export const ABOUT_TEXT_2 = "Experience includes agricultural robotics research at University of Winnipeg, Business Technology Analyst role at Hang Seng Bank, and hands-on autonomous systems development. Passionate about developing robust, safety-critical systems that operate reliably in real-world environments while maintaining engineering rigor and technical honesty.";
