// Dynamic Form Labels berdasarkan Jenis Layanan
const layananConfig = {
    'delivery': {
        label_jemput: 'Lokasi Jemput/Titik Awal',
        placeholder_jemput: 'Contoh: Depan Kantor JAKIR, Jl. Merdeka No. 123',
        label_tujuan: 'Lokasi Tujuan',
        placeholder_tujuan: 'Contoh: Perumahan Griya Sejahtera, Blok A No. 5'
    },
    'makanan': {
        label_jemput: 'Toko/Warung/Restoran',
        placeholder_jemput: 'Contoh: Warung Sxxx di Jl. Merdeka atau sebutkan nama tempat',
        label_tujuan: 'Alamat Pengiriman',
        placeholder_tujuan: 'Contoh: Rumah saya, Perumahan Griya Sejahtera Blok A No. 5'
    },
    'barang': {
        label_jemput: 'Lokasi Pengambilan Barang',
        placeholder_jemput: 'Contoh: Depan Toko Elektronik, Jl. Ahmad Yani',
        label_tujuan: 'Lokasi Pengiriman Barang',
        placeholder_tujuan: 'Contoh: Rumah saya, Perumahan Sejahtera Blok A No. 5'
    },
    'obat': {
        label_jemput: 'Apotek/Lokasi Pembelian',
        placeholder_jemput: 'Contoh: Apotek Kimia Farma atau sebutkan lokasi apotek',
        label_tujuan: 'Alamat Pengiriman',
        placeholder_tujuan: 'Contoh: Rumah saya, Jl. Merdeka No. 123'
    },
    'dokumen': {
        label_jemput: 'Toko Fotokopi/Print',
        placeholder_jemput: 'Contoh: Toko Fotokopi di depan kantor atau sebutkan lokasi',
        label_tujuan: 'Alamat Pengiriman',
        placeholder_tujuan: 'Contoh: Kantor JAKIR, Jl. Merdeka No. 123'
    },
    'antrian': {
        label_jemput: 'Lokasi Antrian',
        placeholder_jemput: 'Contoh: Bank BCA di Jl. Ahmad Yani atau nama tempat lainnya',
        label_tujuan: 'Alamat Pengiriman Dokumen',
        placeholder_tujuan: 'Contoh: Kantor saya, Jl. Merdeka No. 123'
    },
    'lainnya': {
        label_jemput: 'Lokasi Jemput/Titik Awal',
        placeholder_jemput: 'Sesuaikan dengan kebutuhan Anda',
        label_tujuan: 'Lokasi Tujuan',
        placeholder_tujuan: 'Sesuaikan dengan kebutuhan Anda'
    }
};

// Update form labels ketika jenis layanan berubah
document.getElementById('jenis_layanan').addEventListener('change', function() {
    const serviceType = this.value;
    if (layananConfig[serviceType]) {
        const config = layananConfig[serviceType];
        document.getElementById('label_lokasi_jemput').innerHTML = config.label_jemput + ' <span class="text-red-500">*</span>';
        document.getElementById('label_lokasi_tujuan').innerHTML = config.label_tujuan + ' <span class="text-red-500">*</span>';
        document.getElementById('lokasi_jemput').placeholder = config.placeholder_jemput;
        document.getElementById('lokasi_tujuan').placeholder = config.placeholder_tujuan;
    }
});

// Form Handling untuk JAKIR
document.getElementById('orderFormElement').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validasi form
    const nama = document.getElementById('nama').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const jenisLayanan = document.getElementById('jenis_layanan').value;
    const detailOrder = document.getElementById('detail_order').value.trim();
    const lokasiJemput = document.getElementById('lokasi_jemput').value.trim();
    const lokasiTujuan = document.getElementById('lokasi_tujuan').value.trim();
    const waktuPenjemputan = document.getElementById('waktu_penjemputan').value.trim();
    const metodePembayaran = document.querySelector('input[name="metode_pembayaran"]:checked');
    const persetujuan = document.getElementById('persetujuan').checked;

    const errorMessage = document.getElementById('errorMessage');
    const metodePembayaranError = document.getElementById('metodePembayaranError');

    // Reset error messages
    errorMessage.style.display = 'none';
    metodePembayaranError.style.display = 'none';

    // Validasi metode pembayaran
    if (!metodePembayaran) {
        metodePembayaranError.style.display = 'block';
        errorMessage.innerHTML = '<strong>Error:</strong> Mohon periksa kembali form Anda. Pastikan semua field wajib diisi dengan benar.';
        errorMessage.style.display = 'block';
        window.scrollTo(0, document.querySelector('form').offsetTop);
        return;
    }

    // Validasi persetujuan
    if (!persetujuan) {
        errorMessage.innerHTML = '<strong>Error:</strong> Anda harus setuju dengan ketentuan pesanan ini.';
        errorMessage.style.display = 'block';
        window.scrollTo(0, document.querySelector('form').offsetTop);
        return;
    }

    // Validasi WhatsApp format
    let whatsappNormalized = whatsapp.replace(/\D/g, '');
    if (!whatsappNormalized.startsWith('62')) {
        if (whatsappNormalized.startsWith('0')) {
            whatsappNormalized = '62' + whatsappNormalized.substring(1);
        } else {
            whatsappNormalized = '62' + whatsappNormalized;
        }
    }

    if (whatsappNormalized.length < 10 || whatsappNormalized.length > 15) {
        errorMessage.innerHTML = '<strong>Error:</strong> Nomor WhatsApp tidak valid. Pastikan format benar (62812345678).';
        errorMessage.style.display = 'block';
        return;
    }

    // Format pesan untuk WhatsApp
    const message = formatPesananKeWhatsApp(
        nama,
        whatsapp,
        jenisLayanan,
        detailOrder,
        lokasiJemput,
        lokasiTujuan,
        waktuPenjemputan,
        metodePembayaran.value
    );

    // Buka WhatsApp admin JAKIR dengan pesan
    const adminWhatsApp = '6288262771573';
    const whatsappURL = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');

    // Reset form setelah 1 detik
    setTimeout(() => {
        this.reset();
    }, 1000);
});

// Format pesan pesanan
function formatPesananKeWhatsApp(nama, whatsapp, jenisLayanan, detailOrder, lokasiJemput, lokasiTujuan, waktuPenjemputan, metodePembayaran) {
    const jenisLayananMap = {
        'delivery': 'JAKIR Delivery (Pengantaran)',
        'makanan': 'Beli & Antar Makanan/Minuman',
        'barang': 'Ambil / Antar Barang',
        'obat': 'Beli Obat',
        'dokumen': 'Fotokopi/Print Dokumen',
        'antrian': 'Antrikan Pesanan',
        'rumah': 'Bersih-Bersih Rumah, Kost, Kontrakan',
        'kamar_mandi': 'Membersihkan Kamar Mandi',
        'cat': 'Mengecat Kamar / Dinding Sederhana',
        'pindahan': 'Angkut Barang Pindahan Ringan',
        'pindahan_besar': 'Pindahan Besar',
        'lainnya': 'Layanan Lainnya (Sesuai Kesepakatan)'
    };

    const metodePembayaranLabel = {
        'tunai': 'Tunai',
        'transfer': 'Transfer Bank',
        'e-wallet': 'E-Wallet (GoPay/OVO/Dana)'
    };

    const layananName = jenisLayananMap[jenisLayanan] || jenisLayanan;
    const metodeName = metodePembayaranLabel[metodePembayaran] || metodePembayaran;

    const currentDate = new Date();
    const dateStr = currentDate.toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    const timeStr = currentDate.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });

    const message = `🎯 *FORMULIR PESANAN JAKIR*

Dikirim pada: ${dateStr} (${timeStr}) WIB

━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *DATA PEMESAN*
━━━━━━━━━━━━━━━━━━━━━━━━━
Nama: ${nama}
No WhatsApp: ${whatsapp}

━━━━━━━━━━━━━━━━━━━━━━━━━
📋 *DETAIL LAYANAN*
━━━━━━━━━━━━━━━━━━━━━━━━━
Jenis Layanan: ${layananName}
Detail Order: ${detailOrder}

━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *LOKASI*
━━━━━━━━━━━━━━━━━━━━━━━━━
Lokasi Jemput: ${lokasiJemput}
Lokasi Tujuan: ${lokasiTujuan}

━━━━━━━━━━━━━━━━━━━━━━━━━
⏰ *WAKTU*
━━━━━━━━━━━━━━━━━━━━━━━━━
Waktu Penjemputan: ${waktuPenjemputan}

━━━━━━━━━━━━━━━━━━━━━━━━━
💰 *PEMBAYARAN*
━━━━━━━━━━━━━━━━━━━━━━━━━
Metode: ${metodeName}

━━━━━━━━━━━━━━━━━━━━━━━━━
📌 *KETENTUAN*
━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Wajib share lokasi setelah format terkirim
✓ Jika transfer, silakan transfer terlebih dahulu
✓ Komunikasi lancar melalui WhatsApp
✓ Setuju dengan ketentuan layanan JAKIR

Terima kasih telah mempercayai JAKIR! 🙏`;

    return message;
}

// Auto-format WhatsApp number
document.getElementById('whatsapp').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('0')) {
        value = '62' + value.substring(1);
    } else if (!value.startsWith('62')) {
        value = '62' + value;
    }
    // Hanya tampilkan yang pertama 15 digit
    if (value.length > 15) {
        value = value.substring(0, 15);
    }
    e.target.value = value;
});

// Tampilkan loading state
function showLoadingState() {
    const button = document.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Membuka WhatsApp...';
    
    setTimeout(() => {
        button.disabled = false;
        button.innerHTML = originalText;
    }, 2000);
}

console.log('Formulir JAKIR loaded successfully!');
