import { ExercisePage } from '../components/ExercisePage';
import { DoubleCounter } from '../components/exercises/DoubleCounter';

export function Exercise02() {
  return (
    <ExercisePage
      number={2}
      title="Stale State"
      description='Clicking "+2" only increments by 1. Both setCount calls read the same stale snapshot of state.'
      filePath="src/components/exercises/DoubleCounter.tsx"
      hints={[
        'React batches state updates within the same event handler.',
        'Both setCount(count + 1) calls see the same count value.',
        'Use a functional updater: setCount(c => c + 1) to read the latest pending state.',
      ]}
    >
      <DoubleCounter />
    </ExercisePage>
  );
}
