import { useState } from "react";
import { Menu } from "@headlessui/react";

interface Candidate {
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  appliedDate: string;
  status: string;
  skills: string[];
  experience: string;
}

interface CandidateDetailsProps {
  candidate: Candidate;
  onStatusChange: (status: string) => void;
}

export default function CandidateDetails({ candidate, onStatusChange }: CandidateDetailsProps) {
  const statusOptions = [
    "Under Review",
    "Shortlisted",
    "Interview Scheduled",
    "Rejected",
    "Hired"
  ];

  return (
    <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
      <div className="py-4 px-5 bg-gray-50 dark:bg-gray-700/50">
        <h3 className="font-semibold text-xl">{candidate.name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{candidate.email}</p>
      </div>
      
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-1">Contact</h4>
            <p>{candidate.phone}</p>
          </div>
          <div>
            <h4 className="font-medium mb-1">Applied Date</h4>
            <p>{candidate.appliedDate}</p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Experience</h4>
          <p className="text-gray-600 dark:text-gray-300">{candidate.experience}</p>
        </div>

        <div>
          <h4 className="font-medium mb-2">Resume</h4>
          <a 
            href={candidate.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 hover:text-rose-500"
          >
            View Resume
          </a>
        </div>

        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Status
          </label>
          <select
            id="status"
            value={candidate.status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                     focus:border-rose-500 focus:ring-rose-500 
                     dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 