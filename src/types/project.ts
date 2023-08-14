export const PROJECT_CATEGORY = ['UX Design', 'Digital Fabrication', 'BX Design'] as const;

export type TProjectCategories = (typeof PROJECT_CATEGORY)[number];

export const CATEGORY_PATH = {
  'UX Design': 'ux-design',
  'Digital Fabrication': 'digital-fabrication',
  'BX Design': 'bx-design',
} as const;
