/**
 * Exercise 1: Re-render Trap
 *
 * BUG: The counter displays but never updates when you click the button.
 *      The console.log shows the value changing, but the UI stays at 0.
 *
 * TASK: Fix this component so the UI updates when the button is clicked.
 *
 * HINT: React only re-renders when STATE changes. Plain variables
 *       don't trigger re-renders.
 *
 * FILE: src/components/exercises/Counter.tsx
 */
import { Button } from '@ids/react-bundle';

let count = 0;

export function Counter() {
  function increment() {
    count++;
    console.log('count is now:', count);
  }

  return (
    <div className="if flex-column gap-16">
      <p className="if typography heading small">Count: {count}</p>
      <div>
        <Button onClick={increment}>Increment</Button>
      </div>
    </div>
  );
}
