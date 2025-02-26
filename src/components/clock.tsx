import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360;
  const hourDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  // Positions for the numbers 1 to 12
  const numbers = Array.from({ length: 12 }, (_, i) => {
    const angle = ((i + 1) / 12) * 2 * Math.PI;
    const x = 50 + Math.sin(angle) * 38; // Radius 38
    const y = 50 - Math.cos(angle) * 38;
    return { num: i + 1, x, y };
  });

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clock Circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#003663"
        strokeWidth="2"
        fill="none"
      />

      {/* Clock Numbers */}
      {numbers.map(({ num, x, y }) => (
        <text
          key={num}
          x={x}
          y={y}
          fill="#003663"
          fontSize="5"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {num}
        </text>
      ))}

      {/* Center Dot */}
      <circle cx="50" cy="50" r="2" fill="#003663" />

      {/* Hour Hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="32"
        stroke="#003663"
        strokeWidth="3"
        strokeLinecap="round"
        transform={`rotate(${hourDeg} 50 50)`}
      />

      {/* Minute Hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="22"
        stroke="#003663"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${minuteDeg} 50 50)`}
      />

      {/* Second Hand */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="15"
        stroke="red"
        strokeWidth="1"
        strokeLinecap="round"
        transform={`rotate(${secondDeg} 50 50)`}
      />
    </svg>
  );
};

export default Clock;
