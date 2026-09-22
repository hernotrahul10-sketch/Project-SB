import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { CountdownState } from '../types';

interface CountdownDisplayProps {
  countdown: CountdownState;
}

interface TimeUnitProps {
  value: number;
  label: string;
  id: string;
}

const TimeUnit: React.FC<TimeUnitProps> = ({ value, label, id }) => {
  const formattedValue = String(value).padStart(2, '0');

  return (
    <div id={id} className="flex flex-col items-center">
      <div className="relative group w-20 sm:w-28 md:w-32 h-24 sm:h-32 md:h-36 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-amber-500/30 p-2 flex items-center justify-center shadow-xl shadow-black/40 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/60 hover:shadow-amber-500/10">
        {/* Subtle inner top highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
        
        {/* Horizontal Card Divider Line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-950/70 border-b border-white/5" />

        {/* Counter Number */}
        <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(245,158,11,0.25)] select-none">
          {formattedValue}
        </span>
      </div>
      
      <span className="mt-3 text-xs sm:text-sm font-semibold tracking-wider text-amber-300/80 uppercase">
        {label}
      </span>
    </div>
  );
};

export const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ countdown }) => {
  return (
    <section id="countdown-section" className="w-full max-w-4xl mx-auto px-4 my-6">
      {/* Central Announcement Banner */}
      <div 
        id="draw-announcement-card"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-amber-500/30 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md"
      >
        {/* Ambient background glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header inside card */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-400/20 text-amber-300 text-xs sm:text-sm font-medium mb-3">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Countdown: 26 September — 10 October</span>
          </div>

          <h2 className="font-cinzel text-xl sm:text-3xl md:text-4xl font-bold text-amber-100 mt-1">
            Lottery Ticket Lucky Draw
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Official countdown to the grand result announcement.
          </p>
        </div>

        {/* 4 Counter Units */}
        <div id="countdown-timer-grid" className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 justify-center max-w-2xl mx-auto relative z-10">
          <TimeUnit id="unit-days" value={countdown.days} label="Days" />
          <TimeUnit id="unit-hours" value={countdown.hours} label="Hours" />
          <TimeUnit id="unit-minutes" value={countdown.minutes} label="Minutes" />
          <TimeUnit id="unit-seconds" value={countdown.seconds} label="Seconds" />
        </div>

        {/* Progress Timeline: 26 September to 10 October */}
        <div id="draw-timeline-container" className="mt-10 pt-6 border-t border-slate-800/80 relative z-10">
          <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2.5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Start: 26 September
            </span>
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Draw Result: 10 October
            </span>
          </div>

          {/* Timeline Bar */}
          <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/60">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 shadow-[0_0_12px_rgba(251,191,36,0.5)] transition-all duration-1000 ease-out"
              style={{ width: `${Math.max(5, Math.min(100, countdown.progressPercent))}%` }}
            />
          </div>
        </div>

        {/* Key Official Note */}
        <div 
          id="official-result-notice"
          className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-400/25 flex items-center justify-center gap-3 text-center"
        >
          <Clock className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-amber-100 text-sm sm:text-base font-medium">
            The lucky draw result will be drawn out on <span className="text-amber-300 font-bold underline underline-offset-4 decoration-amber-400/50">10 October</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
