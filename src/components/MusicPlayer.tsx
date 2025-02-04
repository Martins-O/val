import React from 'react';

const MusicPlayer: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Our Song 🎶</h2>
            <iframe width="560"
                    height="315"
                    src="https://www.youtube.com/embed/xirk18P889U?si=JmlG86AtVJlssw9t"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
        </div>
    );
};

export default MusicPlayer;