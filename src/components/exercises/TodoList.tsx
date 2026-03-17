/**
 * Exercise 5: Optimistic UI (useOptimistic)
 *
 * BUG: When adding a todo, the UI waits for the server response
 *      before showing the new item. This feels slow.
 *
 * TASK: Use React 19's useOptimistic to show the new todo instantly.
 *       - Import useOptimistic from 'react'
 *       - Create [optimisticTodos, addOptimisticTodo] = useOptimistic(...)
 *       - Show the optimistic todo immediately with a "(saving...)" indicator
 *       - Render optimisticTodos instead of todos
 *
 * HINT: useOptimistic(state, (current, optimistic) => newState)
 *       The optimistic value auto-reverts when the Action completes.
 *
 * FILE: src/components/exercises/TodoList.tsx
 */
import { useState } from "react";
import { Button, InputField } from "@ids/react-bundle";

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
    { id: "1", text: "Learn React", pending: false },
    { id: "2", text: "Learn React 19", pending: false },
  ]);

  async function handleAdd(formData: FormData) {
    const text = formData.get("todo") as string;
    if (!text?.trim()) return;

    // BUG: UI only updates AFTER server responds
    const savedTodo = await addTodoToServer(text);
    setTodos((prev) => [...prev, { ...savedTodo, pending: false }]);
  }

  return (
    <div className="if flex-column gap-16 max-w-384">
      <form action={handleAdd} className="if flex gap-8">
        <InputField
          id="todo-input"
          name="todo"
          type="text"
          placeholder="New todo..."
        />
        <Button htmlType="submit">Add</Button>
      </form>
      <ul className="if flex-column gap-8 list-style-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`if flex gap-8 p-12 border-radius-6 background-layer-2${todo.pending ? " opacity-60" : ""}`}
          >
            <span className="if typography ui">{todo.text}</span>
            {todo.pending && (
              <span className="if color-foreground-secondary">(saving...)</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
