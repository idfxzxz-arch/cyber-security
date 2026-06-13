import { BookOpen, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import MaterialCard from '../components/MaterialCard'
import { useAppPreferences } from '../context/useAppPreferences'
import { materiData } from '../data/materiData'

function MaterialsPage() {
  const [activeCategory, setActiveCategory] = useState('Semua')
  const { t } = useAppPreferences()
  const categories = ['Semua', ...new Set(materiData.map((item) => item.category))]
  const filteredMaterials = useMemo(() => {
    if (activeCategory === 'Semua') {
      return materiData
    }
    return materiData.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
          <div className="flex items-center gap-2 px-2 text-sm font-bold uppercase tracking-wide text-slate-500">
            <Search className="h-4 w-4" />
            {t.common.category}
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:grid lg:overflow-visible lg:pb-0">
            {categories.map((category) => (
              <button className={`shrink-0 rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${activeCategory === category ? 'bg-blue-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`} key={category} onClick={() => setActiveCategory(category)} type="button">
                {category === 'Semua' ? t.common.all : category}
              </button>
            ))}
          </div>
        </aside>

        <section>
          <div className="mb-8">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">{t.pages.materialsTitle}</h1>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              {t.pages.materialsDescription}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default MaterialsPage
