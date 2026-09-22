import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CountdownDisplay } from './components/CountdownDisplay';
import { LotteryTicketCard } from './components/LotteryTicketCard';
import { getCountdownState } from './utils/countdown';
import { CountdownState } from './types';

export default function App() {
  const [countdown, setCountdown] = useState<CountdownState>(() => getCountdownState());

  useEffect(() => {
    // Tick every second to keep countdown precise
    const interval = setInterval(() => {
      setCountdown(getCountdownState());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col justify-between selection:bg-amber-500/30 selection:text-amber-200">
      {/* Background Decorative Lighting */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center py-6 px-3 sm:px-6">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* School Identity Header */}
          <Header />

          {/* Countdown Display: 26 September to 10 October */}
          <CountdownDisplay countdown={countdown} />

          {/* Official Lottery Ticket Card with Draw Info */}
          <LotteryTicketCard />
        </div>
      </main>

      {/* Footer */}
      <footer id="main-footer" className="w-full py-6 text-center border-t border-slate-800/60 bg-slate-950/60 text-slate-400 text-xs sm:text-sm">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Sai blite International Senior Secondary School</span>
          <span className="text-amber-400/90 font-medium">
            Lucky Draw Result: 10 October
          </span>
        </div>
      </footer>
    </div>
  );
}
