import React from 'react';
import styles from './KanbanColumn.module.css';
import TaskCard from './TaskCard';
import { Task } from '../app/data';

interface Props {
  title: string;
  tasks: Task[];
  accentColor: string;
}

export default function KanbanColumn({ title, tasks, accentColor }: Props) {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <div className={styles.dot} style={{ backgroundColor: accentColor }} />
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.count}>{tasks.length}</span>
      </div>
      <div className={styles.list}>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
