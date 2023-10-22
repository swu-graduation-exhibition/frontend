export interface DesingerInfo {
  designer_id: number;
  name_ko: string;
  field: string;
  profile: string;
}

export interface DesignerDetailInfo {
  designerId: number;
  profile: string;
  koreanName: string;
  englishName: string;
  desc: string;
  tel?: string;
  email?: string;
  instagram?: string;
  behance: string;
  projectList: ProjectInfo[];
}

export interface ProjectInfo {
  projectId: number;
  photo: string;
  title: string;
  type: number;
  members: string;
}
