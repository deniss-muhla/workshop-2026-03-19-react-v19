/**
 * Exercise 4: Form Status - SOLUTION
 *
 * FIX: Remove isPending prop from SubmitButton. Instead, use
 *      useFormStatus() from 'react-dom' to read the parent form's
 *      pending state. Convert parent to <form action={...}>.
 */
import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button, Textarea, AlertBanner } from '@ids/react-bundle';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button htmlType="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit Feedback'}
    </Button>
  );
}

export function FeedbackForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit() {
    await new Promise((r) => setTimeout(r, 1500));
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
    <form action={handleSubmit}>
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
          />
        </div>
        <SubmitButton />
      </div>
    </form>
  );
}
