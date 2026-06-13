import { AlertTriangle, CheckCircle2, RotateCcw, ShieldAlert } from 'lucide-react'
import { useMemo, useState } from 'react'

const resultStyles = {
  Aman: {
    icon: CheckCircle2,
    wrapper: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    badge: 'bg-emerald-100 text-emerald-800',
  },
  Mencurigakan: {
    icon: AlertTriangle,
    wrapper: 'border-yellow-200 bg-yellow-50 text-yellow-900',
    badge: 'bg-yellow-100 text-yellow-900',
  },
  Berisiko: {
    icon: ShieldAlert,
    wrapper: 'border-red-200 bg-red-50 text-red-800',
    badge: 'bg-red-100 text-red-800',
  },
}

function PracticeCard({ practice }) {
  const [selectedChoice, setSelectedChoice] = useState(null)
  const result = useMemo(
    () => practice.choices.find((choice) => choice.id === selectedChoice),
    [practice.choices, selectedChoice],
  )
  const ResultIcon = result ? resultStyles[result.status].icon : null

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-blue-100">
            {practice.category}
          </span>
          <h3 className="mt-4 text-xl font-bold text-slate-950">{practice.title}</h3>
        </div>
        <span className="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600 ring-1 ring-slate-200">
          Simulasi tindakan
        </span>
      </div>

      <div className="mt-5 rounded-lg bg-slate-50 p-4">
        <p className="text-sm font-bold text-slate-700">Skenario</p>
        <p className="mt-2 leading-7 text-slate-600">{practice.scenario}</p>
      </div>

      <div className="mt-5">
        <p className="text-sm font-bold text-slate-700">{practice.question}</p>
        <div className="mt-3 grid gap-3">
          {practice.choices.map((choice) => (
            <button
              className={`rounded-lg border p-4 text-left text-sm font-medium leading-6 transition ${
                selectedChoice === choice.id
                  ? 'border-blue-900 bg-blue-50 text-blue-950'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
              key={choice.id}
              onClick={() => setSelectedChoice(choice.id)}
              type="button"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>

      {result && (
        <div className={`mt-5 rounded-lg border p-4 ${resultStyles[result.status].wrapper}`}>
          <div className="flex items-center gap-2">
            <ResultIcon className="h-5 w-5" />
            <span className={`rounded-full px-3 py-1 text-xs font-bold ${resultStyles[result.status].badge}`}>
              {result.status}
            </span>
          </div>
          <p className="mt-3 leading-7">{result.feedback}</p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-current px-4 py-2 text-sm font-semibold" onClick={() => setSelectedChoice(null)} type="button">
            <RotateCcw className="h-4 w-4" />
            Coba lagi
          </button>
        </div>
      )}
    </article>
  )
}

export default PracticeCard
