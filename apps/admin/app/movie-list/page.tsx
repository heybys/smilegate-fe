import { CsrMovieList, SsrMovieList } from '@repo/ui/*';
import styles from './page.module.css';

export default async function About() {
  return (
    <div className={styles.page}>
      <h1>Movies#1 (Server-Side Rendering)</h1>
      <section className={styles.contents}>
        <SsrMovieList />
      </section>
      <hr />
      <h1>Movies#2 (Client-Side Rendering)</h1>
      <section className={styles.contents}>
        <CsrMovieList />
      </section>
    </div>
  );
}