(function() {
    "use strict";

    const loginScreen = document.getElementById('loginScreen');
    const formScreen = document.getElementById('formScreen');
    const tokenInput = document.getElementById('tokenInput');
    const loginBtn = document.getElementById('loginBtn');
    const btnClose = document.getElementById('btnClose');
    const cheatOverlay = document.getElementById('cheatOverlay');
    const iframe = document.getElementById('examIframe');
    const timerDisplay = document.getElementById('timerDisplay');

    const TOKEN_VALID = "Sosiologi";
    let isLoggedIn = false;
    let securityActive = false;
    
    // Konfigurasi Timer (90 Menit)
    let timeLeft = 90 * 60; 
    let timerInterval;

    function enableFullscreen() {
        const doc = document.documentElement;
        if (doc.requestFullscreen) doc.requestFullscreen();
        else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            
            timerDisplay.innerText = `Sisa Waktu: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert("Waktu ujian telah habis!");
                location.reload();
            }
            timeLeft--;
        }, 1000);
    }

    loginBtn.addEventListener('click', function() {
        if (tokenInput.value.trim() === TOKEN_VALID) {
            enableFullscreen();
            loginScreen.classList.add('hidden');
            formScreen.style.display = 'flex';
            isLoggedIn = true;
            startTimer();
            // Jeda 3 detik sebelum keamanan aktif agar transisi fullscreen stabil
            setTimeout(() => { securityActive = true; }, 3000);
        } else {
            alert("Token tidak valid!");
            tokenInput.value = "";
        }
    });

    btnClose.addEventListener('click', function() {
        if (confirm("Yakin ingin kembali ke login? Progress ujian mungkin tidak tersimpan.")) {
            location.reload();
        }
    });

    // FUNGSI ZERO TOLERANCE
    function onCheatDetected() {
        if (!securityActive || !isLoggedIn) return;
        securityActive = false;
        isLoggedIn = false;
        clearInterval(timerInterval);
        
        cheatOverlay.style.display = 'flex';
        
        // Langsung paksa reload setelah 2.5 detik
        setTimeout(() => { 
            location.reload(); 
        }, 2500);
    }

    // Deteksi Pindah Tab / Minimaze
    document.addEventListener("visibilitychange", function() {
        if (document.hidden && securityActive) {
            onCheatDetected();
        }
    });

    // Deteksi Keluar Fokus (Blur)
    window.addEventListener("blur", function() {
        setTimeout(() => {
            // Jika fokus tidak berada di iframe soal, berarti user membuka hal lain
            if (document.activeElement !== iframe && securityActive) {
                onCheatDetected();
            }
        }, 800);
    });

    // PROTEKSI KEYBOARD (F12, Ctrl+U, Ctrl+S, dll)
    document.addEventListener("keydown", function(e) {
        if (
            e.key === "F12" || 
            (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) || 
            (e.ctrlKey && (e.key === "u" || e.key === "s" || e.key === "p" || e.key === "f"))
        ) {
            e.preventDefault();
            if(isLoggedIn) onCheatDetected();
            return false;
        }
    });

    // Matikan Klik Kanan, Copy, Paste
    document.addEventListener("contextmenu", e => e.preventDefault());
    document.addEventListener("copy", e => { if(isLoggedIn) e.preventDefault(); });
    document.addEventListener("paste", e => { if(isLoggedIn) e.preventDefault(); });

    // Cegah Navigasi Back
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        if (isLoggedIn) {
            history.pushState(null, null, location.href);
            onCheatDetected();
        }
    };

    // Fix Autofill Bar Manipulation
    tokenInput.addEventListener('focus', function() {
        this.setAttribute('autocomplete', 'off');
    });

})();
