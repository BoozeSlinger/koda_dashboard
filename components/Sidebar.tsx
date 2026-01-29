'use client';
import React, { useState, useRef } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div 
          className={styles.avatar} 
          onClick={handleAvatarClick}
          style={avatar ? { backgroundImage: `url(${avatar})`, backgroundSize: 'cover' } : {}}
          title="Click to upload avatar"
        >
          {!avatar && "😊"}
        </div>
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          accept="image/*"
          onChange={handleFileChange}
        />
        <div className={styles.info}>
          <h2 className={styles.name}>Koda</h2>
          <div className={styles.status}>
            <span className={styles.dot}></span>
            <span className={styles.text}>Idle</span>
          </div>
          <p className={styles.subtext}>Ready for tasks</p>
        </div>
      </div>
      
      <nav className={styles.nav}>
        {/* Placeholder for future nav items */}
      </nav>
    </div>
  );
}
