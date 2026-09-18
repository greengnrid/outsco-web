import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/20 bg-surface-container-low/80 backdrop-blur-xl">
      <div className="mx-auto max-w-container px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display-hero text-headline-md font-bold text-on-surface">
              IPB OUTSCO
            </Link>
            <p className="mt-3 max-w-xs font-body-sm text-on-surface-variant">
              Sistem gamifikasi resmi IPB University untuk membangun Outscholar yang kompeten dan berprestasi.
            </p>
            <div className="mt-4 flex gap-3">
              {['instagram', 'linkedin', 'youtube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant transition-colors hover:bg-primary-container hover:text-on-primary-container"
                  aria-label={platform}
                >
                  <span className="material-symbols-outlined text-[20px]">{platform === 'instagram' ? 'photo_camera' : platform === 'linkedin' ? 'work' : 'play_circle'}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="font-label-lg uppercase tracking-wider text-on-surface">Pillar OSC</h4>
            <ul className="mt-3 space-y-2">
              {['Organization', 'Service', 'Competition'].map((p) => (
                <li key={p}>
                  <span className="font-body-sm text-on-surface-variant transition-colors hover:text-primary-fixed-dim cursor-pointer">
                    {p}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-label-lg uppercase tracking-wider text-on-surface">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: 'Beranda', to: '/' },
                { label: 'Leaderboard', to: '/leaderboard' },
                { label: 'Dashboard', to: '/dashboard' },
                { label: 'Hall of Fame', to: '/hall-of-fame' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body-sm text-on-surface-variant transition-colors hover:text-primary-fixed-dim"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-label-lg uppercase tracking-wider text-on-surface">Kontak</h4>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5 text-[18px] text-on-surface-variant">mail</span>
                <span className="font-body-sm text-on-surface-variant">outscoweb@ipb.ac.id</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined mt-0.5 text-[18px] text-on-surface-variant">location_on</span>
                <span className="font-body-sm text-on-surface-variant">IPB University, Bogor</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-outline-variant/20 pt-6 sm:flex-row">
          <p className="font-body-sm text-on-surface-variant">
            &copy; {new Date().getFullYear()} IPB OUTSCO. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="font-body-sm text-on-surface-variant transition-colors hover:text-primary-fixed-dim cursor-pointer">Privacy Policy</span>
            <span className="font-body-sm text-on-surface-variant transition-colors hover:text-primary-fixed-dim cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
