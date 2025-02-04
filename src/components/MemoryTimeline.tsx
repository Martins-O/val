import React from 'react';

const milestones: { date: string; event: string }[] = [
    { date: "2023-07-25", event: "We met on Facebook ❤️" },
    { date: "2023-08-18", event: "We first met 🌹" },
    { date: "2023-12-25", event: "Spent Christmas together 🎄" },
    { date: "2023-12-26", event: "Spent Boxing Day together 🎉" },
    { date: "2024-01-01", event: "Spent New Year's Eve together 🎉" },
    { date: "2024-02-14", event: "First Valentine's Day together 💘" },
    { date: "2024-08-18", event: "First Year Anniversary together 💖" },
];

const MemoryTimeline: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Our Journey Together 🚀</h2>
            <div className="space-y-4">
                {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                        <div className="w-4 h-4 bg-red-500 rounded-full mt-2"></div>
                        <div className="ml-4">
                            <p className="text-lg font-bold text-red-900">{milestone.date}</p>
                            <p className="text-xl text-red-800">{milestone.event}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemoryTimeline;