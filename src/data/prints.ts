import type { ImageMetadata } from 'astro';
import keychainImage from '../assets/prints/keychain.jpeg';

export interface Print {
  title: string;
  description?: string;
  file: string; // path under public/models/
  image?: ImageMetadata; // imported from src/assets/prints/
}

// Add a new print by dropping the .stl into public/models/, the photo into
// src/assets/prints/, importing the photo above, and adding an entry here.
export const prints: Print[] = [
  {
    title: 'Keychain',
    description: 'A squirrel keychain.',
    file: '/models/keychain.stl',
    image: keychainImage,
  },
];
