import React from 'react';

const Ring = ({ size = 180, stroke = 14, progress = 0.65, color = '#22d3ee', bg = 'rgba(255,255,255,0.08)', label, value }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, progress));
  const dashOffset = circumference * (1 - clamped);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="block">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bg}
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - dashOffset}
          strokeLinecap="round"
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="text-3xl sm:text-4xl font-bold text-white">{value}</div>
          <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
        </div>
      </div>
    </div>
  );
};

const ActivityRings = ({ move = 0.72, exercise = 0.58, stand = 0.84, moveValue = 520, exerciseValue = 34, standValue = 12 }) => {
  const base = 210;
  return (
    <div className="relative mx-auto my-2" style={{ width: base, height: base }}>
      <div className="absolute inset-0 grid place-items-center">
        <Ring size={base} stroke={14} progress={move} color="#ef4444" bg="rgba(255,255,255,0.08)" label="Move" value={`${moveValue}`}/>
      </div>
      <div className="absolute inset-0 grid place-items-center" style={{ transform: 'scale(0.8)' }}>
        <Ring size={base} stroke={14} progress={exercise} color="#22c55e" bg="rgba(255,255,255,0.08)" label="Exercise" value={`${exerciseValue}m`}/>
      </div>
      <div className="absolute inset-0 grid place-items-center" style={{ transform: 'scale(0.6)' }}>
        <Ring size={base} stroke={14} progress={stand} color="#60a5fa" bg="rgba(255,255,255,0.08)" label="Stand" value={`${standValue}h`}/>
      </div>
    </div>
  );
};

export default ActivityRings;
