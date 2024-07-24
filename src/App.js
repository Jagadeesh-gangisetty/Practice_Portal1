import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Parents from './Parents';
import SiblingsQuiz from './components/SiblingsQuiz';
import Nav from './components/Nav';

function App() {
  return (    
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Parents" element={<Parents />} />
          <Route path="/SiblingsQuiz" element={<SiblingsQuiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
