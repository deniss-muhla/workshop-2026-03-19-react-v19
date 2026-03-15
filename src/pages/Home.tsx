import { Link } from 'react-router-dom';

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
        <p className="if typography paragraph" style={{ marginTop: 8, maxWidth: 600 }}>
          Each exercise has a <strong>broken component</strong>. Open the file,
          find the bug, and fix it using React 19 features.
        </p>
      </div>

      <div className="if flex-column gap-12">
        {exercises.map((ex) => (
          <Link
            key={ex.num}
            to={`/exercise/${ex.num}`}
            style={{ textDecoration: 'none' }}
          >
            <div
              className="if flex-column gap-4 p-16"
              style={{
                background: 'var(--ids-color-background-secondary, #f5f5f5)',
                borderRadius: 8,
                border: '1px solid var(--ids-color-border-subtle, #e0e0e0)',
                transition: 'box-shadow 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
            >
              <div className="if flex gap-12" style={{ alignItems: 'center' }}>
                <span
                  className="if typography ui"
                  style={{
                    background: 'var(--ids-color-blue-100, #e6f0ff)',
                    color: 'var(--ids-color-blue-600, #0054f0)',
                    padding: '2px 10px',
                    borderRadius: 12,
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  {String(ex.num).padStart(2, '0')}
                </span>
                <span className="if typography heading smallest" style={{ margin: 0 }}>
                  {ex.title}
                </span>
                <span
                  className="if typography ui"
                  style={{
                    marginLeft: 'auto',
                    color: 'var(--ids-color-text-subtle, #666)',
                    fontSize: 13,
                  }}
                >
                  {ex.concept}
                </span>
              </div>
              <p className="if typography ui" style={{ margin: '4px 0 0', color: 'var(--ids-color-text-subtle, #666)' }}>
                {ex.desc}
              </p>
              <code style={{ fontSize: 12, color: 'var(--ids-color-text-subtle, #999)', marginTop: 4 }}>
                {ex.file}
              </code>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
