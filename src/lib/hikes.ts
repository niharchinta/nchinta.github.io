import type { ImageMetadata } from 'astro';

export interface Hike {
  id: string;
  title: string;
  location: string;
  date: string;
  elevation: string;
  distance: string;
  difficulty: string;
  description: string;
  photos: ImageMetadata[];
}

// Raw text of every src/hikes/<id>/description.txt, keyed by its glob path.
const descriptionModules = import.meta.glob('/src/hikes/*/description.txt', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Every photo dropped directly into a src/hikes/<id>/ folder, keyed by its
// glob path. Astro resolves these to optimized ImageMetadata automatically.
const photoModules = import.meta.glob('/src/hikes/*/*.{jpg,jpeg,png,webp}', {
  eager: true,
}) as Record<string, { default: ImageMetadata }>;

function hikeIdFromPath(path: string): string {
  const match = path.match(/\/src\/hikes\/([^/]+)\//);
  if (!match) throw new Error(`Could not extract hike id from path: ${path}`);
  return match[1];
}

function parseDescription(raw: string): Record<string, string> {
  const data: Record<string, string> = {};
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;
    const key = trimmed.slice(0, colonIndex).trim();
    const value = trimmed.slice(colonIndex + 1).trim();
    if (key) data[key] = value;
  }
  return data;
}

export function getHikes(): Hike[] {
  const hikesById = new Map<string, Hike>();

  for (const [path, raw] of Object.entries(descriptionModules)) {
    const id = hikeIdFromPath(path);
    const info = parseDescription(raw);
    hikesById.set(id, {
      id,
      title: info.title ?? id.replace(/_/g, ' '),
      location: info.location ?? 'Unknown location',
      date: info.date ?? '',
      elevation: info.elevation ?? 'Unknown',
      distance: info.distance ?? 'Unknown',
      difficulty: info.difficulty ?? 'Unknown',
      description: info.description ?? `Photos from ${id}.`,
      photos: [],
    });
  }

  const photosById = new Map<string, { filename: string; image: ImageMetadata }[]>();
  for (const [path, mod] of Object.entries(photoModules)) {
    const id = hikeIdFromPath(path);
    const filename = path.split('/').pop() ?? path;
    if (!photosById.has(id)) photosById.set(id, []);
    photosById.get(id)!.push({ filename, image: mod.default });
  }

  for (const [id, photos] of photosById.entries()) {
    photos.sort((a, b) => a.filename.localeCompare(b.filename));
    if (!hikesById.has(id)) {
      // A photo folder with no description.txt still gets a hike entry.
      hikesById.set(id, {
        id,
        title: id.replace(/_/g, ' '),
        location: 'Unknown location',
        date: '',
        elevation: 'Unknown',
        distance: 'Unknown',
        difficulty: 'Unknown',
        description: `Photos from ${id}.`,
        photos: [],
      });
    }
    hikesById.get(id)!.photos = photos.map((p) => p.image);
  }

  return Array.from(hikesById.values()).sort((a, b) => b.date.localeCompare(a.date));
}
