function updateJam() {
    const now = new Date();

    const opsiTanggal = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const tanggal = now.toLocaleDateString('id-ID', opsiTanggal);

    const jam = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const elTanggal = document.getElementById('tanggal');
    const elJam = document.getElementById('jam');

    if (elTanggal) elTanggal.textContent = tanggal;
    if (elJam) elJam.textContent = jam;
}

updateJam();
setInterval(updateJam, 1000);

/* =========================
   WELCOME TOAST
========================= */
window.addEventListener("load", () => {
    const toast = document.getElementById("welcomeToast");

    if (toast) {
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }
});