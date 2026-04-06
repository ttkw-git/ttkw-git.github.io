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

// PROFESSIONALLY HONEST PROJECT DESCRIPTIONS
// Using actual measured data and technical constraints
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Advanced Autonomous Navigation Platform with Safety Systems',
    description: 'Comprehensive autonomous navigation system featuring GPS integration, Ackermann steering constraints, and multi-layered safety architecture. Engineered complete PyQt5 control interface with EKF sensor fusion, waypoint navigation, and real-time safety monitoring. Currently optimized for indoor/controlled environment testing.',
    metrics: '30 Hz EKF Fusion Rate • ±36° Ackermann Steering • Multi-Layered Safety • ROS2 Architecture',
    technicalDetails: 'EKF sensor fusion at ~30 Hz (wheel odometry: 50.5 Hz, IMU: 100 Hz, GPS: 1 Hz). Thread-safe global safety manager with estimated <200ms LiDAR-triggered emergency stops. Solved complex Ackermann steering constraints with 0.213m wheelbase mathematical implementation.',
    limitations: 'GPS accuracy >5m (consumer-grade, non-RTK). Testing completed indoors (<0.1km total). Emergency stop benchmarking in progress.',
    imageUrl: 'images/projects/data_rover.jpg',
    projectUrl: 'https://github.com/ttkw-git/autonomous-mini-rover-ros2',
    tags: ['ROS2', 'EKF Sensor Fusion', 'Safety Systems', 'Ackermann Steering', 'PyQt5'],
    featured: true,
  },
  {
    id: 2,
    title: 'Agricultural Robotics Research Platform',
    description: 'Research-focused autonomous systems development for agricultural applications at University of Winnipeg. Contributed to multi-sensor integration strategies for field robotics with emphasis on robust outdoor operation and precision navigation challenges in unstructured agricultural environments.',
    metrics: 'Multi-Sensor Integration • Outdoor Navigation Research • Agricultural Applications',
    technicalDetails: 'Collaborative research on autonomous systems for agricultural use cases. Focus on sensor integration challenges, environmental robustness, and navigation in GPS-degraded outdoor environments.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://github.com/ttkw-git',
    tags: ['Agricultural Robotics', 'Research Collaboration', 'Sensor Integration', 'Field Robotics'],
  },
  {
    id: 3,
    title: 'Deep Learning Shoe Brand Classifier',
    description: 'Production-ready CNN classifier achieving 82% validation accuracy using VGG16 transfer learning. Built for automated social media marketing analysis with comprehensive model evaluation, confusion matrix analysis, and real-world external image validation testing.',
    metrics: '82% Validation Accuracy • VGG16 Transfer Learning • 15K+ Training Images • External Test Validation',
    technicalDetails: 'Comparative analysis of CNN architectures (custom CNN vs VGG16 vs ResNet50). VGG16 selected for optimal accuracy/speed trade-off. Includes data augmentation, comprehensive evaluation metrics, and successful classification of 5/5 external test images.',
    businessValue: 'Enables automated brand monitoring on social platforms, reducing manual classification overhead by estimated 80% for marketing analytics workflows.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    tags: ['TensorFlow', 'Transfer Learning', 'Computer Vision', 'Model Evaluation'],
  },
];

// ENHANCED ABOUT TEXT - Professional and honest positioning
export const ABOUT_TEXT_1 = "Currently pursuing MS Computer Science at Georgia Tech while working as AI Trainer at Outlier. My research focuses on autonomous robotics systems, sensor fusion architectures, and safety-critical system design. Experienced in bridging theoretical research with practical engineering constraints and real-world deployment challenges.";

export const ABOUT_TEXT_2 = "Previous experience includes Business Technology Analyst at Hang Seng Bank and agricultural robotics research at University of Winnipeg. Passionate about developing robust autonomous systems that operate safely in complex, real-world environments while maintaining engineering rigor and technical honesty in project development and evaluation.";
