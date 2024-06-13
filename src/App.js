import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WorkoutCard from './pages/WorkoutCard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workout" element= {<WorkoutCard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
