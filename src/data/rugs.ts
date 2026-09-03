import type { ImageMetadata } from 'astro';
import heartImage from '../assets/rugs/heart.jpeg';
import bullsImage from '../assets/rugs/bulls.jpeg';

export interface Rug {
  title: string;
  description?: string;
  image: ImageMetadata;
}

// Add a new rug by dropping the photo into src/assets/rugs/, importing it
// above, and adding an entry here.
export const rugs: Rug[] = [
  {
    title: 'Chicago Bulls Rug',
    image: bullsImage,
  },
  {
    title: 'Leaf Rug',
    image: heartImage,
  },
];
