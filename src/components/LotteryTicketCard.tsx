import React from 'react';
import { Ticket, Award, CheckCircle2, Shield } from 'lucide-react';
import { SCHOOL_NAME } from '../utils/countdown';

export const LotteryTicketCard: React.FC = () => {
  return (
    <section id="lottery-ticket-section" className="w-full max-w-4xl mx-auto px-4 mb-8">
      <div className="relative">
        {/* Ticket Container with Perforated Style */}
        <div 
          id="school-lottery-ticket"
          className="relative bg-gradient-to-br from-amber-50 via-amber-100/90 to-amber-200/80 rounded-2xl border-2 border-amber-300 shadow-2xl overflow-hidden text-slate-900"
        >
          {/* Top Decorative Header Ribbon */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-amber-300 py-2.5 px-4 text-center border-b border-amber-400/30 flex items-center justify-between">
            <span className="text-[11px] sm:text-xs tracking-widest font-semibold uppercase flex items-center gap-1.5 text-amber-200">
              <Ticket className="w-3.5 h-3.5 text-amber-400" />
              Official Entry Voucher
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-wider text-amber-300/80">
              SERIES: SBISSS-LUCKY-DRAW
            </span>
          </div>

          {/* Ticket Body: Two-Panel Grid (Main Ticket + Stub) */}
          <div className="grid grid-cols-1 md:grid-cols-12 relative">
            {/* Left/Main Ticket Area */}
            <div className="p-6 sm:p-8 md:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-amber-700" />
                  <span className="text-xs font-bold tracking-wider uppercase text-amber-800">
                    Official School Event
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-2xl font-extrabold text-slate-900 leading-snug tracking-tight">
                  {SCHOOL_NAME}
                </h3>

                <p className="font-cinzel text-amber-900 font-bold text-base sm:text-lg mt-1 tracking-wide">
                  LUCKY DRAW LOTTERY TICKET
                </p>
              </div>

              {/* Draw Schedule Box inside Ticket */}
              <div className="my-5 p-4 rounded-xl bg-amber-500/10 border border-amber-600/20 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div>
                  <span className="block text-slate-600 uppercase font-semibold text-[10px] tracking-wider">
                    Countdown Period
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    26 September – 10 October
                  </span>
                </div>
                <div>
                  <span className="block text-amber-800 uppercase font-semibold text-[10px] tracking-wider">
                    Result Draw Out Date
                  </span>
                  <span className="font-bold text-amber-950 text-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                    10 October
                  </span>
                </div>
              </div>

              {/* Essential Notice Note */}
              <div className="flex items-center gap-2 text-xs text-slate-700 italic border-t border-amber-300/60 pt-3">
                <Shield className="w-4 h-4 text-amber-700 shrink-0" />
                <span>
                  Keep your lottery ticket safe. All prize results will be drawn out on 10 October.
                </span>
              </div>
            </div>

            {/* Perforated Divider (Hidden on mobile, vertical dashed line on desktop) */}
            <div className="hidden md:block absolute right-[33.333%] top-0 bottom-0 w-0 border-r-2 border-dashed border-amber-400/80 z-10" />

            {/* Right/Stub Area */}
            <div className="bg-amber-200/60 p-6 sm:p-8 md:col-span-4 flex flex-col justify-between border-t md:border-t-0 border-amber-300/80">
              <div className="text-center md:text-right">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600">
                  Draw Status
                </span>
                <div className="inline-block md:block mt-1 px-3 py-1 bg-amber-500/20 border border-amber-600/30 rounded-lg">
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-amber-950 tracking-wider">
                    RESULT ON 10 OCT
                  </span>
                </div>
              </div>

              <div className="my-4 text-center">
                <div className="inline-flex flex-col items-center justify-center p-3 rounded-xl border border-amber-400 bg-white/70 shadow-sm w-full">
                  <span className="text-[10px] tracking-widest text-slate-500 uppercase font-semibold">
                    Ticket Verification
                  </span>
                  <span className="font-cinzel text-lg sm:text-xl font-black text-slate-900 tracking-wider">
                    ★ VALID TICKET ★
                  </span>
                  <span className="text-[11px] text-amber-800 font-medium">
                    26 Sept — 10 Oct
                  </span>
                </div>
              </div>

              <div className="text-center">
                {/* Visual Barcode */}
                <div className="h-8 bg-slate-900/85 rounded flex items-center justify-around px-2 py-1 opacity-80" aria-label="Barcode">
                  <span className="w-0.5 h-full bg-amber-100 inline-block"></span>
                  <span className="w-1.5 h-full bg-amber-100 inline-block"></span>
                  <span className="w-0.5 h-full bg-amber-100 inline-block"></span>
                  <span className="w-1 h-full bg-amber-100 inline-block"></span>
                  <span className="w-2 h-full bg-amber-100 inline-block"></span>
                  <span className="w-0.5 h-full bg-amber-100 inline-block"></span>
                  <span className="w-1.5 h-full bg-amber-100 inline-block"></span>
                  <span className="w-1 h-full bg-amber-100 inline-block"></span>
                  <span className="w-2.5 h-full bg-amber-100 inline-block"></span>
                  <span className="w-0.5 h-full bg-amber-100 inline-block"></span>
                </div>
                <span className="block text-[9px] font-mono text-slate-600 mt-1 uppercase tracking-widest">
                  Result Drawn: 10 October
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
