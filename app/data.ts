import React from 'react';

export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'archived';

export interface Task {
  id: string;
  title: string;
  date: string;
  status: TaskStatus;
}

export const tasks: Task[] = [];

export const deliverables = [];
