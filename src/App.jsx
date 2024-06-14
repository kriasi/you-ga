import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/navbar";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MoodTracker from './components/MoodTracker';
import Welcome from './components/Welcome';
import About from './components/About';
import PhysicalHealthTracker from './components/PhysicalHealthTracker';
import CombinedDashboard from './components/CombinedDashboard';
import 'tailwindcss/tailwind.css';



function App(){
    const moodData = [3, 4, 2, 5, 1, 3, 4]; // Example data for MoodTracker
    const physicalData = [2, 3, 4, 1, 5, 2]; // Example data for PhysicalHealthTracker

  return(
    <>
    <Navbar/>
    <Home/>
    <Welcome/>
    <div>
      {/* <MoodTracker /> <PhysicalHealthTracker /> */}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <MoodTracker />
      <PhysicalHealthTracker />
    </div>
    <CombinedDashboard moodData={moodData} physicalData={physicalData} />
      <Dashboard/>
      <About/>
    </div>
    
    </>
  )
}

export default App;