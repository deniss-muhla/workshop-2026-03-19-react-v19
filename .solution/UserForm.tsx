/**
 * Exercise 3: Async Actions - SOLUTION
 *
 * FIX: Replace manual useState for isPending/error/savedUser
 *      with useActionState. Use <form action={dispatch}> instead
 *      of onClick. The hook manages state + async + pending.
 */
import { useActionState } from 'react';
import { Button, InputField } from '@ids/react-bundle';

// Simulated API call
async function saveUser(name: string) {
  await new Promise((r) => setTimeout(r, 1000));
  if (name.toLowerCase() === 'error') {
    return { error: 'Name cannot be "error"', user: null };
  }
  return { error: null, user: { id: Math.random().toString(36).slice(2), name } };
}

interface FormState {
  error: string | null;
  savedUser: { id: string; name: string } | null;
}

export function UserForm() {
  const [state, dispatch, isPending] = useActionState(
    async (_prevState: FormState, formData: FormData): Promise<FormState> => {
      const name = formData.get('name') as string;
      const result = await saveUser(name);
      if (result.error) {
        return { error: result.error, savedUser: null };
      }
      return { error: null, savedUser: result.user };
    },
    { error: null, savedUser: null }
  );

  return (
    <form action={dispatch}>
      <div className="if flex-column gap-16" style={{ maxWidth: 400 }}>
        <div className="if flex-column gap-8">
          <label className="if label medium" htmlFor="user-name">
            User Name
          </label>
          <InputField
            id="user-name"
            name="name"
            type="text"
            placeholder='Enter name (try "error" to see error)'
            disabled={isPending}
          />
        </div>
        <div>
          <Button htmlType="submit" disabled={isPending}>
            {isPending ? 'Saving...' : 'Save User'}
          </Button>
        </div>
        {state.error && (
          <p className="if typography ui" style={{ color: 'var(--ids-color-red-600, red)' }}>
            {state.error}
          </p>
        )}
        {state.savedUser && (
          <p className="if typography ui" style={{ color: 'var(--ids-color-green-600, green)' }}>
            Saved: {state.savedUser.name} (id: {state.savedUser.id})
          </p>
        )}
      </div>
    </form>
  );
}
