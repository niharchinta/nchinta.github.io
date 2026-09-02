export interface Print {
  title: string;
  description?: string;
  file: string; // path under public/models/
}

// Add a new print by dropping the .stl into public/models/ and adding an
// entry here with a title.
export const prints: Print[] = [
  {
    title: 'Keychain',
    description: 'A squirrel keychain.',
    file: '/models/keychain.stl',
  },
];
