// ============================================================
// DATA SOAL BERURUT - 3 TIPE: SEDERHANA, MCMA, KATEGORI
// (Dilengkapi 3 Digit Kode & Alasan Pembahasan)
// ============================================================

const SOAL_ASLI = [
    // --- 1. Sosiologi sebagai Ilmu Pengetahuan ---
    {
        id: 1,
        kode: "842",
        tipe: "Sederhana",
        teks: "Sosiologi merupakan ilmu pengetahuan yang didasarkan pada observasi terhadap kenyataan dan akal sehat yang hasilnya tidak bersifat spekulatif. Hal ini menunjukkan ciri sosiologi, yaitu ....",
        opsi: ["Empiris", "Teoretis", "Kumulatif", "Nonetis", "Kualitatif"],
        jawabanBenar: 0,
        pembahasan: "Ciri **Empiris** berarti ilmu sosiologi didasarkan pada pengamatan (observasi) nyata di lapangan dan akal sehat, bukan bersumber dari spekulasi."
    },
    {
        id: 2,
        kode: "159",
        tipe: "MCMA",
        teks: "Pernyataan berikut yang mencerminkan hakikat sosiologi sebagai ilmu pengetahuan adalah ....",
        opsi: [
            "Termasuk dalam kelompok ilmu sosial",
            "Merupakan ilmu pengetahuan yang bersifat murni (pure science)",
            "Merupakan ilmu pengetahuan yang bersifat normatif",
            "Merupakan ilmu pengetahuan yang abstrak dan generalis",
            "Bertujuan menghasilkan hukum alam yang terikat ruang dan waktu"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Hakikat sosiologi adalah sebagai **ilmu sosial**, **ilmu murni** (dapat juga terapan), **kategori abstrak**, serta **generalis**. Sosiologi bersifat kategoris (bukan normatif)."
    },
    {
        id: 3,
        kode: "703",
        tipe: "Kategori",
        teks: "Tentukan kesesuaian antara deskripsi penerapannya dengan kegunaan/manfaat ilmu sosiologi berikut!",
        pernyataan: [
            "Menyediakan data empiris tentang kebutuhan warga sebelum pembangunan fasos dilakukan.",
            "Memberikan evaluasi kritis terhadap pelaksanaan kebijakan relokasi pasar.",
            "Memvonis secara mutlak bahwa kebudayaan suatu kelompok masyarakat itu menyimpang."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 0, 1],
        pembahasan: "Pernyataan 1 dan 2 **Sesuai** (fungsi perencanaan & evaluasi). Pernyataan 3 **Tidak Sesuai** karena sosiologi bersifat *nonetis* (tidak memvonis/menilai baik-buruk moral masyarakat)."
    },
    {
        id: 4,
        kode: "048",
        tipe: "Sederhana",
        teks: "Perkembangan sosiologi pada abad ke-19 sangat dipengaruhi oleh Revolusi Industri di Inggris dan Revolusi Perancis. Tokoh yang pertama kali memperkenalkan istilah sosiologi dalam bukunya *Cours de Philosophie Positive* adalah ....",
        opsi: ["Emile Durkheim", "Karl Marx", "Auguste Comte", "Max Weber", "Herbert Spencer"],
        jawabanBenar: 2,
        pembahasan: "Istilah 'Sosiologi' pertama kali dirumuskan oleh **Auguste Comte** sehingga ia dijuluki sebagai Bapak Sosiologi."
    },

    // --- 2. Konsep dan Bentuk Hubungan Sosial ---
    {
        id: 5,
        kode: "916",
        tipe: "Sederhana",
        teks: "Dua kelompok warga yang sempat berselisih paham sepakat untuk menyelesaikannya melalui pihak ketiga yang netral dan keputusannya bersifat mengikat. Bentuk akomodasi ini disebut ....",
        opsi: ["Mediasi", "Arbitrase", "Konsiliasi", "Kompromi", "Adjudikasi"],
        jawabanBenar: 0,
        pembahasan: "**Arbitrase** adalah penyelesaian konflik melalui pihak ketiga di mana keputusan pihak ketiga tersebut bersifat mengikat kedua belah pihak."
    },
    {
        id: 6,
        kode: "324",
        tipe: "MCMA",
        teks: "Manakah di antara interaksi berikut yang termasuk ke dalam proses sosial disosiatif?",
        opsi: [
            "Kompetisi memperebutkan beasiswa pendidikan",
            "Kontravensi berupa kecemburuan sosial antarwilayah",
            "Asimilasi budaya antar suku bangsa",
            "Konflik antar pendukung tim sepak bola",
            "Kooperasi dalam kegiatan kerja bakti"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Proses **disosiatif** mengarah pada perpecahan/persaingan, meliputi **Persaingan (Kompetisi)**, **Kontravensi**, dan **Konflik/Pertentangan**."
    },
    {
        id: 7,
        kode: "581",
        tipe: "Kategori",
        teks: "Tentukan apakah syarat terjadinya interaksi sosial berikut sudah tergolong 'Sesuai' atau 'Tidak Sesuai' berdasarkan konsep sosiologis!",
        pernyataan: [
            "Dua orang berpapasan di jalan tanpa saling menatap dan tidak memberi isyarat apa pun.",
            "Seseorang membaca pesan singkat dari rekannya lalu membalas pesan tersebut.",
            "Guru memberikan petunjuk tugas dan siswa mencatatnya di buku latihan."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [1, 0, 0],
        pembahasan: "Pernyataan 1 **Tidak Sesuai** karena tidak ada kontak sosial dan komunikasi aksi-reaksi. Pernyataan 2 dan 3 **Sesuai** karena memenuhi syarat kontak dan komunikasi."
    },
    {
        id: 8,
        kode: "112",
        tipe: "Sederhana",
        teks: "Sikap mengagumi seorang figur publik secara berlebihan sehingga meniru tata cara berpakaian, gaya bicara, hingga gaya hidupnya secara berlebihan dinamakan ....",
        opsi: ["Imitasi", "Sugesti", "Identifikasi", "Simpati", "Empati"],
        jawabanBenar: 2,
        pembahasan: "**Identifikasi** adalah kecenderungan atau keinginan dalam diri seseorang untuk menjadi sama (identik) dengan figur idolanya."
    },

    // --- 3. Lembaga Sosial dan Perannya ---
    {
        id: 9,
        kode: "637",
        tipe: "Sederhana",
        teks: "Lembaga sosial yang terbentuk secara tidak sengaja dari kebiasaan-kebiasaan masyarakat yang tumbuh bertahap, seperti tata cara adat istiadat, dinamakan ....",
        opsi: ["Enacted institution", "Crescive institution", "Basic institution", "Operative institution", "Restricted institution"],
        jawabanBenar: 1,
        pembahasan: "**Crescive institution** adalah lembaga primer yang tumbuh secara tidak sengaja dari adat/kebiasaan masyarakat."
    },
    {
        id: 10,
        kode: "405",
        tipe: "MCMA",
        teks: "Berikut ini yang merupakan fungsi laten (tersembunyi/tidak disadari) dari lembaga pendidikan adalah ....",
        opsi: [
            "Memperpanjang masa remaja dan menunda usia perkawinan",
            "Transmisi kebudayaan masyarakat",
            "Menjadi sarana pembangkangan/pembangkangan kritis terhadap status quo",
            "Mengajarkan keterampilan dasar membaca dan berhitung",
            "Mempertahankan sistem kelas sosial masyarakat"
        ],
        jawabanBenar: [0, 2, 4],
        pembahasan: "Fungsi **laten** sekolah mencakup menunda usia perkawinan, pengurangan kontrol orang tua, sarana kritis/pembangkangan sosial, dan penjelas status kelas."
    },
    {
        id: 11,
        kode: "890",
        tipe: "Kategori",
        teks: "Tentukan peran lembaga sosial berikut terhadap keteraturan masyarakat!",
        pernyataan: [
            "Lembaga Keluarga: Menanamkan nilai dan norma dasar melalui proses sosialisasi primer.",
            "Lembaga Agama: Memberikan pedoman moral dan kontrol perilaku individu berbasis nilai spiritual.",
            "Lembaga Ekonomi: Mengatur tata tertib hukum penindakan kejahatan pidana."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 0, 1],
        pembahasan: "Pernyataan 1 dan 2 **Sesuai**. Pernyataan 3 **Tidak Sesuai** karena penindakan kejahatan pidana adalah ranah Lembaga Hukum/Politik, bukan Ekonomi."
    },

    // --- 4. Ragam Gejala Sosial ---
    {
        id: 12,
        kode: "274",
        tipe: "Sederhana",
        teks: "Fenomena merebaknya perilaku konsumtif di kalangan remaja perkotaan akibat paparan tren di media sosial merupakan bentuk gejala sosial yang dipengaruhi oleh faktor ....",
        opsi: ["Ekologis", "Kultural & Teknologi", "Demografis", "Biologis", "Geografis"],
        jawabanBenar: 1,
        pembahasan: "Gejala sosial tersebut dipengaruhi perkembangan **teknologi** komunikasi (media sosial) yang mengubah kebiasaan/gaya hidup (**kultural**)."
    },
    {
        id: 13,
        kode: "751",
        tipe: "MCMA",
        teks: "Manakah pernyataan di bawah ini yang merupakan karakteristik gejala sosial?",
        opsi: [
            "Berbeda-beda di setiap tempat dan era (dinamis)",
            "Bersifat sangat konstan dan mudah diprediksi persis",
            "Bersifat kompleks dan saling berkaitan satu sama lain",
            "Tidak terikat oleh konteks kebudayaan setempat",
            "Bersifat subyektif dan kualitatif"
        ],
        jawabanBenar: [0, 2, 4],
        pembahasan: "Karakteristik gejala sosial: **dinamis/beragam**, **kompleks**, berskala **subyektif**, serta dipengaruhi konteks budaya masyarakat."
    },
    {
        id: 14,
        kode: "029",
        tipe: "Kategori",
        teks: "Tentukan apakah contoh fenomena berikut tergolong 'Gejala Sosial Micro' atau 'Gejala Sosial Macro'!",
        pernyataan: [
            "Interaksi dan komunikasi tatap muka antara dua kawan lama di kafe.",
            "Kenaikan tingkat pengangguran nasional akibat krisis ekonomi global.",
            "Pergerakan arus urbanisasi massal dari desa ke kota setelah hari raya."
        ],
        kategori: ["Gejala Sosial Micro", "Gejala Sosial Macro"],
        jawabanBenar: [0, 1, 1],
        pembahasan: "Interaksi individu tergolong **Micro**. Kenaikan pengangguran nasional dan urbanisasi massal berskala struktur masyarakat luas (**Macro**)."
    },

    // --- 5. Dinamika Masyarakat Multikultural ---
    {
        id: 15,
        kode: "618",
        tipe: "Sederhana",
        teks: "Sikap atau pandangan yang menilai kebudayaan suku bangsa lain berdasarkan standar dan ukuran kebudayaannya sendiri dinamakan ....",
        opsi: ["Chauvinisme", "Etnosentrisme", "Xenofobia", "Relativisme Kebudayaan", "Pluralisme"],
        jawabanBenar: 1,
        pembahasan: "**Etnosentrisme** adalah sikap menilai budaya lain memakai tolok ukur budayanya sendiri, sering kali menganggap budayanya superior."
    },
    {
        id: 16,
        kode: "943",
        tipe: "MCMA",
        teks: "Berikut ini yang merupakan faktor pendorong terciptanya integrasi sosial dalam masyarakat multikultural adalah ....",
        opsi: [
            "Sikap toleransi terhadap kebudayaan lain",
            "Perkawinan silang antar suku (amalgamasi)",
            "Sikap primordialisme yang sempit",
            "Musuh bersama dari luar kelompok",
            "Isolasi geografis antar pulau"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Faktor pendorong integrasi: **Toleransi**, **Amalgamasi**, dan adanya **Musuh bersama dari luar**. Primordialisme sempit dan isolasi justru menghambat integrasi."
    },
    {
        id: 17,
        kode: "185",
        tipe: "Kategori",
        teks: "Tentukan kesesuaian antara konsep dan realitas masyarakat multikultural berikut!",
        pernyataan: [
            "Konsolidasi: Terdapat penguatan hubungan silang antar keanggotaan suku dan profesi.",
            "Interseksi: Persilangan keanggotaan individu dalam berbagai kelompok sosial yang berbeda.",
            "Pluralisme: Sikap mengakui dan menghargai keberagaman suku, agama, dan budaya."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [1, 0, 0],
        pembahasan: "Pernyataan 1 **Tidak Sesuai** (penguatan hubungan silang adalah *interseksi*, sedangkan konsolidasi adalah tumpang tindih parameter yang mempertegas perbedaan). Pernyataan 2 & 3 **Sesuai**."
    },

    // --- 6. Langkah dan Metode Penelitian Sosial ---
    {
        id: 18,
        kode: "532",
        tipe: "Sederhana",
        teks: "Seorang peneliti ingin mengetahui mendalam tentang kebiasaan hidup suku terasing dengan cara tinggal bersama mereka selama 6 bulan. Metode penelitian yang digunakan adalah ....",
        opsi: ["Survei Eksplanatif", "Eksperimen", "Studi Kasus / Etnografi", "Analisis Isi", "Kuantitatif Analitis"],
        jawabanBenar: 2,
        pembahasan: "**Etnografi / Studi Kasus** kualitatif memanfaatkan teknik *participant observation* (peneliti hidup langsung bersama subjek penelitian)."
    },
    {
        id: 19,
        kode: "806",
        tipe: "MCMA",
        teks: "Ciri-ciri utama dari pendekatan penelitian kualitatif dalam sosiologi adalah ....",
        opsi: [
            "Data berorientasi pada angka dan uji statistik",
            "Mengutamakan kedalaman makna (*verstehen*) dan deskripsi kata-kata",
            "Instrumen penelitian utama adalah peneliti itu sendiri",
            "Desain penelitian bersifat sangat kaku dan tak dapat diubah",
            "Bersifat induktif berdasarkan temuan lapangan"
        ],
        jawabanBenar: [1, 2, 4],
        pembahasan: "Ciri **Kualitatif**: fokus makna (*verstehen*), *human instrument* (peneliti instrumen utama), dan bersifat **induktif**."
    },
    {
        id: 20,
        kode: "369",
        tipe: "Kategori",
        teks: "Tentukan jenis data penelitian sosial berikut!",
        pernyataan: [
            "Dokumen arsip jumlah penduduk dari kantor BPS.",
            "Hasil wawancara mendalam langsung dengan tokoh masyarakat.",
            "Catatan lembar kuesioner yang diisi sendiri oleh responden."
        ],
        kategori: ["Data Primer", "Data Sekunder"],
        jawabanBenar: [1, 0, 0],
        pembahasan: "Dokumen BPS tergolong **Data Sekunder** (diperoleh dari pihak kedua). Hasil wawancara dan kuesioner dari responden tergolong **Data Primer**."
    },
    {
        id: 21,
        kode: "217",
        tipe: "Sederhana",
        teks: "Dugaan sementara atau jawaban sementara terhadap rumusan masalah penelitian yang harus diuji kebenarannya melalui empiris disebut ....",
        opsi: ["Asumsi", "Variabel", "Hipotesis", "Sampel", "Populasi"],
        jawabanBenar: 2,
        pembahasan: "**Hipotesis** adalah anggapan/jawaban sementara yang kebenarannya masih harus diuji secara ilmiah."
    },

    // --- 7. Kelompok Sosial dan Dinamikanya ---
    {
        id: 22,
        kode: "690",
        tipe: "Sederhana",
        teks: "Ikatan lahir batin yang bersifat intim, privat, dan eksklusif seperti ikatan kekeluargaan atau kekerabatan menurut Ferdinand Tönnies disebut ....",
        opsi: ["Gesellschaft", "Gemeinschaft", "Reference Group", "Membership Group", "Secondary Group"],
        jawabanBenar: 1,
        pembahasan: "**Gemeinschaft** (Paguyuban) merupakan bentuk kehidupan bersama di mana anggotanya diikat oleh hubungan batin yang murni, privat, dan abadi."
    },
    {
        id: 23,
        kode: "453",
        tipe: "MCMA",
        teks: "Di bawah ini yang termasuk kelompok sosial tak teratur (*unorganized group*) adalah ....",
        opsi: [
            "Kerumunan penonton pertunjukan musik (crowd)",
            "Persatuan Guru Republik Indonesia (PGRI)",
            "Publik pendengar siaran radio",
            "Kelompok massa unjuk rasa di jalanan",
            "Ikatan Dokter Indonesia (IDI)"
        ],
        jawabanBenar: [0, 2, 3],
        pembahasan: "Kelompok tak teratur meliputi **Kerumunan (Crowd)**, **Massa**, dan **Publik**. PGRI dan IDI adalah organisasi formal/teratur."
    },
    {
        id: 24,
        kode: "978",
        tipe: "Kategori",
        teks: "Tentukan klasifikasi kelompok sosial berdasarkan sudut pandang anggotanya!",
        pernyataan: [
            "Perasaan 'kelompok kita' yang diwarnai oleh simpati dan kesetia kawanan.",
            "Perasaan 'kelompok mereka' yang sering disertai prasangka atau kecemburuan.",
            "Kelompok tempat seseorang secara fisik terdaftar resmi sebagai anggota."
        ],
        kategori: ["In-Group / Out-Group", "Membership Group"],
        jawabanBenar: [0, 0, 1],
        pembahasan: "Pernyataan 1 (*In-group*) dan Pernyataan 2 (*Out-group*) bersumber dari sudut pandang pembagian **In-Group / Out-Group**. Pernyataan 3 merujuk pada **Membership Group**."
    },

    // --- 8. Ketidaksetaraan dan Kesetaraan Sosial ---
    {
        id: 25,
        kode: "104",
        tipe: "Sederhana",
        teks: "Sistem pelapisan sosial tertutup yang tidak memungkinkan individu berpindah posisi stratifikasinya secara vertikal dapat ditemukan pada masyarakat yang menganut ....",
        opsi: ["Sistem Kasta", "Sistem Kelas Ekonomi", "Masyarakat Industri Modern", "Sistem Meritokrasi", "Sistem Demokrasi"],
        jawabanBenar: 0,
        pembahasan: "**Sistem Kasta** adalah bentuk stratifikasi tertutup; kedudukan diperoleh berdasarkan kelahiran (ascribed status) dan amat sulit berpindah."
    },
    {
        id: 26,
        kode: "762",
        tipe: "MCMA",
        teks: "Berikut ini yang merupakan upaya strategis pemerintah dalam mewujudkan kesetaraan sosial dan mengurangi ketimpangan adalah ....",
        opsi: [
            "Penyaluran beasiswa pendidikan bagi siswa berpenghasilan rendah",
            "Pembangunan infrastruktur secara terpusat di pulau Jawa saja",
            "Pemberdayaan ekonomi berbasis usaha mikro kecil menengah (UMKM)",
            "Penyediaan akses layanan kesehatan gratis/terjangkau",
            "Pemberian keistimewaan pajak bagi perusahaan multinasional semata"
        ],
        jawabanBenar: [0, 2, 3],
        pembahasan: "Upaya mewujudkan **kesetaraan sosial**: pemerataan fasilitas pendidikan, kesehatan, dan pemberdayaan ekonomi rakyat (UMKM)."
    },
    {
        id: 27,
        kode: "521",
        tipe: "Kategori",
        teks: "Tentukan pembedaan bentuk diferensiasi sosial berdasarkan ciri-cirinya!",
        pernyataan: [
            "Pembedaan masyarakat berdasarkan warna kulit, bentuk rambut, dan struktur muka.",
            "Pembedaan masyarakat berdasarkan agama, kepercayaan, dan ritual keyakinan.",
            "Pembedaan masyarakat berdasarkan kepemilikan aset kekayaan dan pendapatan."
        ],
        kategori: ["Diferensiasi Sosial", "Stratifikasi Sosial"],
        jawabanBenar: [0, 0, 1],
        pembahasan: "Pembedaan ras (fisik) dan agama bersifat horisontal (**Diferensiasi Sosial**). Pembedaan tingkat kekayaan/pendapatan bertingkat vertikal (**Stratifikasi Sosial**)."
    },

    // --- 9. Konflik Sosial dan Penanganannya ---
    {
        id: 28,
        kode: "389",
        tipe: "Sederhana",
        teks: "Upaya penghentian pertikaian antara dua pihak yang bersengketa dengan cara menunjuk lembaga peradilan resmi untuk memutuskan perkara dinamakan ....",
        opsi: ["Konsiliasi", "Stalemate", "Adjudikasi", "Arbitrase", "Mediasi"],
        jawabanBenar: 2,
        pembahasan: "**Adjudikasi** adalah bentuk penyelesaian konflik/sengketa yang dilakukan melalui mekanisme pengadilan (jalur hukum formal)."
    },
    {
        id: 29,
        kode: "645",
        tipe: "MCMA",
        teks: "Faktor-faktor yang dapat memicu terjadinya konflik sosial di dalam masyarakat adalah ....",
        opsi: [
            "Perbedaan individu dalam hal pendirian dan perasaan",
            "Perubahan sosial yang terjadi secara mendadak/cepat",
            "Adanya kesamaan kepentingan dan tujuan hidup",
            "Perbedaan latar belakang kebudayaan",
            "Sikap keterbukaan dan toleransi antar warga"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Penyebab konflik: **Perbedaan pendirian/perasaan**, **Perbedaan budaya**, dan **Perubahan sosial yang terlalu cepat**."
    },
    {
        id: 30,
        kode: "830",
        tipe: "Kategori",
        teks: "Tentukan dampak dari konflik sosial berikut ini!",
        pernyataan: [
            "Meningkatnya solidaritas internal sesama anggota kelompok (*in-group solidarity*).",
            "Kerusakan sarana prasarana fisik dan jatuhnya korban jiwa.",
            "Anomalisasi dan jatuhnya efektivitas fungsi nilai serta norma masyarakat."
        ],
        kategori: ["Dampak Positif Konflik", "Dampak Negatif Konflik"],
        jawabanBenar: [0, 1, 1],
        pembahasan: "Meningkatnya solidaritas kelompok internal adalah **Dampak Positif**. Kerusakan fisik, korban jiwa, serta disintegrasi norma tergolong **Dampak Negatif**."
    },
    {
        id: 31,
        kode: "296",
        tipe: "Sederhana",
        teks: "Keadaan di mana dua pihak yang berkonflik memiliki kekuatan seimbang sehingga pertikaian terhenti dengan sendirinya dinamakan ....",
        opsi: ["Coercion", "Stalemate", "Compromise", "Toleration", "Conciliation"],
        jawabanBenar: 1,
        pembahasan: "**Stalemate** adalah keadaan di mana pihak-pihak bertikai berhenti berkonflik karena kekuatan seimbang."
    },

    // --- 10. Perubahan Sosial dan Dampaknya ---
    {
        id: 32,
        kode: "912",
        tipe: "Sederhana",
        teks: "Teori yang menyatakan bahwa perubahan sosial berputar melingkar melalui tahapan-tahapan tanpa batas akhir yang jelas (seperti siklus lahir, berkembang, dan runtuh) adalah ....",
        opsi: ["Teori Linier", "Teori Siklus", "Teori Konflik", "Teori Fungsionalis", "Teori Evolusi Modern"],
        jawabanBenar: 1,
        pembahasan: "**Teori Siklus** memandang bahwa perubahan sosial berputar terus-menerus dan tidak menuju pada satu titik akhir tertentu."
    },
    {
        id: 33,
        kode: "147",
        tipe: "MCMA",
        teks: "Berikut ini yang merupakan faktor pendorong terjadinya perubahan sosial secara internal (dari dalam masyarakat) adalah ....",
        opsi: [
            "Bertambah atau berkurangnya jumlah penduduk (demogafi)",
            "Bencana alam melanda kawasan permukiman",
            "Penemuan-penemuan baru (inovasi/discovery)",
            "Pemberontakan atau revolusi internal",
            "Peperangan dengan negara tetangga"
        ],
        jawabanBenar: [0, 2, 3],
        pembahasan: "Faktor **internal**: dinamika demografi, penemuan baru, serta pemberontakan/revolusi. Bencana alam dan perang lawan negara luar adalah faktor **eksternal**."
    },
    {
        id: 34,
        kode: "563",
        tipe: "Kategori",
        teks: "Tentukan bentuk perubahan sosial berdasarkan kecepatan dan jangkauannya!",
        pernyataan: [
            "Perubahan tata cara bertani tradisional menuju mekanisasi pertanian canggih.",
            "Perubahan mode pakaian dan gaya rambut remaja.",
            "Revolusi industri yang merombak tatanan ekonomi masyarakat global."
        ],
        kategori: ["Perubahan Besar / Mendasar", "Perubahan Kecil / Pengaruh Luas Rendah"],
        jawabanBenar: [0, 1, 0],
        pembahasan: "Mekanisasi pertanian dan Revolusi Industri memberi dampak mendasar (**Perubahan Besar**). Mode pakaian hanya mengubah bagian luar tanpa dampaknya pada struktur dasar (**Perubahan Kecil**)."
    },

    // --- 11. Pengaruh Globalisasi dan Dampaknya ---
    {
        id: 35,
        kode: "784",
        tipe: "Sederhana",
        teks: "Kondisi guncangan budaya akibat masyarakat belum siap menerima unsur kebudayaan asing yang datang secara mendadak disebut ....",
        opsi: ["Cultural Lag", "Cultural Shock", "Westernisasi", "Konsumerisme", "Anomi"],
        jawabanBenar: 1,
        pembahasan: "**Cultural Shock** (guncangan budaya) terjadi ketika seseorang/masyarakat terkejut dan tidak siap menghadapi budaya baru."
    },
    {
        id: 36,
        kode: "031",
        tipe: "MCMA",
        teks: "Dampak negatif dari arus globalisasi dibidang kebudayaan lokal adalah ....",
        opsi: [
            "Luntur dan terpinggirkannya kearifan lokal (*local wisdom*)",
            "Munculnya sikap konsumerisme dan gaya hidup hedonis",
            "Kemudahan transfer teknologi medis berteknologi tinggi",
            "Erosi identitas kebudayaan nasional bagi generasi muda",
            "Terbukanya peluang pasar ekspor bagi produk UMKM"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Dampak **negatif budaya**: lunturnya kearifan lokal, maraknya konsumerisme/hedonisme, dan hilangnya identitas nasional."
    },
    {
        id: 37,
        kode: "420",
        tipe: "Kategori",
        teks: "Tentukan keterkaitan istilah ketimpangan akibat globalisasi berikut!",
        pernyataan: [
            "Cultural Lag: Ketertinggalan unsur kebudayaan immaterial/pola pikir dibanding kemajuan teknologi material.",
            "Westernisasi: Proses meniru gaya hidup dan budaya Barat tanpa memfilter kesesuaiannya.",
            "Guns, Germs, and Steel: Pengikatan diri pada kearifan lokal tradisional secara kaku."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 0, 1],
        pembahasan: "Pernyataan 1 dan 2 **Sesuai**. Pernyataan 3 **Tidak Sesuai** (istilah tersebut adalah judul teori peradaban Jared Diamond, bukan pengikatan kearifan lokal kaku/glokalisasi)."
    },

    // --- 12. Fenomena Sosial Globalisasi secara Kritis ---
    {
        id: 38,
        kode: "658",
        tipe: "Sederhana",
        teks: "Gaya hidup yang memprioritaskan pemenuhan barang-barang mewah dan kesenangan material sebagai tujuan utama hidup dinamakan ....",
        opsi: ["Sekularisme", "Hedonisme", "Individualisme", "Materialisme", "Liberalisme"],
        jawabanBenar: 1,
        pembahasan: "**Hedonisme** adalah pandangan hidup yang menganggap bahwa kesenangan dan kenikmatan materi adalah tujuan utama."
    },
    {
        id: 39,
        kode: "899",
        tipe: "MCMA",
        teks: "Sikap kritis dan bijak yang perlu dikembangkan dalam menghadapi era pergaulan global adalah ....",
        opsi: [
            "Menutup diri rapat-rapat dari perkembangan ilmu dan teknologi asing",
            "Menyaring (memfilter) budaya luar dengan Pancasila dan norma agama",
            "Melestarikan dan mempromosikan kearifan lokal ke kancah internasional",
            "Menerima seluruh tren budaya luar secara mentah tanpa pertimbangan",
            "Memperkuat rasa cinta tanah air dan produk dalam negeri"
        ],
        jawabanBenar: [1, 2, 4],
        pembahasan: "Sikap kritis: **memfilter budaya**, **melestarikan kearifan lokal**, serta **memperkuat cinta produk dalam negeri**. Menutup diri secara total atau menerima mentah-mentah tidak tepat."
    },
    {
        id: 40,
        kode: "235",
        tipe: "Kategori",
        teks: "Tentukan respons masyarakat (*glokalisasi* vs *homogenisasi*) terhadap pengaruh tren global berikut!",
        pernyataan: [
            "Perusahaan makanan cepat saji internasional mengeluarkan menu dengan cita rasa lokal rendang.",
            "Seluruh anak muda di berbagai negara memakai gaya pakaian dan bahasa gaul identik yang sama persis.",
            "Seni tari tradisional dikombinasikan dengan musik modern tanpa menghilangkan pakem aslinya."
        ],
        kategori: ["Glokalisasi (Penyesuaian Lokal)", "Homogenisasi (Penyeragaman Global)"],
        jawabanBenar: [0, 1, 0],
        pembahasan: "Pernyataan 1 & 3 tergolong **Glokalisasi** (perpaduan tren global dengan kearifan lokal). Pernyataan 2 tergolong **Homogenisasi** (penyeragaman budaya)."
    },

    // --- Lanjutan Penguatan Topik Gabungan (41-50) ---
    {
        id: 41,
        kode: "714",
        tipe: "Sederhana",
        teks: "Masyarakat yang mendasarkan pembagian kerjanya pada spesialisasi keahlian dan hukum normatif formal (restitutif) menurut Durkheim terikat dalam ....",
        opsi: ["Solidaritas Mekanik", "Solidaritas Organik", "Gemeinschaft", "Paguyuban", "Kelompok Primer"],
        jawabanBenar: 1,
        pembahasan: "**Solidaritas Organik** diikat oleh ketergantungan antar spesialisasi kerja dan hukum restitutif (ciri masyarakat modern)."
    },
    {
        id: 42,
        kode: "083",
        tipe: "MCMA",
        teks: "Di bawah ini yang merupakan ciri-ciri dari lembaga sosial adalah ....",
        opsi: [
            "Memiliki simbol atau lambang tersendiri",
            "Memiliki tingkat kekekalan/daya tahan tertentu",
            "Tidak memiliki norma yang tertulis maupun tidak tertulis",
            "Memiliki tujuan yang jelas ingin dicapai",
            "Bersifat sangat acak dan tidak memiliki struktur"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Ciri lembaga sosial: Memiliki **simbol/lambang**, **kekekalan relatif**, **tujuan**, serta **alat kelengkapan/norma**."
    },
    {
        id: 43,
        kode: "507",
        tipe: "Kategori",
        teks: "Tentukan teknik pengambilan sampel (sampling) berikut!",
        pernyataan: [
            "Peneliti mengambil sampel berdasarkan urutan nomor genap dari daftar anggota populasi.",
            "Peneliti membagi populasi ke dalam tingkatan strata pendidikan sebelum mengambil sampel secara acak.",
            "Peneliti memilih siapa saja responden yang kebetulan ditemuinya di lapangan."
        ],
        kategori: ["Probability Sampling", "Non-Probability Sampling"],
        jawabanBenar: [0, 0, 1],
        pembahasan: "Systematic sampling dan Stratified sampling tergolong **Probability Sampling**. Accidental sampling (kebetulan ditemui) tergolong **Non-Probability Sampling**."
    },
    {
        id: 44,
        kode: "961",
        tipe: "Sederhana",
        teks: "Upaya pencegahan konflik sosial sebelum pertikaian terjadi dengan menyebarkan nilai-nilai toleransi dan kedamaian dinamakan preventif. Sedangkan upaya setelah terjadi konflik disebut ....",
        opsi: ["Kuratif / Represif", "Korektif", "Persuasif", "Coercion", "Rehabilitatif"],
        jawabanBenar: 0,
        pembahasan: "Penanganan konflik pasca-kejadian dinamakan upaya **Kuratif / Represif**."
    },
    {
        id: 45,
        kode: "348",
        tipe: "MCMA",
        teks: "Berikut ini yang termasuk ke dalam variabel penelitian kuantitatif yang bersifat saling mempengaruhi adalah ....",
        opsi: [
            "Variabel Bebas (Independent Variable)",
            "Variabel Terikat (Dependent Variable)",
            "Variabel Intervening / Antara",
            "Variabel Etnografi",
            "Variabel Kuantum"
        ],
        jawabanBenar: [0, 1, 2],
        pembahasan: "Dalam analisis statistik kuantitatif dikenal variabel **Bebas (Independent)**, **Terikat (Dependent)**, serta variabel **Intervening/Kontrol**."
    },
    {
        id: 46,
        kode: "172",
        tipe: "Kategori",
        teks: "Tentukan bentuk saluran mobilitas sosial berikut!",
        pernyataan: [
            "Seseorang naik jabatan menjadi manajer setelah menyelesaikan pendidikan S2.",
            "Prajurit TNI mendapat kenaikan pangkat luar biasa setelah berhasil menjalankan misi negara.",
            "Seorang politisi menjadi anggota DPR setelah memenangkan Pemilu melalui partai politik."
        ],
        kategori: ["Saluran Pendidikan/Militer", "Saluran Politik"],
        jawabanBenar: [0, 0, 1],
        pembahasan: "Pernyataan 1 (Pendidikan) dan 2 (Militer) masuk kategori **Pendidikan/Militer**. Pernyataan 3 melalui Parpol tergolong saluran **Politik**."
    },
    {
        id: 47,
        kode: "825",
        tipe: "Sederhana",
        teks: "Sikap mementingkan diri sendiri serta tidak peduli terhadap urusan lingkungan masyarakat sekitar dinamakan ....",
        opsi: ["Hedonisme", "Individualisme", "Materialisme", "Sekularisme", "Chauvinisme"],
        jawabanBenar: 1,
        pembahasan: "**Individualisme** adalah paham/sikap yang mementingkan hak dan kebebasan diri sendiri di atas kepentingan bersama."
    },
    {
        id: 48,
        kode: "439",
        tipe: "MCMA",
        teks: "Manakah yang merupakan wujud dari ketimpangan sosial di bidang ekonomi?",
        opsi: [
            "Ketimpangan pendapatan antara pekerja sektor formal dan informal",
            "Konsentrasi kepemilikan aset ekonomi pada segmen konglomerasi",
            "Saling menghargai ritual keagamaan antar umat beragama",
            "Kesenjangan akses modal usaha bagi masyarakat pedesaan",
            "Tersedianya sarana hiburan publik yang seimbang di seluruh pelosok"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Ketimpangan ekonomi mencakup **kesenjangan pendapatan**, **pemusatan aset**, dan **akses modal usaha yang terbatas**."
    },
    {
        id: 49,
        kode: "661",
        tipe: "Kategori",
        teks: "Tentukan tipe kepemimpinan kelompok sosial menurut Max Weber berikut!",
        pernyataan: [
            "Kepemimpinan yang didasarkan pada tradisi turun-temurun (misal: Keraton/Keturunan Raja).",
            "Kepemimpinan yang bersumber dari keahlian hukum dan aturan tertulis yang disepakati.",
            "Kepemimpinan yang bersumber dari daya tarik kewibawaan luar biasa seorang tokoh."
        ],
        kategori: ["Otoritas Tradisional", "Otoritas Legal-Rasional / Karismatik"],
        jawabanBenar: [0, 1, 1],
        pembahasan: "Pernyataan 1 tergolong **Otoritas Tradisional**. Pernyataan 2 (Legal-Rasional) dan Pernyataan 3 (Karismatik) tergolong kategori opsi kedua."
    },
    {
        id: 50,
        kode: "094",
        tipe: "Sederhana",
        teks: "Proses peleburan dua kebudayaan atau lebih yang saling mempengaruhi sehingga menghasilkan kebudayaan baru tanpa menghilangkan unsur kebudayaan aslinya dinamakan ....",
        opsi: ["Asimilasi", "Akulturasi", "Amalgamasi", "Difusi", "Akomodasi"],
        jawabanBenar: 1,
        pembahasan: "**Akulturasi** adalah percampuran budaya yang menghasilkan budaya baru tanpa menghilangkan identitas kebudayaan aslinya."
    }
];

// STATE APLIKASI
let soalIndexSekarang = 0;
let jawabanUser = [];
let savedNama = "";
let savedNisn = "";
let isConfirmed = false;

// ELEMENT DOM
const identitySection = document.getElementById('identitySection');
const examSection = document.getElementById('examSection');
const namaLengkapInput = document.getElementById('namaLengkap');
const nisnInputInput = document.getElementById('nisnInput');
const startExamBtn = document.getElementById('startExamBtn');
const soalContainer = document.getElementById('soalContainer');
const progressBadge = document.getElementById('progressBadge');
const inlineAlert = document.getElementById('inlineAlert');

// INIT
if (startExamBtn) {
    startExamBtn.addEventListener('click', startExam);
}

// NOTIFIKASI UTAMA (INLINE)
function showNotification(message, type = "warning") {
    if (!inlineAlert) return;
    inlineAlert.className = `alert-box alert-${type}`;
    inlineAlert.innerHTML = `<span>${message}</span> <button style="background:none; border:none; cursor:pointer; font-weight:bold; color:inherit;" onclick="hideNotification()">✕</button>`;
    inlineAlert.style.display = "flex";
}

function hideNotification() {
    if (inlineAlert) inlineAlert.style.display = "none";
}

// FUNGSI LAYAR PENUH (FULLSCREEN MODE)
function openFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function startExam() {
    hideNotification();
    const nama = namaLengkapInput.value.trim();
    const nisn = nisnInputInput.value.trim();

    if (!nama || !nisn) {
        showNotification("⚠️ Silakan isi Nama Lengkap dan NISN terlebih dahulu!", "warning");
        return;
    }

    savedNama = nama;
    savedNisn = nisn;

    openFullscreen();

    identitySection.style.display = 'none';
    examSection.style.display = 'block';

    jawabanUser = new Array(SOAL_ASLI.length).fill(null);
    soalIndexSekarang = 0;

    renderSoal();
}

function renderSoal() {
    hideNotification();
    isConfirmed = false;
    const soal = SOAL_ASLI[soalIndexSekarang];

    if (progressBadge) {
        progressBadge.textContent = `${soalIndexSekarang + 1} / ${SOAL_ASLI.length}`;
    }

    let htmlOpsi = '';

    if (soal.tipe === "Sederhana") {
        htmlOpsi = `<div class="opsi-grid">` + soal.opsi.map((opt, i) => {
            const checked = jawabanUser[soalIndexSekarang] === i ? 'checked' : '';
            return `
                <div class="opsi-item" onclick="selectOpsiSederhana(${i})">
                    <input type="radio" name="opsi_${soalIndexSekarang}" id="opt_${i}" ${checked}>
                    <span class="opsi-huruf">${String.fromCharCode(65 + i)}</span>
                    <label for="opt_${i}">${opt}</label>
                </div>
            `;
        }).join('') + `</div>`;
    } else if (soal.tipe === "MCMA") {
        const currentAns = jawabanUser[soalIndexSekarang] || [];
        htmlOpsi = `<div class="opsi-grid">` + soal.opsi.map((opt, i) => {
            const checked = currentAns.includes(i) ? 'checked' : '';
            return `
                <div class="opsi-item" onclick="toggleOpsiMCMA(${i})">
                    <input type="checkbox" id="opt_${i}" ${checked}>
                    <span class="opsi-huruf">${String.fromCharCode(65 + i)}</span>
                    <label for="opt_${i}">${opt}</label>
                </div>
            `;
        }).join('') + `</div>`;
    } else if (soal.tipe === "Kategori") {
        const currentAns = jawabanUser[soalIndexSekarang] || new Array(soal.pernyataan.length).fill(null);
        
        htmlOpsi = `
            <div class="kategori-table-wrapper">
                <table class="kategori-table">
                    <thead>
                        <tr>
                            <th style="width: 50px; text-align:center;">No</th>
                            <th>Pernyataan</th>
                            ${soal.kategori.map(kat => `<th style="text-align:center;">${kat}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${soal.pernyataan.map((p, pIdx) => `
                            <tr>
                                <td style="text-align:center; font-weight:600;">${pIdx + 1}</td>
                                <td>${p}</td>
                                ${soal.kategori.map((kat, kIdx) => {
                                    const checked = currentAns[pIdx] === kIdx ? 'checked' : '';
                                    return `
                                        <td class="kategori-cell-radio">
                                            <input type="radio" name="kat_${soalIndexSekarang}_${pIdx}" value="${kIdx}" ${checked} onchange="selectKategori(${pIdx}, ${kIdx})">
                                        </td>
                                    `;
                                }).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    soalContainer.innerHTML = `
        <div style="margin-bottom: 1rem;">
            <span style="background:#8b5e3c; color:white; padding:4px 12px; border-radius:20px; font-size:0.85rem; font-weight:600;">Soal #${soalIndexSekarang + 1} (${soal.tipe})</span>
            <p style="font-size: 1.15rem; font-weight: 500; margin-top: 10px; line-height: 1.6; color:#2b1f15;">${soal.teks}</p>
        </div>
        <div id="opsiWrapper">${htmlOpsi}</div>
        
        <div id="actionArea" style="margin-top: 1.5rem; text-align: right;">
            <button type="button" class="btn btn-primary" id="confirmBtn" onclick="confirmJawaban()">✅ Konfirmasi Jawaban</button>
        </div>

        <div id="interactiveArea"></div>
    `;
}

// HANDLERS PILIHAN JAWABAN
function selectOpsiSederhana(idx) {
    if (isConfirmed) return;
    jawabanUser[soalIndexSekarang] = idx;
    renderSoal();
}

function toggleOpsiMCMA(idx) {
    if (isConfirmed) return;
    let arr = jawabanUser[soalIndexSekarang] || [];
    if (arr.includes(idx)) {
        arr = arr.filter(item => item !== idx);
    } else {
        arr.push(idx);
    }
    jawabanUser[soalIndexSekarang] = arr;
    renderSoal();
}

function selectKategori(pIdx, kIdx) {
    if (isConfirmed) return;
    const soal = SOAL_ASLI[soalIndexSekarang];
    let arr = jawabanUser[soalIndexSekarang] || new Array(soal.pernyataan.length).fill(null);
    arr[pIdx] = kIdx;
    jawabanUser[soalIndexSekarang] = arr;
}

// STEP 2: KONFIRMASI JAWABAN
function confirmJawaban() {
    const soal = SOAL_ASLI[soalIndexSekarang];
    const jawab = jawabanUser[soalIndexSekarang];

    if (jawab === null || jawab === undefined) {
        showNotification("⚠️ Silakan pilih jawaban terlebih dahulu sebelum melanjutkan!", "warning");
        return;
    }

    if (soal.tipe === "MCMA" && Array.isArray(jawab) && jawab.length === 0) {
        showNotification("⚠️ Silakan pilih setidaknya satu opsi jawaban!", "warning");
        return;
    }

    if (soal.tipe === "Kategori" && Array.isArray(jawab)) {
        if (jawab.length < soal.pernyataan.length || jawab.includes(null)) {
            showNotification("⚠️ Silakan isi semua pilihan kesesuaian pada tabel!", "warning");
            return;
        }
    }

    hideNotification();
    isConfirmed = true;

    const inputs = document.querySelectorAll('#opsiWrapper input');
    inputs.forEach(i => i.disabled = true);

    const actionArea = document.getElementById('actionArea');
    actionArea.innerHTML = `
        <div style="display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary" onclick="openModalVerifikasi()">💡 Buka Pembahasan</button>
            <button type="button" class="btn btn-primary" onclick="nextSoal()">Soal Berikutnya ➡️</button>
        </div>
    `;
}

// ============================================================
// POPUP / MODAL KHUSUS VERIFIKASI PEMBAHASAN
// ============================================================

function openModalVerifikasi() {
    // Hapus modal lama jika ada
    closeModalVerifikasi();

    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'modalVerifikasiOverlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(3px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 16px;
        box-sizing: border-box;
    `;

    modalOverlay.innerHTML = `
        <div style="
            background: #ffffff;
            border-radius: 18px;
            max-width: 380px;
            width: 100%;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            text-align: center;
            position: relative;
            animation: popupFadeIn 0.25s ease-out;
        ">
            <button type="button" onclick="closeModalVerifikasi()" style="
                position: absolute;
                top: 12px;
                right: 14px;
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                color: #888;
                font-weight: bold;
            ">✕</button>

            <div style="font-size: 2.5rem; margin-bottom: 8px;">🔑</div>
            <h3 style="color: #3d2c1e; margin-bottom: 6px; font-size: 1.2rem; font-weight: 700;">Verifikasi Pembahasan</h3>
            <p style="font-size: 0.9rem; color: #6f5b4a; margin-bottom: 18px; line-height: 1.4;">
                Masukkan <strong>3 digit kode verifikasi</strong> untuk membuka pembahasan soal ini:
            </p>

            <form action="javascript:void(0);" autocomplete="off" onsubmit="verifikasiKodePopup(); return false;" style="margin:0; padding:0;">
                <input 
                    type="search" 
                    id="popupKodeInput" 
                    maxlength="3" 
                    placeholder="000" 
                    autocomplete="chrome-off" 
                    autocorrect="off" 
                    autocapitalize="off" 
                    spellcheck="false"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    readOnly
                    onfocus="this.removeAttribute('readonly');"
                    style="
                        width: 100%;
                        font-size: 1.5rem;
                        text-align: center;
                        letter-spacing: 6px;
                        font-weight: 800;
                        padding: 10px 14px;
                        border: 2px solid #8b5e3c;
                        border-radius: 12px;
                        background: #fdfaf6;
                        color: #2b1f15;
                        box-sizing: border-box;
                        margin-bottom: 16px;
                        outline: none;
                    "
                >

                <div id="popupErrorMsg" style="margin-bottom: 14px;"></div>

                <div style="display: flex; gap: 10px;">
                    <button type="button" onclick="closeModalVerifikasi()" class="btn btn-secondary" style="flex: 1; padding: 10px;">Batal</button>
                    <button type="submit" class="btn btn-primary" style="flex: 1; padding: 10px;">Verifikasi</button>
                </div>
            </form>
        </div>
    `;

    // Tambahkan style animasi jika belum ada
    if (!document.getElementById('modalAnimationStyles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'modalAnimationStyles';
        styleEl.innerHTML = `
            @keyframes popupFadeIn {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
        `;
        document.head.appendChild(styleEl);
    }

    document.body.appendChild(modalOverlay);

    setTimeout(() => {
        const inputEl = document.getElementById('popupKodeInput');
        if (inputEl) inputEl.focus();
    }, 150);
}

function closeModalVerifikasi() {
    const modal = document.getElementById('modalVerifikasiOverlay');
    if (modal) {
        modal.remove();
    }
}

function verifikasiKodePopup() {
    const soal = SOAL_ASLI[soalIndexSekarang];
    const inputEl = document.getElementById('popupKodeInput');
    const inputKode = inputEl ? inputEl.value.trim() : "";
    const errorMsgEl = document.getElementById('popupErrorMsg');

    if (inputKode === soal.kode) {
        closeModalVerifikasi();
        showPembahasan();
    } else {
        if (errorMsgEl) {
            errorMsgEl.innerHTML = `
                <div style="
                    background: #fde8e8; 
                    color: #9b1c1c; 
                    padding: 8px 12px; 
                    border-radius: 8px; 
                    font-size: 0.85rem; 
                    border: 1px solid #f8b4b4;
                    text-align: center;
                ">
                    ❌ Kode verifikasi salah! Silakan coba lagi.
                </div>
            `;
        }
        if (inputEl) {
            inputEl.value = "";
            inputEl.focus();
        }
    }
}

function showPembahasan() {
    const soal = SOAL_ASLI[soalIndexSekarang];
    const actionArea = document.getElementById('actionArea');
    const interactiveArea = document.getElementById('interactiveArea');

    if (actionArea) actionArea.style.display = 'none';
    interactiveArea.innerHTML = `
        <div class="pembahasan-panel">
            <h4 style="color:#2e7d32; margin-bottom:6px; font-size:1.05rem;">💡 Pembahasan & Alasan Kunci:</h4>
            <p style="line-height:1.6; color:#2b1f15; font-size:0.98rem;">${soal.pembahasan}</p>
            <div style="margin-top:14px; text-align:right;">
                <button type="button" class="btn btn-primary" onclick="nextSoal()">Tutup Pembahasan & Lanjut ➡️</button>
            </div>
        </div>
    `;
}

// STEP 4a: SOAL BERIKUTNYA
function nextSoal() {
    if (soalIndexSekarang < SOAL_ASLI.length - 1) {
        soalIndexSekarang++;
        renderSoal();
    } else {
        hitungHasil();
    }
}

function hitungHasil() {
    hideNotification();
    let totalBenar = 0;

    SOAL_ASLI.forEach((soal, i) => {
        const jawab = jawabanUser[i];
        if (soal.tipe === "Sederhana" && jawab === soal.jawabanBenar) {
            totalBenar++;
        } else if (soal.tipe === "MCMA" && Array.isArray(jawab)) {
            const sortedJawab = [...jawab].sort();
            const sortedKunci = [...soal.jawabanBenar].sort();
            if (JSON.stringify(sortedJawab) === JSON.stringify(sortedKunci)) totalBenar++;
        } else if (soal.tipe === "Kategori" && Array.isArray(jawab)) {
            if (JSON.stringify(jawab) === JSON.stringify(soal.jawabanBenar)) totalBenar++;
        }
    });

    const nilai = Math.round((totalBenar / SOAL_ASLI.length) * 100);

    soalContainer.innerHTML = `
        <div style="text-align:center; padding: 2rem 1rem;">
            <div style="font-size: 3.5rem;">🎉</div>
            <h2 style="color:#3d2c1e; margin-bottom:1rem;">Ujian Selesai!</h2>
            <p style="font-size:1.1rem; font-weight:600;">Nama: ${savedNama}</p>
            <p style="font-size:1.1rem; font-weight:600;">NISN: ${savedNisn}</p>
            <div style="margin:1.5rem 0; font-size:1.8rem; font-weight:700; color:#2e7d32; background:#e8f4ea; padding:12px; border-radius:16px; border:1px solid #a3d9a5;">
                Nilai Akhir: ${nilai} / 100
            </div>
            <p>Benar ${totalBenar} dari ${SOAL_ASLI.length} soal.</p>
            <button type="button" class="btn btn-primary" style="margin-top:1.5rem;" onclick="location.reload()">🔄 Ulangi Ujian</button>
        </div>
    `;
    if (progressBadge) progressBadge.textContent = "Selesai";
}
