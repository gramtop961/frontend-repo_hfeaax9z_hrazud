import React, { useState } from 'react';
import Header from './components/Header';
import ActivityRings from './components/ActivityRings';
import StatsGrid from './components/StatsGrid';
import WorkoutList from './components/WorkoutList';

const App = () => {
  const [workouts, setWorkouts] = useState([
    { id: 'w1', type: 'Strength', duration: 45, calories: 320 },
    { id: 'w2', type: 'Cycling', duration: 20, calories: 150 },
    { id: 'w3', type: 'Cardio', duration: 15, calories: 110 },
  ]);

  const addWorkout = (w) => {
    setWorkouts((prev) => [w, ...prev].slice(0, 8));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-slate-900 to-slate-950" />

      <main className="relative mx-auto max-w-md sm:max-w-2xl px-2 sm:px-0 py-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-cyan-950/50 overflow-hidden">
          <Header />

          <section className="px-4 sm:px-6">
            <ActivityRings move={0.72} exercise={0.58} stand={0.84} moveValue={520} exerciseValue={34} standValue={12} />
          </section>

          <section className="mt-2 mb-4">
            <StatsGrid steps={7421} calories={520} bpm={72} minutes={34} />
          </section>

          <section className="mb-6">
            <WorkoutList items={workouts} onAdd={addWorkout} />
          </section>
        </div>

        <p className="text-center text-[11px] text-white/40 mt-4">Designed with an iOS-inspired feel • Local-only demo</p>
      </main>
    </div>
  );
};

export default App;
