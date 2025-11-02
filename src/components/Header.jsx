import React from 'react';
import { User, Calendar } from 'lucide-react';

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
  }).format(date);
}

const Header = () => {
  const today = new Date();
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4">
      <div>
        <p className="text-xs text-slate-400 flex items-center gap-1">
          <Calendar className="h-3.5 w-3.5" /> {formatDate(today)}
        </p>
        <h1 className="text-xl sm:text-2xl font-semibold text-white mt-1">Your Activity</h1>
      </div>
      <button
        aria-label="Profile"
        className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center shadow-inner shadow-black/40"
      >
        <User className="h-5 w-5 text-white/80" />
      </button>
    </div>
  );
};

export default Header;
