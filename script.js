// --- BAGIAN EDIT DI SINI ---
const NOMOR_BANK = "randuwe bank";
const URL_GAMBAR_QRIS = "https://ibb.co.com/QvVfvxP0"; 
// ---------------------------

// Set nomor bank otomatis di menu
document.getElementById('bankName').innerText = NOMOR_BANK;

function showQRIS() {
    let nominal = document.getElementById('inputNominal').value;
    
    if(nominal === "" || nominal <= 0) {
        alert("Harap masukkan nominal dana dulu!");
        return;
    }

    // Pindah Tampilan
    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('qris-view').classList.remove('hidden');
    
    // Set nominal di layar QRIS
    document.getElementById('displayTotal').innerText = "Rp " + parseInt(nominal).toLocaleString();

    // Ganti Gambar QRIS (Jika link kosong, dia pakai QR Generator otomatis)
    let qrisImg = document.getElementById('qrisImage');
    if(URL_GAMBAR_QRIS.includes("https://ibb.co.com/QvVfvxP0")) {
        qrisImg.src = https://ibb.co.com/QvVfvxP0;
    } else {
        qrisImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Bayar_Rp_${nominal}`;
    }
}

function goBack() {
    document.getElementById('qris-view').classList.add('hidden');
    document.getElementById('main-view').classList.remove('hidden');
}

function showBank() {
    let nominal = document.getElementById('inputNominal').value;
    if(nominal <= 0) {
        alert("Masukkan nominal dulu!");
    } else {
        alert("Silakan transfer Rp " + parseInt(nominal).toLocaleString() + "\nKe: " + NOMOR_BANK);
    }
}

function finish() {
    alert("Terima kasih! Pesanan Anda sedang dicek.");
    location.reload();
}
