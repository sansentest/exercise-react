import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PropsPage from './pages/PropsPage';
import HandlingPage from './pages/HandlingPage';
import StatePage from './pages/StatePage';
import StatePage2 from './pages/StatePage2';
import IntroPage from './pages/IntroPage';
import ComponentsPage from './pages/ComponentsPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-slate-50 to-purple-50 font-sans selection:bg-indigo-200 selection:text-indigo-900">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/intro" replace />} />
            <Route path="/intro" element={<IntroPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/props" element={<PropsPage />} />
            <Route path="/handling" element={<HandlingPage />} />
            <Route path="/state" element={<StatePage />} />
            <Route path="/state2" element={<StatePage2 />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 mb-3">Coming Soon!</h2>
                <p className="text-slate-500 max-w-md text-lg">This section of the React tutorial is still being built. Check out the <strong>React Props</strong> and <strong>React Events</strong> pages in the meantime!</p>
              </div>
            } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}