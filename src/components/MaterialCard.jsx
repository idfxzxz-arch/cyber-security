import { ArrowRight, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import CategoryBadge from './CategoryBadge'

function MaterialCard({ material }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <CategoryBadge category={material.category} />
      <h3 className="mt-4 text-xl font-bold text-slate-950">{material.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{material.description}</p>
      <div className="mt-5 flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
          <Clock className="h-4 w-4" />
          {material.readTime}
        </span>
        <Link className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-900" to={`/materi/${material.slug}`}>
          Baca Materi
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default MaterialCard
