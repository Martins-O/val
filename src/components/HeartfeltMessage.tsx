import React, { useState } from 'react';
import { messages } from '../messages';

interface HeartfeltMessageProps {
    onConfetti: () => void;
}

const HeartfeltMessage: React.FC<HeartfeltMessageProps> = ({ onConfetti }) => {
    const [message, setMessage] = useState<string>(messages[0]);

    // Pick a random message from the list
    const fetchMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setMessage(messages[randomIndex]);
        onConfetti();
    };

    return (
        <div className="text-center">
            <p className="text-2xl mb-6 text-red-800 animate-pulse">{message}</p>
            <button
                onClick={fetchMessage}
                className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110 animate-wiggle"
            >
                New Message
            </button>
        </div>
    );
};

export default HeartfeltMessage;