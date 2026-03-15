import { ExercisePage } from '../components/ExercisePage';
import { Counter } from '../components/exercises/Counter';

export function Exercise01() {
  return (
    <ExercisePage
      number={1}
      title="Re-render Trap"
      description="The counter shows 0 but never updates when you click. The console proves the value changes. Why doesn't the UI react?"
      filePath="src/components/exercises/Counter.tsx"
      hints={[
        'React only re-renders when state changes via setState.',
        'A plain variable mutation is invisible to React.',
        'Import useState from "react" and use it to track count.',
      ]}
    >
      <Counter />
    </ExercisePage>
  );
}
