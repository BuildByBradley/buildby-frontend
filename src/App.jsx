
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArchitectDashboard from './pages/ArchitectDashboard';
import ProjectDetail from './pages/ProjectDetail';
import LogTime from './pages/LogTime';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArchitectDashboard />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/log-time" element={<LogTime userId="2b5b6dc1-4721-4a44-a6e2-dcabf57e43de" />} />
      </Routes>
    </Router>
  );
};

export default App;
