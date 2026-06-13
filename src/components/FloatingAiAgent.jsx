import { Bot, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppPreferences } from '../context/useAppPreferences'
import AiAgentChat from './AiAgentChat'

function FloatingAiAgent() {
  const [open, setOpen] = useState(false)
  const { t } = useAppPreferences()

  return (
    <div className="fixed inset-x-3 bottom-3 z-[60] flex justify-end sm:inset-x-auto sm:bottom-5 sm:right-5">
      {open && (
        <div className="absolute bottom-16 right-0 w-full max-w-md overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl sm:w-[430px]">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950 text-white">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-slate-950">Cyber AI Agent</p>
                <p className="text-xs text-slate-500">{t.ai.quickHelp}</p>
              </div>
            </div>
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100" onClick={() => setOpen(false)} type="button" aria-label="Tutup AI Agent">
              <X className="h-5 w-5" />
            </button>
          </div>
          <AiAgentChat compact />
          <div className="border-t border-slate-200 bg-white px-4 py-3">
            <Link className="text-sm font-semibold text-blue-900 hover:text-blue-700" to="/ai-agent" onClick={() => setOpen(false)}>
              {t.ai.openFull}
            </Link>
          </div>
        </div>
      )}

      <button className="flex items-center gap-3 rounded-full bg-blue-950 px-5 py-4 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-900" onClick={() => setOpen((value) => !value)} type="button" aria-label={t.common.openAiAgent}>
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="hidden sm:inline">AI Agent</span>
      </button>
    </div>
  )
}

export default FloatingAiAgent
