import React from 'react';
import styles from './StatusPanel.module.css';
import { Status } from '../app/data';

interface Props {
  status: {
    state: Status;
    lastActive: string;
    currentTask: string;
  };
}

export default function StatusPanel({ status }: Props) {
  const getStatusColor = (s: Status) => {
    switch (s) {
      case 'working': return '#10b981'; // green
      case 'thinking': return '#f59e0b'; // amber
      case 'idle': return '#6b7280'; // gray
      case 'sub-agents': return '#8b5cf6'; // violet
      default: return '#6b7280';
    }
  };

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Status</h2>
      <div className={styles.indicator}>
        <div 
          className={styles.dot} 
          style={{ backgroundColor: getStatusColor(status.state) }}
        />
        <span className={styles.state}>{status.state.toUpperCase()}</span>
      </div>
      <div className={styles.details}>
        <p><strong>Task:</strong> {status.currentTask}</p>
        <p className={styles.time}>{status.lastActive}</p>
      </div>
    </div>
  );
}
