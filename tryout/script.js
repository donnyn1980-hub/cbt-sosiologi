// ============================================================
// DATA SOAL - 3 TIPE: SEDERHANA, MCMA, KATEGORI
// ============================================================

const SOAL_ASLI = [
    // ===== TIPE 1: SEDERHANA (Pilihan Ganda Biasa) =====
    {
        id: 1,
        tipe: "Sederhana",
        teks: "Seorang sosiolog melakukan penelitian di sebuah desa. Ia mengamati kegiatan warga ketika bekerja sama membangun jembatan. Warga tampak antusias dan bersemangat meskipun mereka tidak mendapatkan imbalan. Semua warga ikut membantu karena merasa bagian dari masyarakat. Dari ilustrasi tersebut, dapat diketahui bahwa sosiologi adalah ilmu yang ....",
        opsi: [
            "fokus pada hukum dan ketertiban",
            "membahas kebijakan ekonomi suatu negara",
            "mempelajari perilaku individu dalam keluarga",
            "mempelajari masyarakat dan interaksi sosial di dalamnya",
            "hanya mempelajari tentang struktur pemerintahan dan politik"
        ],
        jawabanBenar: 3
    },
    {
        id: 3,
        tipe: "Sederhana",
        teks: "Pak Heri adalah guru baru. Ia menyapa siswa dan mengajak berdiskusi aktif. Murid menjadi lebih semangat belajar. Interaksi sosial antara Pak Heri dan siswa terjadi karena adanya ....",
        opsi: [
            "sifat ramah seorang guru",
            "penerapan nilai dan norma",
            "motivasi tinggi dalam belajar",
            "kontak sosial dan komunikasi",
            "semangat siswa dalam belajar"
        ],
        jawabanBenar: 3
    },
    {
        id: 4,
        tipe: "Sederhana",
        teks: "Seorang sosiolog melakukan penelitian tentang kenakalan remaja di suatu daerah. Ia melihat kenakalan remaja terjadi sebagai akibat lemahnya kontrol sosial. Berdasarkan ilustrasi tersebut, paradigma yang digunakan peneliti tersebut adalah ....",
        opsi: [
            "paradigma ekonomi",
            "paradigma psikologi",
            "paradigma fakta sosial",
            "paradigma definisi sosial",
            "paradigma perilaku sosial"
        ],
        jawabanBenar: 2
    },
    {
        id: 6,
        tipe: "Sederhana",
        teks: "Suatu peristiwa kematian kepala suku disambut dengan upacara besar oleh satu komunitas, namun dianggap biasa oleh komunitas lain. Ilustrasi tersebut menunjukkan adanya ....",
        opsi: [
            "persamaan budaya",
            "ketimpangan budaya",
            "adanya penyimpangan sosial",
            "adanya konflik nilai di masyarakat",
            "perbedaan tata nilai dalam masyarakat"
        ],
        jawabanBenar: 4
    },
    {
        id: 8,
        tipe: "Sederhana",
        teks: "Seorang siswa melakukan observasi tentang gelandangan di perkotaan. Permasalahan sosial yang bisa dirumuskan dari ilustrasi tersebut adalah ....",
        opsi: [
            "kurangnya minat kerja masyarakat",
            "pemerintah tidak peduli dengan gelandangan",
            "ketimpangan sosial sebagai penyebab kemiskinan",
            "budaya konsumtif menyebabkan ketimpangan sosial",
            "kepadatan penduduk menyebabkan permasalahan sosial"
        ],
        jawabanBenar: 2
    },
    {
        id: 12,
        tipe: "Sederhana",
        teks: "Dalam masyarakat adat, kegiatan panen bersama disertai upacara tradisional. Hal ini menunjukkan lembaga sosial berperan dalam ….",
        opsi: [
            "menciptakan konflik",
            "mengatur kekuasaan",
            "menjaga sistem ekonomi",
            "melestarikan budaya dan nilai",
            "menyebarkan ideologi baru"
        ],
        jawabanBenar: 3
    },
    {
        id: 14,
        tipe: "Sederhana",
        teks: "Maraknya kasus pembegalan yang terjadi di jalan pedesaan saat malam hari meresahkan warga. Berikut salah satu upaya yang tepat untuk mengatasi masalah tersebut adalah ….",
        opsi: [
            "melakukan sweeping warga",
            "mengadakan demo masyarakat",
            "menyebarkan berita di media sosial",
            "meningkatkan patroli keamanan desa",
            "membiarkan aparat bertindak sendiri"
        ],
        jawabanBenar: 3
    },
    {
        id: 16,
        tipe: "Sederhana",
        teks: "Setelah konflik antarwarga karena perbedaan pendapat, mereka akhirnya menyadari pentingnya gotong royong dan membuat aturan baru bersama. Dampak positif konflik sosial dalam masyarakat berdasarkan ilustrasi tersebut adalah ....",
        opsi: [
            "penurunan moral",
            "munculnya kekacauan",
            "berhentinya proses interaksi",
            "terjadinya perubahan sosial",
            "munculnya kelompok radikal"
        ],
        jawabanBenar: 3
    },
    {
        id: 17,
        tipe: "Sederhana",
        teks: "Ketimpangan akses layanan kesehatan terjadi karena masyarakat miskin sulit menjangkau fasilitas yang layak. Teori yang sesuai untuk menjelaskan kekerasan struktural dalam masyarakat adalah ....",
        opsi: [
            "teori revolusi sosial",
            "teori sistem sosial",
            "teori konflik sosial",
            "struktural fungsional",
            "interaksionisme simbolik"
        ],
        jawabanBenar: 2
    },
    {
        id: 18,
        tipe: "Sederhana",
        teks: "Di sekolah, terdapat ketua OSIS, pengurus, dan anggota. Mereka memiliki peran dan kedudukan berbeda, mencerminkan struktur sosial yang bersifat ....",
        opsi: [
            "acak",
            "fleksibel",
            "komunal",
            "stratifikasi",
            "horizontal"
        ],
        jawabanBenar: 3
    },
    {
        id: 19,
        tipe: "Sederhana",
        teks: "Dalam masyarakat modern, profesi seperti Youtuber atau Content Creator mulai diterima sejajar dengan dokter dan guru. Ini menunjukkan adanya ....",
        opsi: [
            "disintegrasi sosial antar profesi",
            "mobilitas sosial turun dialami dokter dan guru",
            "perubahan status ekonomi profesi dokter dan guru",
            "dinamika struktur sosial akibat perubahan nilai profesi",
            "konflik sosial antar profesi lama dengan profesi baru"
        ],
        jawabanBenar: 3
    },
    {
        id: 25,
        tipe: "Sederhana",
        teks: "Saat ini produk budaya dari negara maju menyebar cepat ke berbagai belahan dunia, sehingga memengaruhi gaya hidup masyarakat lokal. Teori globalisasi yang tepat untuk menjelaskan fenomena pada ilustrasi tersebut adalah ....",
        opsi: [
            "teori kesenjangan",
            "teori institusi",
            "teori sistem dunia",
            "teori mcdonaldisasi",
            "teori interaksi simbolik"
        ],
        jawabanBenar: 3
    },
    {
        id: 29,
        tipe: "Sederhana",
        teks: "Masa pandemi Covid-19 memaksa dunia pendidikan untuk menerapkan sistem pembelajaran daring. Dari pernyataan dalam teks, dapat disimpulkan bahwa pembelajaran daring memberikan dampak ganda terhadap pendidikan Indonesia. Tindakan apakah yang paling tepat dilakukan oleh pemangku kebijakan pendidikan berdasarkan situasi tersebut?",
        opsi: [
            "Mewajibkan siswa membeli perangkat digital dan kuota internet sendiri.",
            "Mengabaikan dampak negatif karena teknologi sudah menjadi kebutuhan zaman.",
            "Mengembangkan sistem blended learning yang menggabungkan daring dan luring.",
            "Menghentikan penggunaan teknologi agar siswa fokus pada pembelajaran tatap muka.",
            "Menjadikan pembelajaran daring sebagai metode utama meskipun banyak kekurangannya."
        ],
        jawabanBenar: 2
    },

    // ===== TIPE 2: MCMA (Multiple Choice Multiple Answer) =====
    {
        id: 2,
        tipe: "MCMA",
        teks: "Di sebuah desa, jabatan kepala adat secara otomatis diberikan kepada anak tertua dari kepala adat sebelumnya. Jabatan tersebut tidak perlu diperebutkan atau diperoleh melalui pemilihan, melainkan diwariskan secara turun-temurun sesuai tradisi yang berlaku. Berdasarkan ilustrasi tersebut, pernyataan yang tepat mengenai jenis status sosial yang dimiliki oleh anak kepala adat adalah ....",
        opsi: [
            "diperoleh karena hasil kerja keras individu",
            "bisa berubah tergantung prestasi individu",
            "tersebut merupakan contoh ascribed status",
            "diberikan sejak lahir karena faktor keturunan",
            "diberikan masyarakat melalui pengangkatan formal"
        ],
        jawabanBenar: [2, 3]
    },
    {
        id: 5,
        tipe: "MCMA",
        teks: "Seorang influencer dengan jutaan pengikut tampil di media sosial mengenakan pakaian minim saat berada di pesta malam. Dalam unggahan videonya, ia memamerkan kemewahan hidup dari minuman mahal, mobil sport, hingga pesta tanpa batas. Perilaku tersebut telah melanggar norma ....",
        opsi: [
            "agama",
            "hukum",
            "ekonomi",
            "kesusilaan",
            "kesopanan"
        ],
        jawabanBenar: [0, 3, 4]
    },
    {
        id: 7,
        tipe: "MCMA",
        teks: "Dalam satu tahun terakhir, sebuah lembaga nasional mencatat bahwa kasus penyalahgunaan narkoba di kalangan remaja meningkat hingga 30%. Fakta ini mengkhawatirkan banyak pihak, termasuk orang tua, sekolah, dan pemerintah. Di sisi lain, pengaruh media sosial, tekanan lingkungan, dan kurangnya edukasi diduga menjadi pemicu utama. Banyak yang mulai mempertanyakan efektivitas program pencegahan narkoba yang selama ini dijalankan. Berdasarkan ilustrasi tersebut, manakah kesimpulan dan tindakan paling tepat yang seharusnya dilakukan berbagai pihak?",
        opsi: [
            "Menghukum remaja yang terlibat agar menimbulkan efek jera.",
            "Mengurangi akses remaja terhadap media sosial dan internet.",
            "Pemerintah perlu mengevaluasi ulang strategi penanggulangan narkoba.",
            "Meningkatkan edukasi tentang bahaya narkoba di sekolah dan lingkungan.",
            "Membiarkan kasus berjalan agar menjadi pelajaran alami bagi generasi muda."
        ],
        jawabanBenar: [2, 3]
    },
    {
        id: 9,
        tipe: "MCMA",
        teks: "Di sebuah sekolah terdapat kelompok belajar, kelompok olahraga, dan kelompok seni. Kelompok-kelompok sosial tersebut termasuk jenis kelompok berdasarkan ....",
        opsi: [
            "tujuan atau minat tertentu",
            "kesamaan agama dan kepercayaan",
            "aktivitas fungsional yang terorganisir",
            "hubungan pribadi yang intens dan mendalam",
            "keanggotaan sukarela berdasarkan hobi atau bakat"
        ],
        jawabanBenar: [0, 2, 4]
    },
    {
        id: 10,
        tipe: "MCMA",
        teks: "Munculnya kelompok-kelompok seperti Ikatan Keluarga Banyumas, Paguyuban Wong Cirebon, Ikatan Keluarga Madura, dan lain sebagainya di Jakarta terbentuk karena adanya ....",
        opsi: [
            "kesamaan tempat kerja",
            "kesamaan pendidikan formal",
            "kesamaan latar belakang daerah asal",
            "solidaritas kedaerahan dan kekeluargaan",
            "kesamaan ekonomi dan tingkat kesejahteraan"
        ],
        jawabanBenar: [2, 3]
    },
    {
        id: 11,
        tipe: "MCMA",
        teks: "Suatu pagi, Andi menemukan sebuah dompet di jalan saat perjalanan ke sekolah. Di dalam dompet tersebut terdapat kartu identitas, uang, dan surat penting. Tanpa ragu, Andi berinisiatif menghubungi pemilik dompet berdasarkan informasi pada KTP, lalu mengembalikannya secara langsung. Berdasarkan ilustrasi tersebut, tindakan Andi mencerminkan penerapan nilai dan norma sebagai berikut ....",
        opsi: [
            "norma hukum",
            "nilai material",
            "nilai kejujuran",
            "norma kesopanan",
            "penerapan nilai moral"
        ],
        jawabanBenar: [2, 4]
    },
    {
        id: 13,
        tipe: "MCMA",
        teks: "Seiring perkembangan zaman, banyak keluarga lebih memilih pengasuh atau daycare daripada mengasuh anak sendiri. Sikap lembaga keluarga yang tepat menyikapi perubahan tersebut adalah ....",
        opsi: [
            "menyerahkan sepenuhnya pengasuhan kepada daycare",
            "tetap membina komunikasi emosional dengan anak",
            "menganggap daycare sebagai pengganti utama keluarga",
            "menyesuaikan diri dengan tetap menjalankan fungsi pengasuhan",
            "kepribadian anak menjadi tanggung jawab pengasuh dan daycare"
        ],
        jawabanBenar: [1, 3]
    },
    {
        id: 21,
        tipe: "MCMA",
        teks: "Di sebuah sekolah dasar, pihak sekolah mulai menerapkan pelajaran karakter dan etika sejak kelas 1 SD. Pelajaran ini disampaikan melalui cerita, permainan peran, dan kegiatan proyek yang melatih empati, tanggung jawab, dan sikap jujur. Tujuannya agar peserta didik terbiasa dengan nilai-nilai positif sebelum mereka menghadapi tantangan sosial di masyarakat. Berdasarkan ilustrasi tersebut, tindakan yang dilakukan sekolah termasuk ke dalam pengendalian sosial yang memiliki ciri-ciri ....",
        opsi: [
            "merupakan bentuk pengendalian sosial preventif",
            "melibatkan internalisasi nilai melalui proses pendidikan",
            "dilakukan melalui pendekatan kekuasaan dan sanksi tegas",
            "diterapkan setelah terjadi pelanggaran norma oleh peserta didik",
            "bertujuan untuk mencegah terjadinya penyimpangan sosial sejak dini"
        ],
        jawabanBenar: [0, 1, 4]
    },
    {
        id: 26,
        tipe: "MCMA",
        teks: "Dalam menghadapi isu polusi udara di kota besar, pemerintah daerah menggelar forum diskusi yang melibatkan para ilmuwan, akademisi, dan lembaga penelitian. Mereka menyusun kebijakan berdasarkan data hasil penelitian tentang emisi kendaraan bermotor dan dampaknya terhadap kesehatan. Masyarakat pun mulai terbiasa membaca laporan resmi dan mengikuti panduan berbasis data sebelum mengambil sikap, ketimbang hanya mengandalkan mitos atau informasi dari media sosial. Berdasarkan ilustrasi tersebut, ciri masyarakat modern yang tampak adalah ....",
        opsi: [
            "masyarakat menghindari semua bentuk tradisi dan budaya lama",
            "proses pengambilan kebijakan dilakukan secara rasional dan logis",
            "diskusi dan pemecahan masalah dilakukan berdasarkan hasil penelitian",
            "masyarakat mengambil keputusan berdasarkan pendekatan ilmiah dan data",
            "masyarakat hanya mempercayai informasi yang bersifat emosional dan opini pribadi"
        ],
        jawabanBenar: [1, 2, 3]
    },

    // ===== TIPE 3: KATEGORI (Tabel dengan 2 pilihan) =====
    {
        id: 15,
        tipe: "Kategori",
        teks: "Indonesia adalah negara kepulauan yang terdiri atas puluhan ribu pulau yang dipisahkan oleh lautan. Setiap pulau memiliki kondisi alam yang berbeda, seperti suhu, curah hujan, dan bentuk permukaan tanah. Kondisi ini mendorong munculnya keanekaragaman budaya, bahasa, dan kebiasaan di setiap daerah. Selain itu, letak geografis Indonesia yang strategis di antara dua benua dan dua samudra menjadikan Indonesia sebagai jalur lalu lintas perdagangan internasional, yang juga berkontribusi pada masuknya berbagai pengaruh budaya asing. Manakah pernyataan berikut ini yang merupakan faktor penyebab keberagaman sosial budaya di Indonesia yang sesuai dengan ilustrasi tersebut?",
        pernyataan: [
            "Perbedaan kondisi alam antarwilayah menyebabkan variasi cara hidup dan budaya masyarakat.",
            "Indonesia menjadi jalur migrasi dan interaksi global yang memperkaya budaya lokal.",
            "Persamaan bentuk geografis di seluruh Indonesia mendorong homogenitas budaya masyarakat."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 0, 1]
    },
    {
        id: 20,
        tipe: "Kategori",
        teks: "Perhatikan Ilustrasi berikut! Seseorang dengan penghasilan tinggi menggunakan mobil mewah, seseorang dengan penghasilan sedang menggunakan motor, seseorang dengan penghasilan rendah berjalan kaki. Kriteria yang digunakan pada stratifikasi sosial pada ilustrasi tersebut adalah ....",
        pernyataan: [
            "Kasta sosial",
            "Kriteria sosial",
            "Kriteria politik",
            "Kriteria ekonomi",
            "Ilmu pengetahuan"
        ],
        kategori: ["Benar", "Salah"],
        jawabanBenar: [1, 1, 1, 0, 1]
    },
    {
        id: 22,
        tipe: "Kategori",
        teks: "Pemerintah berencana menerapkan kebijakan pendidikan gratis untuk tingkat SMA/SMK negeri di Sumatera Utara mulai tahun ajaran 2025/2026. Selain itu, Pemerintah Provinsi DKI Jakarta akan melakukan uji coba sekolah swasta gratis di beberapa wilayah pada tahun ajaran yang sama. Tujuan dari kebijakan ini adalah mengurangi angka putus sekolah dan memastikan seluruh siswa, terutama dari keluarga kurang mampu, mendapatkan akses pendidikan yang layak dan merata. Berdasarkan ilustrasi tersebut, manakah pernyataan yang sesuai untuk menggambarkan bentuk perubahan sosial yang terjadi?",
        pernyataan: [
            "Kebijakan tersebut merupakan contoh perubahan struktural karena melibatkan sistem pendidikan dan intervensi negara.",
            "Uji coba sekolah swasta gratis di Jakarta merupakan contoh perubahan kecil yang tidak memengaruhi sistem sosial.",
            "Tujuan mengurangi angka putus sekolah termasuk dalam perubahan proses karena memerlukan tahapan bertahap."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 23,
        tipe: "Kategori",
        teks: "Perkembangan teknologi menyebabkan munculnya layanan transportasi online seperti ojek dan taksi daring. Inovasi ini memudahkan masyarakat dalam melakukan mobilitas tanpa harus memiliki kendaraan pribadi. Penggunaan layanan transportasi online kini telah menjadi bagian dari gaya hidup masyarakat modern, khususnya di daerah perkotaan. Berdasarkan ilustrasi tersebut, manakah pernyataan berikut yang tepat untuk menggambarkan perubahan sosial yang terjadi?",
        pernyataan: [
            "Perubahan ini merupakan bentuk perubahan sosial terencana karena hasil dari penemuan baru.",
            "Perubahan tersebut memberikan dampak yang sangat kecil terhadap kehidupan sosial masyarakat.",
            "Perubahan ini mencerminkan proses modernisasi yang memudahkan kehidupan masyarakat."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [1, 1, 0]
    },
    {
        id: 24,
        tipe: "Kategori",
        teks: "Pada masa lalu, peran perempuan dalam masyarakat Indonesia sering kali dibatasi, tidak mendapatkan kedudukan dan kesempatan yang setara dengan laki-laki. Namun, seiring perkembangan zaman dan perubahan pola pikir masyarakat, perempuan mulai memiliki akses yang lebih luas dalam pendidikan, pekerjaan, dan posisi kepemimpinan. Sementara itu, laki-laki juga mulai terbuka terhadap peran-peran domestik yang dulu dianggap hanya milik perempuan. Manakah pernyataan berikut yang tepat menggambarkan bentuk perubahan sosial yang terjadi berdasarkan ilustrasi tersebut?",
        pernyataan: [
            "Perubahan peran gender terjadi secara bertahap mengikuti perkembangan pola pikir masyarakat.",
            "Perubahan peran perempuan dan laki-laki menunjukkan perubahan yang bersifat revolusioner.",
            "Perubahan ini merupakan contoh dari perubahan sosial kecil karena hanya terjadi di lingkungan tertentu."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 1, 1]
    },
    {
        id: 27,
        tipe: "Kategori",
        teks: "Di era kemajuan teknologi digital ini media sosial menjadi mudah diakses oleh berbagai kalangan terutama para remaja. Selain berdampak positif, hal tersebut juga dapat berpengaruh negatif di kalangan remaja. Banyak remaja yang terpengaruh tren negatif di media sosial sehingga memunculkan kekhawatiran masyarakat. Manakah pernyataan berikut yang termasuk bentuk antisipasi yang dapat dilakukan oleh pihak sekolah dan keluarga?",
        pernyataan: [
            "Memberikan edukasi nilai moral dan etika sejak usia dini.",
            "Mendorong peran aktif orang tua dan guru mengawasi penggunaan media sosial.",
            "Menutup akses internet secara total agar remaja tidak bisa mengakses media sosial."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 0, 1]
    },
    {
        id: 28,
        tipe: "Kategori",
        teks: "Masa pandemi COVID-19 pada tahun 2020 menjadi tantangan tersendiri bagi dunia pendidikan karena adanya kebijakan yang melarang kegiatan pembelajaran atau pertemuan langsung secara fisik di suatu tempat, seperti sekolah atau kantor. Hal tersebut memunculkan penerapan kegiatan pembelajaran secara online atau daring untuk menggantikan pertemuan langsung secara fisik. Belajar daring mempunyai dua dampak yang berlawanan bagi dunia pendidikan. Dampak positifnya mengenalkan lebih cepat dunia teknologi (internet) dengan informasi yang berlimpah, siswa dapat mengakses materi pembelajaran kapan saja, guru lebih kreatif dalam merancang model pembelajaran dengan memanfaatkan fitur-fitur aplikasi online, serta dapat memotivasi melalui masa-masa sulit untuk terus mencapai tujuan pendidikan Indonesia yang lebih maju. Dampak negatifnya, materi pembelajaran tidak tersampaikan secara tuntas, siswa kadang kesulitan mengakses materi pembelajaran karena keterbatasan hp android maupun jaringan internet, serta pendidikan karakter siswa menjadi sedikit terabaikan. Karena dengan daring dipaksa transfer pengetahuan saja, tidak termasuk nilai lain seperti etika, disiplin, dan sosial. Manakah yang merupakan dampak nyata dari pembelajaran daring pada masa pandemi COVID-19 menurut ilustrasi tersebut?",
        pernyataan: [
            "Pembelajaran daring mempercepat literasi teknologi di kalangan siswa dan guru.",
            "Semua siswa dapat mengakses pembelajaran daring dengan mudah tanpa kendala.",
            "Guru dituntut lebih kreatif dalam merancang metode pembelajaran melalui aplikasi digital."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 30,
        tipe: "Kategori",
        teks: "Rencana pembangunan jalan tol Yogyakarta-Bawen diharapkan memudahkan akses perekonomian masyarakat. Terutama di daerah yang dilintasi tol, seperti Kabupaten Semarang. Analis Kebijakan Ahli Madya Setda Provinsi Jateng Bambang Herwanto mengatakan, dengan adanya jalan tol akan membawa dampak positif bagi pembangunan daerah. Di antaranya di Desa Kebondalem, Kecamatan Jambu, Kabupaten Semarang. \"Dengan adanya jalan tol akan mempermudah akses perekonomian karena masyarakat pasti akan mudah untuk menjangkau.\" Manakah pernyataan yang mencerminkan dampak perubahan sosial akibat pembangunan jalan tol Yogyakarta-Bawen?",
        pernyataan: [
            "Akses yang lebih mudah tidak memengaruhi interaksi sosial antarmasyarakat.",
            "Jalan tol dapat menimbulkan perubahan gaya hidup masyarakat menjadi lebih konsumtif.",
            "Perubahan struktur ekonomi dari agraris menjadi jasa dapat terjadi akibat pembangunan jalan tol."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [1, 0, 0]
    }
];

// ============================================================
// QR CODE GENERATOR
// ============================================================

function generateQRCodeSVG(text) {
    const size = 140;
    const encoded = encodeURIComponent(text);
    return `<img src="https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encoded}" 
                 alt="QR Code NISN" 
                 width="${size}" 
                 height="${size}" 
                 style="border-radius: 8px; max-width: 100%; height: auto;"
                 onerror="this.onerror=null; this.outerHTML='<div style=\'padding:10px;background:#eee;border-radius:8px;font-weight:bold;color:#333;\'>NISN: ${text}</div>';"/>`;
}

// ============================================================
// GAMBAR FUNGSI
// ============================================================

function checkImageExists(soalId) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = `gbr/${soalId}.jpg`;
    });
}

function getImageHtml(soalId, showImage = false) {
    return `
        <div class="gambar-container" id="gambarContainer_${soalId}" style="display: ${showImage ? 'block' : 'none'};">
            <div class="gambar-wrapper">
                <img src="gbr/${soalId}.jpg" 
                     alt="Gambar soal ${soalId}" 
                     class="gambar-soal"
                     onerror="this.style.display='none'; document.getElementById('gambarContainer_${soalId}').style.display='none'; document.getElementById('toggleGambarBtn_${soalId}').style.display='none';" />
            </div>
        </div>
    `;
}

// Fungsi global untuk toggle gambar
window.toggleGambar = function(soalId) {
    const container = document.getElementById(`gambarContainer_${soalId}`);
    const btn = document.getElementById(`toggleGambarBtn_${soalId}`);
    if (!container || !btn) return;
    
    if (container.style.display === 'none' || container.style.display === '') {
        container.style.display = 'block';
        btn.textContent = '🖼️ Sembunyikan Gambar';
        btn.classList.add('active');
    } else {
        container.style.display = 'none';
        btn.textContent = '🖼️ Tampilkan Gambar';
        btn.classList.remove('active');
    }
};

// ============================================================
// MAIN APPLICATION
// ============================================================

(function() {
    // ---------- STATE ----------
    let soalTersisa = [];
    let jawabanUser = [];
    let soalIndexSekarang = 0;
    let semuaSelesai = false;
    let currentSoalAsliIndex = -1;
    let kalimatIndex = 0;
    let kalimatElements = [];
    let totalKalimat = 0;
    let modeTampilan = 'soal';
    let isExamActive = false;
    let savedNama = '';
    let savedNisn = '';

    // DOM Elements
    const identitySection = document.getElementById('identitySection');
    const examSection = document.getElementById('examSection');
    const namaLengkapInput = document.getElementById('namaLengkap');
    const nisnInput = document.getElementById('nisnInput');
    const startExamBtn = document.getElementById('startExamBtn');
    const container = document.getElementById('soalContainer');
    const statusMsg = document.getElementById('statusMessage');
    const progressBadge = document.getElementById('progressBadge');
    const resetBtn = document.getElementById('resetBtn');
    const reviewArea = document.getElementById('reviewArea');
    const lihatSemuaBtn = document.getElementById('lihatSemuaBtn');
    const warningMessage = document.getElementById('warningMessage');

    const HURUF = ['A', 'B', 'C', 'D', 'E'];

    // ============================================================
    // ANTI-CHEAT FUNCTIONS
    // ============================================================

    function showWarning(text, isError = true) {
        warningMessage.textContent = text;
        warningMessage.style.display = 'block';
        warningMessage.style.background = isError ? '#ff6b6b' : '#ffd93d';
        warningMessage.style.color = isError ? 'white' : '#2d1f14';
        setTimeout(() => {
            warningMessage.style.display = 'none';
        }, 4000);
    }

    function preventContextMenu(e) {
        e.preventDefault();
        showWarning('⚠️ Klik kanan tidak diizinkan selama ujian berlangsung!');
        return false;
    }

    function preventKeyboardShortcuts(e) {
        const key = e.key;
        const ctrl = e.ctrlKey || e.metaKey;
        const shift = e.shiftKey;
        
        if (key === 'F12') {
            e.preventDefault();
            showWarning('⚠️ Menu developer tidak diizinkan!');
            return false;
        }
        
        if (ctrl && shift && (key === 'I' || key === 'J' || key === 'C')) {
            e.preventDefault();
            showWarning('⚠️ Menu developer tidak diizinkan!');
            return false;
        }
        
        if (ctrl && (key === 'u' || key === 'U')) {
            e.preventDefault();
            showWarning('⚠️ View source tidak diizinkan!');
            return false;
        }
        
        if (ctrl && (key === 'p' || key === 'P')) {
            e.preventDefault();
            showWarning('⚠️ Print tidak diizinkan!');
            return false;
        }
        
        if (ctrl && (key === 's' || key === 'S')) {
            e.preventDefault();
            showWarning('⚠️ Simpan halaman tidak diizinkan!');
            return false;
        }
        
        return true;
    }

    function handleVisibilityChange() {
        if (isExamActive && document.hidden) {
            showWarning('⚠️ TERDETEKSI PINDAH TAB! Kembali ke halaman login.', true);
            setTimeout(() => {
                returnToLogin();
            }, 500);
        }
    }

    function handleBlur() {
        if (isExamActive) {
            showWarning('⚠️ Jangan keluar dari halaman ujian!', true);
        }
    }

    function handleFocus() {
        if (isExamActive && document.hidden) {
            showWarning('⚠️ Kembali ke halaman ujian, tetapi terdeteksi pindah tab!', true);
            setTimeout(() => {
                returnToLogin();
            }, 500);
        }
    }

    function preventSelection(e) {
        e.preventDefault();
        showWarning('⚠️ Menyorot teks tidak diizinkan!');
        return false;
    }

    function requestFullscreen() {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err => {
                console.log('Fullscreen request blocked');
            });
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(err => {});
        } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else if (document.msFullscreenElement) {
            document.msExitFullscreen();
        }
    }

    function handleFullscreenChange() {
        if (isExamActive) {
            const isFull = document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            if (!isFull) {
                showWarning('⚠️ Jangan keluar dari mode layar penuh!', true);
                requestFullscreen();
            }
        }
    }

    function enableAntiCheat() {
        document.addEventListener('contextmenu', preventContextMenu);
        document.addEventListener('keydown', preventKeyboardShortcuts);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('blur', handleBlur);
        window.addEventListener('focus', handleFocus);
        document.addEventListener('selectstart', preventSelection);
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('msfullscreenchange', handleFullscreenChange);
        
        document.addEventListener('copy', function(e) {
            e.preventDefault();
            showWarning('⚠️ Copy tidak diizinkan!');
        });
        
        document.addEventListener('paste', function(e) {
            e.preventDefault();
            showWarning('⚠️ Paste tidak diizinkan!');
        });
        
        document.addEventListener('cut', function(e) {
            e.preventDefault();
            showWarning('⚠️ Cut tidak diizinkan!');
        });
        
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            showWarning('⚠️ Drag tidak diizinkan!');
        });
        
        document.addEventListener('contextmenu', function(e) {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
                showWarning('⚠️ Download gambar tidak diizinkan!');
            }
        });
    }

    function disableAntiCheat() {
        document.removeEventListener('contextmenu', preventContextMenu);
        document.removeEventListener('keydown', preventKeyboardShortcuts);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('blur', handleBlur);
        window.removeEventListener('focus', handleFocus);
        document.removeEventListener('selectstart', preventSelection);
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    }

    // ============================================================
    // RETURN TO LOGIN
    // ============================================================

    function returnToLogin() {
        isExamActive = false;
        disableAntiCheat();
        exitFullscreen();
        
        identitySection.style.display = 'block';
        examSection.style.display = 'none';
        
        soalTersisa = [];
        jawabanUser = [];
        soalIndexSekarang = 0;
        semuaSelesai = false;
        currentSoalAsliIndex = -1;
        kalimatIndex = 0;
        kalimatElements = [];
        totalKalimat = 0;
        modeTampilan = 'soal';
        
        reviewArea.style.display = 'none';
        resetBtn.disabled = true;
        statusMsg.textContent = '📖 Membaca soal...';
        statusMsg.style.background = '#e5d7cb';
        statusMsg.style.borderColor = '#cfbbab';
        container.innerHTML = '';
        progressBadge.textContent = '0 / 0';
        
        namaLengkapInput.disabled = false;
        nisnInput.disabled = false;
        startExamBtn.disabled = false;
        
        setTimeout(() => {
            warningMessage.style.display = 'none';
        }, 2000);
    }

    // ============================================================
    // EVENT IDENTITAS
    // ============================================================

    startExamBtn.addEventListener('click', function() {
        const nama = namaLengkapInput.value.trim();
        const nisn = nisnInput.value.trim();

        if (!nama || !nisn) {
            showWarning('⚠️ Mohon isi Nama Lengkap dan NISN terlebih dahulu!', true);
            return;
        }

        savedNama = nama;
        savedNisn = nisn;
        
        namaLengkapInput.disabled = true;
        nisnInput.disabled = true;
        startExamBtn.disabled = true;

        isExamActive = true;
        enableAntiCheat();
        requestFullscreen();

        identitySection.style.display = 'none';
        examSection.style.display = 'block';

        resetFull();
    });

    // ============================================================
    // FUNGSI UTAMA
    // ============================================================

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function splitSentences(text) {
        let raw = text.match(/[^.!?]+[.!?]+/g) || [text];
        return raw.map(s => s.trim()).filter(s => s.length > 0);
    }

    // ============================================================
    // RENDER SOAL - Support 3 Tipe
    // ============================================================

    function renderSoal(soal, jawabanTerpilih) {
        const kalimatArray = splitSentences(soal.teks);
        totalKalimat = kalimatArray.length;
        kalimatIndex = 0;
        modeTampilan = 'soal';

        // Cek gambar secara async
        checkImageExists(soal.id).then(exists => {
            const btn = document.getElementById(`toggleGambarBtn_${soal.id}`);
            if (btn) {
                btn.style.display = exists ? 'inline-flex' : 'none';
            }
            if (!exists) {
                const container = document.getElementById(`gambarContainer_${soal.id}`);
                if (container) container.style.display = 'none';
            }
        });

        let html = '';

        // ---- Bagian Gambar (di atas teks soal) ----
        html += `<div class="gambar-section">`;
        html += getImageHtml(soal.id, false);
        html += `</div>`;

        // ---- Tombol Toggle Gambar ----
        html += `<div class="gambar-toggle-area">`;
        html += `<button type="button" class="btn-toggle-gambar" id="toggleGambarBtn_${soal.id}" style="display: none;" onclick="toggleGambar(${soal.id})">`;
        html += `🖼️ Tampilkan Gambar`;
        html += `</button>`;
        html += `</div>`;

        // ---- Bagian Teks Soal (Kalimat per kalimat) ----
        html += `<div class="soal-teks-container" id="soalTeksContainer">`;
        html += `<div class="kalimat-wrapper" id="kalimatWrapper">`;
        kalimatArray.forEach((kal, idx) => {
            let kelas = 'kalimat-item';
            if (idx === 0) kelas += ' active';
            html += `<div class="${kelas}" data-index="${idx}">${kal}</div>`;
        });
        html += `</div>`;
        html += `<div class="nav-kalimat" id="navKalimat">`;
        html += `<button class="btn-kalimat" id="prevKalimat" disabled>◀ Sebelum</button>`;
        html += `<span class="indikator-kalimat" id="indikatorKalimat">1 / ${totalKalimat}</span>`;
        html += `<button class="btn-kalimat" id="nextKalimat">Selanjutnya ▶</button>`;
        html += `</div>`;
        html += `</div>`;

        // ---- Bagian Opsi Jawaban (berdasarkan tipe) ----
        html += `<div class="opsi-container hidden" id="opsiContainer">`;

        if (soal.tipe === 'Kategori') {
            // ---- TIPE KATEGORI: Tabel ----
            html += `<div class="kategori-table-wrapper">`;
            html += `<table class="kategori-table">`;
            html += `<thead><tr><th>Pernyataan</th>`;
            soal.kategori.forEach(kat => {
                html += `<th>${kat}</th>`;
            });
            html += `</tr></thead><tbody>`;

            const jawabanPerBaris = (jawabanTerpilih && typeof jawabanTerpilih === 'object' && !Array.isArray(jawabanTerpilih)) 
                ? jawabanTerpilih 
                : new Array(soal.pernyataan.length).fill(null);

            soal.pernyataan.forEach((pernyataan, idx) => {
                html += `<tr>`;
                html += `<td class="pernyataan-cell">${pernyataan}</td>`;
                soal.kategori.forEach((kat, katIdx) => {
                    const isChecked = (jawabanPerBaris[idx] === katIdx);
                    const radioId = `kategori_${soal.id}_${idx}_${katIdx}`;
                    html += `<td class="kategori-cell">
                        <input type="radio" 
                               name="kategori_${soal.id}_${idx}" 
                               id="${radioId}" 
                               value="${katIdx}"
                               ${isChecked ? 'checked' : ''}
                               data-soal-id="${soal.id}"
                               data-baris="${idx}"
                               data-kategori="${katIdx}" />
                        <label for="${radioId}" class="kategori-label">✓</label>
                    </td>`;
                });
                html += `</tr>`;
            });

            html += `</tbody></table>`;
            html += `</div>`;

        } else if (soal.tipe === 'MCMA') {
            // ---- TIPE MCMA: Checkbox dengan Tombol Konfirmasi ----
            html += `<div class="opsi-grid">`;
            const jawabanArray = (jawabanTerpilih && Array.isArray(jawabanTerpilih)) 
                ? jawabanTerpilih 
                : [];

            soal.opsi.forEach((teksOpsi, opsiIdx) => {
                const checkboxId = `mcma_${soal.id}_${opsiIdx}`;
                const checked = jawabanArray.includes(opsiIdx) ? 'checked' : '';
                html += `
                    <div class="opsi-item">
                        <input type="checkbox" 
                               name="mcma_${soal.id}" 
                               id="${checkboxId}" 
                               value="${opsiIdx}"
                               ${checked}
                               class="mcma-checkbox"
                               data-soal-id="${soal.id}" />
                        <span class="opsi-huruf">${HURUF[opsiIdx]}</span>
                        <label for="${checkboxId}">${teksOpsi}</label>
                    </div>
                `;
            });
            html += `</div>`;
            
            // Tombol Konfirmasi untuk MCMA
            html += `<div class="mcma-confirm-area">`;
            html += `<button type="button" class="btn btn-primary mcma-confirm-btn" id="mcmaConfirmBtn">✅ Konfirmasi Jawaban</button>`;
            html += `<span class="mcma-hint">Pilih semua jawaban yang benar, lalu klik konfirmasi</span>`;
            html += `</div>`;

        } else {
            // ---- TIPE SEDERHANA: Radio Button ----
            html += `<div class="opsi-grid">`;
            soal.opsi.forEach((teksOpsi, opsiIdx) => {
                const radioId = `q_${soal.id}_${opsiIdx}`;
                const checked = (jawabanTerpilih === opsiIdx) ? 'checked' : '';
                html += `
                    <div class="opsi-item">
                        <input type="radio" 
                               name="soalSaatIni" 
                               id="${radioId}" 
                               value="${opsiIdx}" 
                               ${checked} />
                        <span class="opsi-huruf">${HURUF[opsiIdx]}</span>
                        <label for="${radioId}">${teksOpsi}</label>
                    </div>
                `;
            });
            html += `</div>`;
        }

        html += `</div>`; // end opsi-container

        // ---- Toggle Area ----
        html += `<div class="toggle-area">`;
        html += `<button class="btn-toggle active" id="toggleSoalBtn">📖 Tampilkan Soal</button>`;
        html += `<button class="btn-toggle" id="toggleJawabanBtn">✏️ Tampilkan Jawaban</button>`;
        html += `</div>`;

        container.innerHTML = html;

        // ---- Setup Kalimat Navigation ----
        kalimatElements = container.querySelectorAll('.kalimat-item');
        kalimatElements.forEach((el, idx) => {
            if (idx === 0) {
                el.classList.add('active');
                el.classList.remove('dimmed');
            } else {
                el.classList.remove('active');
                el.classList.add('dimmed');
            }
        });
        updateIndikator();
        updateNavButtons();

        // ---- Event Listeners ----
        const prevBtn = document.getElementById('prevKalimat');
        const nextBtn = document.getElementById('nextKalimat');
        const toggleSoalBtn = document.getElementById('toggleSoalBtn');
        const toggleJawabanBtn = document.getElementById('toggleJawabanBtn');
        const soalTeksContainer = document.getElementById('soalTeksContainer');
        const opsiContainer = document.getElementById('opsiContainer');

        prevBtn.addEventListener('click', function() {
            if (kalimatIndex > 0) {
                kalimatElements[kalimatIndex].classList.remove('active');
                kalimatElements[kalimatIndex].classList.add('dimmed');
                kalimatIndex--;
                kalimatElements[kalimatIndex].classList.remove('dimmed');
                kalimatElements[kalimatIndex].classList.add('active');
                updateIndikator();
                updateNavButtons();
            }
        });

        nextBtn.addEventListener('click', function() {
            if (kalimatIndex < totalKalimat - 1) {
                kalimatElements[kalimatIndex].classList.remove('active');
                kalimatElements[kalimatIndex].classList.add('dimmed');
                kalimatIndex++;
                kalimatElements[kalimatIndex].classList.remove('dimmed');
                kalimatElements[kalimatIndex].classList.add('active');
                updateIndikator();
                updateNavButtons();
            }
        });

        toggleSoalBtn.addEventListener('click', function() {
            if (modeTampilan === 'jawaban') {
                modeTampilan = 'soal';
                soalTeksContainer.classList.remove('hidden');
                opsiContainer.classList.add('hidden');
                toggleSoalBtn.classList.add('active');
                toggleJawabanBtn.classList.remove('active');
                statusMsg.textContent = '📖 Membaca soal';
                statusMsg.style.background = '#e5d7cb';
                statusMsg.style.borderColor = '#cfbbab';
            }
        });

        toggleJawabanBtn.addEventListener('click', function() {
            if (modeTampilan === 'soal') {
                modeTampilan = 'jawaban';
                soalTeksContainer.classList.add('hidden');
                opsiContainer.classList.remove('hidden');
                toggleJawabanBtn.classList.add('active');
                toggleSoalBtn.classList.remove('active');
                statusMsg.textContent = '✏️ Pilih jawaban';
                statusMsg.style.background = '#d4e0d0';
                statusMsg.style.borderColor = '#8fb08a';
            }
        });

        // ---- Event Listeners untuk Jawaban ----

        // KATEGORI: Radio button dengan auto-next
        if (soal.tipe === 'Kategori') {
            const radios = container.querySelectorAll('input[type="radio"][name^="kategori_"]');
            radios.forEach(radio => {
                radio.addEventListener('change', function(e) {
                    if (e.target.checked) {
                        const soalId = parseInt(e.target.dataset.soalId);
                        const baris = parseInt(e.target.dataset.baris);
                        const kategoriVal = parseInt(e.target.dataset.kategori);
                        
                        let jawabanKategori = jawabanUser[currentSoalAsliIndex];
                        if (!jawabanKategori || typeof jawabanKategori !== 'object' || Array.isArray(jawabanKategori)) {
                            jawabanKategori = {};
                        }
                        jawabanKategori[baris] = kategoriVal;
                        jawabanUser[currentSoalAsliIndex] = jawabanKategori;
                        
                        statusMsg.textContent = '✅ Jawaban tersimpan';
                        statusMsg.style.background = '#c9dcc0';
                        statusMsg.style.borderColor = '#8fb08a';
                        
                        // Cek apakah semua baris sudah terisi
                        const totalBaris = SOAL_ASLI[currentSoalAsliIndex].pernyataan.length;
                        const semuaTerisi = Array.from({length: totalBaris}, (_, i) => i)
                            .every(i => jawabanKategori[i] !== undefined && jawabanKategori[i] !== null);
                        
                        if (semuaTerisi) {
                            setTimeout(() => {
                                if (soalIndexSekarang + 1 < soalTersisa.length) {
                                    soalIndexSekarang++;
                                    tampilkanSoal();
                                    updateProgress();
                                    statusMsg.textContent = '📖 Baca soal, lalu pilih jawaban';
                                    statusMsg.style.background = '#e5d7cb';
                                    statusMsg.style.borderColor = '#cfbbab';
                                } else {
                                    selesaiSemua();
                                }
                            }, 500);
                        }
                    }
                });
            });
        }

        // MCMA: Checkbox dengan tombol konfirmasi
        else if (soal.tipe === 'MCMA') {
            const confirmBtn = document.getElementById('mcmaConfirmBtn');
            
            confirmBtn.addEventListener('click', function() {
                const checkedBoxes = container.querySelectorAll('.mcma-checkbox:checked');
                const jawabanMCMA = Array.from(checkedBoxes).map(c => parseInt(c.value));
                
                if (jawabanMCMA.length === 0) {
                    showWarning('⚠️ Silakan pilih minimal satu jawaban!', true);
                    return;
                }
                
                jawabanUser[currentSoalAsliIndex] = jawabanMCMA.sort();
                statusMsg.textContent = '✅ Jawaban dikonfirmasi!';
                statusMsg.style.background = '#c9dcc0';
                statusMsg.style.borderColor = '#8fb08a';
                
                // Highlight tombol konfirmasi
                confirmBtn.textContent = '✅ Jawaban Tersimpan';
                confirmBtn.style.background = '#4e7a5c';
                confirmBtn.style.borderColor = '#3b6248';
                confirmBtn.disabled = true;
                
                // Pindah ke soal berikutnya setelah delay
                setTimeout(() => {
                    if (soalIndexSekarang + 1 < soalTersisa.length) {
                        soalIndexSekarang++;
                        tampilkanSoal();
                        updateProgress();
                        statusMsg.textContent = '📖 Baca soal, lalu pilih jawaban';
                        statusMsg.style.background = '#e5d7cb';
                        statusMsg.style.borderColor = '#cfbbab';
                    } else {
                        selesaiSemua();
                    }
                }, 600);
            });

            // Jika sudah ada jawaban, disable tombol konfirmasi
            if (jawabanTerpilih && Array.isArray(jawabanTerpilih) && jawabanTerpilih.length > 0) {
                confirmBtn.textContent = '✅ Jawaban Tersimpan';
                confirmBtn.style.background = '#4e7a5c';
                confirmBtn.style.borderColor = '#3b6248';
                confirmBtn.disabled = true;
            }
        }

        // SEDERHANA: Radio button dengan auto-next
        else {
            const radios = container.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                radio.addEventListener('change', function(e) {
                    if (e.target.checked) {
                        const val = parseInt(e.target.value, 10);
                        jawabanUser[currentSoalAsliIndex] = val;
                        statusMsg.textContent = '✅ Jawaban tersimpan';
                        statusMsg.style.background = '#c9dcc0';
                        statusMsg.style.borderColor = '#8fb08a';

                        setTimeout(() => {
                            if (soalIndexSekarang + 1 < soalTersisa.length) {
                                soalIndexSekarang++;
                                tampilkanSoal();
                                updateProgress();
                                statusMsg.textContent = '📖 Baca soal, lalu pilih jawaban';
                                statusMsg.style.background = '#e5d7cb';
                                statusMsg.style.borderColor = '#cfbbab';
                            } else {
                                selesaiSemua();
                            }
                        }, 500);
                    }
                });
            });
        }

        // ---- Jika sudah ada jawaban, langsung tampilkan di mode jawaban ----
        const hasJawaban = (jawabanTerpilih !== null && jawabanTerpilih !== undefined);
        if (hasJawaban) {
            if (soal.tipe === 'Kategori' && typeof jawabanTerpilih === 'object' && !Array.isArray(jawabanTerpilih)) {
                const totalBaris = soal.pernyataan.length;
                const semuaTerisi = Array.from({length: totalBaris}, (_, i) => i)
                    .every(i => jawabanTerpilih[i] !== undefined && jawabanTerpilih[i] !== null);
                if (semuaTerisi) {
                    modeTampilan = 'jawaban';
                    soalTeksContainer.classList.add('hidden');
                    opsiContainer.classList.remove('hidden');
                    toggleJawabanBtn.classList.add('active');
                    toggleSoalBtn.classList.remove('active');
                    statusMsg.textContent = '✏️ Pilih jawaban';
                    statusMsg.style.background = '#d4e0d0';
                    statusMsg.style.borderColor = '#8fb08a';
                }
            } else if (soal.tipe === 'MCMA' && Array.isArray(jawabanTerpilih) && jawabanTerpilih.length > 0) {
                modeTampilan = 'jawaban';
                soalTeksContainer.classList.add('hidden');
                opsiContainer.classList.remove('hidden');
                toggleJawabanBtn.classList.add('active');
                toggleSoalBtn.classList.remove('active');
                statusMsg.textContent = '✏️ Pilih jawaban';
                statusMsg.style.background = '#d4e0d0';
                statusMsg.style.borderColor = '#8fb08a';
            } else if (soal.tipe === 'Sederhana' && jawabanTerpilih !== null) {
                modeTampilan = 'jawaban';
                soalTeksContainer.classList.add('hidden');
                opsiContainer.classList.remove('hidden');
                toggleJawabanBtn.classList.add('active');
                toggleSoalBtn.classList.remove('active');
                statusMsg.textContent = '✏️ Pilih jawaban';
                statusMsg.style.background = '#d4e0d0';
                statusMsg.style.borderColor = '#8fb08a';
            }
        }

        updateProgress();
    }

    function updateIndikator() {
        const ind = document.getElementById('indikatorKalimat');
        if (ind) ind.textContent = `${kalimatIndex + 1} / ${totalKalimat}`;
    }

    function updateNavButtons() {
        const prevBtn = document.getElementById('prevKalimat');
        const nextBtn = document.getElementById('nextKalimat');
        if (prevBtn) prevBtn.disabled = (kalimatIndex === 0);
        if (nextBtn) nextBtn.disabled = (kalimatIndex === totalKalimat - 1);
    }

    function tampilkanSoal() {
        if (soalIndexSekarang >= soalTersisa.length) {
            selesaiSemua();
            return;
        }
        const idxAsli = soalTersisa[soalIndexSekarang];
        currentSoalAsliIndex = idxAsli;
        const soal = SOAL_ASLI[idxAsli];
        const jawabanTerpilih = jawabanUser[idxAsli];
        renderSoal(soal, jawabanTerpilih);
    }

    // ============================================================
    // SELESAI SEMUA - Hitung Nilai Berdasarkan Tipe
    // ============================================================

    function selesaiSemua() {
        semuaSelesai = true;
        let totalBenar = 0;
        let totalSoal = SOAL_ASLI.length;

        for (let i = 0; i < SOAL_ASLI.length; i++) {
            const soal = SOAL_ASLI[i];
            const jawaban = jawabanUser[i];
            
            if (jawaban === null || jawaban === undefined) continue;

            if (soal.tipe === 'Sederhana') {
                if (jawaban === soal.jawabanBenar) totalBenar++;
            } else if (soal.tipe === 'MCMA') {
                if (Array.isArray(jawaban) && Array.isArray(soal.jawabanBenar)) {
                    const sortedJawaban = [...jawaban].sort();
                    const sortedKunci = [...soal.jawabanBenar].sort();
                    if (sortedJawaban.length === sortedKunci.length &&
                        sortedJawaban.every((v, idx) => v === sortedKunci[idx])) {
                        totalBenar++;
                    }
                }
            } else if (soal.tipe === 'Kategori') {
                if (typeof jawaban === 'object' && !Array.isArray(jawaban)) {
                    const jawabanArray = Array.from({length: soal.pernyataan.length}, (_, idx) => jawaban[idx]);
                    const semuaSama = jawabanArray.every((v, idx) => v === soal.jawabanBenar[idx]);
                    if (semuaSama && jawabanArray.length === soal.jawabanBenar.length) {
                        totalBenar++;
                    }
                }
            }
        }

        const nilaiAkhir = Math.round((totalBenar / totalSoal) * 100);

        statusMsg.textContent = `🎯 Selesai! Score: ${nilaiAkhir}`;
        statusMsg.style.background = '#c9dcc0';
        statusMsg.style.borderColor = '#8fb08a';

        if (savedNama.toLowerCase() === 'donny nugroho') {
            reviewArea.style.display = 'flex';
        } else {
            reviewArea.style.display = 'none';
        }

        container.innerHTML = `
            <div class="result-card">
                <div style="font-size: 3rem;">🎉</div>
                <div style="font-size: 1.4rem; font-weight: 600; color: #2f1f12;">Ujian Telah Selesai!</div>
                
                <div class="highlight-box result-name">
                    👤 ${savedNama}
                </div>

                <div class="highlight-box result-score">
                    Nilai: ${nilaiAkhir} / 100 (${totalBenar}/${totalSoal} Benar)
                </div>

                <div class="qr-wrapper">
                    <div id="qrcode">${generateQRCodeSVG(savedNisn)}</div>
                    <span class="qr-label">NISN: ${savedNisn}</span>
                </div>

                <div class="result-actions">
                    <button type="button" class="btn btn-danger" id="kembaliLoginBtn" style="padding: 0.7rem 2rem;">
                        🔄 Kembali ke Login
                    </button>
                </div>
            </div>
        `;

        document.getElementById('kembaliLoginBtn').addEventListener('click', function() {
            returnToLogin();
        });

        updateProgress();
    }

    function updateProgress() {
        const total = SOAL_ASLI.length;
        let terjawab = 0;
        
        for (let i = 0; i < jawabanUser.length; i++) {
            const j = jawabanUser[i];
            if (j !== null && j !== undefined) {
                if (Array.isArray(j)) {
                    if (j.length > 0) terjawab++;
                } else if (typeof j === 'object') {
                    // Untuk Kategori, cek apakah semua baris terisi
                    const soal = SOAL_ASLI[i];
                    if (soal && soal.tipe === 'Kategori') {
                        const semuaTerisi = Array.from({length: soal.pernyataan.length}, (_, idx) => idx)
                            .every(idx => j[idx] !== undefined && j[idx] !== null);
                        if (semuaTerisi) terjawab++;
                    } else {
                        terjawab++;
                    }
                } else {
                    terjawab++;
                }
            }
        }
        
        progressBadge.textContent = `${terjawab} / ${total}`;
    }

    function resetFull() {
        const indeks = Array.from({ length: SOAL_ASLI.length }, (_, i) => i);
        soalTersisa = shuffleArray(indeks);
        jawabanUser = new Array(SOAL_ASLI.length).fill(null);
        soalIndexSekarang = 0;
        semuaSelesai = false;
        reviewArea.style.display = 'none';
        resetBtn.disabled = false;
        statusMsg.textContent = '📖 Baca soal, lalu pilih jawaban';
        statusMsg.style.background = '#e5d7cb';
        statusMsg.style.borderColor = '#cfbbab';
        tampilkanSoal();
        updateProgress();
    }

    function lihatSemuaJawaban() {
        let pesan = `📋 REKAP JAWABAN (${savedNama} - NISN: ${savedNisn})\n\n`;
        for (let i = 0; i < SOAL_ASLI.length; i++) {
            const soal = SOAL_ASLI[i];
            const jawaban = jawabanUser[i];
            
            let jawabanText = '';
            let benarStatus = '';
            
            if (soal.tipe === 'Sederhana') {
                jawabanText = (jawaban !== null) ? HURUF[jawaban] : '❌ tidak dijawab';
                const benar = (jawaban !== null && jawaban === soal.jawabanBenar);
                benarStatus = benar ? '✅' : (jawaban !== null ? '❌' : '⬜');
            } else if (soal.tipe === 'MCMA') {
                if (jawaban && Array.isArray(jawaban) && jawaban.length > 0) {
                    jawabanText = jawaban.map(j => HURUF[j]).join(', ');
                    const sortedJawaban = [...jawaban].sort();
                    const sortedKunci = [...soal.jawabanBenar].sort();
                    const benar = sortedJawaban.length === sortedKunci.length &&
                        sortedJawaban.every((v, idx) => v === sortedKunci[idx]);
                    benarStatus = benar ? '✅' : '❌';
                } else {
                    jawabanText = '❌ tidak dijawab';
                    benarStatus = '⬜';
                }
            } else if (soal.tipe === 'Kategori') {
                if (jawaban && typeof jawaban === 'object' && !Array.isArray(jawaban)) {
                    const jawabanArray = Array.from({length: soal.pernyataan.length}, (_, idx) => jawaban[idx]);
                    const semuaTerisi = jawabanArray.every(v => v !== undefined && v !== null);
                    if (semuaTerisi) {
                        jawabanText = jawabanArray.map((v, idx) => {
                            return soal.kategori[v] || '?';
                        }).join(' | ');
                        const semuaSama = jawabanArray.every((v, idx) => v === soal.jawabanBenar[idx]);
                        benarStatus = semuaSama ? '✅' : '❌';
                    } else {
                        jawabanText = '❌ tidak dijawab';
                        benarStatus = '⬜';
                    }
                } else {
                    jawabanText = '❌ tidak dijawab';
                    benarStatus = '⬜';
                }
            }
            
            pesan += `Soal ${i + 1} (${soal.tipe}) ${benarStatus} Jawaban: ${jawabanText}\n`;
        }
        alert(pesan);
    }

    resetBtn.addEventListener('click', resetFull);
    lihatSemuaBtn.addEventListener('click', lihatSemuaJawaban);

    window.addEventListener('beforeunload', function() {
        if (isExamActive) {
            disableAntiCheat();
            exitFullscreen();
        }
    });
})();
