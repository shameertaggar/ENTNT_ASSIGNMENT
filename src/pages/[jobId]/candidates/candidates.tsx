"use client"

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashboardComponent from "../../../components/dashboardComponent";
import CandidateList from "../../../components/candidateList";
import CandidateDetails from "../../../components/candidateDetails";
import Modal from "../../../components/modal";
import { Candidate, CandidateStatus } from "../../../types/candidate";
import { useSidebar } from "../../../context/SidebarContext";

export default function CandidatesPage() {
  const params = useParams();
  const jobId = params.jobId as string;
  
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([
    // Sample data - replace with actual API call
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "+1234567890",
      resumeUrl: "#",
      appliedDate: "2024-03-21",
      status: "Under Review",
      skills: ["React", "TypeScript", "Node.js"],
      experience: "6 years of frontend development",
      matchScore: 85,
    },
    // Add more sample candidates
  ]);

  const handleViewDetails = (candidateId: string) => {
    const candidate = candidates.find(c => c.id === candidateId);
    if (candidate) {
      setSelectedCandidate(candidate);
    }
  };

  const handleStatusChange = (candidateId: string, newStatus: string) => {
    setCandidates(candidates.map(candidate =>
      candidate.id === candidateId
        ? { ...candidate, status: newStatus as CandidateStatus }
        : candidate
    ));
  };

  const { isSidebarOpen } = useSidebar();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardComponent />

      <main className={`flex flex-auto flex-col max-w-full pt-16 transition-all duration-500 ease-out ${
        isSidebarOpen ? "lg:ml-64" : ""
      }`}>
        <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Candidates
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Managing candidates for job posting
            </p>
          </div>

          <CandidateList
            jobId={jobId}
            candidates={candidates}
            onViewDetails={handleViewDetails}
            onStatusChange={handleStatusChange}
          />
        </div>
      </main>

      <Modal
        isOpen={!!selectedCandidate}
        onClose={() => setSelectedCandidate(null)}
        title="Candidate Details"
      >
        {selectedCandidate && (
          <CandidateDetails
            candidate={selectedCandidate}
            onStatusChange={(status) => handleStatusChange(selectedCandidate.id, status)}
          />
        )}
      </Modal>
    </div>
  );
} 