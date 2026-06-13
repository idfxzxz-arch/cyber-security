import { AlertTriangle, CheckCircle2, Mail, ShieldAlert } from 'lucide-react'

const statusStyle = {
  Aman: {
    icon: CheckCircle2,
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    border: 'border-l-emerald-500',
  },
  Phishing: {
    icon: ShieldAlert,
    badge: 'bg-red-50 text-red-700 ring-red-200',
    border: 'border-l-red-500',
  },
  Berisiko: {
    icon: ShieldAlert,
    badge: 'bg-red-50 text-red-700 ring-red-200',
    border: 'border-l-red-500',
  },
  Mencurigakan: {
    icon: AlertTriangle,
    badge: 'bg-yellow-50 text-yellow-800 ring-yellow-200',
    border: 'border-l-yellow-500',
  },
}

function PhishingCard({ email }) {
  const style = statusStyle[email.status] || statusStyle.Mencurigakan
  const StatusIcon = style.icon

  return (
    <article className={`rounded-lg border border-l-4 border-slate-200 bg-white p-5 shadow-sm ${style.border}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
              <Mail className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-slate-950">{email.senderName}</p>
              <p className="truncate text-sm text-slate-500">{email.senderEmail}</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {email.category && (
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-blue-100">
                {email.category}
              </span>
            )}
            {email.channel && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                {email.channel}
              </span>
            )}
          </div>
          <h3 className="mt-4 text-lg font-bold text-slate-900">{email.subject}</h3>
          <p className="mt-2 leading-7 text-slate-600">{email.preview}</p>
        </div>
        <span className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ring-1 ${style.badge}`}>
          <StatusIcon className="h-4 w-4" />
          {email.status}
        </span>
      </div>
      <div className="mt-5 rounded-lg bg-slate-50 p-4">
        <p className="text-sm font-bold text-slate-700">Tanda mencurigakan atau indikator aman</p>
        <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
          {email.signs.map((sign) => (
            <li className="flex gap-2" key={sign}>
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {sign}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default PhishingCard
