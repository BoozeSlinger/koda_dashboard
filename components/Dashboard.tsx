import React from 'react';
import styles from '../app/dashboard.module.css';
import Sidebar from './Sidebar';
import KanbanColumn from './KanbanColumn';
import DeliverablesRow from './DeliverablesRow';
import { tasks } from '../app/data';

export default function Dashboard() {
  const todoTasks = tasks.filter(t => t.status === 'todo');
  const progressTasks = tasks.filter(t => t.status === 'in-progress');
  const doneTasks = tasks.filter(t => t.status === 'done');
  const archivedTasks = tasks.filter(t => t.status === 'archived');

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.main}>
        <header className={styles.topBar}>
          <div className={styles.branding}>
            <span className={styles.emoji}>😊</span>
            <h1 className={styles.title}>Koda Dashboard</h1>
            <div className={styles.statusDot}></div>
            <span className={styles.statusText}>Online</span>
          </div>
          <div className={styles.meta}>
            <span className={styles.lastSync}>Last sync: Just now</span>
            <button className={styles.logout}>Logout</button>
          </div>
        </header>

        <div className={styles.kanbanBoard}>
          <KanbanColumn title="To Do" tasks={todoTasks} accentColor="var(--accent-blue)" />
          <KanbanColumn title="In Progress" tasks={progressTasks} accentColor="var(--accent-orange)" />
          <KanbanColumn title="Done" tasks={doneTasks} accentColor="var(--accent-green)" />
          <KanbanColumn title="Archived" tasks={archivedTasks} accentColor="var(--accent-gray)" />
        </div>

        <DeliverablesRow />
      </div>
    </div>
  );
}
