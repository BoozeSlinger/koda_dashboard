import React from 'react';
import styles from './Card.module.css';

interface Action {
  id: number;
  action: string;
  timestamp: string;
}

export default function ActionLog({ logs }: { logs: Action[] }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Action Log</h2>
      <ul className={styles.list}>
        {logs.map(log => (
          <li key={log.id} className={styles.item}>
            <span style={{ color: '#374151' }}>{log.action}</span>
            <span className={styles.date}>{log.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
