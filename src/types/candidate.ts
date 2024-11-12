export type CandidateStatus = 'Under Review' | 'Rejected' | 'Shortlisted' | 'Interview Scheduled' | 'Hired';

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  appliedDate: string;
  status: CandidateStatus;
  skills: string[];
  experience: string;
  matchScore?: number;
}