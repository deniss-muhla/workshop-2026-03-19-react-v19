/**
 * Exercise 6: Data Loading with use()
 *
 * BUG: This component uses useEffect + useState to fetch data.
 *      It works but requires manual loading/error state management
 *      and causes multiple render cycles.
 *
 * TASK: Refactor to use React 19's use() hook with Suspense.
 *       - Create the Promise OUTSIDE the component (important!)
 *       - Use use(promise) to read the resolved value
 *       - Wrap the component in <Suspense fallback={...}> from the parent
 *       - Use an Error Boundary for error handling
 *
 * HINT: use() suspends the component until the Promise resolves.
 *       The Promise must NOT be created inside the component,
 *       or it will cause an infinite suspense loop.
 *
 * FILE: src/components/exercises/UserList.tsx
 */
import { useState, useEffect } from 'react';
import { Card, CardType, AlertBanner } from '@ids/react-bundle';

// Simulated API call
function fetchUsers(): Promise<{ id: number; name: string; email: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' },
      ]);
    }, 1500);
  });
}

export function UserList() {
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="if typography ui">Loading users...</p>;
  }

  if (error) {
    return (
      <AlertBanner type="error">
        <span slot="content">Error: {error}</span>
      </AlertBanner>
    );
  }

  return (
    <div className="if flex-column gap-12">
      {users?.map((user) => (
        <Card key={user.id} type={CardType.ELEVATED} className="if size-w-100p">
          <div className="if flex-column gap-4 p-16">
            <span className="if typography ui font-wght-700">
              {user.name}
            </span>
            <span className="if typography ui color-foreground-secondary">
              {user.email}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
