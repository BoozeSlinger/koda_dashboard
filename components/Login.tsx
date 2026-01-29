'use client';
import React, { useState } from 'react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'Rs133497') {
      onLogin();
    } else {
      setError('Invalid access token');
    }
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f9fafb'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
          Last Call Collective
        </h1>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1rem', color: '#6b7280', textAlign: 'center' }}>
          Koda Dashboard Access
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px'
              }}
              placeholder="Enter access code"
            />
          </div>
          {error && <p style={{ color: 'red', fontSize: '0.875rem', marginBottom: '1rem' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#111827',
              color: 'white',
              padding: '0.75rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}
