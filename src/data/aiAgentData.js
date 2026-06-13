export const aiKnowledgeBase = [
  {
    id: 1,
    topic: 'Phishing',
    keywords: ['phishing', 'email', 'link', 'tautan', 'pengirim', 'domain', 'lampiran'],
    answer:
      'Jika menerima email mencurigakan, jangan klik link atau membuka lampiran. Periksa domain pengirim, bahasa yang mendesak, dan tujuan link. Jika ragu, laporkan ke tim IT melalui kanal resmi.',
    actions: ['Periksa alamat email pengirim.', 'Arahkan kursor ke link sebelum klik.', 'Laporkan email mencurigakan ke IT.'],
    relatedMaterialSlug: 'apa-itu-phishing-email',
  },
  {
    id: 2,
    topic: 'Password Security',
    keywords: ['password', 'kata sandi', 'login', 'akun', 'mfa', 'multi-factor'],
    answer:
      'Gunakan password panjang, unik, dan tidak dipakai ulang di banyak akun. Aktifkan MFA jika tersedia dan jangan menyimpan password di catatan terbuka.',
    actions: ['Buat password minimal 12 karakter.', 'Gunakan password berbeda untuk akun kerja.', 'Aktifkan MFA pada akun penting.'],
    relatedMaterialSlug: 'cara-membuat-password-yang-aman',
  },
  {
    id: 3,
    topic: 'OTP',
    keywords: ['otp', 'kode', 'verifikasi', 'sms', 'authenticator'],
    answer:
      'OTP adalah kode rahasia. Jangan pernah membagikan OTP kepada siapa pun, termasuk orang yang mengaku petugas resmi, rekan kerja, bank, atau tim support.',
    actions: ['Tolak permintaan OTP.', 'Hubungi layanan resmi secara mandiri.', 'Laporkan percobaan penipuan OTP.'],
    relatedMaterialSlug: 'bahaya-membagikan-otp',
  },
  {
    id: 4,
    topic: 'Malware',
    keywords: ['malware', 'virus', 'ransomware', 'file', 'exe', 'download', 'aplikasi'],
    answer:
      'Jangan membuka file dari sumber tidak dikenal, terutama file dengan ekstensi ganda seperti .pdf.exe. Gunakan aplikasi resmi, biarkan antivirus aktif, dan laporkan file mencurigakan.',
    actions: ['Jangan buka lampiran mencurigakan.', 'Periksa ekstensi file.', 'Hubungi IT jika perangkat terasa aneh.'],
    relatedMaterialSlug: 'bahaya-malware',
  },
  {
    id: 5,
    topic: 'Data Protection',
    keywords: ['data', 'dokumen', 'file', 'share', 'sharing', 'cloud', 'rahasia', 'internal'],
    answer:
      'Data perusahaan harus dibagikan hanya kepada pihak yang membutuhkan. Gunakan platform resmi perusahaan dan hindari opsi link publik untuk dokumen internal atau sensitif.',
    actions: ['Periksa penerima sebelum mengirim file.', 'Batasi akses file sesuai kebutuhan.', 'Cabut akses setelah tidak diperlukan.'],
    relatedMaterialSlug: 'perlindungan-data-perusahaan',
  },
  {
    id: 6,
    topic: 'Remote Work',
    keywords: ['remote', 'wifi', 'vpn', 'kafe', 'bandara', 'jaringan', 'publik'],
    answer:
      'Saat bekerja dari luar kantor, gunakan jaringan tepercaya atau VPN. Hindari membuka dokumen sensitif di tempat ramai dan kunci layar saat meninggalkan perangkat.',
    actions: ['Gunakan VPN sesuai kebijakan.', 'Hindari WiFi publik tanpa proteksi.', 'Pastikan layar tidak terlihat orang lain.'],
    relatedMaterialSlug: 'keamanan-remote-work',
  },
  {
    id: 7,
    topic: 'Incident Reporting',
    keywords: ['lapor', 'insiden', 'salah kirim', 'hilang', 'dicuri', 'kebocoran'],
    answer:
      'Jika terjadi insiden seperti salah kirim email, perangkat hilang, atau akun mencurigakan, segera laporkan. Sertakan waktu kejadian, akun/perangkat terkait, dan kronologi singkat.',
    actions: ['Jangan hapus bukti.', 'Catat kronologi singkat.', 'Laporkan ke tim IT atau kanal resmi.'],
    relatedMaterialSlug: 'incident-reporting',
  },
  {
    id: 8,
    topic: 'AI Security',
    keywords: ['ai', 'chatgpt', 'generatif', 'prompt', 'kontrak', 'ringkas'],
    answer:
      'Gunakan AI dengan hati-hati. Jangan memasukkan data rahasia perusahaan, data pelanggan, kontrak, source code sensitif, atau dokumen internal ke AI publik tanpa izin.',
    actions: ['Gunakan alat AI yang disetujui perusahaan.', 'Anonimkan data sebelum bertanya.', 'Verifikasi ulang hasil AI.'],
    relatedMaterialSlug: 'keamanan-ai-generatif',
  },
]

export const suggestedQuestions = [
  'Bagaimana mengecek email phishing?',
  'Apa yang harus dilakukan kalau diminta OTP?',
  'Bagaimana membuat password yang aman?',
  'Apa bahaya file .pdf.exe?',
  'Bagaimana cara aman membagikan dokumen internal?',
  'Apa yang harus dilakukan saat salah kirim email?',
]
