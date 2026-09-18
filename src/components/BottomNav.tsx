import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { to: '/', icon: 'home', label: 'Beranda' },
  { to: '/leaderboard', icon: 'leaderboard', label: 'Leaderboard' },
  { to: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { to: '/hall-of-fame', icon: 'emoji_events', label: 'Hall of Fame' },
];

export default function BottomNav() {
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-outline-variant/30 bg-surface-container/90 backdrop-blur-xl md:hidden">
      <ul className="flex items-center justify-around px-2 pb-safe pt-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 transition-colors ${
                isActive(item.to)
                  ? 'text-primary-fixed-dim'
                  : 'text-on-surface-variant'
              }`}
            >
              {isActive(item.to) && (
                <span className="absolute inset-x-3 -top-1 h-0.5 rounded-full bg-primary-fixed-dim" />
              )}
              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              <span className="font-label-sm">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
