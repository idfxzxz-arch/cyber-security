import { RotateCcw, Trophy } from 'lucide-react'
import { useMemo, useState } from 'react'
import QuizCard from '../components/QuizCard'
import { quizData } from '../data/quizData'

function QuizPage() {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const score = useMemo(() => {
    const correct = quizData.filter((question) => answers[question.id] === question.answer).length
    return Math.round((correct / quizData.length) * 100)
  }, [answers])

  const handleSelect = (questionId, option) => {
    setAnswers((current) => ({ ...current, [questionId]: option }))
    setSubmitted(false)
  }

  const resetQuiz = () => {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-950 text-white">
          <Trophy className="h-6 w-6" />
        </div>
        <h1 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">Kuis Ringan Cybersecurity</h1>
        <p className="mt-3 leading-7 text-slate-600">
          Jawab pertanyaan pilihan ganda berikut untuk mengukur pemahaman dasar tentang password, phishing, malware, OTP, dan keamanan data.
        </p>
      </div>

      <div className="grid gap-5">
        {quizData.map((question, index) => (
          <QuizCard index={index} key={question.id} onSelect={handleSelect} question={question} selected={answers[question.id]} />
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button className="rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:bg-slate-300" disabled={Object.keys(answers).length < quizData.length} onClick={() => setSubmitted(true)} type="button">
          Lihat Skor
        </button>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" onClick={resetQuiz} type="button">
          <RotateCcw className="h-4 w-4" />
          Ulangi Kuis
        </button>
      </div>

      {submitted && (
        <section className={`mt-6 rounded-lg border p-6 ${score >= 75 ? 'border-emerald-200 bg-emerald-50' : 'border-yellow-200 bg-yellow-50'}`}>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-600">Skor akhir</p>
          <p className="mt-2 text-5xl font-bold text-slate-950">{score}</p>
          <p className={`mt-3 text-xl font-bold ${score >= 75 ? 'text-emerald-700' : 'text-yellow-800'}`}>
            {score >= 75 ? 'Pemahaman Baik' : 'Perlu Belajar Lagi'}
          </p>
        </section>
      )}
    </div>
  )
}

export default QuizPage
