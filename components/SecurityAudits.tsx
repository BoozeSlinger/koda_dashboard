import React from 'react';
import styles from './Card.module.css';

interface Audit {
  id: number;
  issue: string;
  severity: string;
  status: string;
}

export default function SecurityAudits({ audits }: { audits: Audit[] }) {
  const getSeverityColor = (s: string) => {
    switch(s.toLowerCase()) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Security Audits (Weekly)</h2>
      <ul className={styles.list}>
        {audits.map(audit => (
          <li key={audit.id} className={styles.item}>
            <div className={styles.itemMain}>
              <div 
                style={{ 
                  width: 8, 
                  height: 8, 
                  borderRadius: '50%', 
                  background: getSeverityColor(audit.severity) 
                }} 
              />
              <span style={{ color: '#374151' }}>{audit.issue}</span>
            </div>
            <span className={styles.typeBadge}>{audit.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
