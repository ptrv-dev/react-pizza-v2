import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import IndexPage from './pages/IndexPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
