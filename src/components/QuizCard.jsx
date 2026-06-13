function QuizCard({ question, selected, onSelect, index }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-blue-800">Soal {index + 1}</p>
      <h3 className="mt-2 text-lg font-bold text-slate-950">{question.question}</h3>
      <div className="mt-5 grid gap-3">
        {question.options.map((option) => (
          <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 text-sm font-medium transition ${selected === option ? 'border-blue-900 bg-blue-50 text-blue-950' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`} key={option}>
            <input checked={selected === option} className="h-4 w-4 accent-blue-950" name={`question-${question.id}`} onChange={() => onSelect(question.id, option)} type="radio" />
            {option}
          </label>
        ))}
      </div>
    </article>
  )
}

export default QuizCard
