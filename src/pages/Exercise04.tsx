import { ExercisePage } from '../components/ExercisePage';
import { FeedbackForm } from '../components/exercises/FeedbackForm';

export function Exercise04() {
  return (
    <ExercisePage
      number={4}
      title="Form Status"
      description="The SubmitButton receives isPending as a prop. Remove the prop drilling using React 19's useFormStatus hook."
      filePath="src/components/exercises/FeedbackForm.tsx"
      hints={[
        'Import useFormStatus from "react-dom".',
        'useFormStatus() takes NO parameters.',
        'It MUST be called inside a component that is a CHILD of a <form>.',
        'It reads { pending } from the nearest parent form.',
        'Change the parent to use <form action={...}> instead of onClick.',
      ]}
    >
      <FeedbackForm />
    </ExercisePage>
  );
}
