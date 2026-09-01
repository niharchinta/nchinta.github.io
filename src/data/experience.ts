export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dates: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Schlumberger',
    role: 'Release Engineer',
    location: 'Houston, USA',
    dates: 'Jun 2024 - Present',
    bullets: [
      'Led the development of a scalable Generative AI platform using Kubernetes-based microservice architecture, reducing deployment complexity and enhancing platform reliability with Terraform and Prometheus',
      'Engineered specialized microservices to integrate vector databases, improving data retrieval performance and enabling faster insights generation for internal platform users',
      'Implemented automated CI/CD pipelines with Kubernetes and ArgoCD on Microsoft Azure, cutting delivery times and enabling rapid, reliable deployments',
    ],
  },
  {
    company: 'Schlumberger',
    role: 'DevOps Engineer',
    location: 'Pune, India',
    dates: 'Jul 2018 - Aug 2021',
    bullets: [
      'Developed and deployed robust microservices using Docker and Kubernetes to automate malware scanning, enhancing data security and reducing manual intervention',
      'Automated the creation and management of Change Management Requests (CMRs) for production environments, accelerating issue resolution and reducing administrative overhead',
      'Led the migration of thousands of libraries from Nexus to Azure Artifacts, improving development workflows and manageability',
      'Architected and implemented a comprehensive Variable Management strategy, improving configuration consistency and reducing deployment errors across Data Ecosystem services',
      'Maintained and optimized Kubernetes-based infrastructure using Terraform and Azure DevOps, automating resource provisioning and shortening environment setup times',
      'Promoted and strengthened DevOps culture within the team, receiving a Certificate of Appreciation for driving collaboration, automation adoption, and continuous improvement',
    ],
  },
  {
    company: 'Schlumberger',
    role: 'Software Engineering Intern',
    location: 'Pune, India',
    dates: 'May 2017 - Aug 2017',
    bullets: [
      'Automated data ingestion by developing microservices for transferring data from WellDatabase to the Exploration and Production Data Lake, streamlining synchronization processes',
      'Improved code quality and maintainability through meticulous refactoring and comprehensive unit testing, achieving 98% code coverage',
      'Collaborated with an agile team to design and deploy microservices on GCP using Docker, REST APIs, and Jenkins',
    ],
  },
  {
    company: 'Nibble Matrix',
    role: 'Front End Developer Intern',
    location: 'Hyderabad, India',
    dates: 'May 2016 - Aug 2016',
    bullets: [
      'Assisted in developing a dynamic, microservice-driven e-commerce platform using Node.js, Express.js, Angular, and MongoDB, facilitating rapid project deployment and customization',
      'Collaborated efficiently within a team utilizing Git-based version control workflows, improving code maintainability and project management',
    ],
  },
];
