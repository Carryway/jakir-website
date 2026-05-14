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
        placeholder_tujuan: 'Contoh: Kantor saya, Jl. Merdeka No. 123',
        label_waktu: 'Waktu Antrian'
    },
    'lainnya': {
        label_jemput: 'Lokasi Jemput/Titik Awal',
        placeholder_jemput: 'Sesuaikan dengan kebutuhan Anda',
        label_tujuan: 'Lokasi Tujuan',
        placeholder_tujuan: 'Sesuaikan dengan kebutuhan Anda'
    }
};

// Fungsi untuk format tanggal dan menampilkan hari
function formatHariTanggalJam(dateStr, timeStr) {
    if (!dateStr || !timeStr) return null;
    
    const date = new Date(dateStr + 'T' + timeStr);
    const hariName = date.toLocaleDateString('id-ID', { weekday: 'long' });
    const tanggal = date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    const jam = timeStr;
    
    return `${hariName}, ${tanggal} pukul ${jam} WIB`;
}

// Fungsi untuk update tampilan hari, tanggal, dan jam
function updateHariDisplay(dateStr, timeStr) {
    const hariDisplay = document.getElementById('hari_display');
    if (!dateStr) return;
    
    const date = new Date(dateStr);
    const hariName = date.toLocaleDateString('id-ID', { weekday: 'long' });
    const tanggal = date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    
    if (timeStr) {
        hariDisplay.innerHTML = `<p class="text-sm text-gray-600">Waktu yang dipilih:</p><p class="text-lg font-bold text-amber-700">${hariName}, ${tanggal} pukul ${timeStr} WIB</p>`;
    } else {
        hariDisplay.innerHTML = `<p class="text-sm text-gray-600">Hari yang dipilih:</p><p class="text-lg font-bold text-amber-700">${hariName}, ${tanggal}</p>`;
    }
}

// Inisialisasi default tanggal dan jam ke sekarang
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    
    // Format tanggal untuk input date (YYYY-MM-DD)
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateValue = `${year}-${month}-${day}`;
    
    // Format jam untuk input time (HH:MM)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeValue = `${hours}:${minutes}`;
    
    // Set minimum date ke hari ini (tidak boleh pilih hari yang sudah lewat)
    document.getElementById('waktu_date').setAttribute('min', dateValue);
    
    // Set minimum time ke jam sekarang (untuk hari ini)
    document.getElementById('waktu_time').setAttribute('min', timeValue);
    
    // Set default values
    document.getElementById('waktu_date').value = dateValue;
    document.getElementById('waktu_time').value = timeValue;
    
    // Update hidden field dan hari display dengan menggunakan fungsi updateHariDisplay
    updateHariDisplay(dateValue, timeValue);
    document.getElementById('waktu_penjemputan').value = formatHariTanggalJam(dateValue, timeValue);
});

// Update tampilan hari ketika date atau time berubah
document.getElementById('waktu_date').addEventListener('change', function() {
    const dateStr = this.value;
    const timeStr = document.getElementById('waktu_time').value;
    const timeInput = document.getElementById('waktu_time');
    const now = new Date();
    
    // Format hari ini untuk perbandingan
    const todayValue = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    
    if (dateStr) {
        // Update display dengan tanggal dan jam (jika ada)
        updateHariDisplay(dateStr, timeStr);
        
        // Jika tanggal yang dipilih adalah hari ini, set minimum time ke jam sekarang
        // Jika tanggal yang dipilih adalah hari depan atau lebih, hapus batasan waktu
        if (dateStr === todayValue) {
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            timeInput.setAttribute('min', `${hours}:${minutes}`);
        } else {
            timeInput.removeAttribute('min');
        }
        
        // Update hidden field
        if (timeStr) {
            document.getElementById('waktu_penjemputan').value = formatHariTanggalJam(dateStr, timeStr);
        }
    }
});

document.getElementById('waktu_time').addEventListener('change', function() {
    const dateStr = document.getElementById('waktu_date').value;
    const timeStr = this.value;
    
    // Update display dengan tanggal dan jam
    updateHariDisplay(dateStr, timeStr);
    
    // Update hidden field
    if (dateStr && timeStr) {
        document.getElementById('waktu_penjemputan').value = formatHariTanggalJam(dateStr, timeStr);
    }
});

// Update form labels dan visibility ketika jenis layanan berubah
document.getElementById('jenis_layanan').addEventListener('change', function() {
    const serviceType = this.value;
    
    // Update labels
    if (layananConfig[serviceType]) {
        const config = layananConfig[serviceType];
        document.getElementById('label_lokasi_jemput').innerHTML = config.label_jemput + ' <span class="text-red-500">*</span>';
        document.getElementById('label_lokasi_tujuan').innerHTML = config.label_tujuan + ' <span class="text-red-500">*</span>';
        document.getElementById('lokasi_jemput').placeholder = config.placeholder_jemput;
        document.getElementById('lokasi_tujuan').placeholder = config.placeholder_tujuan;
        
        // Update Waktu label jika ada config untuk itu
        if (config.label_waktu) {
            document.getElementById('label_waktu_penjemputan').innerHTML = config.label_waktu + ' <span class="text-red-500">*</span>';
        } else {
            document.getElementById('label_waktu_penjemputan').innerHTML = 'Waktu Penjemputan <span class="text-red-500">*</span>';
        }
    }
    
    // Hide Waktu Penjemputan untuk layanan makanan dan obat
    const waktuWrapper = document.getElementById('waktu_penjemputan_wrapper');
    if (serviceType === 'makanan' || serviceType === 'obat') {
        waktuWrapper.style.display = 'none';
        document.getElementById('waktu_date').removeAttribute('required');
        document.getElementById('waktu_time').removeAttribute('required');
        // Clear waktu fields
        document.getElementById('waktu_date').value = '';
        document.getElementById('waktu_time').value = '';
        document.getElementById('waktu_penjemputan').value = '';
        document.getElementById('hari_display').innerHTML = `<p class="text-sm text-gray-600">Hari yang dipilih:</p><p class="text-lg font-bold text-amber-700">Pilih tanggal terlebih dahulu</p>`;
    } else {
        waktuWrapper.style.display = 'block';
        document.getElementById('waktu_date').setAttribute('required', '');
        document.getElementById('waktu_time').setAttribute('required', '');
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
    const waktuDate = document.getElementById('waktu_date').value;
    const waktuTime = document.getElementById('waktu_time').value;
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

    // Validasi Waktu Penjemputan (hanya jika tidak untuk makanan atau obat)
    if (jenisLayanan !== 'makanan' && jenisLayanan !== 'obat') {
        if (!waktuDate || !waktuTime) {
            errorMessage.innerHTML = '<strong>Error:</strong> Mohon isi Tanggal dan Jam Penjemputan.';
            errorMessage.style.display = 'block';
            window.scrollTo(0, document.querySelector('form').offsetTop);
            return;
        }
    }

    // Format Waktu Penjemputan jika ada
    let waktuPenjemputanFormatted = waktuPenjemputan;
    if (waktuDate && waktuTime) {
        waktuPenjemputanFormatted = formatHariTanggalJam(waktuDate, waktuTime);
    }

    // Format pesan untuk WhatsApp
    const message = formatPesananKeWhatsApp(
        nama,
        whatsapp,
        jenisLayanan,
        detailOrder,
        lokasiJemput,
        lokasiTujuan,
        waktuPenjemputanFormatted,
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

━━━━━━━━━━━━━━━━━━━
👤 *DATA PEMESAN*
━━━━━━━━━━━━━━━━━━━
Nama: ${nama}
No WhatsApp: ${whatsapp}
━━━━━━━━━━━━━━━━━━━
📋 *DETAIL LAYANAN*
━━━━━━━━━━━━━━━━━━━
Jenis Layanan: ${layananName}
Detail Order: ${detailOrder}
━━━━━━━━━━━━━━━━━━━
📍 *LOKASI*
━━━━━━━━━━━━━━━━━━━
Lokasi Jemput: ${lokasiJemput}
Lokasi Tujuan: ${lokasiTujuan}
━━━━━━━━━━━━━━━━━━━
⏰ *WAKTU*
━━━━━━━━━━━━━━━━━━━
Waktu Penjemputan: ${waktuPenjemputan}
━━━━━━━━━━━━━━━━━━━
💰 *PEMBAYARAN*
━━━━━━━━━━━━━━━━━━━
Metode: ${metodeName}
━━━━━━━━━━━━━━━━━━━
📌 *KETENTUAN*
━━━━━━━━━━━━━━━━━━━
✓ Wajib share lokasi setelah format terkirim
✓ Jika transfer, silakan transfer terlebih dahulu
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
