import React from 'react';
import styles from './Card.module.css';

export default function ConnectedWorkflows() {
  const workflows = [
    { name: 'YouTube Audits (Drive)', icon: '📁', url: '#' },
    { name: 'Social Media Report', icon: '📊', url: '#' },
    { name: 'System Logs', icon: '⚙️', url: '#' },
  ];

  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Connected Workflows</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
        {workflows.map(wf => (
          <a 
            key={wf.name} 
            href={wf.url}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              textDecoration: 'none',
              color: '#374151',
              transition: 'background 0.2s',
            }}
          >
            <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{wf.icon}</span>
            <span style={{ fontSize: '0.875rem', textAlign: 'center' }}>{wf.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
