import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ExpandableSection,
  ExpandableSectionTitle,
  ExpandableSectionContent,
  ExpandableSectionArrow,
  ExpandableSectionVariant,
  Ui32ArrowSmDown,
} from '@ids/react-bundle';

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
        <Link to="/" className="if link font-size-12">
          &larr; Back to exercises
        </Link>
        <h1 className="if typography heading medium mt-8">
          Exercise {String(number).padStart(2, '0')}: {title}
        </h1>
        <p className="if typography paragraph mt-4 max-w-512">
          {description}
        </p>
      </div>

      <div className="if flex-column gap-8 p-16 border-radius-6 background-faded-primary border-solid border-width-1 border-color-blue-200">
        <span className="if typography ui font-wght-700 color-blue-500">
          File to edit:
        </span>
        <code className="if font-size-14 color-blue-400">
          {filePath}
        </code>
      </div>

      <div className="if p-24 border-radius-6 background-layer-2 border-solid border-width-1 border-color-beige-500">
        {children}
      </div>

      <ExpandableSection variant={ExpandableSectionVariant.LIGHT}>
        <ExpandableSectionTitle>
          <span className="if typography ui font-wght-700">Hints</span>
          <ExpandableSectionArrow>
            <Ui32ArrowSmDown />
          </ExpandableSectionArrow>
        </ExpandableSectionTitle>
        <ExpandableSectionContent>
          <ul className="if flex-column gap-4 mt-8 pl-20">
            {hints.map((hint, i) => (
              <li key={i} className="if typography ui">{hint}</li>
            ))}
          </ul>
        </ExpandableSectionContent>
      </ExpandableSection>
    </div>
  );
}
