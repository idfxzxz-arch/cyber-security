import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { materiData } from '../data/materiData'

function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 ring-1 ring-blue-100">
            <ShieldCheck className="h-4 w-4" />
            Edukasi keamanan siber untuk karyawan
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            WD Cybersecurity Awareness Portal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Pelajari cara mengenali ancaman digital, melindungi data perusahaan, dan mengambil keputusan aman saat bekerja dengan email, perangkat, jaringan, dan aplikasi kantor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-900" to="/materi">
              Lihat Daftar Materi
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" to="/simulasi-phishing">
              <BookOpen className="h-4 w-4" />
              Coba Simulasi
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="rounded-lg bg-blue-950 p-5 text-white">
            <p className="text-sm font-medium text-blue-100">Security snapshot</p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                [String(materiData.length), 'Materi'],
                ['5', 'Contoh email'],
                ['9', 'Tips praktis'],
                ['5', 'Soal kuis'],
              ].map(([value, label]) => (
                <div className="rounded-lg bg-white/10 p-4" key={label}>
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-blue-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-3">
            {['Periksa pengirim email', 'Jaga password dan OTP', 'Laporkan aktivitas mencurigakan'].map((item) => (
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
