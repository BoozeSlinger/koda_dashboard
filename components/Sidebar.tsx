import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile}>
        <div className={styles.avatar}>😊</div>
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
