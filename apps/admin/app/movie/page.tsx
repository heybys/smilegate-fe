import styles from './page.module.css';
import { Counter } from '../../components/counter';

export default function Movie() {
  return (
    <div className={styles.page}>
      <h3>movie-list page</h3>
      <Counter />
    </div>
  );
}
