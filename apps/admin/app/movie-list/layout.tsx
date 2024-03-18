import React from 'react';
import styles from './page.module.css';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.layout}>{children}</div>;
}
