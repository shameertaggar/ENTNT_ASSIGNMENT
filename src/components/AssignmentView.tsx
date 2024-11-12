import { useAssignments } from '../context/AssignmentContext';

interface AssignmentViewProps {
  jobId: string;
}

export default function AssignmentView({ jobId }: AssignmentViewProps) {
  const { getAssignmentByJobId, assignments } = useAssignments();
  const assignment = getAssignmentByJobId(jobId);

  if (!assignment) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No assessment created yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-800">
        <h3 className="text-lg font-semibold mb-4">Assessment Questions</h3>
        <div className="space-y-6">
          {assignment.questions.map((q, index) => (
            <div key={q.id} className="p-4 border rounded-lg dark:border-gray-700">
              <p className="font-medium text-gray-900 dark:text-white">
                {index + 1}. {q.question}
              </p>
              <ul className="mt-3 space-y-2">
                {q.options.map((option, optIndex) => (
                  <li 
                    key={optIndex} 
                    className={`flex items-center gap-2 ${
                      optIndex === q.correctAnswer 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <span>{optIndex === q.correctAnswer ? '✓' : '○'}</span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 