import React from 'react';

const photos: string[] = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    // Add more photo URLs here
];

const PhotoGallery: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Our Memories 💕</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105"
                    >
                        <img
                            src={photo}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <span className="text-white text-lg font-bold">Memory {index + 1}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;