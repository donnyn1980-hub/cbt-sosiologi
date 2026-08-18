// ============================================
// KONFIGURASI API - UPDATE URL WORKER ANDA
// ============================================
const API_BASE_URL = 'https://nilai-sosiologi.donnyn1980.workers.dev';

// ============================================
// DOM ELEMENTS
// ============================================
const loginSection = document.getElementById('loginSection');
const dashboardSection = document.getElementById('dashboardSection');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginBtnText = document.getElementById('loginBtnText');
const loginBtnLoading = document.getElementById('loginBtnLoading');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const studentName = document.getElementById('studentName');
const studentInfo = document.getElementById('studentInfo');
const totalMateri = document.getElementById('totalMateri');
const totalNilai = document.getElementById('totalNilai');
const rataRata = document.getElementById('rataRata');
const materiGrid = document.getElementById('materiGrid');

// ============================================
// STATE
// ============================================
let currentUser = null;

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showError(message) {
    loginError.textContent = message;
    loginError.classList.add('show');
    setTimeout(() => {
        loginError.classList.remove('show');
    }, 5000);
}

function getMateriLabel(index) {
    const labels = [
        '📖 Tugas 1', '📖 Tugas 2', '📖 Tugas 3', '📖 Tugas 4', '📖 Tugas 5',
        '📖 Tugas 6', '📖 Tugas 7', '📖 Tugas 8', '📖 Tugas 9'
    ];
    return labels[index - 1] || `Materi ${index}`;
}

function getNilaiBadge(nilai) {
    const num = parseFloat(nilai);
    if (isNaN(num)) return '';
    if (num >= 80) return '<span class="nilai-badge baik">✅ Baik</span>';
    if (num >= 60) return '<span class="nilai-badge sedang">📊 Sedang</span>';
    return '<span class="nilai-badge kurang">📉 Kurang</span>';
}

function getNilaiColor(nilai) {
    const num = parseFloat(nilai);
    if (isNaN(num)) return '#999';
    if (num >= 80) return '#4caf50';
    if (num >= 60) return '#ff9800';
    return '#f44336';
}

// ============================================
// API FUNCTIONS
// ============================================
async function login(nis, password) {
    const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nis, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Login gagal');
    }

    return await response.json();
}

async function getStudentData(nis, password) {
    const response = await fetch(
        `${API_BASE_URL}/api/student?nis=${encodeURIComponent(nis)}&password=${encodeURIComponent(password)}`
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Gagal mengambil data');
    }

    return await response.json();
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderDashboard(data) {
    const student = data.data;
    currentUser = student;

    // User info
    studentName.textContent = student.nama || 'Nama tidak tersedia';
    studentInfo.textContent = `NIS: ${student.nis || '-'} | Kelas: ${student.kelas || '-'}`;

    // Process materi data
    const materiList = [];
    let totalMateriCount = 0;
    let sumNilai = 0;

    for (let i = 1; i <= 9; i++) {
        const materiKey = `m${i}`;
        const nilaiKey = i.toString();

        const materi = student[materiKey] || '';
        const nilai = student[nilaiKey];

        const isFilled = materi !== '' && nilai !== null && nilai !== '';
        const nilaiNum = isFilled ? parseFloat(nilai) : null;

        materiList.push({
            index: i,
            label: getMateriLabel(i),
            materi: materi,
            nilai: nilai,
            isFilled: isFilled,
            nilaiNum: nilaiNum
        });

        if (isFilled && nilaiNum !== null && !isNaN(nilaiNum)) {
            totalMateriCount++;
            sumNilai += nilaiNum;
        }
    }

    // Update stats
    totalMateri.textContent = totalMateriCount;
    totalNilai.textContent = sumNilai.toFixed(1);
    const avg = totalMateriCount > 0 ? (sumNilai / totalMateriCount).toFixed(1) : '0';
    rataRata.textContent = avg;

    // Render materi cards
    materiGrid.innerHTML = '';
    materiList.forEach(item => {
        const card = document.createElement('div');
        card.className = `materi-card${!item.isFilled ? ' empty' : ''}`;

        const nilaiDisplay = item.isFilled ? item.nilai : '—';
        const nilaiColor = item.isFilled ? getNilaiColor(item.nilai) : '#999';
        const badge = item.isFilled ? getNilaiBadge(item.nilai) : '';

        card.innerHTML = `
                    <div class="materi-title">${item.label}</div>
                    <div class="materi-value" style="color: ${nilaiColor}">
                        ${nilaiDisplay}
                    </div>
                    <div class="materi-desc">
                        ${item.isFilled ? `📝 ${item.materi}` : 'Belum ada materi'}
                    </div>
                    ${badge}
                `;

        materiGrid.appendChild(card);
    });
}

// ============================================
// EVENT HANDLERS
// ============================================
async function handleLogin(e) {
    e.preventDefault();

    const nis = document.getElementById('nisInput').value.trim();
    const password = document.getElementById('passwordInput').value.trim();

    if (!nis || !password) {
        showError('⚠️ NIS dan Password harus diisi!');
        return;
    }

    // Show loading state
    loginBtn.disabled = true;
    loginBtnText.style.display = 'none';
    loginBtnLoading.style.display = 'inline';

    try {
        // Login
        const loginResult = await login(nis, password);

        if (!loginResult.success) {
            throw new Error(loginResult.error || 'Login gagal');
        }

        // Get student data
        const studentData = await getStudentData(nis, password);

        if (!studentData.success) {
            throw new Error(studentData.error || 'Gagal mengambil data siswa');
        }

        // Show dashboard
        loginSection.classList.add('hidden');
        dashboardSection.classList.add('active');
        renderDashboard(studentData);

        // Reset form
        loginForm.reset();
        loginError.classList.remove('show');

    } catch (error) {
        console.error('Login error:', error);
        showError(`❌ ${error.message || 'Terjadi kesalahan saat login'}`);
    } finally {
        // Hide loading state
        loginBtn.disabled = false;
        loginBtnText.style.display = 'inline';
        loginBtnLoading.style.display = 'none';
    }
}

function handleLogout() {
    dashboardSection.classList.remove('active');
    loginSection.classList.remove('hidden');
    currentUser = null;
    materiGrid.innerHTML = '';

    // Reset stats
    totalMateri.textContent = '0';
    totalNilai.textContent = '0';
    rataRata.textContent = '0';

    // Reset form
    loginForm.reset();
    loginError.classList.remove('show');
}

// ============================================
// EVENT LISTENERS
// ============================================
loginForm.addEventListener('submit', handleLogin);
logoutBtn.addEventListener('click', handleLogout);

// Enter key support
document.getElementById('passwordInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loginForm.dispatchEvent(new Event('submit'));
    }
});

// ============================================
// INIT
// ============================================
console.log('🚀 Sistem Nilai Sosiologi siap digunakan!');
console.log(`📡 API URL: ${API_BASE_URL}`);
console.log('💡 Gunakan NIS dan Password untuk login');
console.log('🛡️ Security: Right-click, Copy, Paste, Print, View Source, Inspect Element disabled');