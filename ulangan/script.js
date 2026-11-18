// ============================================================
// DATA SOAL - 3 TIPE: SEDERHANA, MCMA, KATEGORI
// ============================================================

const SOAL_ASLI = [
// ==========================================
    // TIPE 1: SEDERHANA (10 Soal)
    // ==========================================
{
        id: 1,
        tipe: "Sederhana",
        teks: "Sekelompok ibu-ibu di perumahan rutin mengadakan arisan setiap bulan untuk mempererat tali silaturahim antarwarga. Kegiatan ini dilandasi oleh ikatan batin yang kuat dan rasa kekeluargaan yang mendalam tanpa ikatan birokrasi formal. Berdasarkan konsep sosiologis, bentuk kelompok sosial apakah yang tergambar dalam ilustrasi tersebut?",
        opsi: [
            "in-group",
            "out-group",
            "paguyuban (gemeinschaft)",
            "patembayan (gesellschaft)",
            "kelompok primer formal"
        ],
        jawabanBenar: 2
    },
    {
        id: 2,
        tipe: "Sederhana",
        teks: "Para pendukung klub sepak bola Persija Jakarta sering kali menganggap kelompok mereka jauh lebih unggul dibandingkan suporter klub lain. Sikap mengidentifikasikan diri secara berlebihan dengan kelompok sendiri dan memandang rendah kelompok luar ini di dalam sosiologi disebut sebagai ....",
        opsi: [
            "etnosentrisme",
            "stereotip kelompok",
            "out-group feeling",
            "in-group feeling",
            "primordialisme sempit"
        ],
        jawabanBenar: 3
    },
    {
        id: 3,
        tipe: "Sederhana",
        teks: "Sebuah perusahaan multinasional mempekerjakan karyawan dari berbagai latar belakang suku, agama, dan ras yang berbeda namun dipersatukan dalam sistem kerja profesional. Kondisi masyarakat majemuk dengan struktur sosial bersilang semacam ini ditandai oleh adanya ....",
        opsi: [
            "integrasi sosial yang rapuh",
            "potensi konflik horizontal yang tinggi",
            "solidaritas mekanis yang mengikat kuat",
            "terjalinnya ikatan sosial lintas kelompok",
            "dominasi mutlak kelompok mayoritas"
        ],
        jawabanBenar: 3
    },
    {
        id: 4,
        tipe: "Sederhana",
        teks: "Dalam sistem pelapisan sosial masyarakat feodal tradisional, kedudukan seseorang ditentukan secara mutlak oleh garis keturunan bangsawan sejak ia lahir ke dunia. Bentuk stratifikasi sosial tertutup semacam ini berakibat pada kenyataan bahwa ....",
        opsi: [
            "mobilitas sosial vertikal sangat terbuka",
            "terjadinya persaingan bebas antarkelas",
            "tertutupnya peluang perpindahan status sosial",
            "kesetaraan hak bagi setiap warga masyarakat",
            "penghargaan didasarkan pada prestasi individu"
        ],
        jawabanBenar: 2
    },
    {
        id: 5,
        tipe: "Sederhana",
        teks: "Rudi berhasil merintis usaha digital hingga menjadi pengusaha sukses dan dihormati oleh warga kampungnya yang dulu sempat meremehkannya. Peristiwa perubahan status tersebut mencerminkan terjadinya bentuk mobilitas sosial vertikal naik karena faktor ....",
        opsi: [
            "perubahan standar kekayaan",
            "saluran mobilitas pendidikan",
            "keberhasilan perjuangan individu",
            "kebijakan pemerintah daerah",
            "perubahan struktur ekonomi makro"
        ],
        jawabanBenar: 2
    },
    {
        id: 6,
        tipe: "Sederhana",
        teks: "Masyarakat nelayan di pesisir pantai umumnya memiliki pola solidaritas yang didasarkan pada kesamaan pekerjaan, tradisi leluhur, dan tingkat kesadaran kolektif yang sangat tinggi. Menurut pandangan Émile Durkheim, jenis solidaritas sosial apakah yang mendasari kehidupan masyarakat tersebut?",
        opsi: [
            "solidaritas organik",
            "solidaritas mekanis",
            "solidaritas fungsional",
            "solidaritas kontraktual",
            "solidaritas struktural"
        ],
        jawabanBenar: 1
    },
    {
        id: 7,
        tipe: "Sederhana",
        teks: "Sekelompok dokter spesialis mendirikan organisasi ikatan profesi guna menjaga kode etik dan standar pelayanan medis di berbagai rumah sakit. Berdasarkan kriteria pembentukannya dalam sosiologi, asosiasi formal tersebut tergolong sebagai ....",
        opsi: [
            "membership group",
            "reference group",
            "primary group",
            "in-group",
            "voluntary association"
        ],
        jawabanBenar: 0
    },
    {
        id: 8,
        tipe: "Sederhana",
        teks: "Seorang remaja sering meniru gaya berpakaian, potongan rambut, dan cara bicara idola K-Pop favoritnya meskipun ia tidak pernah tergabung dalam agensi tersebut. Kelompok idola yang dijadikan acuan berperilaku bagi remaja tersebut dinamakan sebagai ....",
        opsi: [
            "primary group",
            "reference group",
            "membership group",
            "formal group",
            "out-group"
        ],
        jawabanBenar: 1
    },
    {
        id: 9,
        tipe: "Sederhana",
        teks: "Struktur masyarakat multikultural di Indonesia digambarkan memiliki dua ciri sekaligus, yaitu secara horizontal terbagi oleh suku/agama dan secara vertikal terbagi oleh tingkat kekayaan atau jabatan. Konsep sosiologis untuk menggambarkan struktur sosial majemuk tersebut adalah ....",
        opsi: [
            "interseksi dan konsolidasi",
            "diferensiasi dan stratifikasi",
            "asimilasi dan akulturasi",
            "mobilitas dan stratifikasi",
            "integrasi dan disintegrasi"
        ],
        jawabanBenar: 1
    },
    {
        id: 10,
        tipe: "Sederhana",
        teks: "Konflik antar-etnis yang pernah terjadi di beberapa daerah kerap dipicu oleh menguatnya ikatan kesukuan yang berlebihan tanpa diimbangi toleransi antarkelompok. Gejala sosial yang menunjukkan pemujaan berlebihan terhadap suku sendiri ini disebut sebagai ....",
        opsi: [
            "etnosentrisme",
            "kolusi sosial",
            "diskriminasi",
            "stereotip",
            "xenofobia"
        ],
        jawabanBenar: 0
    },

    // ==========================================
    // TIPE 2: KATEGORI (10 Soal)
    // ==========================================
{
        id: 11,
        tipe: "Kategori",
        teks: "Dalam kehidupan bermasyarakat, individu tergabung ke dalam berbagai bentuk kelompok sosial dengan tingkat keintiman dan formalitas interaksi yang berbeda-beda. Berdasarkan teori kelompok sosial menurut Charles Horton Cooley, interaksi tersebut terbagi ke dalam dua klasifikasi utama. Pasangkanlah contoh-contoh kelompok sosial berikut ke dalam kategori yang paling tepat!",
        pernyataan: [
            "Ikatan batin yang hangat dan intim di dalam lingkungan keluarga inti.",
            "Hubungan kerja profesional antara direktur dan staf di perusahaan multinasional.",
            "Kelompok sahabat karib sejak masa kecil yang saling berbagi cerita pribadi."
        ],
        kategori: ["Kelompok Primer", "Kelompok Sekunder"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 12,
        tipe: "Kategori",
        teks: "Struktur sosial dalam masyarakat majemuk tersusun atas pengelompokan warga yang dapat dilihat secara horizontal maupun secara vertikal. Konsep sosiologis membedakan pengelompokan sejajar berdasarkan ciri kultural/fisik dengan penggolongan bertingkat berdasarkan kepemilikan sesuatu yang dihargai. Tentukanlah kategori struktur sosial yang sesuai untuk masing-masing fenomena berikut!",
        pernyataan: [
            "Keberagaman suku bangsa, bahasa daerah, dan agama di wilayah Nusantara.",
            "Pembagian kelas masyarakat berdasarkan tingkat kekayaan dan kepemilikan modal.",
            "Penggolongan profesi warga negara antara dokter, guru, nelayan, dan pedagang."
        ],
        kategori: ["Diferensiasi Sosial", "Stratifikasi Sosial"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 13,
        tipe: "Kategori",
        teks: "Perpindahan posisi atau kedudukan seseorang dalam struktur sosial masyarakat dapat terjadi secara vertikal maupun horizontal sesuai dengan kondisi yang dialaminya. Dalam kajian mobilitas sosial, arah perpindahan status ini menentukan apakah seseorang mengalami peningkatan derajat, penurunan, atau sekadar perpindahan wilayah tanpa perubahan status. Klasifikasikanlah kasus-kasus mobilitas sosial di bawah ini ke dalam kategori yang sesuai!",
        pernyataan: [
            "Seorang guru dipromosikan menjadi kepala sekolah setelah lulus seleksi kompetensi.",
            "Seorang kepala cabang bank dipindahtugaskan ke kota lain dengan jabatan yang tetap sama.",
            "Seorang pengusaha tekstil mengalami kebangkrutan sehingga harus berjualan di pasar tradisional."
        ],
        kategori: ["Mobilitas Vertikal", "Mobilitas Horizontal"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 14,
        tipe: "Kategori",
        teks: "Setiap kelompok sosial memiliki kriteria keanggotaan dan fungsi psikologis yang berbeda bagi perilaku individu di dalamnya. Sosiologi membedakan antara kelompok di mana seseorang tercatat secara resmi dengan kelompok luar yang justru dijadikan standar atau panutan dalam bertindak. Tentukanlah kategori kelompok sosial yang tepat untuk setiap kasus berikut ini!",
        pernyataan: [
            "Seorang mahasiswa tercatat secara resmi sebagai pengurus Badan Eksekutif Mahasiswa (BEM) di kampusnya.",
            "Seorang remaja meniru gaya berpakaian dan cara bicara atlet idola dunia meski bukan bagian dari tim tersebut.",
            "Seorang dokter terdaftar memiliki kartu anggota resmi Ikatan Dokter Indonesia (IDI)."
        ],
        kategori: ["Membership Group", "Reference Group"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 15,
        tipe: "Kategori",
        teks: "Perubahan pola pembagian kerja dari masyarakat tradisional menuju masyarakat industri modern turut mengubah bentuk ikatan solidaritas antarwarganya. Menurut Émile Durkheim, ikatan tersebut dapat bertumpu pada kesamaan kesadaran kolektif atau pada saling ketergantungan fungsional antarspesialisasi pekerjaan. Kelompokkanlah karakteristik masyarakat berikut ke dalam jenis solidaritas sosial yang tepat!",
        pernyataan: [
            "Masyarakat desa agraris yang memiliki kesamaan pekerjaan, adat istiadat, dan kesadaran kolektif tinggi.",
            "Masyarakat perkotaan industri di mana tiap individu bergantung pada keahlian profesi orang lain.",
            "Sistem hukum yang bersifat menindak (represif) untuk memulihkan pelanggaran terhadap nilai bersama."
        ],
        kategori: ["Solidaritas Mekanis", "Solidaritas Organik"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 16,
        tipe: "Kategori",
        teks: "Ferdinand Tönnies mengklasifikasikan bentuk kehidupan bersama dalam masyarakat berdasarkan kualitas ikatan batin dan orientasi tujuan anggotanya. Ikatan sosial tersebut terbagi menjadi kelompok yang terbentuk secara alami karena hubungan darah/batin serta kelompok yang dibentuk berdasarkan perhitungan rasional dan kontrak kerja. Pasangkanlah ilustrasi kelompok sosial berikut ke dalam kategori yang sesuai!",
        pernyataan: [
            "Paguyuban perantau asal Minangkabau yang saling membantu karena ikatan daerah asal.",
            "Perseroan Terbatas (PT) yang mengikat karyawannya melalui surat perjanjian kontrak kerja.",
            "Ikatan keluarga besar trah keturunan yang rutin berkumpul menjaga silaturahim."
        ],
        kategori: ["Gemeinschaft (Paguyuban)", "Gesellschaft (Patembayan)"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 17,
        tipe: "Kategori",
        teks: "Dalam masyarakat yang majemuk, konfigurasi hubungan antarkelompok dapat mengarah pada penguatan identitas eksklusif atau justru pembauran lintas batas sosial. Dinamika struktur sosial ini dikenal sebagai proses penguatan identitas secara tumpang tindih atau persilangan keanggotaan dalam berbagai kelompok. Tentukanlah kategori konfigurasi struktur sosial yang sesuai untuk fenomena berikut!",
        pernyataan: [
            "Warga dari suku X yang beragama Y membentuk organisasi eksklusif yang hanya menerima golongan mereka.",
            "Seorang pegawai bersuku Jawa menjadi rekan kerja satu tim dengan warga bersuku Batak dan Bugis di kantor.",
            "Terjadinya persilangan keanggotaan dalam organisasi hobi yang mempertemukan berbagai latar belakang agama."
        ],
        kategori: ["Konsolidasi Sosial", "Interseksi Sosial"],
        jawabanBenar: [0, 1, 1]
    },
    {
        id: 18,
        tipe: "Kategori",
        teks: "Sifat sistem pelapisan sosial dalam suatu masyarakat sangat menentukan peluang anggotanya untuk berpindah dari satu lapisan ke lapisan lainnya. Sistem stratifikasi ini dibedakan berdasarkan keluwesan batas antarkelas, yakni ada yang memberi ruang kebebasan untuk berprestasi dan ada pula yang mengunci status sejak lahir. Klasifikasikanlah kasus pelapisan sosial berikut ke dalam sifat stratifikasi yang tepat!",
        pernyataan: [
            "Sistem kasta tradisional yang melarang perkawinan dan perpindahan status antargolongan keturunan.",
            "Masyarakat demokratis modern yang memberi kesempatan kepada siapa saja menjadi pemimpin lewat pendidikan.",
            "Kedudukan bangsawan kerajaan feodal yang diwariskan secara mutlak melalui garis darah."
        ],
        kategori: ["Stratifikasi Tertutup", "Stratifikasi Terbuka"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 19,
        tipe: "Kategori",
        teks: "Di ruang publik perkotaan, sering kali terbentuk perkumpulan manusia yang bersifat sementara tanpa adanya pengorganisasian yang tetap dan terstruktur. Berdasarkan teori kelompok sosial tidak teratur, perkumpulan ini dibedakan menjadi kelompok yang berkumpul secara fisik di satu lokasi dan kelompok yang terhubung melalui media massa tanpa tatap muka. Pasangkanlah fenomena berikut ke dalam kategori kelompok tidak teratur yang sesuai!",
        pernyataan: [
            "Ratusan warga berkumpul di pinggir jalan raya untuk menyaksikan proses evakuasi kecelakaan lalu lintas.",
            "Jutaan pemirsa di seluruh Indonesia menyaksikan siaran langsung pertandingan final tim nasional di televisi.",
            "Para penonton yang mengantre secara fisik di depan loket tiket bioskop pada akhir pekan."
        ],
        kategori: ["Kerumunan (Crowd)", "Publik"],
        jawabanBenar: [0, 1, 0]
    },
    {
        id: 20,
        tipe: "Kategori",
        teks: "Perasaan solidaritas internal di dalam kelompok sering kali memunculkan batas psikologis yang tegas antara anggota kelompok sendiri dengan pihak luar. Dalam sosiologi, sikap identifikasi diri ini membedakan kelompok tempat seseorang merasa memiliki ikatan emosional dengan kelompok lain yang dianggap sebagai saingan atau lawan. Tentukanlah kategori kelompok yang tergambar pada setiap pernyataan berikut!",
        pernyataan: [
            "Rasa bangga dan kekompakan pelajar SMA Negeri 2 saat mendukung tim basket sekolahnya bertanding.",
            "Anggapan bahwa tim suporter sekolah lawan merupakan rival yang harus dikalahkan dalam kompetisi.",
            "Sikap saling melindungi antaranggota tim relawan bencana alam yang bertugas di satu posko yang sama."
        ],
        kategori: ["In-Group", "Out-Group"],
        jawabanBenar: [0, 1, 0]
    },

    // ==========================================
    // TIPE 3: MCMA (5 Soal)
    // ==========================================
    {
        id: 21,
        tipe: "MCMA",
        teks: "Sebuah komunitas pedesaan mengadakan kerja bakti memperbaiki saluran irigasi sawah secara rutin setiap menjelang musim tanam tiba. Warga terlibat aktif didasari rasa tanggung jawab bersama tanpa mengharapkan upah finansial sedikit pun. Berdasarkan ilustrasi tersebut, karakteristik kelompok sosial gemeinschaft (paguyuban) yang tampak meliputi ....",
        opsi: [
            "hubungan antaranggota bersifat intim dan personal",
            "orientasi hubungan bersifat untung-rugi secara ekonomi",
            "didasari oleh rasa cinta kasih dan ikatan batin yang kuat",
            "kehidupan kelompok bersifat informal dan tradisional",
            "sifat hubungan diatur secara ketat oleh hukum kontrak formal"
        ],
        jawabanBenar: [0, 2, 3]
    },
    {
        id: 22,
        tipe: "MCMA",
        teks: "Pak Joko memulai karirnya dari staf administrasi biasa di sebuah perusahaan swasta berkat ketekunannya. Setelah sepuluh tahun menunjukkan kinerja luar biasa, ia dipromosikan menjadi manajer operasional dan kini disegani rekan kerjanya. Berdasarkan ilustrasi tersebut, bentuk dan saluran mobilitas sosial yang dialami Pak Joko mencakup ....",
        opsi: [
            "mobilitas sosial horizontal",
            "mobilitas sosial vertikal naik (social climbing)",
            "organisasi perusahaan sebagai saluran mobilitas ekonomi",
            "mobilitas antargenerasi turun",
            "keberhasilan individu sebagai faktor pendorong mobilitas"
        ],
        jawabanBenar: [1, 2, 4]
    },
    {
        id: 23,
        tipe: "MCMA",
        teks: "Di kota-kota besar, masyarakat majemuk terdiri dari beragam suku, agama, profesi, dan tingkat ekonomi yang saling berinteraksi di ruang publik. Agar tidak terjadi disintegrasi sosial di tengah pluralitas tersebut, maka diperlukan adanya upaya penguatan ikatan sosial berupa ....",
        opsi: [
            "penerapan sikap toleransi dan empati multikultural",
            "penguatan sikap etnosentrisme pada kelompok masing-masing",
            "pembangunan titik-titik temu budaya dan dialog lintas agama",
            "peningkatan interaksi melalui struktur silang (cross-cutting affiliations)",
            "pemisahan wilayah permukiman secara ketat berdasarkan suku"
        ],
        jawabanBenar: [0, 2, 3]
    },
    {
        id: 24,
        tipe: "MCMA",
        teks: "Sekelompok suporter sepak bola fanatik melakukan konvoi di jalan raya sambil meneriakkan yel-yel provokatif kepada kelompok suporter lain yang berpapasan, sehingga memicu kericuhan fisik di jalan. Berdasarkan bentuk interaksi kerumunan (crowd) dalam sosiologi, perilaku kelompok tersebut dikategorikan sebagai ....",
        opsi: [
            "inconvenient crowd (kerumunan yang kurang menyenangkan)",
            "acting lawless crowds (kerumunan yang melakukan tindakan melanggar hukum)",
            "expressive crowds (kerumunan yang melampiaskan ketegangan)",
            "spectator crowds (kerumunan penonton yang pasif)",
            "immoral crowds (kerumunan yang bertentangan dengan norma moral)"
        ],
        jawabanBenar: [1, 4]
    },
    {
        id: 25,
        tipe: "MCMA",
        teks: "Dalam suatu sistem pelapisan sosial terbuka (open stratification), setiap anggota masyarakat memiliki kesempatan untuk melakukan perpindahan status, baik naik maupun turun. Berdasarkan teori mobilitas sosial, faktor-faktor utama yang memfasilitasi terjadinya mobilitas tersebut adalah ....",
        opsi: [
            "sistem pendidikan yang merata dan berkualitas",
            "garis keturunan bangsawan yang tertutup mutlak",
            "luasnya kesempatan kerja dan pertumbuhan ekonomi",
            "sikap diskriminatif berdasarkan ras dan golongan",
            "kecakapan dan prestasi individu dalam bidang keahlian"
        ],
        jawabanBenar: [0, 2, 4]
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
