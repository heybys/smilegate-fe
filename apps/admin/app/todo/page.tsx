import { getTodos } from '@utils/data';
import TodoGetAndViewer from './components/TodoGetAndViewer';

function TodoViewer({ todos }: { todos: string[] }) {
  return (
    <>
      {todos.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </>
  );
}

export default async function Todo() {
  const todos = await getTodos();

  return (
    <div>
      <h1>Todo page</h1>
      <TodoViewer todos={todos} />
      <hr />
      <TodoGetAndViewer />
    </div>
  );
}
