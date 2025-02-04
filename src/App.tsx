import React, { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import HeartfeltMessage from './components/HeartfeltMessage';
import ConfettiAnimation from './components/ConfettiAnimation';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import PhotoGallery from './components/PhotoGallery';
import PersonalizedNote from './components/PersonalizedNote';
import MemoryTimeline from './components/MemoryTimeline';
import LoveMeter from './components/LoveMeter';
import MemoryGame from './components/MemoryGame';
import VirtualLoveLetter from './components/VirtualLoveLetter';
import InteractiveMap from './components/InteractiveMap';
import DailyCountdownMessages from './components/DailyCountdownMessages';
import VirtualRose from './components/VirtualRose';

const App: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [isValentinesDay, setIsValentinesDay] = useState<boolean>(false);

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-red-100 p-4">
        <FloatingHearts />
        <ConfettiAnimation show={showConfetti} />

        <h1 className="text-5xl font-bold mb-8 text-red-900 animate-bounce relative z-10">
          {isValentinesDay
              ? "Happy Valentine's Day, My Love! 💖"
              : "Counting Down to Valentine's Day! 💕"}
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 relative z-10">
          <HeartfeltMessage onConfetti={() => setShowConfetti(true)} />
          <CountdownTimer onValentinesDay={setIsValentinesDay} />
        </div>

        {/* Love Meter */}
        <div className="mt-12 w-full max-w-4xl">
          <LoveMeter />
        </div>

        {/* Memory Game */}
        <div className="mt-12 w-full max-w-4xl">
          <MemoryGame />
        </div>

        {/* Virtual Love Letter */}
        <div className="mt-12 w-full max-w-4xl">
          <VirtualLoveLetter />
        </div>

        {/* Interactive Map */}
        <div className="mt-12 w-full max-w-4xl">
          <InteractiveMap />
        </div>

        {/* Daily Countdown Messages */}
        <div className="mt-12 w-full max-w-4xl">
          <DailyCountdownMessages />
        </div>

        {/* Virtual Rose */}
        <div className="mt-12 w-full max-w-4xl">
          <VirtualRose />
        </div>

        {/* Photo Gallery */}
        <div className="mt-12 w-full max-w-4xl">
          <PhotoGallery />
        </div>

        {/* Music Player */}
        <div className="mt-12 w-full max-w-4xl">
          <MusicPlayer />
        </div>

        {/* Personalized Note */}
        <div className="mt-12 w-full max-w-4xl">
          <PersonalizedNote />
        </div>

        {/* Memory Timeline */}
        <div className="mt-12 w-full max-w-4xl">
          <MemoryTimeline />
        </div>
      </div>
  );
};

export default App;