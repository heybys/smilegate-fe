import React from 'react';
import styles from './page.module.css';

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.layout}>
      <h3>movie-list layout</h3>
      {children}
    </div>
  );
}
