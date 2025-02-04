import React, { useState } from 'react';

const VirtualLoveLetter: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [sent, setSent] = useState<boolean>(false);

    const handleSend = () => {
        setSent(true);
        setTimeout(() => setSent(false), 3000); // Reset after 3 seconds
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Virtual Love Letter 💌</h2>
            <textarea
                className="w-full p-4 border border-red-300 rounded-lg mb-4"
                rows={5}
                placeholder="Write your love letter here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                onClick={handleSend}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 transform hover:scale-110"
            >
                Send Letter
            </button>
            {sent && (
                <p className="text-2xl mt-6 text-red-800 animate-pulse">
                    Your love letter has been sent! 💕
                </p>
            )}
        </div>
    );
};

export default VirtualLoveLetter;