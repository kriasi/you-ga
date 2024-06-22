import React from 'react';

const Recommendations = ({ moodData, physicalData }) => {
  const getRecommendations = () => {
    const recommendations = [];

    if (moodData.stress < 3 || moodData.anxiety > 3 || moodData.nervousness > 3) {
      recommendations.push({
        type: 'Meditation',
        title: 'Guided Meditation for Stress Relief',
        videoUrl: 'https://www.youtube.com/embed/EwQkfoKxRvo?start=163',
        description: 'A 15-minute guided meditation to help reduce stress and anxiety. Practice the 4-7-8 breathing technique: Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds. Repeat 4 times.'
      });
    }

    if (moodData.mood < 3) {
      recommendations.push({
        type: 'Mood Booster',
        title: 'Funny Cat Videos Compilation',
        videoUrl: 'https://www.youtube.com/embed/hY7m5jjJ9mM',
        description: "Write down three things youre grateful for today. This practice can help shift your focus to positive aspects of your life. A collection of hilarious cat videos to lift your spirits."
      });
    }

    if (physicalData.physicalWork < 3 && physicalData.walking < 3 && physicalData.running < 3) {
      recommendations.push({
        type: 'Exercise',
        title: '15-Minute Full Body Workout',
        videoUrl: 'https://www.youtube.com/embed/ka4tN6RJvgQ?start=310',
        description: 'Try this 10-minute routine: 20 jumping jacks, 15 squats, 10 push-ups, 30-second plank. Repeat twice. A quick and effective full-body workout you can do at home.'
      });
    }

    if (moodData.productivity < 3) {
      recommendations.push({
        type: 'Productivity',
        title: 'The Pomodoro Technique',
        videoUrl: 'https://www.youtube.com/embed/mNBmG24djoY',
        description: 'Work for 25 minutes, then take a 5-minute break. Repeat this cycle 4 times, then take a longer 15-30 minute break. Learn about the Pomodoro Technique to boost your productivity.'
      });
    }

    if (moodData.anxiety < 3) {
             recommendations.push({
               type: 'Anxiety Relief',
               title: 'Mindfulness Exercise',
               videoUrl: 'https://www.youtube.com/embed/O-6f5wQXSu8',
               description: 'Practice the 5-4-3-2-1 grounding technique: Identify 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.'
             });
           }

    return recommendations;
  };

  const recommendations = getRecommendations();

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Personalized Recommendations</h2>
      {recommendations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{rec.type}: {rec.title}</h3>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe 
                  src={rec.videoUrl} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-gray-700">{rec.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-700">Great job! You're doing well in all areas. Keep it up!</p>
      )}
    </div>
  );
};

export default Recommendations;

  