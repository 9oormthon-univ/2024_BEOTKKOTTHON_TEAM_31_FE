import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import RetryPage from './pages/RetryPage';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/retry" element={<RetryPage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
