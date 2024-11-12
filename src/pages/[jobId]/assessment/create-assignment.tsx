"use client"

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardComponent from "../../../components/dashboardComponent";
import AssessmentForm from "../../../components/assessmentForm";
import { useSidebar } from "../../../context/SidebarContext";
import { useJobs } from "../../../context/JobContext";
import { useAssignments } from '../../../context/AssignmentContext';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export default function CreateAssessmentPage() {
  const params = useParams();
  const navigate = useNavigate();
  const jobId = params.jobId as string;
  const { isSidebarOpen } = useSidebar();
  const { getJob } = useJobs();
  const { addAssignment } = useAssignments();
  const job = getJob(jobId);

  const handleSubmit = (questions: Question[]) => {
    if (questions.length === 0) {
      alert("Please add at least one question");
      return;
    }
    
    try {
      addAssignment(jobId, questions);
      console.log("Assessment created for job:", job?.title);
      console.log("Questions:", questions);
      navigate(`/dashboard/jobs/${jobId}/view-assessment`);
    } catch (error) {
      console.error("Error adding assignment:", error);
      alert("Failed to create assessment. Please try again.");
    }
  };

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardComponent />

      <main className={`flex flex-auto flex-col max-w-full pt-16 transition-all duration-500 ease-out ${
        isSidebarOpen ? "lg:ml-64" : ""
      }`}>
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Create Assessment - {job.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Create a new assessment for the job posting
            </p>
          </div>

          <AssessmentForm
            jobId={jobId}
            onSubmit={handleSubmit}
          />
        </div>
      </main>
    </div>
  );
} 