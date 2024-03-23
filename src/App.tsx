import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import RetryPage from './pages/RetryPage';
import QuestionPage from './pages/QuestionPage';
import GradePage from './pages/GradePage';
import ExplainPage from './pages/ExplainPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getMemberId, getMemberNickname } from './api/localStorage';

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    const memberId = getMemberId();
    const memberNickname = getMemberNickname();

    if ((memberId === null || memberNickname === null) && window.location.pathname !== '/') {
      window.location.href = '/';
    }
  }, []);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/retry" element={<RetryPage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/grade" element={<GradePage />} />
            <Route path="/explain/:quizId" element={<ExplainPage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
