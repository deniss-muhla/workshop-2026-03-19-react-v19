import { ExercisePage } from '../components/ExercisePage';
import { UserForm } from '../components/exercises/UserForm';

export function Exercise03() {
  return (
    <ExercisePage
      number={3}
      title="Async Actions"
      description="This form manually manages isPending, error, and savedUser state. Refactor it to use React 19's useActionState hook."
      filePath="src/components/exercises/UserForm.tsx"
      hints={[
        'Import useActionState from "react".',
        'Create an action: async (prevState, formData) => newState.',
        'useActionState returns [state, dispatch, isPending].',
        'Use <form action={dispatch}> instead of onClick.',
        'Read form values with formData.get("name").',
      ]}
    >
      <UserForm />
    </ExercisePage>
  );
}
