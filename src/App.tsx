import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import DashboardComponent from './components/dashboardComponent';
import JobsDashboard from './pages/jobs';
import CandidatesPage from './pages/[jobId]/candidates/candidates';
import CreateAssessmentPage from './pages/[jobId]/assessment/create-assignment';
import { SidebarProvider } from './context/SidebarContext';
import { JobProvider } from './context/JobContext';
import { AssignmentProvider } from './context/AssignmentContext';
import ViewAssignment from './pages/[jobId]/assessment/view-assignment';

function App() {
  return (
    <SidebarProvider>
      <JobProvider>
        <AssignmentProvider>
          <Router>
            <Routes>
              <Route path="/dashboard" element={<JobsDashboard />} />
              <Route path="/dashboard/jobs/:jobId/candidates" element={<CandidatesPage />} />
              <Route path="/dashboard/jobs/:jobId/assessment" element={<CreateAssessmentPage />} />
              <Route path="/dashboard/jobs/:jobId/view-assessment" element={<ViewAssignment />} />
            </Routes>
          </Router>
        </AssignmentProvider>
      </JobProvider>
    </SidebarProvider>
  );
}

export default App;
