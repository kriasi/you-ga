import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CombinedDashboard = ({ moodData, physicalData }) => {
  const data = {
    labels: ['Mood', 'Stress', 'Anxiety', 'Nervousness', 'Productivity', 'Physical Work', 'Walking', 'Running', 'Weights', 'Cardio', 'Light Workouts'],
    datasets: [
      {
        label: 'Mood Tracker',
        data: [moodData.mood, moodData.stress, moodData.anxiety, moodData.nervousness, moodData.productivity, null, null, null, null, null, null],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
      {
        label: 'Physical Health Tracker',
        data: [null, null, null, null, null, physicalData.physicalWork, physicalData.walking, physicalData.running, physicalData.weights, physicalData.cardio, physicalData.lightWorkouts],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
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

  const analyzeData = () => {
    const moodAvg = (moodData.mood + moodData.productivity) / 2;
    const stressAvg = (moodData.stress + moodData.anxiety + moodData.nervousness) / 3;
    const physicalAvg = Object.values(physicalData).reduce((sum, val) => sum + val, 0) / Object.values(physicalData).length;

    let analysis = "";

    if (moodAvg > 3.5) {
      analysis += "Your overall mood is positive. ";
    } else if (moodAvg < 2.5) {
      analysis += "Your overall mood seems low. Consider engaging in activities you enjoy or talking to someone you trust. ";
    }

    if (stressAvg > 3.5) {
      analysis += "You're experiencing high levels of stress and anxiety. Try some relaxation techniques or mindfulness exercises. ";
    }

    if (physicalAvg > 3.5) {
      analysis += "You're maintaining a good level of physical activity. Keep it up! ";
    } else if (physicalAvg < 2.5) {
      analysis += "Your physical activity level is lower than ideal. Consider incorporating more movement into your daily routine. ";
    }

    if (moodData.productivity < 3) {
      analysis += "Your productivity seems low. Try breaking tasks into smaller, manageable chunks and take regular breaks. ";
    }

    return analysis;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Combined Dashboard</h1>
        <Bar data={data} options={options} className="mb-8" />
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-8" role="alert">
          <p className="font-bold">Analysis</p>
          <p>{analyzeData()}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Mood Summary</h2>
            <p>Mood: {moodData.mood}/5</p>
            <p>Stress: {moodData.stress}/5</p>
            <p>Anxiety: {moodData.anxiety}/5</p>
            <p>Nervousness: {moodData.nervousness}/5</p>
            <p>Productivity: {moodData.productivity}/5</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Physical Activity Summary</h2>
            <p>Physical Work: {physicalData.physicalWork}/5</p>
            <p>Walking: {physicalData.walking}/5</p>
            <p>Running: {physicalData.running}/5</p>
            <p>Weights: {physicalData.weights}/5</p>
            <p>Cardio: {physicalData.cardio}/5</p>
            <p>Light Workouts: {physicalData.lightWorkouts}/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedDashboard;
