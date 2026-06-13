import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FloatingAiAgent from './components/FloatingAiAgent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AiAgentPage from './pages/AiAgentPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import MaterialsPage from './pages/MaterialsPage'
import MaterialDetailPage from './pages/MaterialDetailPage'
import PhishingSimulationPage from './pages/PhishingSimulationPage'
import PracticePage from './pages/PracticePage'
import QuizPage from './pages/QuizPage'
import SecurityTipsPage from './pages/SecurityTipsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/materi" element={<MaterialsPage />} />
            <Route path="/materi/:slug" element={<MaterialDetailPage />} />
            <Route path="/simulasi-phishing" element={<PhishingSimulationPage />} />
            <Route path="/praktik" element={<PracticePage />} />
            <Route path="/ai-agent" element={<AiAgentPage />} />
            <Route path="/tips-keamanan" element={<SecurityTipsPage />} />
            <Route path="/kuis" element={<QuizPage />} />
            <Route path="/tentang" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingAiAgent />
      </div>
    </BrowserRouter>
  )
}

export default App
