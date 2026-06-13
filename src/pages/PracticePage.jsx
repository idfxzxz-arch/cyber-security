import { ClipboardCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import PracticeCard from '../components/PracticeCard'
import { practiceData } from '../data/practiceData'

function PracticePage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const categories = ['Semua', ...new Set(practiceData.map((item) => item.category))]
  const filteredPractices = useMemo(() => {
    if (activeCategory === 'Semua') {
      return practiceData
    }
    return practiceData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 text-white">
          <ClipboardCheck className="h-6 w-6" />
        </div>
        <h1 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">Simulasi Praktik Keamanan Siber</h1>
        <p className="mt-3 max-w-3xl leading-7 text-slate-600">
          Pilih tindakan yang paling tepat pada setiap skenario. Setelah memilih, portal akan memberi feedback agar pengguna memahami keputusan yang aman, mencurigakan, atau berisiko.
        </p>
      </div>

      <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'bg-blue-950 text-white'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5">
        {filteredPractices.map((practice) => (
          <PracticeCard key={practice.id} practice={practice} />
        ))}
      </div>
    </div>
  )
}

export default PracticePage
