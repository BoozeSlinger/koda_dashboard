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
  { id: 'lp1', title: 'Launch "The Proof" Landing Page', date: 'Jan 29, 2026', status: 'done' },

  // Done
  { id: '11', title: 'YouTube audit PDF (branded with logo)', date: 'Jan 26, 2026', status: 'done' },
  { id: 'web1', title: 'Update Last Call Collective Service Pricing', date: 'Jan 29, 2026', status: 'done' },
  { id: '15', title: 'Dashboard live status integration', date: 'Jan 26, 2026', status: 'done' },

  // Archived
  { id: '18', title: 'Set up voice transcription (Elyenal Whisper)', date: 'Jan 20, 2026', status: 'archived' },
  { id: '19', title: 'Set up voice replies (ElevenLabs TTS)', date: 'Jan 20, 2026', status: 'archived' },
  { id: '20', title: 'Koda Dashboard - core build', date: 'Jan 20, 2026', status: 'archived' },
];

export const deliverables = [
  { id: 'web', title: 'Last Call Website', icon: '🌐', date: 'Live', type: 'Link', url: 'https://lastcall.marketing' },
  { id: 'lp', title: '"The Proof" LP', icon: '🕵️', date: 'Live', type: 'Link', url: 'https://lastcall.marketing/ai-visibility' },
];
