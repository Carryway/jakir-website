# JAKIR - Layanan Pengantaran Cepat & Aman

Website modern untuk layanan pengantaran dan jasa dengan brand **JAKIR**. Website ini dibangun dengan HTML5, CSS3 (Tailwind CSS), dan JavaScript vanilla untuk performa maksimal.

## 📋 Fitur Utama

- ✅ **Responsif** - Optimal untuk desktop, tablet, dan mobile
- ✅ **Hero Section** - Landing page yang menarik dengan CTA
- ✅ **Layanan** - Showcase 2 layanan utama + 3 layanan tambahan
- ✅ **Tarif** - Dua paket pricing dengan detail fitur
- ✅ **Testimoni** - Kata-kata pelanggan yang puas
- ✅ **Kontak** - Informasi kantor dan media sosial
- ✅ **Mobile Menu** - Navigasi yang user-friendly di mobile
- ✅ **Smooth Animation** - Transisi dan animasi yang halus
- ✅ **SEO Friendly** - Struktur HTML yang semantic

## 📁 Struktur Folder

```
jakir/
├── index.html              # Halaman utama
├── assets/
│   ├── css/
│   │   └── style.css       # Custom CSS
│   └── js/
│       └── script.js       # JavaScript interaktif
└── README.md               # Dokumentasi
```

## 🚀 Cara Memulai

### 1. Buka File Lokal
Cukup buka file `index.html` di browser Anda:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

### 2. Menggunakan Live Server (Recommended)
Jika menggunakan VS Code, install extensi "Live Server" lalu klik kanan pada `index.html` dan pilih "Open with Live Server".

### 3. Deploy ke Production

#### Opsi A: Vercel (Recommended - Gratis)
1. Push folder ke GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Deploy otomatis

#### Opsi B: Netlify
1. Drag and drop folder `jakir` ke [netlify.com](https://netlify.com)
2. Domain akan di-generate otomatis

## 🎨 Customization

### 1. Mengubah Warna Brand
Edit warna di `assets/css/style.css`:
```css
:root {
    --primary-color: #2563eb;      /* Biru - ganti sesuai brand */
    --primary-dark: #1e40af;
    --secondary-color: #10b981;    /* Hijau */
    --accent-color: #f59e0b;       /* Kuning */
}
```

### 2. Mengubah Teks & Konten
Edit langsung di `index.html`:
- Ganti "JAKIR" dengan nama brand Anda
- Update alamat, email, telepon di section "Office"
- Ubah testimoni sesuai pelanggan nyata
- Update social media links

### 3. Menambah Halaman Baru
Buat file HTML baru atau tambahkan section baru di index.html:
```html
<section id="nama-section" class="py-16 px-4">
    <!-- Konten section -->
</section>
```

Jangan lupa tambahkan link di navbar:
```html
<a href="#nama-section" class="text-gray-700 hover:text-blue-600 transition">Nama Menu</a>
```

## 🛠️ Tech Stack

- **HTML5** - Struktur semantic
- **Tailwind CSS** - Styling utility-first
- **Font Awesome** - Icons
- **JavaScript** - Interaktivitas (vanilla JS, no framework)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✉️ Kontak & Support

Untuk pertanyaan atau support, hubungi:
- **Email**: info@jakir.com
- **WhatsApp**: +62 8xx xxxx xxxx

## 📄 Lisensi

© 2025 JAKIR. All rights reserved.

---

**Dibuat dengan ❤️ untuk kemudahan layanan Anda**
