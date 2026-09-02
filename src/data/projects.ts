// Flip to true once you have real projects to show — hides the section
// (and its nav link) entirely while false.
export const SHOW_PROJECTS = false;

// TODO: replace with your real Google Form URL once you have one.
export const PLACEHOLDER_FEEDBACK_FORM_URL = 'https://forms.gle/REPLACE_ME_WITH_REAL_GOOGLE_FORM';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  codeUrl?: string;
  demoUrl?: string;
  feedbackFormUrl: string;
}

// TODO: replace these placeholder entries with your real projects.
export const projects: Project[] = [
  {
    title: 'Sample Project One',
    description: 'Placeholder description — replace with a real project, what it does, and why you built it.',
    tech: ['TBD'],
    feedbackFormUrl: PLACEHOLDER_FEEDBACK_FORM_URL,
  },
  {
    title: 'Sample Project Two',
    description: 'Placeholder description — replace with a real project, what it does, and why you built it.',
    tech: ['TBD'],
    feedbackFormUrl: PLACEHOLDER_FEEDBACK_FORM_URL,
  },
  {
    title: 'Sample Project Three',
    description: 'Placeholder description — replace with a real project, what it does, and why you built it.',
    tech: ['TBD'],
    feedbackFormUrl: PLACEHOLDER_FEEDBACK_FORM_URL,
  },
];
