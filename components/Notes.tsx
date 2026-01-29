'use client';

import React, { useState } from 'react';
import styles from './Card.module.css';

export default function Notes() {
  const [note, setNote] = useState('');

  const handleSave = () => {
    // In a real app, save to API
    console.log('Saving note:', note);
    alert('Note saved to Koda\'s memory!');
    setNote('');
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Instructions / Notes</h2>
      <textarea
        className="w-full border p-2 rounded"
        style={{ 
          width: '100%', 
          height: '100px', 
          borderColor: '#e5e7eb', 
          borderRadius: '4px',
          padding: '0.5rem',
          resize: 'vertical',
          marginBottom: '0.5rem',
          fontFamily: 'inherit'
        }}
        placeholder="Drop instructions for Koda here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={handleSave}
          style={{
            background: '#2563eb',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          Send to Agent
        </button>
      </div>
    </div>
  );
}
