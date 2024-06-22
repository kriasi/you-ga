import React, { useState } from 'react';
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
import Recommendations from './components/Recommendations';
import DocNearby from './components/DocNearby';
import 'tailwindcss/tailwind.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  const [moodData, setMoodData] = useState({});
  const [physicalData, setPhysicalData] = useState({});

  const handleMoodSubmit = (data) => {
    setMoodData(data);
  };

  const handlePhysicalSubmit = (data) => {
    setPhysicalData(data);
  };

  const moodChartData = {
    labels: ['Mood', 'Stress', 'Anxiety', 'Nervousness', 'Productivity'],
    datasets: [
      {
        label: 'Mood Tracker',
        data: [moodData.mood, moodData.stress, moodData.anxiety, moodData.nervousness, moodData.productivity],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const physicalChartData = {
    labels: ['Physical Work', 'Walking', 'Running', 'Weights', 'Cardio', 'Light Workouts'],
    datasets: [
      {
        label: 'Physical Health Tracker',
        data: [physicalData.physicalWork, physicalData.walking, physicalData.running, physicalData.weights, physicalData.cardio, physicalData.lightWorkouts],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
        <Home />
        <Welcome />
        <div className="mt-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <MoodTracker onSubmit={handleMoodSubmit} />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <PhysicalHealthTracker onSubmit={handlePhysicalSubmit} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Mood Tracker Chart</h2>
              <Bar data={moodChartData} options={chartOptions} />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Physical Health Tracker Chart</h2>
              <Bar data={physicalChartData} options={chartOptions} />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <CombinedDashboard moodData={moodData} physicalData={physicalData} />
          </div>
          {/* <div className="bg-white rounded-lg shadow-md p-6">
            <Dashboard />
          </div> */}
          <div className="bg-white rounded-lg shadow-md p-6">
          <Recommendations moodData={moodData} physicalData={physicalData} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-1">
            <DocNearby />
          </div>
        </div>
        <About />
      
    </div>
  );
}

export default App;

