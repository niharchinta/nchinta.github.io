export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  dates: string;
  gpa?: string;
  coursework?: string[];
}

export const education: EducationEntry[] = [
  {
    school: 'University of Massachusetts Amherst',
    location: 'USA',
    degree: "Master's in Computer Science",
    dates: 'Feb 2023 - May 2024',
    gpa: '3.8',
    coursework: [
      'Computer and Network Security',
      'Secured Distributed Systems',
      'Reinforcement Learning',
      'Machine Learning',
      'Distributed and Operating Systems',
    ],
  },
  {
    school: 'Mahindra École Centrale',
    location: 'Hyderabad, India',
    degree: "Bachelor's in Computer Science",
    dates: '2014 - 2018',
    gpa: '9.35/10',
  },
];
