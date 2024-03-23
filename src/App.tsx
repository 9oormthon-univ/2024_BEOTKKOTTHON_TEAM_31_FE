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
import SimilarPage from './pages/SimilarPage';
import SimilarExplainPage from './pages/SimilarExplainPage';
import SimilarGradePage from './pages/SimilarGradePage';
import SimilarExplainRecordPage from './pages/SimilarExplainRecord';

function App() {
  const queryClient = new QueryClient();
  const memberId = getMemberId() || '';
  const memberNickname = getMemberNickname();

  useEffect(() => {
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
            <Route path="/retry" element={<RetryPage memberId={memberId} />} />
            <Route path="/question" element={<QuestionPage memberId={memberId} />} />
            <Route path="/grade" element={<GradePage />} />
            <Route path="/explain/:category/:quizId" element={<ExplainPage memberId={memberId} />} />
            <Route path="/similar" element={<SimilarPage />} />
            <Route path="/similar/explain" element={<SimilarExplainPage />} />
            <Route path="/similar/explain/:category/:id" element={<SimilarExplainRecordPage />} />
            <Route path="/similar/grade/:category/:baseQuizId" element={<SimilarGradePage />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
