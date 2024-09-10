"use client"
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const TimerCounter = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);
    const controls = useAnimation();

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    useEffect(() => {
        controls.start({
            strokeDashoffset: 283 - (283 * ((initialSeconds - seconds) / initialSeconds)),
            transition: { duration: 0.7, ease: "easeInOut" }
        });
    }, [seconds, initialSeconds, controls]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setSeconds(initialSeconds);
        setIsActive(false);
        controls.start({
            strokeDashoffset: 283,
            transition: { duration: 0.7, ease: "easeInOut" }
        });
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="flex flex-col items-center justify-center h-[300px] w-[300px]">
            <div className="relative h-full w-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-dark/5"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <motion.circle
                        className="text-primary"
                        strokeWidth="10"
                        strokeDasharray="283"
                        strokeDashoffset="283"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        animate={controls}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="text-4xl font-bold text-primary"
                        key={seconds}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {formatTime(seconds)}
                    </motion.div>
                </div>
            </div>
            <div className="mt-4 space-x-4">
                <motion.button
                    onClick={toggleTimer}
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isActive ? '?쇱떆?뺤?' : '?쒖옉'}
                </motion.button>
                <motion.button
                    onClick={resetTimer}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    珥덇린??                </motion.button>
            </div>
        </div>
    );
};

export default function Counter() {
    return (
        <div className="flex items-center justify-center h-[300px] w-[300px]">
            <TimerCounter initialSeconds={10} />
        </div>
    )
}
