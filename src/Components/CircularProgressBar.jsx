import React from 'react';

const CircularProgressBar = ({ percentage,task,completedtask }) => {
    const radius = 75;
    const stroke = 10; 
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            style={{ transform: 'rotate(-90deg)' }}
            className=' outline-none select-none'
        >
            <circle
                stroke="whitesmoke"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="cyan"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={`${circumference} ${circumference}`}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy="0.3em"
                fontSize="30px"
                fontWeight={900}
                fill="yellow"
                transform={`rotate(90 ${radius} ${radius})`}
            >
                
                {`${completedtask} / ${task}`}
            </text>
        </svg>
    );
};

export default CircularProgressBar;
