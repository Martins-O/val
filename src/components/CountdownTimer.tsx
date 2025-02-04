import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
    onValentinesDay: (isValentinesDay: boolean) => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ onValentinesDay }) => {
    const [timeLeft, setTimeLeft] = useState<number>(0);

    const calculateTimeLeft = () => {
        const now = new Date();
        const nextValentine = new Date(now.getFullYear(), 1, 14); // February 14
        if (now > nextValentine) {
            nextValentine.setFullYear(nextValentine.getFullYear() + 1);
        }
        const difference = nextValentine.getTime() - now.getTime();
        setTimeLeft(Math.floor(difference / 1000));

        const isTodayValentinesDay =
            now.getMonth() === 1 && now.getDate() === 14; // February is month 1 (0-indexed)
        onValentinesDay(isTodayValentinesDay);
    };

    useEffect(() => {
        calculateTimeLeft();
        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (3600 * 24));
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${days}d ${hours}h ${minutes}m ${secs}s`;
    };

    return (
        <div className="text-center">
            <p className="text-xl mb-4 text-red-700">Countdown to Valentine's Day:</p>
            <p className="text-3xl font-bold text-red-900 animate-ping">
                {formatTime(timeLeft)}
            </p>
        </div>
    );
};

export default CountdownTimer;