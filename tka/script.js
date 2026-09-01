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
