'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
  onComplete?: () => void;
  className?: string;
}

export default function CountdownTimer({
  initialMinutes = 1,
  onComplete,
  className = '',
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // seconds
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      if (timeLeft <= 0 && onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, onComplete]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(1, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress =
    ((initialMinutes * 60 - timeLeft) / (initialMinutes * 60)) * 100;

  return (
    <div
      className={`rounded-[30px] [background:linear-gradient(180deg,_rgba(93,_52,_214,_0),_rgba(93,_52,_214,_0.25)),_rgba(0,_0,_0,_0.1)] border-gray-400 border-solid border-[1.5px] overflow-hidden flex items-center py-2 px-3 gap-2.5 ${className}`}
    >
      <div className="flex items-center">
        <div className="relative tracking-[-0.02em] leading-[18px] font-medium">
          Batch in: {formatTime(timeLeft)}
        </div>
      </div>
      <div className="h-4 w-4 relative">
        <svg
          className="h-4 w-4 relative transform -rotate-90"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="8"
            cy="8"
            r="6"
            stroke="#94A3B8"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 6}`}
            strokeDashoffset={`${2 * Math.PI * 6 * (1 - progress / 100)}`}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
      </div>
    </div>
  );
}
