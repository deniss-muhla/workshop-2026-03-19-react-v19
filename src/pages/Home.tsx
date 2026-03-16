import { Link } from 'react-router-dom';
import { Card, CardType, Tag } from '@ids/react-bundle';

const exercises = [
  {
    num: 1,
    title: 'Re-render Trap',
    desc: 'Why does the counter not update? Plain variables vs useState.',
    file: 'src/components/exercises/Counter.tsx',
    concept: 'State drives rendering',
  },
  {
    num: 2,
    title: 'Stale State',
    desc: 'Clicking +2 only adds 1. React batches state updates.',
    file: 'src/components/exercises/DoubleCounter.tsx',
    concept: 'Functional updaters',
  },
  {
    num: 3,
    title: 'Async Actions',
    desc: 'Too much manual state. Refactor with useActionState.',
    file: 'src/components/exercises/UserForm.tsx',
    concept: 'useActionState',
  },
  {
    num: 4,
    title: 'Form Status',
    desc: 'Prop drilling isPending. Use useFormStatus instead.',
    file: 'src/components/exercises/FeedbackForm.tsx',
    concept: 'useFormStatus',
  },
  {
    num: 5,
    title: 'Optimistic UI',
    desc: 'The todo appears only after the server responds. Make it instant.',
    file: 'src/components/exercises/TodoList.tsx',
    concept: 'useOptimistic',
  },
  {
    num: 6,
    title: 'use() Hook',
    desc: 'useEffect + useState for data fetching. Simplify with use().',
    file: 'src/components/exercises/UserList.tsx',
    concept: 'use() + Suspense',
  },
];

export function Home() {
  return (
    <div className="if flex-column gap-24">
      <div>
        <h1 className="if typography heading large">React 19 Workshop</h1>
        <p className="if typography paragraph mt-8 max-w-512">
          Each exercise has a <strong>broken component</strong>. Open the file,
          find the bug, and fix it using React 19 features.
        </p>
      </div>

      <div className="if flex-column gap-12">
        {exercises.map((ex) => (
          <Link
            key={ex.num}
            to={`/exercise/${ex.num}`}
            className="if link standalone icon display-block size-w-100p"
          >
            <Card type={CardType.ELEVATED} className="if size-w-100p">
              <div className="if flex-column gap-4 p-16">
                <div className="if flex gap-12 align-items-center">
                  <Tag variant="blue" size="small">
                    {String(ex.num).padStart(2, '0')}
                  </Tag>
                  <span className="if typography heading smallest m-0 flex-grow">
                    {ex.title}
                  </span>
                  <span
                    className="if typography ui font-size-12 color-foreground-secondary"
                  >
                    {ex.concept}
                  </span>
                </div>
                <p className="if typography ui mt-4 mb-0 color-foreground-secondary">
                  {ex.desc}
                </p>
                <code className="if font-size-12 color-foreground-secondary mt-4">
                  {ex.file}
                </code>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
