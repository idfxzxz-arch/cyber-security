import { Moon, Sun } from 'lucide-react'
import { useAppPreferences } from '../context/useAppPreferences'

function PreferenceControls({ stacked = false }) {
  const { language, setLanguage, setTheme, t, theme } = useAppPreferences()
  const isDark = theme === 'dark'

  return (
    <div className={`flex gap-2 ${stacked ? 'items-stretch justify-between' : 'items-center'}`}>
      <button
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        type="button"
        aria-label={isDark ? t.common.light : t.common.dark}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span className={stacked ? '' : 'hidden xl:inline'}>{isDark ? t.common.light : t.common.dark}</span>
      </button>

      <select
        className="h-10 rounded-lg border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
        onChange={(event) => setLanguage(event.target.value)}
        value={language}
        aria-label={t.common.language}
      >
        <option value="id">ID</option>
        <option value="en">EN</option>
      </select>
    </div>
  )
}

export default PreferenceControls
