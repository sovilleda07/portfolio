export type ContactLink = {
  id: 'email' | 'github' | 'linkedin';
  label: string;
  href: string;
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    id: 'email',
    label: 'contact.email',
    href: 'mailto:sovilleda07@gmail.com',
  },
  {
    id: 'github',
    label: 'contact.github',
    href: 'https://github.com/sovilleda07',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'contact.linkedin',
    href: 'https://www.linkedin.com/in/soniavilleda',
    external: true,
  },
];
