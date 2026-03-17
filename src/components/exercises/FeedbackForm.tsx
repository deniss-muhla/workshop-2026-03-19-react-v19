/**
 * Exercise 4: Form Status (useFormStatus)
 *
 * BUG: The SubmitButton receives isPending as a prop from the parent.
 *      This is prop drilling - it doesn't scale with component depth.
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
import { useState } from "react";
import { Button, Textarea, AlertBanner } from "@ids/react-bundle";

function SubmitButton({
  isPending,
  onClick,
}: {
  isPending: boolean;
  onClick: () => void;
}) {
  return (
    <Button htmlType="submit" onClick={onClick} disabled={isPending}>
      {isPending ? "Submitting..." : "Submit Feedback"}
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
        <AlertBanner type="success">
          <span slot="content">Thank you for your feedback!</span>
        </AlertBanner>
        <Button onClick={() => setSubmitted(false)}>Submit another</Button>
      </div>
    );
  }

  return (
    <form>
      <div className="if flex-column gap-16 max-w-512">
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
        <SubmitButton isPending={isPending} onClick={handleSubmit} />
      </div>
    </form>
  );
}
