// Data Soal Tema "Struktur Sosial"
const SOAL_ASLI = [
    {
        id: 1,
        teks: "Struktur sosial mencakup jalinan unsur-unsur sosial yang pokok dalam masyarakat, seperti norma, lembaga, dan kelompok sosial. Salah satu fungsi utama struktur sosial adalah.",
        opsi: [
            "Menghilangkan perbedaan kelas sosial secara total",
            "Mendorong lahirnya konflik secara berkelanjutan",
            "Menjaga keteraturan dan stabilitas dalam masyarakat",
            "Membatasi perkembangan kebudayaan lokal",
            "Menghapus seluruh hierarki dan peran sosial"
        ],
        jawabanBenar: 2
    },
    {
        id: 2,
        teks: "Diferensiasi sosial merupakan pembagian masyarakat secara horizontal tanpa membedakan tingkatan kelas. Contoh bentuk diferensiasi sosial yang didasarkan pada ciri fisik bawaan adalah.",
        opsi: [
            "Diferensiasi berdasarkan tingkat pendidikan",
            "Diferensiasi berdasarkan ras",
            "Diferensiasi berdasarkan kekayaan",
            "Diferensiasi berdasarkan jabatan politik",
            "Diferensiasi berdasarkan kepemilikan tanah"
        ],
        jawabanBenar: 1
    },
    {
        id: 3,
        teks: "Stratifikasi sosial membagi masyarakat ke dalam lapisan-lapisan bertingkat secara vertikal. Salah satu kriteria utama yang menentukan posisi seseorang dalam stratifikasi sosial adalah.",
        opsi: [
            "Hobi dan kegemaran",
            "Jenis kelamin",
            "Kekayaan dan kekuasaan",
            "Asal suku bangsa",
            "Agama yang dianut"
        ],
        jawabanBenar: 2
    },
    {
        id: 4,
        teks: "Pada masyarakat Bali tradisional, sistem kasta membuat seseorang sulit untuk berpindah lapisan sosial dari kasta bawah ke kasta yang lebih tinggi. Bentuk stratifikasi sosial ini dinamakan.",
        opsi: [
            "Stratifikasi sosial terbuka",
            "Stratifikasi sosial tertutup",
            "Stratifikasi sosial campuran",
            "Stratifikasi sosial horizontal",
            "Stratifikasi sosial dinamis"
        ],
        jawabanBenar: 1
    },
    {
        id: 5,
        teks: "Seorang anak dari keluarga kurang mampu berhasil menyelesaikan pendidikan tingginya dan menjadi seorang direktur perusahaan ternama. Peristiwa ini menggambarkan terjadinya mobilitas sosial.",
        opsi: [
            "Mobilitas sosial vertikal turun",
            "Mobilitas sosial horizontal",
            "Mobilitas sosial vertikal naik",
            "Mobilitas sosial lateral",
            "Mobilitas sosial geografis"
        ],
        jawabanBenar: 2
    },
    {
        id: 6,
        teks: "Status sosial seseorang yang diperoleh secara otomatis sejak lahir tanpa memerlukan usaha khusus disebut sebagai ascribed status. Contoh dari ascribed status adalah.",
        opsi: [
            "Gelar sarjana yang diraih mahasiswa",
            "Gelar kebangsawaan yang diperoleh sejak lahir",
            "Jabatan kepala desa hasil pemilihan",
            "Penghargaan sebagai atlet berprestasi",
            "Pangkat militer setelah kenaikan jabatan"
        ],
        jawabanBenar: 1
    },
    {
        id: 7,
        teks: "Achieved status merupakan status sosial yang didapatkan melalui usaha dan kerja keras secara sengaja. Contoh yang paling tepat mengenai achieved status adalah.",
        opsi: [
            "Jenis kelamin pria atau wanita",
            "Keturunan raja atau bangsawan",
            "Gelar dokter yang diraih setelah lulus kuliah",
            "Ras dan ciri fisik bawaan",
            "Marga keluarga yang diwariskan"
        ],
        jawabanBenar: 2
    },
    {
        id: 8,
        teks: "Kemajemukan masyarakat Indonesia ditandai dengan keberagaman suku, agama, dan budaya yang hidup berdampingan. Fenomena sosial ini dalam konteks struktur sosial termasuk ke dalam bentuk.",
        opsi: [
            "Stratifikasi sosial tertutup",
            "Diferensiasi sosial",
            "Konsolidasi vertikal",
            "Disintegrasi sosial",
            "Asimilasi budaya"
        ],
        jawabanBenar: 1
    },
    {
        id: 9,
        teks: "Ketika seseorang memiliki peran sosial yang saling berbenturan dalam waktu yang bersamaan, seperti seorang ibu rumah tangga yang juga menjadi manajer perusahaan, kondisi ini memicu terjadinya.",
        opsi: [
            "Peran ideal",
            "Konflik peran",
            "Ketimpangan status",
            "Mobilitas horizontal",
            "Ketiadaan peran"
        ],
        jawabanBenar: 1
    },
    {
        id: 10,
        teks: "Dalam era modern, tingkat pendidikan dan keahlian profesi semakin dominan dalam menentukan kasta atau lapisan sosial seseorang. Hal ini menandakan bahwa masyarakat modern cenderung menerapkan sistem.",
        opsi: [
            "Stratifikasi sosial tertutup",
            "Stratifikasi sosial terbuka",
            "Diferensiasi feodal",
            "Sistem kasta mengikat",
            "Isolasi sosial"
        ],
        jawabanBenar: 1
    }
];

// QR Code Generator
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

    // ---------- ANTI-CHEAT FUNCTIONS ----------
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

    // ---------- RETURN TO LOGIN ----------
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

    // ---------- EVENT IDENTITAS ----------
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

    // ---------- FUNGSI UTAMA ----------
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

    function renderSoal(soal, jawabanTerpilih) {
        const kalimatArray = splitSentences(soal.teks);
        totalKalimat = kalimatArray.length;
        kalimatIndex = 0;
        modeTampilan = 'soal';

        let html = '';

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

        html += `<div class="opsi-container hidden" id="opsiContainer">`;
        html += `<div class="opsi-grid">`;
        soal.opsi.forEach((teksOpsi, opsiIdx) => {
            const radioId = `q_${soal.id}_${opsiIdx}`;
            const checked = (jawabanTerpilih === opsiIdx) ? 'checked' : '';
            html += `
                <div class="opsi-item">
                    <input type="radio" name="soalSaatIni" id="${radioId}" value="${opsiIdx}" ${checked} />
                    <span class="opsi-huruf">${HURUF[opsiIdx]}</span>
                    <label for="${radioId}">${teksOpsi}</label>
                </div>
            `;
        });
        html += `</div>`;
        html += `</div>`;

        html += `<div class="toggle-area">`;
        html += `<button class="btn-toggle active" id="toggleSoalBtn">📖 Tampilkan Soal</button>`;
        html += `<button class="btn-toggle" id="toggleJawabanBtn">✏️ Tampilkan Jawaban</button>`;
        html += `</div>`;

        container.innerHTML = html;

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

        if (jawabanTerpilih !== null) {
            modeTampilan = 'jawaban';
            soalTeksContainer.classList.add('hidden');
            opsiContainer.classList.remove('hidden');
            toggleJawabanBtn.classList.add('active');
            toggleSoalBtn.classList.remove('active');
            statusMsg.textContent = '✏️ Pilih jawaban';
            statusMsg.style.background = '#d4e0d0';
            statusMsg.style.borderColor = '#8fb08a';
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

    function selesaiSemua() {
        semuaSelesai = true;
        let benar = 0;
        for (let i = 0; i < SOAL_ASLI.length; i++) {
            if (jawabanUser[i] !== null && jawabanUser[i] === SOAL_ASLI[i].jawabanBenar) {
                benar++;
            }
        }
        const total = SOAL_ASLI.length;
        const nilaiAkhir = Math.round((benar / total) * 100);

        statusMsg.textContent = `🎯 Selesai! Score: ${nilaiAkhir}`;
        statusMsg.style.background = '#c9dcc0';
        statusMsg.style.borderColor = '#8fb08a';

        // Show review area only for Donny Nugroho
        if (savedNama.toLowerCase() === 'donny nugroho') {
            reviewArea.style.display = 'flex';
        } else {
            reviewArea.style.display = 'none';
        }

        // Render Tampilan Hasil Akhir dengan tombol kembali
        container.innerHTML = `
            <div class="result-card">
                <div style="font-size: 3rem;">🎉</div>
                <div style="font-size: 1.4rem; font-weight: 600; color: #2f1f12;">Ujian Telah Selesai!</div>
                
                <div class="highlight-box result-name">
                    👤 ${savedNama}
                </div>

                <div class="highlight-box result-score">
                    Nilai: ${nilaiAkhir} / 100 (${benar}/${total} Benar)
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

        // Event listener untuk tombol kembali
        document.getElementById('kembaliLoginBtn').addEventListener('click', function() {
            returnToLogin();
        });

        updateProgress();
    }

    function updateProgress() {
        const total = SOAL_ASLI.length;
        const terjawab = jawabanUser.filter(v => v !== null).length;
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
            const jawabanText = (jawaban !== null) ? HURUF[jawaban] : '❌ tidak dijawab';
            const benar = (jawaban !== null && jawaban === soal.jawabanBenar);
            const statusIcon = benar ? '✅' : (jawaban !== null ? '❌' : '⬜');
            pesan += `Soal ${i + 1}. ${statusIcon} Jawaban: ${jawabanText} (Benar: ${HURUF[soal.jawabanBenar]})\n`;
        }
        alert(pesan);
    }

    resetBtn.addEventListener('click', resetFull);
    lihatSemuaBtn.addEventListener('click', lihatSemuaJawaban);

    // Cleanup when page unloads
    window.addEventListener('beforeunload', function() {
        if (isExamActive) {
            disableAntiCheat();
            exitFullscreen();
        }
    });
})();