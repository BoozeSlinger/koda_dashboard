import React from 'react';

export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'archived';

export interface Task {
  id: string;
  title: string;
  date: string;
  status: TaskStatus;
}

export const tasks: Task[] = [
  // To Do
  { id: '1', title: 'Fix PDF page breaks (no mid-section cuts)', date: 'Jan 27, 2026', status: 'todo' },
  { id: '2', title: 'Add charts/graphs to reports', date: 'Jan 27, 2026', status: 'todo' },
  { id: '3', title: 'Get X API access for reliable monitoring', date: 'Jan 27, 2026', status: 'todo' },
  { id: '4', title: 'Build weekly business report template', date: 'Jan 27, 2026', status: 'todo' },
  { id: '5', title: 'Research newsletter sponsorship rates (AI/tech)', date: 'Jan 27, 2026', status: 'todo' },
  { id: '6', title: 'LinkedIn stats integration', date: 'Jan 27, 2026', status: 'todo' },
  { id: '7', title: 'Set up Skool analytics tracking', date: 'Jan 27, 2026', status: 'todo' },

  // In Progress
  { id: '8', title: 'X (Twitter) export role - monitoring & content', date: 'Jan 28, 2026', status: 'in-progress' },
  { id: '9', title: 'Metrics tracking system (historical comparisons)', date: 'Jan 28, 2026', status: 'in-progress' },
  { id: '10', title: 'Daily AI Pulse system', date: 'Jan 28, 2026', status: 'in-progress' },

  // Done
  { id: '11', title: 'YouTube audit PDF (branded with logo)', date: 'Jan 26, 2026', status: 'done' },
  { id: '12', title: 'PDF generation pipeline (groxbit)', date: 'Jan 26, 2026', status: 'done' },
  { id: '13', title: 'Google Drive folder organization', date: 'Jan 26, 2026', status: 'done' },
  { id: '14', title: 'AIS brand guidelines & logo saved', date: 'Jan 26, 2026', status: 'done' },
  { id: '15', title: 'Dashboard live status integration', date: 'Jan 26, 2026', status: 'done' },
  { id: '16', title: 'Drive upload script (large files)', date: 'Jan 26, 2026', status: 'done' },
  { id: '17', title: 'Daily SWOT Analysis system', date: 'Jan 26, 2026', status: 'done' },

  // Archived
  { id: '18', title: 'Set up voice transcription (Elyenal Whisper)', date: 'Jan 20, 2026', status: 'archived' },
  { id: '19', title: 'Set up voice replies (ElevenLabs TTS)', date: 'Jan 20, 2026', status: 'archived' },
  { id: '20', title: 'Koda Dashboard - core build', date: 'Jan 20, 2026', status: 'archived' },
];

export const deliverables = [
  { id: 'd1', title: 'YouTube Audits', icon: '📊', date: 'Jan 28', type: 'Chart' },
  { id: 'd2', title: 'Daily AI Pulse', icon: '🔥', date: 'Jan 28', type: 'Report' },
  { id: 'd3', title: 'Daily SWOT Analysis', icon: '🧠', date: 'Jan 28', type: 'Analysis' },
  { id: 'd4', title: 'Security', icon: '🛡️', date: 'Jan 28', type: 'Audit' },
];
