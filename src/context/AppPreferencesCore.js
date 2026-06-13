import { createContext } from 'react'

export const translations = {
  id: {
    nav: {
      home: 'Beranda',
      materials: 'Materi',
      simulation: 'Simulasi',
      practice: 'Praktik',
      aiAgent: 'AI Agent',
      tips: 'Tips Keamanan',
      quiz: 'Kuis',
      about: 'Tentang',
    },
    common: {
      category: 'Kategori',
      all: 'Semua',
      readMaterial: 'Baca Materi',
      fullMode: 'Mode penuh',
      openAiAgent: 'Buka AI Agent',
      light: 'Terang',
      dark: 'Gelap',
      language: 'Bahasa',
    },
    hero: {
      eyebrow: 'Edukasi keamanan siber untuk karyawan',
      description:
        'Pelajari cara mengenali ancaman digital, melindungi data perusahaan, dan mengambil keputusan aman saat bekerja dengan email, perangkat, jaringan, dan aplikasi kantor.',
      ctaMaterials: 'Lihat Daftar Materi',
      ctaSimulation: 'Coba Simulasi',
      snapshot: 'Ringkasan keamanan',
      materials: 'Materi',
      examples: 'Contoh email',
      tips: 'Tips praktis',
      quiz: 'Soal kuis',
      checklist: ['Periksa pengirim email', 'Jaga password dan OTP', 'Laporkan aktivitas mencurigakan'],
    },
    pages: {
      materialsTitle: 'Daftar Materi Cybersecurity',
      materialsDescription:
        'Pilih materi edukasi sesuai kebutuhan. Semua materi memakai data dummy JavaScript dan dapat dibaca tanpa login.',
      aiTitle: 'AI Agent Cybersecurity',
      aiDescription:
        'Assistant edukasi untuk membantu karyawan memahami tindakan aman secara cepat. Agent ini berjalan dengan data lokal di browser, tanpa backend dan tanpa database.',
      aiWarning:
        'Agent ini adalah simulasi edukasi, bukan pengganti tim IT. Untuk insiden nyata seperti akun diretas, perangkat hilang, atau data bocor, segera gunakan kanal pelaporan resmi perusahaan.',
    },
    home: {
      topicsEyebrow: 'Topik utama',
      topicsTitle: 'Ringkasan area pembelajaran',
      topicsDescription:
        'Mulai dari ancaman yang paling sering muncul di email sampai kebiasaan menjaga data perusahaan.',
      materialsEyebrow: 'Materi pilihan',
      materialsTitle: 'Baca materi penting',
      materialsDescription: 'Beberapa materi awal untuk membangun fondasi keamanan siber di lingkungan kerja.',
      seeAllMaterials: 'Lihat semua materi',
      tipsEyebrow: 'Tips keamanan',
      tipsTitle: 'Kebiasaan singkat yang berdampak besar',
      tipsDescription: 'Tips praktis yang bisa diterapkan setiap hari saat memakai perangkat dan aplikasi kerja.',
      simulationEyebrow: 'Simulasi',
      simulationTitle: 'Latih insting membaca skenario',
      simulationDescription:
        'Contoh skenario email, OTP, malware, WiFi publik, dan data sharing untuk membedakan kondisi aman, mencurigakan, dan berisiko.',
      aiEyebrow: 'AI Agent',
      aiTitle: 'Tanya assistant keamanan siber',
      aiDescription:
        'Agent edukasi berbasis data lokal untuk menjawab pertanyaan umum tentang phishing, OTP, password, malware, data, remote work, dan insiden.',
      aiCardTitle: 'Bantuan cepat tanpa memenuhi halaman',
      aiCardDescription:
        'Klik tombol AI Agent di pojok kanan bawah untuk membuka chat pop-up profesional kapan pun dibutuhkan.',
      practiceEyebrow: 'Praktik',
      practiceTitle: 'Coba simulasi keputusan',
      practiceDescription:
        'Pengguna membaca skenario, memilih tindakan, lalu mendapat feedback langsung tentang keamanan pilihannya.',
      openPractice: 'Buka praktik',
      quizEyebrow: 'Kuis ringan',
      quizTitle: 'Cek pemahaman dasar',
      quizDescription:
        'Satu contoh soal dari kuis cybersecurity. Buka halaman kuis untuk menyelesaikan seluruh pertanyaan dan melihat skor akhir.',
      startQuiz: 'Mulai kuis',
    },
    ai: {
      title: 'WD Cyber AI Agent',
      subtitle: 'Simulasi assistant edukasi berbasis data lokal',
      quickHelp: 'Bantuan cepat keamanan siber',
      openFull: 'Buka halaman AI Agent penuh',
      questions: 'pertanyaan',
      placeholder: 'Tulis pertanyaan, contoh: email minta OTP harus bagaimana?',
      send: 'Kirim',
      reset: 'Reset',
      greeting:
        'Halo, saya WD Cyber AI Agent. Tanyakan hal seputar phishing, password, OTP, malware, data perusahaan, remote work, pelaporan insiden, atau penggunaan AI yang aman.',
      fallbackTopic: 'Rekomendasi Umum',
      fallback:
        'Saya belum menemukan topik yang sangat spesifik. Untuk kondisi mencurigakan, jangan klik link, jangan membagikan password atau OTP, amankan data perusahaan, lalu laporkan ke tim IT.',
      related: 'Baca materi terkait',
    },
  },
  en: {
    nav: {
      home: 'Home',
      materials: 'Materials',
      simulation: 'Simulation',
      practice: 'Practice',
      aiAgent: 'AI Agent',
      tips: 'Security Tips',
      quiz: 'Quiz',
      about: 'About',
    },
    common: {
      category: 'Category',
      all: 'All',
      readMaterial: 'Read Material',
      fullMode: 'Full mode',
      openAiAgent: 'Open AI Agent',
      light: 'Light',
      dark: 'Dark',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Cybersecurity education for employees',
      description:
        'Learn how to recognize digital threats, protect company data, and make safer decisions when working with email, devices, networks, and office applications.',
      ctaMaterials: 'View Materials',
      ctaSimulation: 'Try Simulation',
      snapshot: 'Security snapshot',
      materials: 'Materials',
      examples: 'Email examples',
      tips: 'Practical tips',
      quiz: 'Quiz questions',
      checklist: ['Check email senders', 'Protect passwords and OTP', 'Report suspicious activity'],
    },
    pages: {
      materialsTitle: 'Cybersecurity Materials',
      materialsDescription:
        'Choose learning materials based on your needs. All content uses dummy JavaScript data and can be read without login.',
      aiTitle: 'Cybersecurity AI Agent',
      aiDescription:
        'An education assistant that helps employees understand safe actions quickly. This agent runs with local browser data, without backend and without database.',
      aiWarning:
        'This agent is an educational simulation, not a replacement for the IT team. For real incidents such as compromised accounts, lost devices, or data leaks, immediately use the official company reporting channel.',
    },
    home: {
      topicsEyebrow: 'Main topics',
      topicsTitle: 'Learning area overview',
      topicsDescription:
        'From common email threats to daily habits for protecting company data.',
      materialsEyebrow: 'Featured materials',
      materialsTitle: 'Read essential materials',
      materialsDescription: 'Starter topics to build a strong cybersecurity foundation at work.',
      seeAllMaterials: 'View all materials',
      tipsEyebrow: 'Security tips',
      tipsTitle: 'Small habits with strong impact',
      tipsDescription: 'Practical tips employees can apply every day when using work devices and apps.',
      simulationEyebrow: 'Simulation',
      simulationTitle: 'Train your scenario awareness',
      simulationDescription:
        'Sample scenarios for email, OTP, malware, public WiFi, and data sharing to distinguish safe, suspicious, and risky situations.',
      aiEyebrow: 'AI Agent',
      aiTitle: 'Ask the cybersecurity assistant',
      aiDescription:
        'A local-data education agent for common questions about phishing, OTP, password, malware, data, remote work, and incidents.',
      aiCardTitle: 'Quick help without filling the page',
      aiCardDescription:
        'Click the AI Agent button in the bottom-right corner to open a professional chat pop-up whenever needed.',
      practiceEyebrow: 'Practice',
      practiceTitle: 'Try decision simulations',
      practiceDescription:
        'Users read a scenario, choose an action, and receive immediate feedback about the safety of their choice.',
      openPractice: 'Open practice',
      quizEyebrow: 'Light quiz',
      quizTitle: 'Check basic understanding',
      quizDescription:
        'One sample question from the cybersecurity quiz. Open the quiz page to complete all questions and see the final score.',
      startQuiz: 'Start quiz',
    },
    ai: {
      title: 'WD Cyber AI Agent',
      subtitle: 'Local-data educational assistant simulation',
      quickHelp: 'Quick cybersecurity help',
      openFull: 'Open full AI Agent page',
      questions: 'questions',
      placeholder: 'Write a question, for example: what should I do if an email asks for OTP?',
      send: 'Send',
      reset: 'Reset',
      greeting:
        'Hello, I am WD Cyber AI Agent. Ask me about phishing, passwords, OTP, malware, company data, remote work, incident reporting, or safe AI usage.',
      fallbackTopic: 'General Recommendation',
      fallback:
        'I have not found a very specific topic. For suspicious situations, do not click links, do not share passwords or OTP, protect company data, and report to IT.',
      related: 'Read related material',
    },
  },
}

export const AppPreferencesContext = createContext(null)
