export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Cloud & Containerization',
    skills: ['Kubernetes', 'Docker', 'Helm', 'Microsoft Azure', 'GCP', 'AWS', 'OCI', 'Terraform'],
  },
  {
    category: 'Automation & DevOps Tools',
    skills: ['ArgoCD', 'Jenkins', 'Azure DevOps', 'Prometheus', 'Grafana', 'SonarQube', 'Whitesource'],
  },
  {
    category: 'Programming & Scripting Languages',
    skills: ['Python', 'Bash', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Certifications & Awards',
    skills: [
      'Blueprint Commitment Award (Schlumberger)',
      'Certified Kubernetes Application Developer (CKAD, CNCF)',
    ],
  },
];
