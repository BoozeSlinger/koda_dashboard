import React from 'react';
import styles from './Card.module.css';

interface Item {
  id: number;
  title: string;
  type: string;
  url: string;
  date: string;
}

export default function Deliverables({ items }: { items: Item[] }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.header}>Deliverables</h2>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.item}>
            <div className={styles.itemMain}>
              <span className={styles.typeBadge}>{item.type}</span>
              <a href={item.url} className={styles.link}>{item.title}</a>
            </div>
            <span className={styles.date}>{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
