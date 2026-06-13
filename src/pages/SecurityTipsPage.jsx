import { Lightbulb } from 'lucide-react'
import TipCard from '../components/TipCard'
import { tipsData } from '../data/tipsData'

function SecurityTipsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 text-white">
          <Lightbulb className="h-6 w-6" />
        </div>
        <h1 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">Tips Keamanan</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Kumpulan tips singkat untuk membantu karyawan bekerja lebih aman saat menggunakan akun, email, perangkat, dan data perusahaan.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tipsData.map((tip) => (
          <TipCard key={tip.id} tip={tip} />
        ))}
      </div>
    </div>
  )
}

export default SecurityTipsPage
