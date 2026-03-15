import { ExercisePage } from '../components/ExercisePage';
import { TodoList } from '../components/exercises/TodoList';

export function Exercise05() {
  return (
    <ExercisePage
      number={5}
      title="Optimistic UI"
      description="Adding a todo waits for the server before showing it. Use React 19's useOptimistic to show new items instantly."
      filePath="src/components/exercises/TodoList.tsx"
      hints={[
        'Import useOptimistic from "react".',
        'useOptimistic(state, reducerFn) returns [optimisticState, addOptimistic].',
        'The reducer: (current, newItem) => [...current, { ...newItem, pending: true }].',
        'Call addOptimistic(tempTodo) before awaiting the server.',
        'Render optimisticTodos instead of todos in the JSX.',
      ]}
    >
      <TodoList />
    </ExercisePage>
  );
}
