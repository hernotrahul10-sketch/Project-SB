import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { SCHOOL_NAME } from '../utils/countdown';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-6 px-4 text-center" id="school-header">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* School Crest Badge */}
        <div 
          id="school-crest-badge"
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/25 text-amber-300 text-xs sm:text-sm font-medium tracking-wide mb-5 shadow-sm backdrop-blur-md"
        >
          <Award className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="uppercase tracking-wider">Senior Secondary School • Official Event</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        </div>

        {/* Institution Title */}
        <h1 
          id="school-title"
          className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-snug drop-shadow-md"
        >
          {SCHOOL_NAME}
        </h1>

        <div className="flex items-center gap-3 mt-4 text-slate-300 text-sm sm:text-base font-normal">
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></span>
          <span className="flex items-center gap-1.5 text-amber-200/90 font-medium tracking-wide">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Official Lucky Draw Portal
          </span>
          <span className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent"></span>
        </div>
      </div>
    </header>
  );
};
