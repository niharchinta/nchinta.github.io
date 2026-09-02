export interface Hobby {
  name: string;
  description: string;
  href?: string;
}

// Extensible list — to flesh out a hobby beyond "Coming soon", give it a
// real description and (optionally) an href to a dedicated page/gallery.
export const hobbies: Hobby[] = [
  {
    name: 'Hikes & Trips',
    description: 'Photo galleries from recent hikes and trips.',
    href: '/hikes',
  },
  {
    name: '3D Printing',
    description: 'Things I\'ve printed.',
    href: '/3d-printing',
  },
  {
    name: 'Rug Tufting',
    description: 'Coming soon.',
  },
];
