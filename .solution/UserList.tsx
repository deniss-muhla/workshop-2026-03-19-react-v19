/**
 * Exercise 6: Data Loading with use() - SOLUTION
 *
 * FIX: Replace useEffect + useState with use() + Suspense.
 *      Create the Promise at module level (outside the component).
 *      use(promise) suspends the component until resolved.
 *      Suspense boundary handles the loading fallback.
 */
import { use, Suspense } from 'react';
import { Card, CardType } from '@ids/react-bundle';

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

// Promise created OUTSIDE the component (module level)
const usersPromise = fetchUsers();

function UserListInner() {
  const users = use(usersPromise);

  return (
    <div className="if flex-column gap-12">
      {users.map((user) => (
        <Card key={user.id} type={CardType.ELEVATED}>
          <div className="if flex-column gap-4 p-16">
            <span className="if typography ui" style={{ fontWeight: 600 }}>
              {user.name}
            </span>
            <span className="if typography ui" style={{ color: 'var(--ids-color-text-subtle, #666)' }}>
              {user.email}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

export function UserList() {
  return (
    <Suspense fallback={<p className="if typography ui">Loading users...</p>}>
      <UserListInner />
    </Suspense>
  );
}
