import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import RetryPage from './pages/RetryPage';
import QuestionPage from './pages/QuestionPage';
import AnswerPage from './pages/AnswerPage';
import ResultPage from './pages/ResultPage';
import SimilarPage from './pages/SimilarPage';
import SimilarQuestionPage from './pages/SimilarQuestionPage';
import SimilarAnswerPage from './pages/SimilarAnswerPage';
import ResultAnswerPage from './pages/ResultAnswerPage';
import SimilarAnswerDonePage from './pages/SimilarAnswerDonePage';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/retry" element={<RetryPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/answer" element={<AnswerPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/similar" element={<SimilarPage />} />
          <Route path="/similar-question" element={<SimilarQuestionPage />} />
          <Route path="/similar-answer" element={<SimilarAnswerPage />} />
          <Route path="/result-answer" element={<ResultAnswerPage />} />
          <Route path="/similar-answer-done" element={<SimilarAnswerDonePage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
