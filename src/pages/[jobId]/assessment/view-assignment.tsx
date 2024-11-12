import React from 'react'
import { useParams } from 'react-router-dom'
import AssignmentView from '../../../components/AssignmentView'
import DashboardComponent from '../../../components/dashboardComponent'
import { useSidebar } from "../../../context/SidebarContext";

function ViewAssignment() {
    const { isSidebarOpen } = useSidebar();
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <DashboardComponent />
            <main className={`flex flex-auto flex-col max-w-full pt-16 transition-all duration-500 ease-out ${isSidebarOpen ? "lg:ml-64" : ""
                }`}>
                <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
                    <AssignmentView jobId={useParams().jobId as string} />
                </div>
            </main>
        </div>
    )
}

export default ViewAssignment