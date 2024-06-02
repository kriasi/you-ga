import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from "./components/navbar";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import MoodTracker from './components/MoodTracker';
import Welcome from './components/Welcome';



function App(){

  return(
    <>
    <Navbar/>
    <Home/>
    
    <Welcome/>
    <div>
      <MoodTracker />
      <Dashboard/>
    </div>
    
    </>
  )
}

export default App;