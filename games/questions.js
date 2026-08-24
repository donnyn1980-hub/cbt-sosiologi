// questions.js - Bank Soal MCMA Sosiologi (Struktur Sosial)
const questionBank = [
    {
        question: 'Masyarakat Hindu di Bali mengenal sistem kasta yang membagi garis keturunan ke dalam kelompok Brahmana, Ksatria, Wesia, dan Sudra. Kedudukan sosial seseorang dalam sistem kasta tersebut diperoleh secara turun-temurun sejak lahir dan sulit untuk berpindah posisi secara bebas. Berdasarkan tatanan pembagian lapisan masyarakat tersebut, karakteristik struktur sosial yang tercermin pada sistem kasta tergolong ke dalam...',
        options: ['Stratifikasi sosial tertutup', 'Kedudukan sosial bersifat ascribed status', 'Stratifikasi sosial terbuka', 'Kedudukan sosial bersifat achieved status'],
        correct: [0, 1] // Variasi: 1 dan 2
    },
    {
        question: 'Seorang anak petani di pelosok desa berhasil menyelesaikan pendidikan tinggi di jurusan kedokteran melalui beasiswa pemerintah hingga kini menjabat sebagai direktur rumah sakit. Keberhasilan akademis dan karier profesionalnya membawa pengaruh signifikan terhadap kenaikan status sosial keluarganya di masyarakat. Berdasarkan kisah pencapaian status tersebut, bentuk struktur dan kedudukan sosial yang dialami oleh dokter tersebut adalah...',
        options: ['Sistem stratifikasi sosial tertutup', 'Stratifikasi sosial bersifat terbuka', 'Kedudukan sosial bersifat achieved status', 'Kedudukan sosial bersifat assigned status'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Masyarakat Indonesia terdiri atas ribuan suku bangsa, agama yang beragam, serta berbagai bahasa daerah yang tersebar dari Sabang sampai Merauke. Meskipun memiliki keanekaragaman budaya, seluruh warga negara memiliki kedudukan hukum dan kewajiban yang sejajar di mata negara. Berdasarkan tatanan horizontal dalam masyarakat majemuk tersebut, bentuk struktur sosial yang dimaksud adalah...',
        options: ['Stratifikasi sosial vertikal', 'Pelapisan sosial berdasarkan kekayaan', 'Diferensiasi sosial', 'Kategorisasi masyarakat secara horizontal'],
        correct: [2, 3] // Variasi: 3 dan 4
    },
    {
        question: 'Di sebuah perusahaan swasta, direksi memegang wewenang tertinggi dalam pengambilan keputusan strategis, diikuti oleh para manajer, supervisor, hingga staf operasional. Pembagian tingkatan jabatan ini berimplikasi langsung pada perbedaan besaran gaji, tanggung jawab, serta fasilitas yang diterima oleh tiap pegawai. Berdasarkan hierarki pada organisasi kerja tersebut, fungsi stratifikasi sosial yang berjalan adalah...',
        options: ['Distribusi hak dan wewenang sesuai tingkatan', 'Penentuan simbol status dan taraf hidup', 'Alat menyeleksi pembagian kerja dan tanggung jawab', 'Penghapus perbedaan kualifikasi antar karyawan'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Beberapa suku tradisional di Indonesia masih menerapkan garis keturunan matrilineal, di mana harta warisan dan klan keluarga diturunkan melalui garis ibu. Konsep kekerabatan ini memengaruhi pola pengelompokan keluarga serta kedudukan perempuan dalam urusan adat daerah tersebut. Berdasarkan prinsip pengelompokan keluarga adat tersebut, diferensiasi sosial yang terbentuk didasarkan pada...',
        options: ['Tingkat pendidikan formal', 'Prinsip keturunan (kekerabatan)', 'Pengelompokan klan (majelis/marga)', 'Perbedaan kasta sosial'],
        correct: [1, 2, 3] // Variasi: 2, 3, dan 4
    },
    {
        question: 'Pemerintah memberikan penghargaan Bintang Mahaputera kepada para tokoh bangsa dan ilmuwan yang telah berkontribusi besar bagi kemajuan Indonesia. Penghargaan kehormatan ini secara otomatis meningkatkan penghormatan publik terhadap para penerimanya di dalam tatanan bermasyarakat. Berdasarkan pemberian apresiasi atas jasa seseorang tersebut, status sosial yang didapatkan oleh para tokoh digolongkan sebagai...',
        options: ['Assigned status (status yang diberikan)', 'Status yang diperoleh atas pengakuan pihak lain/negara', 'Ascribed status yang dibawa sejak lahir', 'Status sosial yang didapatkan tanpa peranan sama sekali'],
        correct: [0, 1] // Variasi: 1 dan 2
    },
    {
        question: 'Di kawasan perkotaan, pemukiman mewah berpagar tinggi sering kali berbatasan langsung dengan kawasan pemukiman padat penduduk atau kumuh di tepi sungai. Perbedaan mencolok pada kualitas hunian dan akses fasilitas umum ini mencerminkan tingginya kesenjangan ekonomi antarwarga kota. Berdasarkan fenomena ketimpangan wilayah tempat tinggal tersebut, kriteria pelapisan sosial yang paling dominan terbentuk didasarkan pada...',
        options: ['Ukuran kekuasaan dan wewenang politik', 'Ukuran kekayaan dan kepemilikan materi', 'Tingkat penguasaan ilmu pengetahuan', 'Ukuran kehormatan adat leluhur'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Organisasi profesi seperti Ikatan Dokter Indonesia (IDI) dan Persatuan Guru Republik Indonesia (PGRI) mewadahi individu dengan keahlian serta latar belakang pekerjaan yang sejenis. Meskipun anggota organisasi berasal dari suku dan agama yang berbeda-beda, keahlian profesional yang sama menyatukan mereka dalam satu wadah. Berdasarkan pembagian kelompok berdasarkan profesi tersebut, karakteristik diferensiasi sosial yang tepat adalah...',
        options: ['Pembagian masyarakat berdasarkan tingkat kecerdasan bawaan', 'Diferensiasi sosial berbasis profesi/mata pencaharian', 'Pengelompokan horizontal tanpa membedakan tingkatan derajat', 'Pengelompokan yang membentuk hierarki kelas atas dan bawah'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Pada masyarakat feodal di masa lampau, kelompok bangsawan atau raja memegang kekuasaan mutlak atas tanah dan rakyat jelata. Kelompok jelata diwajibkan menyerahkan sebagian hasil panen sebagai upeti dan tidak memiliki wewenang dalam urusan pemerintahan kerajaan. Berdasarkan tatanan politik masa feodal tersebut, bentuk stratifikasi sosial ditentukan oleh kriteria...',
        options: ['Ukuran kekuasaan politik', 'Kepemilikan sumber daya ekonomi/tanah', 'Tingkat pendidikan akademis modern', 'Keturunan dan derajat kebangsawaan'],
        correct: [0, 1, 3] // Variasi: 1, 2, dan 4
    },
    {
        question: 'Dalam suatu perkumpulan pemuda karang taruna, anggota-anggotanya terdiri dari mahasiswa, pegawai swasta, pengusaha muda, hingga pemuda yang sedang mencari kerja. Meskipun memiliki latar belakang status ekonomi yang berbeda, setiap pemuda memiliki hak suara dan posisi yang setara dalam rapat komunitas. Berdasarkan struktur kepemudaan tersebut, hubungan antaranggota menunjukkan bahwa...',
        options: ['Diferensiasi sosial dapat menciptakan kesetaraan antarindividu', 'Perbedaan ekonomi tidak menghalangi konsolidasi horizontal', 'Status sosial individu disetarakan dalam ruang organisasi Karang Taruna', 'Sistem stratifikasi tertutup diterapkan dalam organisasi'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Masyarakat klan atau suku Minangkabau mengelompokkan diri berdasarkan garis keturunan ibu (matrilineal) yang terbagi dalam berbagai suku seperti Koto, Pikoang, Bodi, dan Caniago. Pengelompokan ini tidak menentukan siapa yang lebih tinggi atau rendah, melainkan sebagai sarana mengatur hubungan kekerabatan dan perkawinan adat. Berdasarkan struktur kekerabatan adat tersebut, fenomena pengelompokan klan ini mencerminkan...',
        options: ['Diferensiasi sosial berdasarkan garis keturunan (genealogis)', 'Pengelompokan horizontal yang tidak membentuk hierarki kelas', 'Sistem kekerabatan adat yang mengatur integrasi internal', 'Stratifikasi sosial terbuka berbasis pencapaian ekonomi'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Era reformasi memungkinkannya warga dari berbagai latar belakang etnis dan kelas ekonomi untuk maju mencalonkan diri sebagai anggota legislatif atau kepala daerah melalui pemilu. Keterbukaan saluran politik ini memberikan kesempatan yang sama bagi setiap individu untuk meraih kekuasaan publik melalui kompetisi demokratis. Berdasarkan keterbukaan posisi politik dalam negara demokrasi tersebut, karakteristik struktur sosial yang berlaku adalah...',
        options: ['Stratifikasi sosial bersifat terbuka', 'Status kekuasaan merupakan achieved status', 'Kesempatan mobilitas sosial vertikal terbuka bagi siapa saja', 'Sistem pelapisan sosial bersifat kaku dan tertutup'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Pengelompokan ras manusia secara global didasarkan pada ciri-ciri fisik superfisial seperti warna kulit, bentuk rambut, serta lipatan mata. Perbedaan ciri fisik luar ini sering kali disalahgunakan oleh sebagian pihak untuk melakukan diskriminasi, padahal secara genetika seluruh ras manusia adalah setara. Berdasarkan kajian sosiologi terhadap fenomena keanekaragaman fisik tersebut, pengelompokan ras tergolong dalam...',
        options: ['Stratifikasi sosial berdasarkan tingkat kecerdasan', 'Diferensiasi sosial berdasarkan ciri fisik (somatis)', 'Pengelompokan horizontal yang seharusnya tidak membedakan derajat', 'Sistem pelapisan hierarkis berdasar supremasi rasial'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Seorang gelar master lulusan luar negeri yang kembali ke desanya dihormati oleh warga setempat dan sering dimintai nasihat dalam memutuskan urusan pembangunan desa. Pengetahuan dan wawasan luas yang dimilikinya menempatkan dirinya pada posisi terpandang di lingkungan masyarakat agraris tersebut. Berdasarkan penghargaan warga terhadap tingkat pendidikan tokoh desa tersebut, kriteria pelapisan sosial yang terbentuk adalah...',
        options: ['Kriteria tingkat pendidikan/ilmu pengetahuan', 'Ukuran kehormatan sosial berbasis kepemilikan modal', 'Achieved status melalui saluran pendidikan formal', 'Ascribed status yang diwariskan oleh orang tuanya'],
        correct: [0, 2] // Variasi: 1 dan 3
    },
    {
        question: 'Di era krisis ekonomi, beberapa pengusaha besar yang mengalami kebangkrutan terpaksa menjual aset perusahaan dan turun kelas menjadi pedagang kecil di pasar tradisional. Sebaliknya, beberapa pelaku UMKM kreatif justru berhasil mengembangkan usahanya hingga menjadi perusahaan skala nasional. Berdasarkan pergerakan posisi ekonomi yang dinamis tersebut, ciri struktur sosial yang memfasilitasi fenomena ini adalah...',
        options: ['Stratifikasi sosial bersifat tertutup', 'Adanya peluang mobilitas sosial vertikal naik dan turun', 'Stratifikasi sosial bersifat terbuka bagi dinamika ekonomi', 'Kedudukan sosial bersifat mutlak tanpa perubahan'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Penerapan sistem apartheid di Afrika Selatan pada masa lalu memisahkan hak-hak sipil, pemukiman, dan fasilitas publik masyarakat berdasarkan warna kulit secara tegas oleh undang-undang. Warga berkulit hitam tidak memiliki hak politik dan dihalangi untuk menempati posisi kekuasaan dalam pemerintahan. Berdasarkan sejarah pembatasan rasial yang dilegalkan negara tersebut, bentuk struktur sosial yang diterapkan adalah...',
        options: ['Stratifikasi sosial tertutup berdasarkan rasial', 'Diferensiasi sosial yang berkeadilan', 'Pelapisan masyarakat yang mengekang mobilitas sosial', 'Sistem sosial berbasis kesetaraan hak asasi'],
        correct: [0, 2] // Variasi: 1 dan 3
    },
    {
        question: 'Di sebuah desa terisolasi, pimpinan adat yang memegang kekuasaan spiritual dan hukum lokal dipilih secara mutlak dari keturunan tetua pendiri desa. Anggota masyarakat luar desa yang pindah ke wilayah tersebut tidak dapat menduduki jabatan pimpinan adat terlepas dari tingkat pendidikan atau kekayaan mereka. Berdasarkan aturan kepemimpinan adat setempat, bentuk penetapan kedudukan pimpinan tersebut didasarkan pada...',
        options: ['Ascribed status berdasarkan garis keturunan', 'Sistem pelapisan sosial tertutup untuk jabatan adat', 'Achieved status melalui kompetisi terbuka', 'Assigned status dari pemerintah pusat'],
        correct: [0, 1] // Variasi: 1 dan 2
    },
    {
        question: 'Keragaman profesi dalam masyarakat modern—seperti teknisi, pengacara, seniman, dan petani—membuat setiap individu saling bergantung satu sama lain untuk memenuhi kebutuhan hidup sehari-hari. Keahlian yang berbeda-beda ini menciptakan pembagian kerja yang saling melengkapi dalam struktur masyarakat industri. Berdasarkan ketergantungan antarprofesi tersebut, fungsi dari diferensiasi profesi di masyarakat adalah...',
        options: ['Menciptakan pembagian kerja yang saling melengkapi (solidaritas organik)', 'Mendorong terjadinya disintegrasi antar kelompok kerja', 'Memenuhi berbagai kebutuhan masyarakat yang kompleks', 'Menghilangkan perbedaan pendapatan antarjenis pekerjaan'],
        correct: [0, 2] // Variasi: 1 dan 3
    },
    {
        question: 'Seorang anak raja secara otomatis menerima gelar kebangsawaan pangeran sejak hari kelahirannya tanpa perlu melalui proses seleksi atau ujian tertentu. Gelar kehormatan ini melekat seumur hidup dan menempatkannya pada lapisan atas tatanan masyarakat monarki. Berdasarkan cara perolehan kedudukan sosial tersebut, status sosial pangeran tergolong dalam...',
        options: ['Ascribed status', 'Kedudukan yang diperoleh secara otomatis karena kelahiran', 'Achieved status yang diperjuangkan', 'Assigned status atas pemberian masyarakat luar'],
        correct: [0, 1] // Variasi: 1 dan 2
    },
    {
        question: 'Seseorang yang berprofesi sebagai dosen di siang hari juga aktif sebagai pengurus organisasi keagamaan di malam hari serta menjadi ketua RT di lingkungan rumahnya. Keberagaman peran ini menuntutnya untuk menjalankan berbagai kewajiban sosial yang berbeda sesuai dengan ekspektasi masing-masing kelompok. Berdasarkan banyaknya posisi sosial yang diemban individu tersebut, kondisi ini menggambarkan fenomena...',
        options: ['Konflik peran karena tidak bisa membagi waktu', 'Keberagaman status sosial (multiple status) yang dimiliki satu individu', 'Pelaksanaan peran sosial yang melekat pada masing-masing status', 'Sistem stratifikasi tertutup yang membatasi peran individu'],
        correct: [1, 2] // Variasi: 2 dan 3
    }
];
