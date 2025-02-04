import React, { useState } from 'react';

const LoveMeter: React.FC = () => {
    const [score, setScore] = useState<number | null>(null);

    const calculateLoveScore = () => {
        const randomScore = Math.floor(Math.random() * 101); // Random score between 0 and 100
        setScore(randomScore);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Love Meter 💖</h2>
            <button
                onClick={calculateLoveScore}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110"
            >
                Calculate Your Love Score
            </button>
            {score !== null && (
                <p className="text-2xl mt-6 text-red-800 animate-pulse">
                    Your love score is {score}%! 💕
                </p>
            )}
        </div>
    );
};

export default LoveMeter;