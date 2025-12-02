document.addEventListener('DOMContentLoaded', function () {

    // --- KONFIGURASI ---
    const whatsappLink = "https://wa.me/6288290092207";


    // --- FITUR 1: AUTO-SCROLL (Pilih Paket Netflix) ke Paket Harga ---
    const pilihPaketBtn = document.getElementById('pilih-paket-btn');
    const pricingSection = document.getElementById('paket');

    if (pilihPaketBtn && pricingSection) {
        pilihPaketBtn.addEventListener('click', function (event) {
            event.preventDefault();

            pricingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // --- FITUR 2: AUTO-SCROLL KE KONTAK (Beli Sekarang) ---

    // Tombol Beli Sekarang di setiap kartu harga
    document.querySelectorAll('.beli-btn').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const contactSection = document.getElementById('kontak'); // Mengambil elemen kontak

            if (contactSection) {
                // Scroll ke bagian "Cara Berlangganan" dengan ID="kontak"
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- FITUR 3: HUBUNGI KAMI (Langsung Navigasi ke WA) ---

    // Tombol Hubungi Kami (yang transparan) di bagian Metode Pembayaran
    const hubungiKamiBtn = document.querySelector('.payment-section .btn-transparent');

    if (hubungiKamiBtn) {
        hubungiKamiBtn.addEventListener('click', function () {
            // Langsung navigasi ke WhatsApp
            window.open(whatsappLink, '_blank');
        });
    }

});