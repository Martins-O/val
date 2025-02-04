import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(0);

  // List of heartfelt messages
  const messages: string[] = [
    "You mean the world to me. Happy Valentine’s Day! 💖",
    "Every moment with you is special. I love you! 🌹",
    "You are my sunshine on the darkest days. 💕",
    "I fall for you more every single day. 💘",
    "You are my forever and always. 💑",
    "My love for you grows stronger with each passing day. 💓",
    "You are the best thing that ever happened to me. 💞",
    "I am so grateful to have you in my life. 💝",
    "You make my heart skip a beat every time I see you. 💗",
    "I love you more than words can express. 💌",
  ];

  // Pick a random message from the list
  const fetchMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
    console.log(messages[randomIndex]);
  };

  // Calculate time left until Valentine's Day
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 text-red-900 p-4">
        <h1 className="text-5xl font-bold mb-8">Happy Valentine's Day, ArikeOlami! 💖</h1>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-2xl mb-6">{message}</p>
          <p className="text-xl mb-4">Countdown to Valentine's Day:</p>
          <p className="text-3xl font-bold">{formatTime(timeLeft)}</p>
          <button
              onClick={fetchMessage}
              className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            New Message
          </button>
        </div>
      </div>
  );
};

export default App;