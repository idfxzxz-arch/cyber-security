import { ShieldCheck } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-2 font-semibold text-slate-700">
          <ShieldCheck className="h-5 w-5 text-emerald-600" />
          WD Cybersecurity Awareness Portal
        </div>
        <p>Media edukasi internal untuk membangun budaya keamanan digital WD Group Company.</p>
      </div>
    </footer>
  )
}

export default Footer
