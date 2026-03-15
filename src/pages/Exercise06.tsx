import { ExercisePage } from '../components/ExercisePage';
import { UserList } from '../components/exercises/UserList';

export function Exercise06() {
  return (
    <ExercisePage
      number={6}
      title="use() Hook"
      description="This component uses useEffect + useState to fetch data. Simplify it with React 19's use() hook and Suspense."
      filePath="src/components/exercises/UserList.tsx"
      hints={[
        'Import use from "react" and Suspense.',
        'Create the Promise OUTSIDE the component (module level).',
        'use(promise) suspends until the Promise resolves.',
        'Wrap the component in <Suspense fallback={<Loading />}> from the parent.',
        'The Promise must NOT be created inside the component — it causes infinite loops.',
      ]}
    >
      <UserList />
    </ExercisePage>
  );
}
