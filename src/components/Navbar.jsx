import { Menu, Shield, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppPreferences } from '../context/useAppPreferences'
import PreferenceControls from './PreferenceControls'

const navItems = [
  { labelKey: 'home', path: '/' },
  { labelKey: 'materials', path: '/materi' },
  { labelKey: 'simulation', path: '/simulasi-phishing' },
  { labelKey: 'practice', path: '/praktik' },
  { labelKey: 'aiAgent', path: '/ai-agent' },
  { labelKey: 'tips', path: '/tips-keamanan' },
  { labelKey: 'quiz', path: '/kuis' },
  { labelKey: 'about', path: '/tentang' },
]

function navClass({ isActive }) {
  return `rounded-lg px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-blue-950 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useAppPreferences()

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink className="flex items-center gap-3" to="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950 text-white">
            <Shield className="h-5 w-5" />
          </span>
          <span className="text-base font-bold text-slate-950 sm:text-lg">WD Cybersecurity</span>
        </NavLink>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <NavLink className={navClass} key={item.path} to={item.path}>
              {t.nav[item.labelKey]}
            </NavLink>
          ))}
          <div className="ml-2">
            <PreferenceControls />
          </div>
        </div>

        <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 xl:hidden" onClick={() => setOpen((value) => !value)} type="button" aria-label="Buka menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-73px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-3 xl:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink className={navClass} key={item.path} onClick={() => setOpen(false)} to={item.path}>
                {t.nav[item.labelKey]}
              </NavLink>
            ))}
            <div className="mt-2 rounded-lg bg-slate-50 p-3">
              <PreferenceControls stacked />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
