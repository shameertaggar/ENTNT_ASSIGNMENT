import { useNavigate } from 'react-router-dom';

interface Job {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  type: string; // "Full-time", "Part-time", etc.
  experience: string;
  postedDate: string;
  totalCandidates: number;
  status: "Active" | "Closed";
}

interface JobListingProps {
  job: Job;
  onEdit: (job: Job) => void;
  onDelete: (jobId: string) => void;
  onViewCandidates: (jobId: string) => void;
  onCreateAssessment: (jobId: string) => void;
}

export default function JobListing({ job, onEdit, onDelete, onViewCandidates, onCreateAssessment }: JobListingProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {job.title}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {job.location}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {job.type}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(job)}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
          <button
            onClick={() => onDelete(job.id)}
            className="text-gray-400 hover:text-red-500"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {job.description}
      </p>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Requirements:</h4>
        <ul className="mt-2 list-disc list-inside space-y-1">
          {job.requirements.map((req, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-300">
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onViewCandidates(job.id)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-rose-600 hover:bg-rose-700"
          >
            View Candidates ({job.totalCandidates})
          </button>
          <button
            onClick={() => onCreateAssessment(job.id)}
            className="inline-flex items-center px-4 py-2 border border-rose-600 text-sm font-medium rounded-md text-rose-600 hover:bg-rose-50"
          >
            Create Assessment
          </button>
          <button
            onClick={() => navigate(`/dashboard/jobs/${job.id}/view-assessment`)}
            className="inline-flex items-center px-4 py-2 border border-rose-600 text-sm font-medium rounded-md text-rose-600 hover:bg-rose-50"
          >
            View Assessment
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Posted {job.postedDate}
          </span>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${job.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
            }`}>
            {job.status}
          </span>
        </div>
      </div>
    </div>
  );
}