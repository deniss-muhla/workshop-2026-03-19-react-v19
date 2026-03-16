/**
 * Exercise 3: Async Actions (useActionState)
 *
 * BUG: This form manually manages isPending, error, and savedUser state.
 *      It works, but it's verbose and error-prone.
 *
 * TASK: Refactor to use React 19's useActionState hook.
 *       - Import useActionState from 'react'
 *       - Create an action function: (prevState, formData) => result
 *       - Use <form action={dispatch}> instead of onClick
 *       - Remove manual useState calls for isPending, error, savedUser
 *
 * HINT: useActionState returns [state, dispatch, isPending].
 *       The action receives (previousState, formData).
 *
 * FILE: src/components/exercises/UserForm.tsx
 */
import { useState } from 'react';
import { Button, InputField, AlertBanner } from '@ids/react-bundle';

// Simulated API call
async function saveUser(name: string) {
  await new Promise((r) => setTimeout(r, 1000));
  if (name.toLowerCase() === 'error') {
    return { error: 'Name cannot be "error"', user: null };
  }
  return { error: null, user: { id: Math.random().toString(36).slice(2), name } };
}

export function UserForm() {
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [savedUser, setSavedUser] = useState<{ id: string; name: string } | null>(null);

  async function handleSubmit() {
    setIsPending(true);
    setError(null);
    const result = await saveUser(name);
    setIsPending(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSavedUser(result.user);
      setName('');
    }
  }

  return (
    <div className="if flex-column gap-16 max-w-384">
      <div className="if flex-column gap-8">
        <label className="if label medium" htmlFor="user-name">
          User Name
        </label>
        <InputField
          id="user-name"
          name="name"
          type="text"
          placeholder='Enter name (try "error" to see error)'
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          disabled={isPending}
        />
      </div>
      <div>
        <Button onClick={handleSubmit} disabled={isPending}>
          {isPending ? 'Saving...' : 'Save User'}
        </Button>
      </div>
      {error && (
        <AlertBanner type="error">
          <span slot="content">{error}</span>
        </AlertBanner>
      )}
      {savedUser && (
        <AlertBanner type="success">
          <span slot="content">Saved: {savedUser.name} (id: {savedUser.id})</span>
        </AlertBanner>
      )}
    </div>
  );
}
