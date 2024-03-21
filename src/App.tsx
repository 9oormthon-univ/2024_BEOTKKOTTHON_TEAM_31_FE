import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import RetryPage from './pages/RetryPage';
import QuestionPage from './pages/QuestionPage';
import AnswerPage from './pages/AnswerPage';
import ResultPage from './pages/ResultPage';
import SimilarQuestionPage from './pages/SimilarQuestionPage';

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
          <Route path="/similarquestion" element={<SimilarQuestionPage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
