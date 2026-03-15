/**
 * Exercise 2: Stale State - SOLUTION
 *
 * FIX: Use functional updaters setCount(c => c + 1) instead of
 *      setCount(count + 1). Both calls now read the latest pending
 *      state instead of the same stale snapshot.
 */
import { useState } from 'react';
import { Button } from '@ids/react-bundle';

export function DoubleCounter() {
  const [count, setCount] = useState(0);

  function incrementByTwo() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  return (
    <div className="if flex-column gap-16">
      <p className="if typography heading small">Count: {count}</p>
      <div className="if flex gap-8">
        <Button onClick={() => setCount((c) => c + 1)}>+1</Button>
        <Button onClick={incrementByTwo}>+2</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div>
    </div>
  );
}
