import React from 'react';

const FloatingHearts: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="absolute text-red-500 text-4xl animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 5 + 5}s`,
                    }}
                >
                    ❤️
                </div>
            ))}
        </div>
    );
};

export default FloatingHearts;
