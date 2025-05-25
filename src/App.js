import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import SpaceThemedPage from './components/space_bg';
import CompetitionsList from './components/pages/Events/CompetitionsList';
import CompetitionDetails from './components/pages/Events/CompetitionDetails';
/*import Mascot from './components/Mascot';*/
import './App.css';
import Location from './components/pages/Location';

function App() {
  return (
    <div className = "App">
      <SpaceThemedPage/>
      <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact element={<Home />} />
      <Route path = '/Location' exact element={<Location />} />
      <Route path='/Events/Competitions' element={<CompetitionsList />} />
          <Route path='/Events/Competitions/:id' element={<CompetitionDetails />} />
      </Routes>
        </Router>
    </div>
  );
}

export default App;
