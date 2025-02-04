import React, { useState } from 'react';

const photos: string[] = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    // Add more photo URLs here
];

const MemoryGame: React.FC = () => {
    const [flipped, setFlipped] = useState<boolean[]>(Array(photos.length).fill(false));
    const [matched, setMatched] = useState<boolean[]>(Array(photos.length).fill(false));

    const handleCardClick = (index: number) => {
        if (flipped[index] || matched[index]) return;
        const newFlipped = [...flipped];
        newFlipped[index] = true;
        setFlipped(newFlipped);

        // Check for a match
        const flippedIndices = newFlipped
            .map((flip, i) => (flip ? i : -1))
            .filter((i) => i !== -1);
        if (flippedIndices.length === 2) {
            if (photos[flippedIndices[0]] === photos[flippedIndices[1]]) {
                const newMatched = [...matched];
                newMatched[flippedIndices[0]] = true;
                newMatched[flippedIndices[1]] = true;
                setMatched(newMatched);
            }
            setTimeout(() => {
                setFlipped(Array(photos.length).fill(false));
            }, 1000);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Memory Game 💭</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`relative w-24 h-24 rounded-lg shadow-lg transform transition-all cursor-pointer ${
                            flipped[index] || matched[index] ? 'rotate-y-180' : ''
                        }`}
                        onClick={() => handleCardClick(index)}
                    >
                        <img
                            src={photo}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemoryGame;