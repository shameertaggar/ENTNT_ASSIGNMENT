import { useState } from "react";
import { useAssignments } from "../context/AssignmentContext";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface AssessmentFormProps {
  jobId: string;
  onSubmit: (questions: Question[]) => void;
}

export default function AssessmentForm({ jobId, onSubmit }: AssessmentFormProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const addQuestion = () => {
    if (currentQuestion.trim() === "") return;

    const newQuestion: Question = {
      id: questions.length + 1,
      question: currentQuestion,
      options: options,
      correctAnswer: correctAnswer
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion("");
    setOptions(["", "", "", ""]);
    setCorrectAnswer(0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (questions.length === 0) {
      alert("Please add at least one question");
      return;
    }
    onSubmit(questions);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-800">
        <h3 className="text-lg font-semibold mb-4">Create Assessment</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Question
            </label>
            <input
              type="text"
              value={currentQuestion}
              onChange={(e) => setCurrentQuestion(e.target.value)}
              className="w-full rounded-lg border px-3 py-2"
              placeholder="Enter your question"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Options
            </label>
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={correctAnswer === index}
                  onChange={() => setCorrectAnswer(index)}
                  className="text-rose-600"
                />
                <input
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  className="w-full rounded-lg border px-3 py-2"
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={addQuestion}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-500"
          >
            Add Question
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm dark:bg-gray-800">
        <h4 className="font-medium mb-4">Added Questions</h4>
        <div className="space-y-4">
          {questions.map((q) => (
            <div key={q.id} className="p-4 border rounded-lg">
              <p className="font-medium">{q.question}</p>
              <ul className="mt-2 space-y-1">
                {q.options.map((option, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className={index === q.correctAnswer ? "text-green-600" : ""}>
                      {index === q.correctAnswer ? "✓" : "○"}
                    </span>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-500"
          >
            Save Assessment
          </button>
        </div>
      </div>
    </div>
  );
} 