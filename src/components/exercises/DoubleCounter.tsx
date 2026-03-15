/**
 * Exercise 2: Stale State
 *
 * BUG: Clicking "+2" only increments by 1 instead of 2.
 *      Both setCount calls read the same stale snapshot.
 *
 * TASK: Fix incrementByTwo so it actually adds 2 to the count.
 *
 * HINT: React batches state updates. Both calls to setCount see
 *       the same `count` value from this render. Use a functional
 *       updater to read the latest pending state.
 *
 * FILE: src/components/exercises/DoubleCounter.tsx
 */
import { useState } from 'react';
import { Button } from '@ids/react-bundle';

export function DoubleCounter() {
  const [count, setCount] = useState(0);

  function incrementByTwo() {
    setCount(count + 1);
    setCount(count + 1); // BUG: still reads the same `count`
  }

  return (
    <div className="if flex-column gap-16">
      <p className="if typography heading small">Count: {count}</p>
      <div className="if flex gap-8">
        <Button onClick={() => setCount(count + 1)}>+1</Button>
        <Button onClick={incrementByTwo}>+2 (broken)</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div>
    </div>
  );
}
