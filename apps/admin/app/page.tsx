import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>ENV = {process.env.ENV}</h3>
      <h1>Hello, Next.js!</h1>
    </main>
  );
}
