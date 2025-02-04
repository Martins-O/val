import React, { useState } from 'react';

const VirtualRose: React.FC = () => {
    const [sent, setSent] = useState<boolean>(false);

    const handleSendRose = () => {
        setSent(true);
        setTimeout(() => setSent(false), 3000); // Reset after 3 seconds
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Send a Virtual Rose 🌹</h2>
            <button
                onClick={handleSendRose}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110"
            >
                Send Rose
            </button>
            {sent && (
                <p className="text-2xl mt-6 text-red-800 animate-pulse">
                    A rose has been sent to your love! 💕
                </p>
            )}
        </div>
    );
};

export default VirtualRose;