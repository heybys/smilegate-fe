'use client';

import { useEffect, useState } from 'react';

export default function TodoGetAndViewer() {
  const [todos, setTodos] = useState<string[]>([]);

  const fetchTodos = () => {
    fetch('/todos').then(async (value) => {
      const data = await value.json();
      setTodos(data);
    });
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <>
      {todos.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </>
  );
}
