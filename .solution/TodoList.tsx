/**
 * Exercise 5: Optimistic UI - SOLUTION
 *
 * FIX: Use useOptimistic to show the new todo instantly.
 *      The optimistic reducer adds items with pending: true.
 *      Render optimisticTodos instead of todos.
 *      When the server responds, real state updates and
 *      optimistic state auto-reverts.
 */
import { useState, useOptimistic } from 'react';
import { Button, InputField } from '@ids/react-bundle';

// Simulated API call
async function addTodoToServer(text: string) {
  await new Promise((r) => setTimeout(r, 1500));
  return { id: crypto.randomUUID(), text };
}

interface Todo {
  id: string;
  text: string;
  pending: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: '1', text: 'Learn React', pending: false },
    { id: '2', text: 'Learn React 19', pending: false },
  ]);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (current: Todo[], newTodo: Todo) => [...current, { ...newTodo, pending: true }]
  );

  async function handleAdd(formData: FormData) {
    const text = formData.get('todo') as string;
    if (!text?.trim()) return;

    addOptimisticTodo({ id: crypto.randomUUID(), text, pending: true });

    const savedTodo = await addTodoToServer(text);
    setTodos((prev) => [...prev, { ...savedTodo, pending: false }]);
  }

  return (
    <div className="if flex-column gap-16" style={{ maxWidth: 400 }}>
      <form action={handleAdd} className="if flex gap-8">
        <InputField id="todo-input" name="todo" type="text" placeholder="New todo..." />
        <Button>Add</Button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }} className="if flex-column gap-8">
        {optimisticTodos.map((todo) => (
          <li
            key={todo.id}
            className="if flex gap-8 p-12"
            style={{
              background: 'var(--ids-color-background-secondary, #f5f5f5)',
              borderRadius: 6,
              opacity: todo.pending ? 0.6 : 1,
            }}
          >
            <span className="if typography ui">{todo.text}</span>
            {todo.pending && (
              <span style={{ color: 'var(--ids-color-text-subtle, #999)' }}>(saving...)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
