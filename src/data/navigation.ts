export const NAV_ITEMS = [
  { labelKey: 'nav.home', id: 'home' },
  { labelKey: 'nav.about', id: 'about' },
  { labelKey: 'nav.skills', id: 'skills' },
  { labelKey: 'nav.projects', id: 'projects' },
  { labelKey: 'nav.contact', id: 'contact' },
] as const;

export type NavItem = (typeof NAV_ITEMS)[number];
export type SectionId = NavItem['id'];
