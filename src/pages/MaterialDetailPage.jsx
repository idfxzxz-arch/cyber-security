import { ArrowLeft, CheckCircle2, Clock, Lightbulb } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CategoryBadge from '../components/CategoryBadge'
import { materiData } from '../data/materiData'

function MaterialDetailPage() {
  const { slug } = useParams()
  const material = materiData.find((item) => item.slug === slug)

  if (!material) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-950">Materi tidak ditemukan</h1>
        <Link className="mt-6 inline-flex rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white" to="/materi">
          Kembali ke daftar materi
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-700" to="/materi">
        <ArrowLeft className="h-4 w-4" />
        Kembali ke daftar materi
      </Link>
      <article className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <CategoryBadge category={material.category} />
        <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">{material.title}</h1>
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
          <Clock className="h-4 w-4" />
          Waktu baca {material.readTime}
        </p>

        <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
          {material.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-8 rounded-lg bg-blue-50 p-5">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950">
            <CheckCircle2 className="h-5 w-5 text-blue-800" />
            Poin penting
          </h2>
          <ul className="mt-4 grid gap-3 text-slate-700">
            {material.keyPoints.map((point) => (
              <li className="flex gap-3" key={point}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-800" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 rounded-lg bg-emerald-50 p-5">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950">
            <Lightbulb className="h-5 w-5 text-emerald-700" />
            Tips keamanan
          </h2>
          <ul className="mt-4 grid gap-3 text-slate-700">
            {material.tips.map((tip) => (
              <li className="flex gap-3" key={tip}>
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">Contoh kasus sederhana</h2>
            <p className="mt-3 leading-7 text-slate-700">{material.caseExample}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-950">Kesimpulan</h2>
            <p className="mt-3 leading-7 text-slate-700">{material.conclusion}</p>
          </div>
        </section>
      </article>
    </div>
  )
}

export default MaterialDetailPage
