'use client';

import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>ENV = {process.env.NEXT_PUBLIC_ENV}</h3>
      <h1>Hello, Next.js!</h1>
    </main>
  );
}
