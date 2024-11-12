import { Candidate, CandidateStatus } from "../types/candidate";

interface CandidateListProps {
  jobId: string;
  candidates: Candidate[];
  onViewDetails: (candidateId: string) => void;
  onStatusChange: (candidateId: string, status: string) => void;
}

const statusColors: Record<CandidateStatus, string> = {
  'Under Review': 'bg-yellow-100 text-yellow-800',
  'Shortlisted': 'bg-blue-100 text-blue-800',
  'Interview Scheduled': 'bg-purple-100 text-purple-800',
  'Rejected': 'bg-red-100 text-red-800',
  'Hired': 'bg-green-100 text-green-800',
};

export default function CandidateList({ jobId, candidates, onViewDetails, onStatusChange }: CandidateListProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Candidates
        </h3>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {candidates.map((candidate) => (
          <div 
            key={candidate.id}
            className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">
                    {candidate.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {candidate.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {candidate.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {candidate.matchScore && (
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Match: {candidate.matchScore}%
                  </span>
                )}
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[candidate.status]}`}>
                  {candidate.status}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onViewDetails(candidate.id)}
                  className="text-sm text-rose-600 hover:text-rose-500"
                >
                  View Details
                </button>
                <a
                  href={candidate.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  View Resume
                </a>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Applied {candidate.appliedDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 