"use client"

import DropdownButton from "./dropdownButton";

interface Job {
  title: string;
  description: string;
  totalCandidates: number;
  status: string;
  postedDate: string;
  dropdownButton?: boolean;
}

interface DropdownItem {
  title: string;
  onClick?: () => void;
}

interface TableProps {
  jobs: Job[];
  dropdownItems: DropdownItem[];
}

export default function Table({ jobs, dropdownItems }: TableProps) {
  return (
    <div className="p-5 grow">
      <div className="rounded overflow-x-auto min-w-full bg-white dark:bg-gray-800">
        <table className="min-w-full text-sm align-middle whitespace-nowrap">
          <thead>
            <tr>
              <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left">
                Job Title
              </th>
              <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left">
                Description
              </th>
              <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-center">
                Candidates
              </th>
              <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-center">
                Status
              </th>
              <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-center">
                Posted Date
              </th>
              <th className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td className="px-3 py-4">{job.title}</td>
                <td className="px-3 py-4">{job.description}</td>
                <td className="px-3 py-4 text-center">{job.totalCandidates}</td>
                <td className="px-3 py-4 text-center">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                    {job.status}
                  </span>
                </td>
                <td className="px-3 py-4 text-center">{job.postedDate}</td>
                <td className="px-3 py-4 text-center">
                  {job.dropdownButton && <DropdownButton items={dropdownItems} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}