export type EventPhase = 'upcoming' | 'active' | 'draw_day' | 'completed';

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMilliseconds: number;
  phase: EventPhase;
  progressPercent: number;
  targetDateLabel: string;
}

export interface LotteryEventDetails {
  schoolName: string;
  eventName: string;
  startDateFormatted: string;
  endDateFormatted: string;
  drawDateFormatted: string;
  announcementText: string;
}
