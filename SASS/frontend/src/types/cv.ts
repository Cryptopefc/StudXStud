export interface CvEducation {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
}

export interface CvExperience {
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  summary: string;
  accomplishments?: string[];
}

export interface CvProfile {
  fullName: string;
  utasEmail: string;
  phone: string;
  major: string;
  objective: string;
  education: CvEducation[];
  experience: CvExperience[];
  skills: string[];
  languages: string[];
  linkedIn?: string;
}
