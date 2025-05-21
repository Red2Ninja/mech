import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import CompetitionsList from './components/pages/Events/CompetitionsList';
import CompetitionDetails from './components/pages/Events/CompetitionDetails';

function App() {
  return (
    <div className = "App">
      <Router>
      <Navbar />
      <Routes>
      <Route path = '/' exact element={<Home />} />
      <Route path='/Events/Competitions' element={<CompetitionsList />} />
          <Route path='/Events/competitions/:id' element={<CompetitionDetails />} />
      </Routes>
        </Router>
    </div>
  );
}

export default App;
