import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ExercisePageProps {
  number: number;
  title: string;
  description: string;
  filePath: string;
  hints: string[];
  children: ReactNode;
}

export function ExercisePage({ number, title, description, filePath, hints, children }: ExercisePageProps) {
  return (
    <div className="if flex-column gap-24">
      <div>
        <Link to="/" className="if typography ui" style={{ color: 'var(--ids-color-blue-600, #0054f0)', fontSize: 13 }}>
          &larr; Back to exercises
        </Link>
        <h1 className="if typography heading medium" style={{ marginTop: 8 }}>
          Exercise {String(number).padStart(2, '0')}: {title}
        </h1>
        <p className="if typography paragraph" style={{ marginTop: 4, maxWidth: 600 }}>
          {description}
        </p>
      </div>

      <div
        className="if flex-column gap-8 p-16"
        style={{
          background: 'var(--ids-color-background-info-subtle, #e6f0ff)',
          borderRadius: 8,
          border: '1px solid var(--ids-color-blue-200, #b3d4ff)',
        }}
      >
        <span className="if typography ui" style={{ fontWeight: 700, color: 'var(--ids-color-blue-700, #003db3)' }}>
          File to edit:
        </span>
        <code style={{ fontSize: 14, color: 'var(--ids-color-blue-600, #0054f0)' }}>
          {filePath}
        </code>
      </div>

      <div
        style={{
          padding: 24,
          background: 'var(--ids-color-background-secondary, #f9f9f9)',
          borderRadius: 8,
          border: '1px solid var(--ids-color-border-subtle, #e0e0e0)',
        }}
      >
        {children}
      </div>

      <details>
        <summary className="if typography ui" style={{ cursor: 'pointer', fontWeight: 600 }}>
          Hints
        </summary>
        <ul className="if flex-column gap-4" style={{ marginTop: 8, paddingLeft: 20 }}>
          {hints.map((hint, i) => (
            <li key={i} className="if typography ui">{hint}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}
