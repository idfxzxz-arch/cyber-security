import { Bot, CornerDownLeft, RotateCcw, UserRound } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppPreferences } from '../context/useAppPreferences'
import { aiKnowledgeBase, suggestedQuestions } from '../data/aiAgentData'

function findAnswer(message, t) {
  const normalizedMessage = message.toLowerCase()
  const match = aiKnowledgeBase.find((item) => item.keywords.some((keyword) => normalizedMessage.includes(keyword)))

  if (match) {
    return {
      role: 'agent',
      topic: match.topic,
      text: match.answer,
      actions: match.actions,
      relatedMaterialSlug: match.relatedMaterialSlug,
    }
  }

  return {
    role: 'agent',
    topic: 'Rekomendasi Umum',
    text: t.ai.fallback,
    actions: ['Jangan ambil tindakan terburu-buru.', 'Verifikasi melalui kanal resmi.', 'Buka daftar materi untuk membaca topik terkait.'],
    relatedMaterialSlug: 'mengenal-cybersecurity',
  }
}

function AiAgentChat({ compact = false }) {
  const { t } = useAppPreferences()
  const initialMessages = useMemo(
    () => [
      {
        role: 'agent',
        text: t.ai.greeting,
      },
    ],
    [t.ai.greeting],
  )
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const canSend = input.trim().length > 0
  const answeredQuestions = useMemo(() => messages.filter((message) => message.role === 'user').length, [messages])

  const sendMessage = (messageText = input) => {
    const text = messageText.trim()
    if (!text) {
      return
    }

    setMessages((current) => [...current, { role: 'user', text }, findAnswer(text, t)])
    setInput('')
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className={`flex flex-col gap-4 border-b border-slate-200 ${compact ? 'p-4' : 'p-5 sm:flex-row sm:items-center sm:justify-between'}`}>
        <div className="flex items-center gap-3">
          <div className={`${compact ? 'h-9 w-9' : 'h-11 w-11'} flex items-center justify-center rounded-lg bg-blue-950 text-white`}>
            <Bot className={compact ? 'h-5 w-5' : 'h-6 w-6'} />
          </div>
          <div>
            <h2 className={`${compact ? 'text-base' : 'text-xl'} font-bold text-slate-950`}>{t.ai.title}</h2>
            <p className="text-sm text-slate-500">{t.ai.subtitle}</p>
          </div>
        </div>
        <span className={`w-fit rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700 ring-1 ring-emerald-200 ${compact ? 'text-xs' : 'text-sm'}`}>
          {answeredQuestions} {t.ai.questions}
        </span>
      </div>

      <div className={`${compact ? 'max-h-[360px] p-3' : 'max-h-[560px] p-4'} overflow-y-auto bg-slate-50`}>
        <div className="grid gap-4">
          {messages.map((message, index) => (
            <div className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`} key={`${message.role}-${index}`}>
              {message.role === 'agent' && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-950 text-white">
                  <Bot className="h-5 w-5" />
                </div>
              )}
              <div className={`${compact ? 'max-w-[260px] p-3 text-sm sm:max-w-xs' : 'max-w-3xl p-4'} rounded-lg ${message.role === 'user' ? 'bg-blue-950 text-white' : 'border border-slate-200 bg-white text-slate-700'}`}>
                {message.topic && <p className="mb-2 text-xs font-bold uppercase tracking-wide text-blue-700">{message.topic}</p>}
                <p className="leading-7">{message.text}</p>
                {message.actions && (
                  <ul className="mt-3 grid gap-2 text-sm">
                    {message.actions.map((action) => (
                      <li className="flex gap-2" key={action}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {action}
                      </li>
                    ))}
                  </ul>
                )}
                {message.relatedMaterialSlug && (
                  <Link className="mt-4 inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50" to={`/materi/${message.relatedMaterialSlug}`}>
                    {t.ai.related}
                  </Link>
                )}
              </div>
              {message.role === 'user' && (
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-slate-700">
                  <UserRound className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`border-t border-slate-200 ${compact ? 'p-3' : 'p-4'}`}>
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
          {suggestedQuestions.slice(0, compact ? 4 : suggestedQuestions.length).map((question) => (
            <button className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50" key={question} onClick={() => sendMessage(question)} type="button">
              {question}
            </button>
          ))}
        </div>
        <div className={`flex flex-col gap-3 ${compact ? '' : 'sm:flex-row'}`}>
          <input
            className="min-h-11 flex-1 rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-900 focus:ring-2 focus:ring-blue-100"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                sendMessage()
              }
            }}
            placeholder={t.ai.placeholder}
            type="text"
            value={input}
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:bg-slate-300" disabled={!canSend} onClick={() => sendMessage()} type="button">
            {t.ai.send}
            <CornerDownLeft className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" onClick={() => setMessages(initialMessages)} type="button">
            <RotateCcw className="h-4 w-4" />
            {t.ai.reset}
          </button>
        </div>
      </div>
    </section>
  )
}

export default AiAgentChat
