import { createContext, useContext, useState, ReactNode } from 'react';

interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  type: string;
  experience: string;
  postedDate: string;
  totalCandidates: number;
  status: "Active" | "Closed";
}

interface JobContextType {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  addJob: (job: Omit<Job, 'id' | 'postedDate' | 'totalCandidates' | 'status'>) => void;
  updateJob: (job: Job) => void;
  deleteJob: (jobId: string) => void;
  getJob: (jobId: string) => Job | undefined;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      title: "Senior React Developer",
      description: "We are looking for an experienced React developer to join our team. The ideal candidate will have strong expertise in React, TypeScript, and modern frontend development practices.",
      requirements: [
        "5+ years React experience",
        "Strong TypeScript knowledge",
        "Experience with state management (Redux, Context)",
        "Experience with testing frameworks",
        "Excellent communication skills"
      ],
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      experience: "5+ years",
      postedDate: "2024-03-20",
      totalCandidates: 12,
      status: "Active"
    }
  ]);

  const addJob = (jobData: Omit<Job, 'id' | 'postedDate' | 'totalCandidates' | 'status'>) => {
    const newJob = {
      id: Date.now().toString(),
      ...jobData,
      postedDate: new Date().toISOString().split('T')[0],
      totalCandidates: 0,
      status: "Active" as const,
    };
    setJobs(prevJobs => [newJob, ...prevJobs]);
  };

  const updateJob = (updatedJob: Job) => {
    setJobs(prevJobs => prevJobs.map(job => 
      job.id === updatedJob.id ? updatedJob : job
    ));
  };

  const deleteJob = (jobId: string) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  const getJob = (jobId: string) => {
    return jobs.find(job => job.id === jobId);
  };

  return (
    <JobContext.Provider value={{ jobs, setJobs, addJob, updateJob, deleteJob, getJob }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
}
