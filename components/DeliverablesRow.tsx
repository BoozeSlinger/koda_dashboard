import React from 'react';
import styles from './DeliverablesRow.module.css';
import { deliverables } from '../app/data';

export default function DeliverablesRow() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.icon}>📁</span>
        <h3 className={styles.title}>Deliverables</h3>
      </div>
      <div className={styles.grid}>
        {deliverables.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardIcon}>{item.icon}</div>
            <div className={styles.cardContent}>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardDate}>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
