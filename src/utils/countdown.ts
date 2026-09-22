import { CountdownState, EventPhase } from '../types';

export const SCHOOL_NAME = "Sai blite International Senior Secondary School";
export const EVENT_TITLE = "Annual Lottery Ticket Lucky Draw";
export const START_DATE_STR = "26 September";
export const END_DATE_STR = "10 October";
export const DRAW_DATE_STR = "10 October";

/**
 * Calculates current countdown state relative to 26 September and 10 October.
 */
export function getCountdownState(referenceNow: Date = new Date()): CountdownState {
  const currentYear = referenceNow.getFullYear();

  // Define dates in current year
  // September is month index 8 (0-indexed: Jan=0, Feb=1, ... Sep=8, Oct=9)
  const startDate = new Date(currentYear, 8, 26, 0, 0, 0); // 26 Sept 00:00:00
  // Draw date is 10 October, let's target 10 October 10:00 AM local time or 10 October 23:59:59
  const drawDate = new Date(currentYear, 9, 10, 11, 0, 0); // 10 Oct 11:00 AM
  const drawEndDay = new Date(currentYear, 9, 10, 23, 59, 59);

  const nowMs = referenceNow.getTime();
  const startMs = startDate.getTime();
  const drawMs = drawDate.getTime();
  const drawEndMs = drawEndDay.getTime();

  let phase: EventPhase;
  let targetMs: number;
  let targetDateLabel = "";

  if (nowMs < startMs) {
    // Before 26 September
    phase = 'upcoming';
    targetMs = drawMs;
    targetDateLabel = `Draw on 10 October ${currentYear}`;
  } else if (nowMs >= startMs && nowMs < drawMs) {
    // Between 26 September and 10 October Draw Time
    phase = 'active';
    targetMs = drawMs;
    targetDateLabel = `Results Draw on 10 October ${currentYear}`;
  } else if (nowMs >= drawMs && nowMs <= drawEndMs) {
    // On 10 October (Draw Day)
    phase = 'draw_day';
    targetMs = drawEndMs;
    targetDateLabel = `Draw Day: 10 October ${currentYear}`;
  } else {
    // After 10 October
    phase = 'completed';
    targetMs = nowMs;
    targetDateLabel = `Results Drawn on 10 October ${currentYear}`;
  }

  const diffMs = Math.max(0, targetMs - nowMs);
  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Calculate overall timeline progress (from 26 Sept to 10 Oct)
  const totalWindow = drawMs - startMs;
  let progressPercent = 0;
  if (nowMs < startMs) {
    // Prior to start, relative to 10 days before start
    const prepStart = startMs - (7 * 24 * 3600 * 1000);
    const prepRatio = (nowMs - prepStart) / (startMs - prepStart);
    progressPercent = Math.min(100, Math.max(0, Math.round(prepRatio * 15)));
  } else if (nowMs >= drawMs) {
    progressPercent = 100;
  } else {
    progressPercent = Math.min(100, Math.max(15, Math.round(15 + ((nowMs - startMs) / totalWindow) * 85)));
  }

  return {
    days,
    hours,
    minutes,
    seconds,
    totalMilliseconds: diffMs,
    phase,
    progressPercent,
    targetDateLabel,
  };
}
