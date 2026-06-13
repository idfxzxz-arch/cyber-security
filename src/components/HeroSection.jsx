import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAppPreferences } from '../context/useAppPreferences'
import { materiData } from '../data/materiData'

function HeroSection() {
  const { t } = useAppPreferences()

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 ring-1 ring-blue-100">
            <ShieldCheck className="h-4 w-4" />
            {t.hero.eyebrow}
          </div>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            WD Cybersecurity Awareness Portal
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {t.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900" to="/materi">
              {t.hero.ctaMaterials}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" to="/simulasi-phishing">
              <BookOpen className="h-4 w-4" />
              {t.hero.ctaSimulation}
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
          <div className="rounded-lg bg-blue-950 p-5 text-white">
            <p className="text-sm font-medium text-blue-100">{t.hero.snapshot}</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                [String(materiData.length), t.hero.materials],
                ['5', t.hero.examples],
                ['9', t.hero.tips],
                ['5', t.hero.quiz],
              ].map(([value, label]) => (
                <div className="rounded-lg bg-white/10 p-4" key={label}>
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            {t.hero.checklist.map((item) => (
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4" key={item}>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
