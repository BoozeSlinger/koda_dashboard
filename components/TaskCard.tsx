import React from 'react';
import styles from './TaskCard.module.css';
import { Task } from '../app/data';

export default function TaskCard({ task }: { task: Task }) {
  const getBorderColor = (status: string) => {
    switch (status) {
      case 'todo': return 'var(--accent-blue)';
      case 'in-progress': return 'var(--accent-orange)';
      case 'done': return 'var(--accent-green)';
      case 'archived': return 'var(--accent-gray)';
      default: return 'var(--border)';
    }
  };

  return (
    <div className={styles.card} style={{ borderLeftColor: getBorderColor(task.status) }}>
      <div className={styles.header}>
        <span className={styles.title}>{task.title}</span>
        {task.status === 'done' && <span className={styles.check}>✓</span>}
      </div>
      <div className={styles.footer}>
        <span className={styles.date}>{task.date}</span>
      </div>
    </div>
  );
}
