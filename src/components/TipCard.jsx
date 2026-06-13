import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react'

const styles = {
  safe: {
    icon: CheckCircle2,
    wrapper: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  danger: {
    icon: ShieldAlert,
    wrapper: 'border-red-200 bg-red-50 text-red-700',
  },
  warning: {
    icon: AlertTriangle,
    wrapper: 'border-yellow-200 bg-yellow-50 text-yellow-800',
  },
}

function TipCard({ tip }) {
  const style = styles[tip.tone]
  const Icon = style.icon

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`flex h-11 w-11 items-center justify-center rounded-lg border ${style.wrapper}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-950">{tip.title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{tip.description}</p>
    </article>
  )
}

export default TipCard
