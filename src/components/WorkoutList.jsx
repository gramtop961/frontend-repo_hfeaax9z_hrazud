import React, { useState } from 'react';
import { Dumbbell, Bike, Activity, Plus, ChevronRight } from 'lucide-react';

const ICONS = {
  Strength: Dumbbell,
  Cycling: Bike,
  Cardio: Activity,
};

const typeOptions = Object.keys(ICONS);

const WorkoutRow = ({ workout }) => {
  const Icon = ICONS[workout.type] || Activity;
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
          <Icon className="h-5 w-5 text-white/80" />
        </div>
        <div>
          <div className="text-white font-medium">{workout.type}</div>
          <div className="text-xs text-white/60">{workout.duration} min • {workout.calories} kcal</div>
        </div>
      </div>
      <ChevronRight className="h-5 w-5 text-white/30" />
    </div>
  );
};

const WorkoutList = ({ items = [], onAdd }) => {
  const [type, setType] = useState('Strength');
  const [duration, setDuration] = useState('30');
  const [calories, setCalories] = useState('220');

  const add = (e) => {
    e.preventDefault();
    const d = Math.max(1, parseInt(duration || '0', 10));
    const c = Math.max(1, parseInt(calories || '0', 10));
    onAdd?.({ type, duration: d, calories: c, id: crypto.randomUUID() });
  };

  return (
    <div className="px-4 sm:px-6">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-sm shadow-lg shadow-black/20">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white/90 font-semibold">Recent Workouts</h3>
          <span className="text-xs text-white/50">Today</span>
        </div>
        <div className="divide-y divide-white/10">
          {items.length === 0 && (
            <div className="py-6 text-center text-white/50">No workouts yet</div>
          )}
          {items.map((w) => (
            <WorkoutRow key={w.id} workout={w} />
          ))}
        </div>
        <form onSubmit={add} className="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-2">
          <div className="sm:col-span-2">
            <label className="text-xs text-white/60">Type</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            >
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-white/60">Minutes</label>
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            />
          </div>
          <div>
            <label className="text-xs text-white/60">Calories</label>
            <input
              type="number"
              min="1"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500/50"
            />
          </div>
          <div className="flex items-end">
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white px-3 py-2 font-medium shadow-lg shadow-cyan-900/30 hover:brightness-110 transition">
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WorkoutList;
