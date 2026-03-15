import { Outlet, NavLink } from 'react-router-dom';

const exercises = [
  { path: '/exercise/1', label: '01 — Re-render Trap' },
  { path: '/exercise/2', label: '02 — Stale State' },
  { path: '/exercise/3', label: '03 — Async Actions' },
  { path: '/exercise/4', label: '04 — Form Status' },
  { path: '/exercise/5', label: '05 — Optimistic UI' },
  { path: '/exercise/6', label: '06 — use() Hook' },
];

export function Layout() {
  return (
    <div className="if flex size-w-100p" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <nav
        className="if flex-column gap-8 p-24"
        style={{
          width: 280,
          flexShrink: 0,
          background: 'var(--ids-color-background-secondary, #f5f5f5)',
          borderRight: '1px solid var(--ids-color-border-subtle, #e0e0e0)',
        }}
      >
        <NavLink
          to="/"
          style={{ textDecoration: 'none', marginBottom: 16 }}
        >
          <h2 className="if typography heading small" style={{ margin: 0 }}>
            React 19 Workshop
          </h2>
        </NavLink>

        <div className="if flex-column gap-4">
          {exercises.map((ex) => (
            <NavLink
              key={ex.path}
              to={ex.path}
              className="if typography ui"
              style={({ isActive }) => ({
                display: 'block',
                padding: '8px 12px',
                borderRadius: 6,
                textDecoration: 'none',
                color: isActive
                  ? 'var(--ids-color-text-primary, #0054f0)'
                  : 'var(--ids-color-text-default, #333)',
                background: isActive
                  ? 'var(--ids-color-background-info-subtle, #e6f0ff)'
                  : 'transparent',
                fontWeight: isActive ? 600 : 400,
              })}
            >
              {ex.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <main className="if flex-column p-32" style={{ flex: 1, overflow: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
}
