import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import { Bar, Pie } from 'react-chartjs-2';
import { GrGraphQl } from 'react-icons/gr';
import { PiGraphDuotone } from 'react-icons/pi';
import { Line, LineChart, PieChart } from 'recharts';


const MoodTracker = ({ onSubmit }) => {
  const [mood, setMood] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [hunger, setHunger] = useState(0);
  const [stress, setStress] = useState(0);
  const [anxiety, setAnxiety] = useState(0);
  const [nervousness, setNervousness] = useState(0);
  const [productivity, setProductivity] = useState(0);
  const [askForHelp, setAskForHelp] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);


  const handleMoodChange = (rating) => {
    setMood(rating);
  };

  const handleSleepChange = (rating) => {
    setSleep(rating);
  };

  const handleHungerChange = (rating) => {
    setHunger(rating);
  };

const handleStressChange = (rating) => {
    setStress(rating);
  };

  const handleAnxietyChange = (rating) => {
    setAnxiety(rating);
  };

  const handleNervousnessChange = (rating) => {
    setNervousness(rating);
  };

  const handleProductivityChange = (rating) => {
    setProductivity(rating);
  };

  const handleAskForHelpChange = () => {
    setAskForHelp(!askForHelp);
  };

  const handleSubmit = () => {
    setShowDashboard(true);
    onSubmit({ mood, sleep, hunger, stress, anxiety, nervousness, productivity });
  };
  
  

  const moodLabels = ['Bad', 'Meh', 'Not Bad', 'Better', 'Great'];
  const moodEmojis = ['😞', '😐', '🙂', '😀', '😁'];
  const stressEmojis = ['😰', '😓', '😔', '😐', '😌'];
  const anxietyEmojis = ['😨', '😟', '😕', '😐', '😌'];
  const nervousnessEmojis = ['😬', '😟', '😕', '😐', '😌'];
  const productivityEmojis = ['😴', '😪', '😐', '😃', '😄'];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        {!showDashboard ? (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Mood Tracker
            </h1>

            <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="mood"
          >
            How are you feeling today?
          </label>
          <div className="flex justify-center items-center">
            {moodLabels.map((label, index) => (
              <span
                key={index}
                className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                  mood === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => handleMoodChange(index + 1)}
              >
                {moodEmojis[index]}
              </span>
            ))}
          </div>
        </div>
        {/* Add other sections for sleep, hunger, stress, anxiety, nervousness, and productivity */}
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="stress"
          >
            How stressed are you?
          </label>
          <div className="flex justify-center items-center">
            {moodLabels.map((label, index) => (
              <span
                key={index}
                className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                  stress === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => handleStressChange(index + 1)}
              >
                {stressEmojis[index]}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="anxiety"
          >
            How anxious are you?
          </label>
          <div className="flex justify-center items-center">
            {moodLabels.map((label, index) => (
              <span
                key={index}
                className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                  anxiety === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => handleAnxietyChange(index + 1)}
              >
                {anxietyEmojis[index]}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="nervousness"
          >
            How nervous are you?
          </label>
          <div className="flex justify-center items-center">
            {moodLabels.map((label, index) => (
              <span
                key={index}
                className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                  nervousness === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => handleNervousnessChange(index + 1)}
              >
                {nervousnessEmojis[index]}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="productivity"
          >
            How productive are you?
          </label>
          <div className="flex justify-center items-center">
            {moodLabels.map((label, index) => (
              <span
                key={index}
                className={`w-10 h-10 rounded-full mx-1 cursor-pointer flex items-center justify-center text-lg font-bold ${
                  productivity === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => handleProductivityChange(index + 1)}
              >
                {productivityEmojis[index]}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6 flex justify-center">
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
             focus:outline-none focus:shadow-outline ${
              askForHelp
                ? 'bg-red-500 hover:bg-red-700'
                : 'bg-blue-500 hover:bg-blue-700'
            }`}
            onClick={handleAskForHelpChange}
          >
            {askForHelp ? 'Cancel Help Request' : 'Ask for Help'}
          </button>
          </div>

          <div className="text-center">
          {mood > 0 && (
            <p className="text-gray-700 font-bold">
              Your mood rating for today: {moodLabels[mood - 1]}
            </p>
          )}
          {/* {sleep > 0 && (
            <p className="text-gray-700 font-bold">
              Your sleep rating for today: {moodLabels[sleep - 1]}
            </p>
          )}
          {hunger > 0 && (
            <p className="text-gray-700 font-bold">
              Your hunger rating for today: {moodLabels[hunger - 1]}
            </p>
          )} */}
          {stress > 0 && (
            <p className="text-gray-700 font-bold">
              Your stress rating for today: {moodLabels[stress - 1]}
            </p>
          )}
          {anxiety > 0 && (
            <p className="text-gray-700 font-bold">
              Your anxiety rating for today: {moodLabels[anxiety - 1]}
            </p>
          )}
          {nervousness > 0 && (
            <p className="text-gray-700 font-bold">
              Your nervousness rating for today: {moodLabels[nervousness - 1]}
            </p>
          )}
          {productivity > 0 && (
            <p className="text-gray-700 font-bold">
              Your productivity rating for today: {moodLabels[productivity - 1]}
            </p>
             )}
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
            mood={mood}
            // sleep={sleep}
            // hunger={hunger}
            stress={stress}
            anxiety={anxiety}
            nervousness={nervousness}
            productivity={productivity}
          />
        )}
      </div>
    </div>
  );
};

const Dashboard = ({
  mood,
  // sleep,
  // hunger,
  stress,
  anxiety,
  nervousness,
  productivity,
}) => {
  const chartData = {
    labels: ['Mood', 'Stress', 'Anxiety', 'Nervousness', 'Productivity'],
    datasets: [
      {
        data: [mood, stress, anxiety, nervousness, productivity],
        backgroundColor: [
          '#FF6380',
          '#FFCE56',
          '#FF9F45',
          '#8A2BE2',
          '#00FA9A',
        ],
        hoverBackgroundColor: [
          '#FF9F40',
          '#36A2EB',
          '#FFCE56',
          '#FFFF41',
          '#FF6384',
        ],
      },
    ],
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Mood Tracker Dashboard
      </h1>
      <div className="mb-6">
        <Pie data={chartData} />
      </div>
    </>
  );
};

export default MoodTracker;


