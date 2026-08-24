// questions.js - Bank Soal MCMA Sosiologi (Perubahan Sosial)
const questionBank = [
    {
        question: 'Pemerintah daerah DKI Jakarta meluncurkan aplikasi JakLingko untuk mengintegrasikan berbagai moda transportasi publik seperti TransJakarta, LRT, dan MRT secara digital. Sistem pembayaran terpadu ini mempermudah mobilitas masyarakat urban sekaligus mengubah pola bertransaksi warga dari uang tunai menjadi dompet digital. Berdasarkan fenomena integrasi transportasi digital tersebut, bentuk perubahan sosial yang tercermin dari inovasi pelayanan publik ini adalah...',
        options: ['Perubahan yang direncanakan (planned change)', 'Perubahan berdampak luas', 'Perubahan regresif', 'Perubahan yang tidak disengaja'],
        correct: [0, 1] // Variasi: 1 dan 2
    },
    {
        question: 'Di wilayah pesisir Jawa, aktivitas tambang pasir laut dan pemanasan global memicu abrasi parah yang menenggelamkan puluhan rumah warga di beberapa desa. Masyarakat terpaksa direlokasi ke daerah daratan tinggi dan kehilangan mata pencaharian utama mereka sebagai nelayan tradisional. Peristiwa rusaknya lingkungan pesisir tersebut menunjukkan bahwa pemicu perubahan sosial dalam kasus tersebut tergolong ke dalam...',
        options: ['Faktor internal dari dalam struktur masyarakat', 'Faktor eksternal perubahan sosial', 'Perubahan iklim dan dinamika alam', 'Inovasi budaya lokal'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Fenomena Gelombang Korea (Hallyu) seperti musik K-Pop dan drama Korea marak digemari oleh remaja Indonesia melalui platform streaming. Masuknya tren budaya ini memicu pergeseran gaya berbusana, selera kuliner, hingga gaya bahasa di kalangan generasi muda urban. Berdasarkan ilustrasi penyerapan budaya asing tersebut, proses perubahan sosial yang sedang berlangsung dalam masyarakat terjadi melalui...',
        options: ['Isolasi geografis', 'Asimilasi paksa melalui otoritas negara', 'Proses difusi budaya', 'Kontak dengan budaya asing'],
        correct: [2, 3] // Variasi: 3 dan 4
    },
    {
        question: 'Pada awal tahun 2000-an, tren pakaian celana cutbray sempat menghilang dari pasaran fashion nasional, namun kini celana berpotongan lebar tersebut kembali digandrungi anak muda. Perubahan gaya berbusana ini berulang dalam kurun waktu beberapa dekade dengan variasi gaya yang sedikit disesuaikan dengan zaman modern. Berdasarkan contoh tren fashion tersebut, karakteristik bentuk perubahan sosial yang tepat adalah...',
        options: ['Perubahan bersifat siklus', 'Perubahan yang berulang dalam kurun waktu tertentu', 'Perubahan gaya hidup yang memengaruhi pola konsumsi', 'Perubahan evolusioner linier menuju kesempurnaan mutlak'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Penerapan teknologi kecerdasan buatan (Artificial Intelligence) di sektor manufaktur memicu otomatisasi pekerjaan yang menggantikan ribuan tenaga kerja manusia. Dampak dari efisiensi pabrik ini berujung pada meningkatnya angka PHK mendadak dan lonjakan pengangguran terstruktur di kawasan industri. Berdasarkan fenomena disrupsi teknologi tersebut, dampak negatif perubahan sosial yang dialami oleh para pekerja adalah...',
        options: ['Peningkatan kesejahteraan buruh secara spontan', 'Terjadinya disrupsi ketenagakerjaan', 'Ancaman pengangguran struktural', 'Kebutuhan adaptasi keahlian baru (reskilling)'],
        correct: [1, 2, 3] // Variasi: 2, 3, dan 4
    },
    {
        question: 'Sebuah komunitas adat terpencil menolak pembangunan pemancar sinyal seluler dan jalur jalan aspal yang ditawarkan pemerintah daerah ke wilayah pemukiman mereka. Warga khawatir kehadiran teknologi modern tersebut akan merusak adat istiadat leluhur serta tatanan norma lokal yang terjaga berabad-abad. Berdasarkan penolakan masyarakat adat tersebut, faktor penghambat terjadinya perubahan sosial pada kasus di atas adalah...',
        options: ['Sikap tradisional yang dipertahankan kuat', 'Kekhawatiran akan terjadinya kegoyahan pada integrasi kebudayaan', 'Upaya menjaga nilai dan norma adat lokal', 'Perkembangan ilmu pengetahuan yang sangat pesat'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Pemerintah meresmikan Tol Trans-Jawa yang menghubungkan berbagai kota penting dari Ujung Barat hingga Ujung Timur Pulau Jawa. Akses jalan bebas hambatan ini mempercepat laju distribusi barang, memangkas waktu tempuh logistik, serta memicu bertumbuhnya pusat ekonomi baru di sekitar exit tol. Berdasarkan dampak pembangunan jaringan tol tersebut, perubahan sosial yang terjadi dapat dikategorikan sebagai...',
        options: ['Perubahan regresif yang menolak kemajuan', 'Perubahan progresif yang membawa kemajuan', 'Perubahan yang direncanakan (planned change)', 'Perubahan yang tidak berpengaruh pada ekonomi'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Masuknya mesin traktor modern ke pedesaan secara bertahap menggantikan tradisi membajak sawah menggunakan kerbau dan kerja bakti antarpetani. Peralihan teknologi pertanian ini menyebabkan interaksi gotong royong antarwarga menurun karena proses pengolahan lahan kini dilakukan secara individual dan cepat. Berdasarkan ilustrasi mekanisasi pertanian tersebut, dampak perubahan sosial yang merubah tatanan hubungan antarwarga adalah...',
        options: ['Menguatnya ikatan solidaritas mekanik tradisional', 'Meningkatnya individualisme di pedesaan', 'Pudarnya nilai-nilai kebersamaan atau gotong royong', 'Pergeseran pola interaksi sosial antarpetani'],
        correct: [1, 2, 3] // Variasi: 2, 3, dan 4
    },
    {
        question: 'Sosiolog klasik Karl Marx dan Max Weber sering menjadi acuan para ilmuwan dalam menganalisis fenomena transformasi masyarakat dari era agraris menuju era industri. Pemikiran para ahli ini membantu menjelaskan bagaimana perubahan sistem produksi dan nilai keagamaan memengaruhi tatanan kelas sosial serta rasionalitas manusia. Berdasarkan fokus kajian analisis para sosiolog tersebut, fokus utama penjelasannya berkisar pada...',
        options: ['Konflik kelas sosial akibat penguasaan alat produksi', 'Rasionalisasi dan perubahan orientasi nilai masyarakat', 'Dinamika struktur sosial dalam masyarakat industri', 'Siklus alamiah peradaban yang pasti punah'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Mewabahnya pandemi COVID-19 secara global memaksa seluruh sekolah menghentikan pembelajaran tatap muka dan beralih ke pembelajaran jarak jauh secara daring. Perubahan metode belajar mendadak ini mengejutkan banyak pihak karena kesiapan infrastruktur internet dan kemampuan digital guru maupun siswa belum merata. Berdasarkan dinamika penghentian kelas fisik tersebut, sifat perubahan sosial yang terjadi pada kasus ini adalah...',
        options: ['Perubahan yang berlangsung lambat (evolusi)', 'Perubahan yang tidak dikehendaki (unplanned change)', 'Perubahan yang berlangsung cepat (revolusi)', 'Perubahan yang dipicu oleh faktor bencana/wabah'],
        correct: [1, 2, 3] // Variasi: 2, 3, dan 4
    },
    {
        question: 'Program Keluarga Berencana (KB) yang digalakkan pemerintah sejak era Orde Baru berhasil menekan angka pertumbuhan penduduk Indonesia secara signifikan. Keberhasilan program edukasi dan medis ini mengubah pandangan tradisional masyarakat dari prinsip "banyak anak banyak rezeki" menjadi keluarga kecil sejahtera. Berdasarkan keberhasilan intervensi sosial tersebut, program KB tergolong dalam bentuk perubahan sosial...',
        options: ['Perubahan yang direncanakan (planned change)', 'Perubahan yang membawa dampak positif (progresif)', 'Perubahan pola pikir mengenai jumlah anggota keluarga', 'Perubahan struktural dalam tatanan kependudukan'],
        correct: [0, 1, 2, 3] // Variasi: 1, 2, 3, dan 4
    },
    {
        question: 'Di era digital, transaksi perdagangan tradisional melalui tatap muka di pasar fisik perlahan digantikan oleh ekosistem e-commerce berbasis aplikasi ponsel. Peralihan kebiasaan berbelanja ini membuat efisiensi transaksi meningkat, namun menyebabkan banyak toko kelontong konvensional sepi pengunjung hingga gulung tikar. Berdasarkan fenomena pergeseran media belanja tersebut, dampak perubahan sosial yang berimplikasi ganda ini adalah...',
        options: ['Perubahan gaya hidup konsumen menuju serba digital', 'Timbulnya persaingan ketat yang mengancam usaha konvensional', 'Terjadinya isolasi total transaksi ekonomi nasional', 'Menurunnya efisiensi dan kecepatan transaksi perdagangan'],
        correct: [0, 1] // Variasi: 1 dan 2
    },
    {
        question: 'Revolusi Industri 1.0 yang ditandai dengan penemuan mesin uap oleh James Watt berhasil mengubah tatanan produksi barang dari tenaga manusia menjadi berbasis mesin. Penemuan teknologi baru ini dengan cepat menyebar ke sektor transportasi seperti kereta api uap dan kapal laut komersial. Berdasarkan sejarah penemuan teknologi tersebut, faktor internal yang mendasari munculnya perubahan sosial di bidang industri adalah...',
        options: ['Bencana alam yang memusnahkan populasi', 'Inovasi dan penemuan baru (discovery/invention)', 'Kemajuan daya pikir dan kreativitas manusia', 'Perang antarnegara pembuat mesin'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Pertentangan antara kelompok buruh dan pemilik pabrik terkait tuntutan kenaikan UMR kerap berlanjut pada aksi mogok kerja massal di berbagai kota besar. Konflik industrial ini pada akhirnya mendesak pemerintah untuk merevisi regulasi ketenagakerjaan dan menetapkan standar gaji minimum baru. Berdasarkan dinamika perselisihan tersebut, pemicu perubahan kebijakan ketenagakerjaan berakar dari...',
        options: ['Perubahan kondisi geografis wilayah industri', 'Akulturasi budaya antar suku bangsa', 'Pertentangan atau konflik sosial antar kelompok', 'Dinamika perjuangan kepentingan dalam struktur masyarakat'],
        correct: [2, 3] // Variasi: 3 dan 4
    },
    {
        question: 'Beberapa kelompok masyarakat enggan menerima vaksinasi gratis dari pemerintah karena percaya pada kabar burung (hoaks) yang beredar di media sosial tanpa verifikasi ilmiah. Sikap mudah percaya pada rumor dan kecurigaan berlebihan terhadap teknologi medis modern menghambat target penciptaan kekebalan kelompok. Berdasarkan sikap penolakan warga tersebut, faktor psikologis dan sosial yang menghambat perubahan adalah...',
        options: ['Prasangka buruk terhadap hal-hal baru atau asing', 'Kurangnya efektivitas edukasi dan literasi informasi', 'Kecurigaan terhadap unsur kebudayaan luar', 'Sistem pendidikan yang terlalu maju dan terbuka'],
        correct: [0, 1, 2] // Variasi: 1, 2, dan 3
    },
    {
        question: 'Proses modernisasi di perkotaan besar mendorong tingginya mobilitas pekerjaan dan memicu berkembangnya gaya hidup individualistis di kalangan pekerja muda. Banyak warga perumahan urban kini tidak lagi mengenali tetangga sebelah rumah karena kesibukan kerja yang padat dari pagi hingga malam. Berdasarkan kondisi dinamika kehidupan kota tersebut, pergeseran tatanan nilai sosial yang dialami masyarakat urban mencakup...',
        options: ['Menguatnya hubungan kekeluargaan yang intim', 'Pudarnya ikatan solidaritas paguyuban (gemeinschaft)', 'Meningkatnya sifat individualistis dan egosentris', 'Pergeseran menuju hubungan patembayan (gesselschaft)'],
        correct: [1, 2, 3] // Variasi: 2, 3, dan 4
    },
    {
        question: 'Penemuan smartphone dan jaringan internet nirkabel telah mengubah cara manusia berkomunikasi dari surat menyurat fisik menjadi percakapan instan real-time. Inovasi teknologi komunikasi ini tidak hanya memangkas jarak geografis tetapi juga menciptakan budaya baru seperti kerja remote dan media sosial. Berdasarkan sejarah munculnya telepon pintar tersebut, fenomena ini menggambarkan bentuk perubahan yang disebabkan oleh...',
        options: ['Penemuan baru (inovasi teknologi) dalam masyarakat', 'Kemajuan teknologi informasi yang disengaja', 'Pengaruh perkembangan IPTEK pada budaya komunikasi', 'Perubahan pola interaksi sosial jarak jauh'],
        correct: [0, 1, 2, 3] // Variasi: 1, 2, 3, dan 4
    },
    {
        question: 'Letusan dahsyat Gunung Kelud memuntahkan abu vulkanik yang menimbun pemukiman serta lahan pertanian warga di beberapa kecamatan sekitar lereng gunung. Bencana hebat ini memaksa warga meninggalkan desa asal mereka dan memulai kehidupan baru di pemukiman relokasi buatan pemerintah. Berdasarkan dampak kerusakan akibat erupsi gunung api tersebut, faktor pemicu timbulnya perubahan sosial masyarakat lereng gunung tergolong...',
        options: ['Faktor perubahan lingkungan alam / bencana alam', 'Faktor eksternal yang berada di luar kendali manusia', 'Faktor konflik sosial antardesa', 'Faktor penemuan teknologi pertanian baru'],
        correct: [0, 1] // Variasi: 1 dan 2
    },
    {
        question: 'Praktik politik uang (money politics) dalam pemilu lokal yang dibiarkan terus menerus dapat merusak tatanan demokrasi dan menurunkan kualitas kepemimpinan daerah. Kondisi ini memicu meningkatnya angka korupsi serta ketidakpercayaan publik terhadap lembaga hukum dan pemerintahan. Berdasarkan kemunduran kualitas tatanan demokrasi tersebut, bentuk perubahan sosial yang terjadi digolongkan sebagai...',
        options: ['Perubahan progresif menuju keadilan', 'Perubahan regresif (kemunduran)', 'Perubahan yang berdampak negatif bagi kehidupan publik', 'Perubahan yang direncanakan demi kesejahteraan sosial'],
        correct: [1, 2] // Variasi: 2 dan 3
    },
    {
        question: 'Sebuah perusahaan startup menciptakan platform aplikasi pengumpul sampah daur ulang yang menghubungkan rumah tangga langsung dengan pengepul dan pabrik daur ulang. Inovasi bisnis hijau ini berhasil mengurangi volume sampah di TPA sekaligus memberikan penghasilan tambahan bagi warga setempat. Berdasarkan penciptaan model bisnis daur ulang digital tersebut, dampak positif perubahan sosial yang tercipta adalah...',
        options: ['Meningkatnya pencemaran lingkungan akibat sampah', 'Penurunan kesadaran warga akan kebersihan sekitar', 'Pemberdayaan ekonomi berbasis pengelolaan lingkungan', 'Pemanfaatan teknologi untuk solusi masalah sosial-lingkungan'],
        correct: [2, 3] // Variasi: 3 dan 4
    }
];
