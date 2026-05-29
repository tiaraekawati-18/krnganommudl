function updateJam() {
    const now = new Date();

    // Format Tanggal: Senin, 25 Mei 2026
    const opsiTanggal = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };
    const tanggal = now.toLocaleDateString('id-ID', opsiTanggal);

    // Format Jam: 21.52.05 (Menggunakan pemisah titik sesuai standar Indonesia)
    // atau tetap gunakan toLocaleTimeString() untuk pemisah titik dua (:)
    const jam = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Ambil elemen berdasarkan ID
    const elTanggal = document.getElementById('tanggal');
    const elJam = document.getElementById('jam');

    // Cek dulu apakah elemennya ada di halaman tersebut (agar tidak error di konsol)
    if (elTanggal) elTanggal.textContent = tanggal;
    if (elJam) elJam.textContent = jam;
}

// Jalankan fungsi satu kali saat halaman dimuat agar tidak menunggu 1 detik pertama
updateJam();

// Update setiap 1000 milidetik (1 detik)
setInterval(updateJam, 1000);

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});