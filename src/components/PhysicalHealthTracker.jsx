import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { Pie } from 'react-chartjs-2';

const PhysicalHealthTracker = () => {
  const [physicalWork, setPhysicalWork] = useState(0);
  const [walking, setWalking] = useState(0);
  const [running, setRunning] = useState(0);
  const [weights, setWeights] = useState(0);
  const [cardio, setCardio] = useState(0);
  const [lightWorkouts, setLightWorkouts] = useState(0);
  const [showDashboard, setShowDashboard] = useState(false);

  const handlePhysicalWorkChange = (rating) => {
    setPhysicalWork(rating);
  };

  const handleWalkingChange = (rating) => {
    setWalking(rating);
  };

  const handleRunningChange = (rating) => {
    setRunning(rating);
  };

  const handleWeightsChange = (rating) => {
    setWeights(rating);
  };

  const handleCardioChange = (rating) => {
    setCardio(rating);
  };

  const handleLightWorkoutsChange = (rating) => {
    setLightWorkouts(rating);
  };

  const handleSubmit = () => {
    setShowDashboard(true);
  };

  const activityLabels = ['Nil', 'Just Started', 'Constant', 'Better', 'Progressive'];
  const activityEmojis = ['🛌 ', '😵', '🏃‍♂️', '👍', '🏋️‍♀️'];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        {!showDashboard ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Physical Health Tracker
            </h1>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="physicalWork">
                Physical Work
              </label>
              <div className="flex justify-center items-center">
                {activityLabels.map((label, index) => (
                  <span
                    key={index}
                    className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                      physicalWork === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                    onClick={() => handlePhysicalWorkChange(index + 1)}
                  >
                    {activityEmojis[index]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="walking">
                Walking
              </label>
              <div className="flex justify-center items-center">
                {activityLabels.map((label, index) => (
                  <span
                    key={index}
                    className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                      walking === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                    onClick={() => handleWalkingChange(index + 1)}
                  >
                    {activityEmojis[index]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="running">
                Running
              </label>
              <div className="flex justify-center items-center">
                {activityLabels.map((label, index) => (
                  <span
                    key={index}
                    className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                      running === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                    onClick={() => handleRunningChange(index + 1)}
                  >
                    {activityEmojis[index]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="weights">
                Weights
              </label>
              <div className="flex justify-center items-center">
                {activityLabels.map((label, index) => (
                  <span
                    key={index}
                    className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                      weights === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                    onClick={() => handleWeightsChange(index + 1)}
                  >
                    {activityEmojis[index]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="cardio">
                Cardio
              </label>
              <div className="flex justify-center items-center">
                {activityLabels.map((label, index) => (
                  <span
                    key={index}
                    className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                      cardio === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                    onClick={() => handleCardioChange(index + 1)}
                  >
                    {activityEmojis[index]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="lightWorkouts">
                Light Workouts
              </label>
              <div className="flex justify-center items-center">
                {activityLabels.map((label, index) => (
                  <span
                    key={index}
                    className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                      lightWorkouts === index + 1
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}
                    onClick={() => handleLightWorkoutsChange(index + 1)}
                  >
                    {activityEmojis[index]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6 flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          <Dashboard
            physicalWork={physicalWork}
            walking={walking}
            running={running}
            weights={weights}
            cardio={cardio}
            lightWorkouts={lightWorkouts}
          />
        )}
      </div>
    </div>
  );
};

const Dashboard = ({
  physicalWork,
  walking,
  running,
  weights,
  cardio,
  lightWorkouts,
}) => {
  const chartData = {
    labels: ['Physical Work', 'Walking', 'Running', 'Weights', 'Cardio', 'Light Workouts'],
    datasets: [
      {
        data: [physicalWork, walking, running, weights, cardio, lightWorkouts],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9F40',
          '#8A2BE2',
          '#00FA9A',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9F40',
          '#8A2BE2',
          '#00FA9A',
        ],
      },
    ],
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Physical Health Tracker Dashboard
      </h1>
      <div className="mb-6">
        <Pie data={chartData} />
      </div>
    </>
  );
};

export default PhysicalHealthTracker;