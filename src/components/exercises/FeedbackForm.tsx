/**
 * Exercise 4: Form Status (useFormStatus)
 *
 * BUG: The SubmitButton receives isPending as a prop from the parent.
 *      This is prop drilling — it doesn't scale with component depth.
 *
 * TASK: Refactor to use React 19's useFormStatus hook.
 *       - Import useFormStatus from 'react-dom'
 *       - Remove the isPending prop from SubmitButton
 *       - Read { pending } from useFormStatus() inside SubmitButton
 *       - Change parent to use <form action={...}> instead of onClick
 *
 * HINT: useFormStatus MUST be called in a component that is a CHILD
 *       of a <form>. It reads the nearest parent form's status.
 *       It takes NO parameters.
 *
 * FILE: src/components/exercises/FeedbackForm.tsx
 */
import { useState } from 'react';
import { Button, Textarea } from '@ids/react-bundle';

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button disabled={isPending}>
      {isPending ? 'Submitting...' : 'Submit Feedback'}
    </Button>
  );
}

export function FeedbackForm() {
  const [isPending, setIsPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit() {
    setIsPending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsPending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="if flex-column gap-16">
        <p className="if typography heading small" style={{ color: 'var(--ids-color-green-600, green)' }}>
          Thank you for your feedback!
        </p>
        <Button onClick={() => setSubmitted(false)}>Submit another</Button>
      </div>
    );
  }

  return (
    <div className="if flex-column gap-16" style={{ maxWidth: 500 }}>
      <div className="if flex-column gap-8">
        <label className="if label medium" htmlFor="feedback">
          Your Feedback
        </label>
        <Textarea
          id="feedback"
          name="feedback"
          placeholder="Tell us what you think..."
          rows={4}
          disabled={isPending}
        />
      </div>
      <SubmitButton isPending={isPending} />
    </div>
  );
}
