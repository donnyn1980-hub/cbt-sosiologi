// ============================================================
// DATA SOAL BERURUT - 3 TIPE: SEDERHANA, MCMA, KATEGORI
// (Dilengkapi 3 Digit Kode & Alasan Pembahasan)
// ============================================================

const SOAL_ASLI = [
    {
        id: 1,
        kode: "001",
        tipe: "Sederhana",
        teks: "Seorang peneliti melakukan pengamatan terhadap pola interaksi antar pedagang di pasar tradisional tanpa menghakimi apakah kebiasaan mereka baik atau buruk. Ciri sosiologi yang ditunjukkan adalah ....",
        opsi: ["Empiris", "Teoretis", "Kumulatif", "Nonetis", "Spekulatif"],
        jawabanBenar: 3,
        pembahasan: "Ciri **Nonetis** berarti sosiologi tidak menilai baik atau buruknya suatu fakta sosial di masyarakat, melainkan menjelaskan fakta tersebut secara analitis dan obyektif."
    },
    {
        id: 2,
        kode: "002",
        tipe: "MCMA",
        teks: "Sosiologi lahir di Eropa pada abad ke-19. Peristiwa penting yang menjadi latar belakang munculnya sosiologi sebagai ilmu pengetahuan adalah ....",
        opsi: [
            "Revolusi Industri di Inggris",
            "Revolusi Perancis",
            "Perang Dunia I",
            "Perkembangan kapitalisme modern",
            "Invasi Spanyol ke Amerika"
        ],
        jawabanBenar: [0, 1, 3],
        pembahasan: "Kunci jawaban benar adalah opsi **A, B, dan D**. Revolusi Industri, Revolusi Perancis, dan munculnya kapitalisme modern memicu perubahan struktur sosial, pergeseran kelas, serta gejolak sosial mendasar di Eropa abad ke-19."
    },
    {
        id: 3,
        kode: "003",
        tipe: "Kategori",
        teks: "Pemerintah kota memanfaatkan hasil kajian sosiologi untuk merencanakan relokasi pedagang kaki lima agar tidak menimbulkan gejolak sosial. Tentukan kesesuaian penerapan fungsi sosiologi berikut!",
        pernyataan: [
            "Kajian sosiologi berfungsi dalam tahap perencanaan pembangunan sosial.",
            "Sosiologi bertindak sebagai penentu kebijakan akhir pemerintah secara mutlak.",
            "Sosiologi memberikan data empiris mengenai kondisi sosial masyarakat."
        ],
        kategori: ["Sesuai", "Tidak Sesuai"],
        jawabanBenar: [0, 1, 0],
        pembahasan: "Pernyataan 1 **Sesuai** (fungsi perencanaan), Pernyataan 2 **Tidak Sesuai** (sosiologi menyediakan rekomendasi/data, bukan pemutus mutlak kebijakan), Pernyataan 3 **Sesuai** (sosiologi menyediakan data lapangan berbasis empiris)."
    },
    {
        id: 4,
        kode: "004",
        tipe: "Sederhana",
        teks: "Tokoh yang pertama kali menyusun konsep sosiologi secara sistematis dan dijuluki sebagai Bapak Sosiologi adalah ....",
        opsi: ["Emile Durkheim", "Karl Marx", "Auguste Comte", "Max Weber", "Pitirim Sorokin"],
        jawabanBenar: 2,
        pembahasan: "Jawaban benar adalah **Auguste Comte**. Ia memperkenalkan istilah 'Sosiologi' pertama kali dalam karyanya *Cours de Philosophie Positive*."
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

// NOTIFIKASI UTAMA (INLINE / TANPA POPUP)
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
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
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

    // Aktifkan Layar Penuh saat Ujian Dimulai
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
        // TAMPILAN KATEGORI BERBENTUK TABEL MATRIKS
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

// STEP 2: KONFIRMASI JAWABAN (VALIDASI INLINE)
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

    // Nonaktifkan opsi input
    const inputs = document.querySelectorAll('#opsiWrapper input');
    inputs.forEach(i => i.disabled = true);

    // Opsi Buka Pembahasan atau Soal Berikutnya
    const actionArea = document.getElementById('actionArea');
    actionArea.innerHTML = `
        <div style="display:flex; justify-content:flex-end; gap:10px; flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary" onclick="showInputKodePanel()">💡 Buka Pembahasan</button>
            <button type="button" class="btn btn-primary" onclick="nextSoal()">Soal Berikutnya ➡️</button>
        </div>
    `;
}

// STEP 4b: INPUT KODE VERIFIKASI (Mencegah Peringatan Sandi / Pita Autofill HP)
function showInputKodePanel() {
    const interactiveArea = document.getElementById('interactiveArea');
    
    interactiveArea.innerHTML = `
        <div class="verify-panel">
            <h4 style="color:#5d4430; margin-bottom:8px; font-size:1rem;">🔑 Verifikasi Kode Pembahasan</h4>
            <p style="font-size:0.9rem; color:#6f5b4a; margin-bottom:12px;">Masukkan 3 digit kode verifikasi untuk melihat pembahasan soal ini:</p>
            <form action="javascript:void(0);" autocomplete="off" style="margin:0; padding:0;">
                <div style="display:flex; gap:10px; max-width:320px;">
                    <input 
                        type="search" 
                        id="kodeInput" 
                        class="form-input" 
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
                        style="text-align:center; letter-spacing:2px; font-weight:700;"
                    >
                    <button type="button" class="btn btn-primary" onclick="verifikasiKode()">Verifikasi</button>
                </div>
            </form>
            <div id="kodeErrorMsg" style="margin-top:10px;"></div>
        </div>
    `;
    
    setTimeout(() => {
        const inputEl = document.getElementById('kodeInput');
        if (inputEl) inputEl.focus();
    }, 100);
}

function verifikasiKode() {
    const soal = SOAL_ASLI[soalIndexSekarang];
    const inputEl = document.getElementById('kodeInput');
    const inputKode = inputEl ? inputEl.value.trim() : "";
    const kodeErrorMsg = document.getElementById('kodeErrorMsg');

    if (inputKode === soal.kode) {
        showPembahasan();
    } else {
        kodeErrorMsg.innerHTML = `
            <div style="background:#fde8e8; color:#9b1c1c; padding:10px 14px; border-radius:10px; font-size:0.88rem; border:1px solid #f8b4b4;">
                <strong>❌ Kode verifikasi salah!</strong>
                <div style="margin-top:8px; display:flex; gap:8px;">
                    <button type="button" class="btn btn-outline" style="padding:0.4rem 0.8rem; font-size:0.8rem;" onclick="showInputKodePanel()">🔄 Ulangi Input Kode</button>
                    <button type="button" class="btn btn-primary" style="padding:0.4rem 0.8rem; font-size:0.8rem;" onclick="nextSoal()">Lanjut Soal Berikutnya ➡️</button>
                </div>
            </div>
        `;
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
