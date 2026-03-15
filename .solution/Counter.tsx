/**
 * Exercise 1: Re-render Trap - SOLUTION
 *
 * FIX: Replace the plain `let count` variable with useState.
 *      React only re-renders when state changes via setState.
 *      A plain variable mutation is invisible to React.
 */
import { useState } from 'react';
import { Button } from '@ids/react-bundle';

export function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
    console.log('count is now:', count + 1);
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
