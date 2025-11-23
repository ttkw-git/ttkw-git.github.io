import { Github, Linkedin } from 'lucide-react';
import { Project, SocialLink, NavItem } from './types.ts';

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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Shoes Image Classification',
    description: 'A machine learning model designed to classify shoe images into categories such as Adidas, Converse, and Nike with high accuracy.',
    imageUrl: 'images/projects/1.jpg', 
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    tags: ['Machine Learning', 'Python', 'Computer Vision'],
  },
  {
    id: 2,
    title: 'Customer Segmentation',
    description: 'Unsupervised learning project analyzing mall customer data to identify distinct market segments for targeted marketing strategies.',
    imageUrl: 'images/projects/2.jpg', 
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    tags: ['Data Analysis', 'Clustering', 'K-Means'],
  },
  {
    id: 3,
    title: 'Youtube Spam Detection',
    description: 'NLP project detecting spam comments across YouTube videos. Trained on a dataset of 5 videos with various comment classes.',
    imageUrl: 'images/projects/3.jpg', 
    projectUrl: 'https://gist.github.com/ttkw-git/4923c2bfa486086834f6663ed5ad97eb',
    tags: ['NLP', 'Spam Detection', 'Python'],
  },
];

export const ABOUT_TEXT_1 = "Welcome to my portfolio! I am a passionate developer with a keen interest in creating impactful solutions. My journey involves a mix of creativity, problem-solving, and dedication to learning new technologies. I am always excited to work on challenging projects and collaborate with like-minded individuals.";

export const ABOUT_TEXT_2 = "When I'm not coding, you can find me exploring new hobbies, engaging in community activities, or diving into a good book.";