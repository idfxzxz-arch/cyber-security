import { Languages, Moon, Sun } from 'lucide-react'
import { useAppPreferences } from '../context/useAppPreferences'

function PreferenceControls({ stacked = false }) {
  const { language, setLanguage, setTheme, t, theme } = useAppPreferences()

  return (
    <div className={`flex gap-2 ${stacked ? 'flex-col' : 'items-center'}`}>
      <div className="flex rounded-lg border border-slate-200 bg-white p-1">
        <button
          className={`inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${theme === 'light' ? 'bg-blue-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          onClick={() => setTheme('light')}
          type="button"
          aria-label={t.common.light}
        >
          <Sun className="h-4 w-4" />
          <span className={stacked ? '' : 'hidden 2xl:inline'}>{t.common.light}</span>
        </button>
        <button
          className={`inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-semibold transition ${theme === 'dark' ? 'bg-blue-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          onClick={() => setTheme('dark')}
          type="button"
          aria-label={t.common.dark}
        >
          <Moon className="h-4 w-4" />
          <span className={stacked ? '' : 'hidden 2xl:inline'}>{t.common.dark}</span>
        </button>
      </div>

      <div className="flex rounded-lg border border-slate-200 bg-white p-1">
        <span className="hidden items-center px-2 text-slate-500 sm:inline-flex">
          <Languages className="h-4 w-4" />
        </span>
        {['id', 'en'].map((item) => (
          <button
            className={`rounded-md px-3 py-2 text-sm font-bold transition ${language === item ? 'bg-blue-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
            key={item}
            onClick={() => setLanguage(item)}
            type="button"
          >
            {item.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PreferenceControls
