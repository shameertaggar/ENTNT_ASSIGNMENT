import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardComponent from "../components/dashboardComponent";
import JobListing from "../components/jobListing";
import NewJobForm from "../components/newJobForm";
import Modal from "../components/modal";
import EditJobForm from "../components/editJobForm";
import { useSidebar } from "../context/SidebarContext";
import { useJobs } from "../context/JobContext";

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

export default function JobsDashboard() {
  const navigate = useNavigate();
  const [isNewJobModalOpen, setNewJobModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const { jobs, addJob, updateJob, deleteJob } = useJobs();
  const { isSidebarOpen } = useSidebar();

  const handleCreateJob = (jobData: any) => {
    addJob(jobData);
    setNewJobModalOpen(false);
  };

  const handleEditJob = (job: Job) => {
    setEditingJob(job);
  };

  const handleUpdateJob = (updatedJob: Job) => {
    updateJob(updatedJob);
    setEditingJob(null);
  };

  const handleDeleteJob = (jobId: string) => {
    deleteJob(jobId);
  };

  const handleViewCandidates = (jobId: string) => {
    navigate(`/dashboard/jobs/${jobId}/candidates`);
  };

  const handleCreateAssessment = (jobId: string) => {
    navigate(`/dashboard/jobs/${jobId}/assessment`);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardComponent />

      <main className={`flex flex-auto flex-col max-w-full pt-16 transition-all duration-500 ease-out ${
        isSidebarOpen ? "lg:ml-64" : ""
      }`}>
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Jobs
            </h2>
            <button
              onClick={() => setNewJobModalOpen(true)}
              className="inline-flex justify-center items-center space-x-2 border font-semibold rounded-lg px-4 py-2 leading-6 bg-rose-600 text-white hover:bg-rose-500 focus:ring focus:ring-rose-500 focus:ring-opacity-50 active:bg-rose-600"
            >
              Create New Job
            </button>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <JobListing
                key={job.id}
                job={job}
                onEdit={handleEditJob}
                onDelete={handleDeleteJob}
                onViewCandidates={handleViewCandidates}
                onCreateAssessment={handleCreateAssessment}
              />
            ))}
          </div>
        </div>
      </main>

      <Modal
        isOpen={isNewJobModalOpen}
        onClose={() => setNewJobModalOpen(false)}
        title="Create New Job"
      >
        <NewJobForm
          onSubmit={handleCreateJob}
          onCancel={() => setNewJobModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={!!editingJob}
        onClose={() => setEditingJob(null)}
        title="Edit Job"
      >
        {editingJob && (
          <EditJobForm
            job={editingJob}
            onSubmit={handleUpdateJob}
            onCancel={() => setEditingJob(null)}
          />
        )}
      </Modal>
    </div>
  );
}