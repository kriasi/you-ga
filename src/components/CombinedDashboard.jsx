// CombinedDashboard.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CombinedDashboard = ({ moodData, physicalData }) => {
  const data = {
    labels: ['Mood', 'Sleep', 'Hunger', 'Stress', 'Anxiety', 'Nervousness', 'Productivity', 'Physical Work', 'Walking', 'Running', 'Weights', 'Cardio', 'Light Workouts'],
    datasets: [
      {
        label: 'Mood Tracker',
        data: moodData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Physical Health Tracker',
        data: physicalData,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Mood and Physical Health Tracker Results',
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Combined Dashboard</h1>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default CombinedDashboard;

CombinedDashboard.jsx
