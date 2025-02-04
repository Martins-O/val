import React, { useEffect, useState } from 'react';
import messages from './messages';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // Pick a random message from the list
  const fetchMessage = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setMessage(data.content);
    } catch (error) {
      console.error('Error fetching message:', error);
      // Use a random message from our messages array
      const randomIndex = Math.floor(Math.random() * messages.length);
      setMessage(messages[randomIndex]);
      console.log(messages[randomIndex]);
    }
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const nextValentine = new Date(now.getFullYear(), 1, 14); // February 14
    if (now > nextValentine) {
      nextValentine.setFullYear(nextValentine.getFullYear() + 1);
    }
    const difference = nextValentine.getTime() - now.getTime();
    setTimeLeft(Math.floor(difference / 1000));
  };

  // Fetch a new message and update the timer every second
  useEffect(() => {
    fetchMessage();
    calculateTimeLeft();
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format the countdown
  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-red-100 p-4">
        <h1 className="text-5xl font-bold mb-8 text-red-900 animate-bounce">
          Happy Valentine's Day, My Love! 💖
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:scale-105">
          <p className="text-2xl mb-6 text-red-800 animate-pulse">{message}</p>
          <p className="text-xl mb-4 text-red-700">Countdown to Valentine's Day:</p>
          <p className="text-3xl font-bold text-red-900 animate-ping">
            {formatTime(timeLeft)}
          </p>
          <button
              onClick={fetchMessage}
              className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110"
          >
            New Message
          </button>
        </div>
      </div>
  );
};

export default App;