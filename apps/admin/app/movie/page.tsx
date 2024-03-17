'use client';

import React, { useCallback, useState } from 'react';
import styles from './page.module.css';

export default function Movie() {
  const [input, setInput] = useState('');

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      location.href = `/movie/${input}`;
    },
    [input],
  );
  return (
    <div className={styles.main}>
      <form onSubmit={onSubmit}>
        <h1>Hello Movie</h1>

        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <input type="submit" value="search" />
      </form>
    </div>
  );
}
