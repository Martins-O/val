import React from 'react';

interface ConfettiAnimationProps {
    show: boolean;
}

const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({ show }) => {
    if (!show) return null;

    return (
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-red-500 rounded-full animate-confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default ConfettiAnimation;