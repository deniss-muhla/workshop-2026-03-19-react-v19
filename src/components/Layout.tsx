import { Outlet, NavLink } from 'react-router-dom';
import { Shortcut } from '@ids/react-bundle';

const exercises = [
  { path: '/exercise/1', label: '01 - Re-render Trap' },
  { path: '/exercise/2', label: '02 - Stale State' },
  { path: '/exercise/3', label: '03 - Async Actions' },
  { path: '/exercise/4', label: '04 - Form Status' },
  { path: '/exercise/5', label: '05 - Optimistic UI' },
  { path: '/exercise/6', label: '06 - use() Hook' },
];

export function Layout() {
  return (
    <div className="if flex size-w-100p size-h-100vh">
      {/* Sidebar */}
      <nav className="if flex-column gap-8 p-24 flex-shrink-0 background-layer-2 size-w-256 border-right-solid border-right-width-1 border-color-beige-500">
        <NavLink
          to="/"
          className="if link standalone quiet mb-16"
        >
          <h2 className="if typography heading small m-0">
            React 19 Workshop
          </h2>
        </NavLink>

        <div className="if flex-column gap-4">
          {exercises.map((ex) => (
            <Shortcut
              key={ex.path}
              as={NavLink}
              to={ex.path}
              variant="light"
            >
              {ex.label}
            </Shortcut>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="if flex-column flex-grow p-32 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
