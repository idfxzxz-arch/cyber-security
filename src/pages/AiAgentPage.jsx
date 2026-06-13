import { Bot, ShieldCheck } from 'lucide-react'
import AiAgentChat from '../components/AiAgentChat'

function AiAgentPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 text-white">
          <Bot className="h-6 w-6" />
        </div>
        <h1 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">AI Agent Cybersecurity</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Assistant edukasi untuk membantu karyawan memahami tindakan aman secara cepat. Agent ini berjalan dengan data lokal di browser, tanpa backend dan tanpa database.
        </p>
      </div>

      <div className="mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-900">
        <div className="flex gap-3">
          <ShieldCheck className="mt-1 h-5 w-5 shrink-0" />
          <p className="leading-7">
            Agent ini adalah simulasi edukasi, bukan pengganti tim IT. Untuk insiden nyata seperti akun diretas, perangkat hilang, atau data bocor, segera gunakan kanal pelaporan resmi perusahaan.
          </p>
        </div>
      </div>

      <AiAgentChat />
    </div>
  )
}

export default AiAgentPage
