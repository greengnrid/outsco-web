import { Link } from 'react-router-dom';

export function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-container mx-auto px-gutter h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-space-sm">
          <div className="flex items-center gap-3">
            <img src="/[LOGO] IPB Prestasi - Warna.png" alt="IPB Prestasi" className="h-7" />
            <img src="/Frame 1430102693.png" alt="IPB University" className="h-7" />
            <img src="/OSC Logo 2 1.png" alt="OSC" className="h-7" />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-space-lg">
          <Link to="/" className="text-body-md text-gray-700 hover:text-primary transition-colors">Beranda</Link>
          <Link to="/tentang-kami" className="text-body-md text-gray-700 hover:text-primary transition-colors">Tentang Kami</Link>
          <Link to="/leaderboard" className="text-body-md text-gray-700 hover:text-primary transition-colors">Leaderboard</Link>
          <Link to="/dashboard" className="text-body-md text-gray-700 hover:text-primary transition-colors">Dashboard</Link>
          <Link to="/halloffame" className="text-body-md text-gray-700 hover:text-primary transition-colors">Hall of Fame</Link>
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-label-sm text-white">
            NP
          </div>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
