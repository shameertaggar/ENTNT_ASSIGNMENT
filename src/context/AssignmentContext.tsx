import { createContext, useContext, useState, ReactNode } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface Assignment {
  id: string;
  jobId: string;
  questions: Question[];
  createdAt: string;
}

interface AssignmentContextType {
  assignments: Assignment[];
  addAssignment: (jobId: string, questions: Question[]) => void;
  getAssignmentByJobId: (jobId: string) => Assignment | undefined;
}

const AssignmentContext = createContext<AssignmentContextType | undefined>(undefined);

export function AssignmentProvider({ children }: { children: ReactNode }) {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: "1",
      jobId: "1", // This matches the demo job ID from JobContext
      questions: [
        {
          id: 1,
          question: "What is the primary purpose of React's useEffect hook?",
          options: [
            "To handle side effects in functional components",
            "To create new React components",
            "To style React components",
            "To handle form submissions"
          ],
          correctAnswer: 0
        },
        {
          id: 2,
          question: "Which of the following is NOT a React Hook?",
          options: [
            "useState",
            "useEffect",
            "useComponent",
            "useContext"
          ],
          correctAnswer: 2
        },
      ],
      createdAt: "2024-03-20T10:00:00.000Z"
    }
  ]);

  const addAssignment = (jobId: string, questions: Question[]) => {
    const newAssignment: Assignment = {
      id: Date.now().toString(),
      jobId,
      questions,
      createdAt: new Date().toISOString(),
    };
    
    setAssignments(prev => {
      // Remove any existing assignment for this jobId
      const filteredAssignments = prev.filter(a => a.jobId !== jobId);
      // Add the new assignment
      return [...filteredAssignments, newAssignment];
    });
  };

  const getAssignmentByJobId = (jobId: string) => {
    return assignments.find(assignment => assignment.jobId === jobId);
  };

  return (
    <AssignmentContext.Provider value={{ assignments, addAssignment, getAssignmentByJobId }}>
      {children}
    </AssignmentContext.Provider>
  );
}

export function useAssignments() {
  const context = useContext(AssignmentContext);
  if (context === undefined) {
    throw new Error('useAssignments must be used within an AssignmentProvider');
  }
  return context;
} 