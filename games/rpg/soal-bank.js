// ============================================================
// BANK SOAL SOSIOLOGI - 3 TIPE
// ============================================================

// TIPE 1: SEDERHANA (Pilihan Ganda Biasa) → ×2
const SOAL_SEDERHANA = [
  {
    q: "Sosiologi sebagai ilmu yang mempelajari hubungan timbal balik antara individu dengan individu, individu dengan kelompok, dan kelompok dengan kelompok, sesuai dengan definisi yang dikemukakan oleh...",
    opts: ["Auguste Comte", "Emile Durkheim", "Max Weber", "Karl Marx", "Herbert Spencer"],
    a: 2
  },
  {
    q: "Istilah 'sosiologi' pertama kali diperkenalkan oleh Auguste Comte pada tahun...",
    opts: ["1838", "1848", "1858", "1868", "1878"],
    a: 0
  },
  {
    q: "Menurut Emile Durkheim, ciri utama fakta sosial adalah bersifat eksternal, umum, dan...",
    opts: ["Subjektif", "Individual", "Memaksa", "Sementara", "Lokal"],
    a: 2
  },
  {
    q: "Tindakan sosial yang didasarkan pada pertimbangan rasional untuk mencapai tujuan tertentu disebut...",
    opts: ["Tindakan tradisional", "Tindakan afektif", "Tindakan instrumental", "Tindakan nilai", "Tindakan irasional"],
    a: 2
  },
  {
    q: "Contoh kelompok sosial yang terbentuk berdasarkan kesamaan kepentingan adalah...",
    opts: ["Keluarga", "Sekolah", "Partai politik", "Desa", "Suku bangsa"],
    a: 2
  },
  {
    q: "Proses pembentukan kepribadian seseorang melalui interaksi dengan lingkungan sosialnya disebut...",
    opts: ["Enkulturasi", "Sosialisasi", "Akulturasi", "Asimilasi", "Difusi"],
    a: 1
  },
  {
    q: "Menurut George Herbert Mead, tahap akhir dalam perkembangan diri adalah tahap...",
    opts: ["Play stage", "Game stage", "Generalized other", "Imitation stage", "Preparatory stage"],
    a: 2
  },
  {
    q: "Lembaga sosial yang berfungsi untuk memenuhi kebutuhan spiritual manusia adalah...",
    opts: ["Lembaga ekonomi", "Lembaga politik", "Lembaga agama", "Lembaga pendidikan", "Lembaga keluarga"],
    a: 2
  },
  {
    q: "Stratifikasi sosial yang didasarkan pada kepemilikan harta kekayaan disebut stratifikasi...",
    opts: ["Ekonomi", "Politik", "Sosial", "Budaya", "Agama"],
    a: 0
  },
  {
    q: "Perpindahan status sosial dari satu posisi ke posisi lain yang setara disebut...",
    opts: ["Mobilitas vertikal", "Mobilitas horizontal", "Mobilitas antargenerasi", "Mobilitas intragenerasi", "Mobilitas struktural"],
    a: 1
  },
  {
    q: "Contoh penyimpangan sosial primer adalah...",
    opts: ["Pencurian", "Pembunuhan", "Menyontek saat ujian", "Perkosaan", "Korupsi"],
    a: 2
  },
  {
    q: "Sanksi sosial yang bersifat negatif dan dijatuhkan oleh masyarakat kepada pelaku penyimpangan disebut...",
    opts: ["Reward", "Hukuman", "Penghargaan", "Pujian", "Pengakuan"],
    a: 1
  },
  {
    q: "Teori konflik dalam sosiologi dikembangkan oleh...",
    opts: ["Emile Durkheim", "Max Weber", "Karl Marx", "Herbert Spencer", "Auguste Comte"],
    a: 2
  },
  {
    q: "Proses perubahan budaya yang terjadi secara lambat dan membutuhkan waktu lama disebut...",
    opts: ["Revolusi", "Evolusi", "Difusi", "Asimilasi", "Akulturasi"],
    a: 1
  },
  {
    q: "Contoh perubahan sosial yang direncanakan adalah...",
    opts: ["Revolusi industri", "Program KB", "Perang dunia", "Wabah penyakit", "Bencana alam"],
    a: 1
  },
  {
    q: "Dampak positif dari konflik sosial adalah...",
    opts: ["Perpecahan masyarakat", "Integrasi sosial baru", "Kerusakan fasilitas", "Kekacauan", "Disintegrasi"],
    a: 1
  },
  {
    q: "Individu yang menjadi teladan atau panutan bagi orang lain disebut...",
    opts: ["Significant other", "Reference group", "Generalized other", "Role model", "Peer group"],
    a: 3
  },
  {
    q: "Norma sosial yang memiliki sanksi paling ringan disebut...",
    opts: ["Cara (folkways)", "Kebiasaan (mores)", "Tata kelakuan (customs)", "Hukum (laws)", "Adat istiadat"],
    a: 0
  },
  {
    q: "Ilmu yang mempelajari hubungan antara manusia dengan lingkungan sosialnya disebut...",
    opts: ["Psikologi", "Antropologi", "Sosiologi", "Geografi sosial", "Sejarah"],
    a: 2
  },
  {
    q: "Contoh dari kelompok sekunder adalah...",
    opts: ["Keluarga", "Teman bermain", "Perusahaan", "Komunitas", "Suku bangsa"],
    a: 2
  }
];

// TIPE 2: KATEGORI (Tabel Sesuai/Tidak Sesuai) → ×3
const SOAL_KATEGORI = [
  {
    q: "Pernyataan tentang konsep dasar sosiologi:",
    pernyataan: [
      "Sosiologi mempelajari masyarakat secara ilmiah.",
      "Sosiologi hanya mempelajari perilaku individu.",
      "Fakta sosial bersifat eksternal bagi individu.",
      "Metode penelitian sosiologi bersifat subjektif."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang lembaga sosial:",
    pernyataan: [
      "Lembaga keluarga berfungsi untuk reproduksi dan sosialisasi.",
      "Lembaga pendidikan hanya berfungsi untuk mengajar akademis.",
      "Lembaga agama memiliki fungsi kontrol sosial.",
      "Lembaga ekonomi hanya berfungsi untuk menyejahterakan pemilik modal."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang stratifikasi sosial:",
    pernyataan: [
      "Stratifikasi sosial dapat ditemukan di semua masyarakat.",
      "Stratifikasi sosial hanya terjadi di negara berkembang.",
      "Kasta adalah salah satu bentuk stratifikasi tertutup.",
      "Perbedaan pendidikan tidak berpengaruh pada stratifikasi."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang mobilitas sosial:",
    pernyataan: [
      "Mobilitas sosial vertikal adalah perpindahan status yang setara.",
      "Pendidikan tinggi dapat meningkatkan mobilitas sosial.",
      "Mobilitas horizontal terjadi antar generasi.",
      "Urbanisasi termasuk contoh mobilitas geografis."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [1, 0, 1, 0]
  },
  {
    q: "Pernyataan tentang interaksi sosial:",
    pernyataan: [
      "Interaksi sosial memerlukan kontak sosial dan komunikasi.",
      "Interaksi sosial hanya terjadi antara individu dengan individu.",
      "Konflik adalah bentuk interaksi sosial disosiatif.",
      "Kerjasama selalu membawa dampak positif."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang sosialisasi:",
    pernyataan: [
      "Sosialisasi berlangsung sepanjang hayat.",
      "Sosialisasi hanya terjadi pada masa anak-anak.",
      "Keluarga adalah agen sosialisasi primer.",
      "Media sosial tidak berpengaruh dalam proses sosialisasi."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang perubahan sosial:",
    pernyataan: [
      "Perubahan sosial selalu membawa dampak positif.",
      "Globalisasi mempengaruhi perubahan budaya lokal.",
      "Revolusi adalah perubahan yang terjadi secara cepat.",
      "Inovasi tidak mempengaruhi perubahan sosial."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [1, 0, 0, 1]
  },
  {
    q: "Pernyataan tentang konflik sosial:",
    pernyataan: [
      "Konflik selalu berdampak negatif bagi masyarakat.",
      "Konflik dapat mendorong perubahan sosial.",
      "Konflik sosial terjadi karena perbedaan kepentingan.",
      "Konflik hanya terjadi antara kelompok yang berbeda agama."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [1, 0, 0, 1]
  },
  {
    q: "Pernyataan tentang nilai dan norma sosial:",
    pernyataan: [
      "Nilai sosial bersifat abstrak.",
      "Norma hukum memiliki sanksi yang tegas.",
      "Pelanggaran norma selalu mendapat sanksi formal.",
      "Nilai dan norma memiliki fungsi yang sama."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 0, 1, 1]
  },
  {
    q: "Pernyataan tentang penelitian sosiologi:",
    pernyataan: [
      "Penelitian sosiologi harus dilakukan secara objektif.",
      "Metode kualitatif menggunakan data numerik.",
      "Penelitian kuantitatif menggunakan statistik.",
      "Subjektivitas peneliti tidak mempengaruhi hasil penelitian."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang kelompok sosial:",
    pernyataan: [
      "Kelompok sosial terbentuk karena adanya interaksi.",
      "Seluruh anggota kelompok memiliki peran yang sama.",
      "In-group adalah kelompok yang menjadi acuan seseorang.",
      "Out-group seringkali menjadi objek prasangka."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 1, 0]
  },
  {
    q: "Pernyataan tentang masalah sosial:",
    pernyataan: [
      "Masalah sosial terjadi karena ketidaksesuaian nilai.",
      "Kemiskinan termasuk masalah sosial.",
      "Semua masalah sosial dapat diselesaikan dengan hukum.",
      "Kesadaran masyarakat penting untuk mengatasi masalah sosial."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 0, 1, 0]
  },
  {
    q: "Pernyataan tentang sosiologi pendidikan:",
    pernyataan: [
      "Pendidikan berfungsi untuk mensosialisasikan nilai-nilai.",
      "Sekolah hanya berfungsi sebagai tempat belajar akademis.",
      "Kurikulum tersembunyi dapat membentuk karakter siswa.",
      "Pendidikan tidak mempengaruhi mobilitas sosial."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang sosiologi keluarga:",
    pernyataan: [
      "Keluarga adalah unit sosial terkecil dalam masyarakat.",
      "Fungsi afeksi keluarga bersifat ekonomis.",
      "Perceraian dapat mengubah struktur keluarga.",
      "Keluarga modern cenderung memiliki anak lebih banyak."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang sosiologi perkotaan:",
    pernyataan: [
      "Kehidupan kota cenderung individualistis.",
      "Masyarakat kota memiliki solidaritas organik.",
      "Urbanisasi selalu membawa dampak positif.",
      "Permukiman kumuh muncul karena perencanaan kota yang baik."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 0, 1, 1]
  },
  {
    q: "Pernyataan tentang sosiologi pedesaan:",
    pernyataan: [
      "Masyarakat desa memiliki solidaritas mekanik.",
      "Kehidupan desa lebih homogen daripada kota.",
      "Modernisasi tidak mempengaruhi kehidupan desa.",
      "Desa selalu menjadi daerah tertinggal."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 0, 1, 1]
  },
  {
    q: "Pernyataan tentang globalisasi dan sosiologi:",
    pernyataan: [
      "Globalisasi mempercepat perubahan sosial.",
      "Globalisasi hanya berdampak positif bagi negara maju.",
      "Media sosial adalah salah satu produk globalisasi.",
      "Globalisasi tidak mempengaruhi nilai-nilai budaya lokal."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang penyimpangan sosial:",
    pernyataan: [
      "Penyimpangan sosial bersifat relatif.",
      "Semua penyimpangan harus mendapatkan hukuman.",
      "Labeling dapat menyebabkan penyimpangan sekunder.",
      "Penyimpangan hanya terjadi pada masyarakat modern."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang pengendalian sosial:",
    pernyataan: [
      "Pengendalian sosial dapat bersifat preventif.",
      "Hanya lembaga hukum yang dapat mengendalikan masyarakat.",
      "Sanksi sosial termasuk pengendalian sosial informal.",
      "Pengendalian sosial tidak diperlukan dalam masyarakat modern."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 1, 0, 1]
  },
  {
    q: "Pernyataan tentang perkembangan sosiologi:",
    pernyataan: [
      "Sosiologi berkembang sejak abad ke-19.",
      "Auguste Comte adalah bapak sosiologi.",
      "Sosiologi hanya berkembang di Eropa.",
      "Perkembangan sosiologi tidak dipengaruhi oleh ilmu lain."
    ],
    kategori: ["Sesuai", "Tidak Sesuai"],
    a: [0, 0, 1, 1]
  }
];

// TIPE 3: MCMA (Multiple Choice Multiple Answer) → ×4
const SOAL_MCMA = [
  {
    q: "Manakah yang termasuk ciri-ciri fakta sosial menurut Emile Durkheim?",
    opts: [
      "Bersifat eksternal",
      "Bersifat subjektif",
      "Bersifat memaksa",
      "Bersifat umum",
      "Bersifat individual",
      "Bersifat lokal"
    ],
    a: [0, 2, 3]
  },
  {
    q: "Manakah yang termasuk agen sosialisasi primer?",
    opts: [
      "Keluarga",
      "Sekolah",
      "Teman sebaya",
      "Media massa",
      "Lingkungan kerja",
      "Organisasi politik"
    ],
    a: [0, 1, 2]
  },
  {
    q: "Manakah yang termasuk lembaga sosial dalam masyarakat?",
    opts: [
      "Lembaga keluarga",
      "Lembaga pendidikan",
      "Lembaga agama",
      "Lembaga ekonomi",
      "Lembaga politik",
      "Lembaga hiburan"
    ],
    a: [0, 1, 2, 3, 4]
  },
  {
    q: "Manakah yang termasuk bentuk interaksi sosial disosiatif?",
    opts: [
      "Kerjasama",
      "Konflik",
      "Akomodasi",
      "Persaingan",
      "Kontravensi",
      "Asimilasi"
    ],
    a: [1, 3, 4]
  },
  {
    q: "Manakah yang termasuk unsur-unsur stratifikasi sosial?",
    opts: [
      "Kekayaan",
      "Kekuasaan",
      "Kehormatan",
      "Pendidikan",
      "Keterampilan",
      "Keturunan"
    ],
    a: [0, 1, 2, 3]
  },
  {
    q: "Manakah yang termasuk faktor pendorong perubahan sosial?",
    opts: [
      "Penemuan baru",
      "Perubahan populasi",
      "Bencana alam",
      "Kebijakan pemerintah",
      "Perubahan iklim",
      "Stabilitas sosial"
    ],
    a: [0, 1, 2, 3]
  },
  {
    q: "Manakah yang termasuk fungsi sosiologi dalam pembangunan?",
    opts: [
      "Sebagai perencanaan sosial",
      "Sebagai evaluasi pembangunan",
      "Sebagai kritik terhadap kebijakan",
      "Sebagai alat politik",
      "Sebagai propaganda",
      "Sebagai kontrol sosial"
    ],
    a: [0, 1, 2]
  },
  {
    q: "Manakah yang termasuk tipe tindakan sosial menurut Max Weber?",
    opts: [
      "Tindakan rasional instrumental",
      "Tindakan rasional nilai",
      "Tindakan tradisional",
      "Tindakan afektif",
      "Tindakan irasional",
      "Tindakan emosional"
    ],
    a: [0, 1, 2, 3]
  },
  {
    q: "Manakah yang termasuk bentuk mobilitas sosial vertikal?",
    opts: [
      "Promosi jabatan",
      "Pindah pekerjaan",
      "Penurunan status sosial",
      "Urbanisasi",
      "Migrasi",
      "Merantau"
    ],
    a: [0, 2]
  },
  {
    q: "Manakah yang termasuk dampak negatif globalisasi?",
    opts: [
      "Kesenjangan sosial",
      "Erosi budaya lokal",
      "Perkembangan teknologi",
      "Kerusakan lingkungan",
      "Peningkatan ekonomi",
      "Kesetaraan global"
    ],
    a: [0, 1, 3]
  },
  {
    q: "Manakah yang termasuk metode penelitian sosiologi?",
    opts: [
      "Metode kualitatif",
      "Metode kuantitatif",
      "Metode eksperimen",
      "Metode observasi",
      "Metode wawancara",
      "Metode dokumen"
    ],
    a: [0, 1, 3, 4, 5]
  },
  {
    q: "Manakah yang termasuk contoh masalah sosial di Indonesia?",
    opts: [
      "Kemiskinan",
      "Pengangguran",
      "Kriminalitas",
      "Gaya hidup mewah",
      "Kebiasaan menabung",
      "Tingkat pendidikan tinggi"
    ],
    a: [0, 1, 2]
  },
  {
    q: "Manakah yang termasuk teori-teori dalam sosiologi?",
    opts: [
      "Teori fungsionalisme",
      "Teori konflik",
      "Teori interaksionisme simbolik",
      "Teori evolusi",
      "Teori relativitas",
      "Teori gravitasi"
    ],
    a: [0, 1, 2]
  },
  {
    q: "Manakah yang termasuk dampak positif konflik sosial?",
    opts: [
      "Mendorong integrasi baru",
      "Memperkuat solidaritas kelompok",
      "Menghancurkan fasilitas sosial",
      "Menimbulkan trauma psikologis",
      "Memperjelas posisi masing-masing pihak",
      "Menyebabkan disintegrasi"
    ],
    a: [0, 1, 4]
  },
  {
    q: "Manakah yang termasuk fungsi lembaga pendidikan?",
    opts: [
      "Transmisi budaya",
      "Pengembangan kepribadian",
      "Kontrol sosial",
      "Pembentukan kasta",
      "Diskriminasi sosial",
      "Indoktrinasi"
    ],
    a: [0, 1, 2]
  },
  {
    q: "Manakah yang termasuk peran sosiologi untuk pemecahan masalah sosial?",
    opts: [
      "Mengidentifikasi akar masalah",
      "Menganalisis dampak kebijakan",
      "Mengganti peran pemerintah",
      "Mengambil alih kekuasaan",
      "Memberikan rekomendasi solusi",
      "Menggugurkan program pemerintah"
    ],
    a: [0, 1, 4]
  },
  {
    q: "Manakah yang termasuk ciri masyarakat modern?",
    opts: [
      "Sistem stratifikasi terbuka",
      "Mobilitas sosial tinggi",
      "Kekerabatan yang kuat",
      "Solidaritas mekanik",
      "Spesialisasi pekerjaan",
      "Kehidupan yang homogen"
    ],
    a: [0, 1, 4]
  },
  {
    q: "Manakah yang termasuk bentuk pengendalian sosial preventif?",
    opts: [
      "Pendidikan karakter",
      "Penyuluhan hukum",
      "Program pelatihan",
      "Penahanan tersangka",
      "Penjatuhan sanksi",
      "Rehabilitasi"
    ],
    a: [0, 1, 2]
  },
  {
    q: "Manakah yang termasuk ciri kelompok sosial?",
    opts: [
      "Ada interaksi antar anggota",
      "Ada kesadaran bersama",
      "Ada tujuan bersama",
      "Ada pemimpin formal",
      "Ada aturan tertulis",
      "Ada batas geografis"
    ],
    a: [0, 1, 2]
  },
  {
    q: "Manakah yang termasuk faktor penghambat mobilitas sosial?",
    opts: [
      "Stratifikasi sosial tertutup",
      "Diskriminasi",
      "Pendidikan rendah",
      "Keterampilan tinggi",
      "Jaringan sosial yang luas",
      "Kekayaan yang dimiliki"
    ],
    a: [0, 1, 2]
  }
];