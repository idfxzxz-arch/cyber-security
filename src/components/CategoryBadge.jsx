const categoryStyles = {
  Phishing: 'bg-red-50 text-red-700 ring-red-200',
  'Password Security': 'bg-blue-50 text-blue-700 ring-blue-200',
  Malware: 'bg-yellow-50 text-yellow-800 ring-yellow-200',
  'Data Protection': 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  default: 'bg-slate-100 text-slate-700 ring-slate-200',
}

function CategoryBadge({ category }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ${categoryStyles[category] || categoryStyles.default}`}>
      {category}
    </span>
  )
}

export default CategoryBadge
