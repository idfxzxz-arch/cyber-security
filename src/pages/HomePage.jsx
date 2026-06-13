import { Bot, ClipboardCheck, Database, KeyRound, MailWarning, ShieldAlert } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import MaterialCard from '../components/MaterialCard'
import PhishingCard from '../components/PhishingCard'
import PracticeCard from '../components/PracticeCard'
import QuizCard from '../components/QuizCard'
import TipCard from '../components/TipCard'
import { materiData } from '../data/materiData'
import { phishingData } from '../data/phishingData'
import { practiceData } from '../data/practiceData'
import { quizData } from '../data/quizData'
import { tipsData } from '../data/tipsData'

const topics = [
  { title: 'Phishing', description: 'Kenali email palsu, link berbahaya, dan taktik manipulasi.', icon: MailWarning, color: 'text-red-600 bg-red-50' },
  { title: 'Password Security', description: 'Bangun kebiasaan password kuat, unik, dan terlindungi.', icon: KeyRound, color: 'text-blue-800 bg-blue-50' },
  { title: 'Malware', description: 'Pahami risiko file, aplikasi, dan lampiran berbahaya.', icon: ShieldAlert, color: 'text-yellow-800 bg-yellow-50' },
  { title: 'Data Protection', description: 'Jaga data perusahaan tetap aman dan sesuai kebutuhan akses.', icon: Database, color: 'text-emerald-700 bg-emerald-50' },
]

function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-blue-800">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">{title}</h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">{description}</p>
      </div>
      {action}
    </div>
  )
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Topik utama"
          title="Ringkasan area pembelajaran"
          description="Mulai dari ancaman yang paling sering muncul di email sampai kebiasaan menjaga data perusahaan."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={topic.title}>
                <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${topic.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-950">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Materi pilihan"
            title="Baca materi penting"
            description="Beberapa materi awal untuk membangun fondasi keamanan siber di lingkungan kerja."
            action={<Link className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50" to="/materi">Lihat semua materi</Link>}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {materiData.slice(0, 3).map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Tips keamanan"
            title="Kebiasaan singkat yang berdampak besar"
            description="Tips praktis yang bisa diterapkan setiap hari saat memakai perangkat dan aplikasi kerja."
          />
          <div className="grid gap-4">
            {tipsData.slice(0, 3).map((tip) => (
              <TipCard key={tip.id} tip={tip} />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="Simulasi phishing"
            title="Latih insting membaca email"
            description="Contoh skenario email, OTP, malware, WiFi publik, dan data sharing untuk membedakan kondisi aman, mencurigakan, dan berisiko."
          />
          <PhishingCard email={phishingData[1]} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="AI Agent"
            title="Tanya assistant keamanan siber"
            description="Agent edukasi berbasis data lokal untuk menjawab pertanyaan umum tentang phishing, OTP, password, malware, data, remote work, dan insiden."
            action={<Link className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900" to="/ai-agent"><Bot className="h-4 w-4" />Buka AI Agent</Link>}
          />
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-950 text-white">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">Bantuan cepat tanpa memenuhi halaman</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Klik tombol AI Agent di pojok kanan bawah untuk membuka chat pop-up profesional kapan pun dibutuhkan.
                  </p>
                </div>
              </div>
              <Link className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50" to="/ai-agent">
                Mode penuh
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Praktik"
            title="Coba simulasi keputusan"
            description="Pengguna membaca skenario, memilih tindakan, lalu mendapat feedback langsung tentang keamanan pilihannya."
            action={<Link className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900" to="/praktik"><ClipboardCheck className="h-4 w-4" />Buka praktik</Link>}
          />
          <PracticeCard practice={practiceData[0]} />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Kuis ringan"
            title="Cek pemahaman dasar"
            description="Satu contoh soal dari kuis cybersecurity. Buka halaman kuis untuk menyelesaikan seluruh pertanyaan dan melihat skor akhir."
            action={<Link className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900" to="/kuis">Mulai kuis</Link>}
          />
          <QuizCard index={0} onSelect={() => {}} question={quizData[0]} selected="" />
        </div>
      </section>
    </>
  )
}

export default HomePage
