export const demoRoles = [
  {
    slug: 'admin',
    label: 'Admin',
    description: 'Platform admin and full festival management access.',
  },
  {
    slug: 'organiser',
    label: 'Organiser',
    description: 'Festival settings and operational planning access.',
  },
  {
    slug: 'editor',
    label: 'Editor',
    description: 'Lineup, content, and media editing access.',
  },
  {
    slug: 'vendor',
    label: 'Vendor',
    description: 'Vendor-facing experience and data access.',
  },
  {
    slug: 'user',
    label: 'User',
    description: 'Regular attendee and profile-based experience.',
  },
] as const;

export type DemoRoleSlug = (typeof demoRoles)[number]['slug'];
