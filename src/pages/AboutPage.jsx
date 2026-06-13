import { Building2, ShieldCheck, Users } from 'lucide-react'

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 text-white">
          <Building2 className="h-6 w-6" />
        </div>
        <h1 className="mt-6 text-3xl font-bold text-slate-950 sm:text-4xl">Tentang Portal</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Website ini dibuat sebagai media edukasi keamanan siber untuk membantu karyawan WD Group Company lebih sadar terhadap ancaman digital. Materi di dalamnya dirancang agar mudah dibaca, praktis, dan relevan dengan aktivitas kerja sehari-hari.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-slate-50 p-5">
            <ShieldCheck className="h-6 w-6 text-emerald-600" />
            <h2 className="mt-3 text-lg font-bold text-slate-900">Fokus Kesadaran</h2>
            <p className="mt-2 text-slate-600">Membantu karyawan mengenali risiko seperti phishing, malware, kebocoran data, dan penyalahgunaan OTP.</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-5">
            <Users className="h-6 w-6 text-blue-800" />
            <h2 className="mt-3 text-lg font-bold text-slate-900">Untuk Semua Karyawan</h2>
            <p className="mt-2 text-slate-600">Tidak membutuhkan login, backend, atau database sehingga dapat diakses cepat sebagai referensi edukasi internal.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
