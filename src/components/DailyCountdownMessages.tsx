import React from 'react';
import { messages } from '../messages';

const DailyCountdownMessages: React.FC = () => {
    const today = new Date();
    const dayOfYear = Math.floor(
        (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
    );
    const messageIndex = dayOfYear % messages.length;

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Daily Message 🌹</h2>
            <p className="text-2xl text-red-800 animate-pulse">{messages[messageIndex]}</p>
        </div>
    );
};

export default DailyCountdownMessages;