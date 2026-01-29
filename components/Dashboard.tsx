import React from 'react';
import StatusPanel from './StatusPanel';
import Deliverables from './Deliverables';
import ActionLog from './ActionLog';
import Notes from './Notes';
import SecurityAudits from './SecurityAudits';
import ConnectedWorkflows from './ConnectedWorkflows';
import { agentStatus, deliverables, actionLog, securityAudits } from '../app/data';
import styles from '../app/dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.topBar}>
        <h1>Koda // Control Center</h1>
        <div className={styles.user}>User: Ryan</div>
      </header>
      
      <main className={styles.grid}>
        <div className={styles.colLeft}>
          <StatusPanel status={agentStatus} />
          <Notes />
          <ConnectedWorkflows />
        </div>
        
        <div className={styles.colRight}>
          <Deliverables items={deliverables} />
          <div className={styles.splitRow}>
            <ActionLog logs={actionLog} />
            <SecurityAudits audits={securityAudits} />
          </div>
        </div>
      </main>
    </div>
  );
}
