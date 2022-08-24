import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics';
import { Header } from './shared/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/month-statistics' element={<MonthStatistics />}/>
      </Routes>
    </div>
  );
}

export default App;
