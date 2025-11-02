import React from 'react';
import { Activity, Flame, Heart, Timer } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, sub, color }) => (
  <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm shadow-lg shadow-black/20">
    <div className="flex items-center gap-3">
      <div className={`h-10 w-10 rounded-xl grid place-items-center ${color} text-white/90`}> 
        <Icon className="h-5 w-5" />
      </div>
      <div className="ml-auto text-right">
        <div className="text-sm text-white/60">{label}</div>
        <div className="text-lg font-semibold text-white">{value}</div>
        {sub && <div className="text-xs text-white/50">{sub}</div>}
      </div>
    </div>
  </div>
);

const StatsGrid = ({ steps = 7421, calories = 520, bpm = 72, minutes = 34 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6">
      <StatCard icon={Activity} label="Steps" value={`${steps.toLocaleString()}`} sub="Goal 10,000" color="bg-gradient-to-br from-sky-500/70 to-sky-600/70" />
      <StatCard icon={Flame} label="Calories" value={`${calories} kcal`} sub="Move ring" color="bg-gradient-to-br from-rose-500/70 to-rose-600/70" />
      <StatCard icon={Heart} label="Heart" value={`${bpm} bpm`} sub="Resting" color="bg-gradient-to-br from-pink-500/70 to-pink-600/70" />
      <StatCard icon={Timer} label="Exercise" value={`${minutes} min`} sub="Today" color="bg-gradient-to-br from-emerald-500/70 to-emerald-600/70" />
    </div>
  );
};

export default StatsGrid;
