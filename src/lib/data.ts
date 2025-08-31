import { BookOpen, BrainCircuit, Camera, Cloud, Cpu, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const interests: { name: string; icon: LucideIcon }[] = [
  { name: 'NLP', icon: BrainCircuit },
  { name: 'LLM', icon: BookOpen },
  { name: 'CV', icon: Camera },
  { name: 'GenAI', icon: Sparkles },
  { name: 'System', icon: Cpu },
  { name: 'Cloud', icon: Cloud },
];

export const projectFilters = ['All', 'LLM', 'CV', 'NLP', 'DevOps', 'Other'];

export const projects = [
  {
    id: 1,
    title: 'Traffic Sign Recognition',
    description: 'A Deep Learning CNN model for classifying traffic signs with high accuracy. Explored various architectures and data augmentation techniques.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'CV'],
    githubUrl: 'https://github.com/khoalearningcode',
  },
  {
    id: 2,
    title: 'AI-Powered Chatbot',
    description: 'Developed a conversational AI using Retrieval-Augmented Generation (RAG) to provide context-aware responses on custom documents.',
    technologies: ['Python', 'LangChain', 'LLM', 'VectorDB'],
    githubUrl: 'https://github.com/khoalearningcode',
  },
  {
    id: 3,
    title: 'Cloud DevOps Pipeline',
    description: 'Designed and implemented a CI/CD pipeline for a web application using AWS services, automating testing and deployment.',
    technologies: ['AWS', 'Docker', 'Jenkins', 'Terraform', 'DevOps'],
    githubUrl: 'https://github.com/khoalearningcode',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'This very website! Built with Next.js and Tailwind CSS, deployed with Vercel, showcasing my skills and projects in a futuristic theme.',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/khoalearningcode',
  },
  {
    id: 5,
    title: 'Generative Art System',
    description: 'An experimental project using Generative Adversarial Networks (GANs) to create unique, abstract digital art pieces.',
    technologies: ['Python', 'PyTorch', 'GAN', 'Other'],
    githubUrl: 'https://github.com/khoalearningcode',
  },
  {
    id: 6,
    title: 'System Performance Monitor',
    description: 'A low-level system monitoring tool written in C++ to track CPU, memory, and disk usage with real-time updates.',
    technologies: ['C++', 'System', 'Linux', 'Other'],
    githubUrl: 'https://github.com/khoalearningcode',
  },
];
