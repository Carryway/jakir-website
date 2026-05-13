# Panduan Customization JAKIR Website

Dokumen ini membantu Anda mengubah website sesuai dengan brand dan kebutuhan spesifik JAKIR.

---

## 🎨 Mengubah Warna Brand

Warna utama website terdapat di tiga tempat:

### 1. CSS Variables (assets/css/style.css)
Edit baris berikut dengan warna favorit Anda:
```css
:root {
    --primary-color: #2563eb;      /* Biru - warna utama */
    --primary-dark: #1e40af;       /* Biru gelap - untuk hover */
    --secondary-color: #10b981;    /* Hijau - warna sekunder */
    --accent-color: #f59e0b;       /* Kuning - warna aksen */
}
```

### 2. Color Code Reference
Gunakan salah satu format di bawah:

**Hex Colors** (recommended)
- Biru: `#2563eb`, `#1e40af`
- Hijau: `#10b981`
- Merah: `#ef4444`
- Oranye: `#f97316`
- Ungu: `#a855f7`

**RGB**
- Biru: `rgb(37, 99, 235)`
- Hijau: `rgb(16, 185, 129)`

**Named Colors**
- red, blue, green, purple, yellow, orange, pink

### 3. Tailwind Color Classes
Di HTML, warna sudah menggunakan Tailwind class:
```html
<!-- Background biru -->
<div class="bg-blue-600"></div>

<!-- Text hijau -->
<p class="text-green-600"></p>

<!-- Gradient -->
<div class="bg-gradient-to-r from-blue-600 to-blue-800"></div>
```

Untuk mengubah, edit class langsung di HTML.

---

## 📝 Mengubah Konten Teks

### Hero Section
Lokasi: `index.html` line ~70-85
```html
<h1 class="text-4xl md:text-5xl font-bold mb-4">
    Layanan Cepat dan Aman Bersama JAKIR  <!-- Ubah judul -->
</h1>
<p class="text-lg md:text-xl mb-8 text-blue-100">
    JAKIR hadir sebagai solusi praktis untuk kebutuhan Anda...  <!-- Ubah deskripsi -->
</p>
```

### Services Section
Lokasi: `index.html` line ~105-150
```html
<h2 class="text-2xl font-bold mb-4">JAKIR Delivery</h2>  <!-- Ubah nama layanan -->
<p class="text-gray-700 mb-6">
    Melayani jasa pengantaran dengan cepat...  <!-- Ubah deskripsi -->
</p>
```

### Pricing Section
Lokasi: `index.html` line ~180-210
```html
<p class="text-4xl font-bold">Rp 6.000</p>  <!-- Ubah harga -->
<h3 class="text-2xl font-bold mb-6">JAKIR Delivery</h3>  <!-- Ubah nama paket -->
<li>Pengantaran Makanan & Minuman</li>  <!-- Ubah fitur -->
```

### Contact Section
Lokasi: `index.html` line ~300-340
```html
<p class="text-blue-100">Jl. Merdeka No. 123</p>  <!-- Ubah alamat -->
<p class="text-blue-100">info@jakir.com</p>  <!-- Ubah email -->
<p class="text-blue-100">+62 8xx xxxx xxxx</p>  <!-- Ubah nomor -->
```

### Footer
Lokasi: `index.html` line ~360-400
```html
<p>&copy; 2025 JAKIR. All rights reserved.</p>  <!-- Ubah copyright -->
```

---

## 🎯 Mengubah Logo/Icon

### Ganti Icon Truck (Logo JAKIR)
Lokasi: `index.html` line ~58
```html
<!-- Sekarang menggunakan truck icon -->
<i class="fas fa-truck mr-2"></i>JAKIR

<!-- Pilihan icon lainnya dari Font Awesome:
<i class="fas fa-box"></i>              - Box
<i class="fas fa-shopping-bag"></i>     - Shopping bag
<i class="fas fa-rocket"></i>           - Rocket
<i class="fas fa-star"></i>             - Star
<i class="fas fa-lightning-bolt"></i>   - Lightning
<i class="fas fa-heart"></i>            - Heart
<i class="fas fa-award"></i>            - Award
-->
```

### Mengubah Icon di Services
Lokasi: `index.html` line ~115, 125, dll
```html
<!-- Sekarang: Box icon -->
<i class="fas fa-box"></i>

<!-- Ganti dengan icon lain -->
<i class="fas fa-home"></i>          <!-- Home -->
<i class="fas fa-utensils"></i>      <!-- Utensils (food) -->
<i class="fas fa-shopping-cart"></i> <!-- Shopping cart -->
<i class="fas fa-broom"></i>         <!-- Broom (clean) -->
<i class="fas fa-phone"></i>         <!-- Phone -->
<i class="fas fa-location"></i>      <!-- Location -->
```

---

## 📸 Menambahkan Gambar

Untuk menambahkan gambar hero atau background:

### 1. Simpan gambar
Buat folder baru dan simpan gambar Anda:
```
jakir/
├── index.html
├── assets/
│   ├── css/
│   ├── js/
│   └── images/          <!-- Folder baru -->
│       └── hero.jpg
```

### 2. Tambahkan ke HTML
```html
<!-- Background image di hero section -->
<section class="hero-section" style="background-image: url('assets/images/hero.jpg'); background-size: cover; background-position: center;">
    <!-- konten -->
</section>
```

### 3. Atau sebagai elemen terpisah
```html
<section class="py-16 px-4">
    <img src="assets/images/service-1.jpg" alt="Layanan JAKIR" class="w-full rounded-lg">
</section>
```

---

## 🔗 Mengubah Social Media Links

Lokasi: `index.html` line ~330-345

```html
<!-- Instagram -->
<a href="https://www.instagram.com/jakir_official">  <!-- Ganti username -->
    <i class="fab fa-instagram"></i>
    @jakir_official
</a>

<!-- TikTok -->
<a href="https://www.tiktok.com/@jakir_official">  <!-- Ganti username -->
    <i class="fab fa-tiktok"></i>
    @jakir_official
</a>

<!-- WhatsApp -->
<a href="https://wa.me/628123456789">  <!-- Ganti nomor WA -->
    <i class="fab fa-whatsapp"></i>
    +62 8xx xxxx xxxx
</a>
```

---

## 📱 Mengubah Responsiveness

Website sudah responsive secara default. Jika ingin mengubah breakpoint:

### Tailwind Breakpoints
```html
<!-- Hidden di mobile, tampil di desktop -->
<div class="hidden md:flex">...</div>

<!-- Tampil di mobile, hidden di desktop -->
<div class="md:hidden">...</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">...</div>
```

### Custom Breakpoints
Edit di `index.html` di `<script src="https://cdn.tailwindcss.com"></script>` atau gunakan Tailwind config.

---

## 🎬 Menambahkan Animasi

### Fade In Animation
```html
<!-- Element akan fade in saat di-scroll -->
<div class="fade-in">...</div>
```

### Hover Effects
```html
<!-- Scale up saat di-hover -->
<button class="hover:scale-110 transition">Hover saya</button>

<!-- Change color saat di-hover -->
<a class="text-gray-700 hover:text-blue-600 transition">Link</a>

<!-- Shadow saat di-hover -->
<div class="shadow-md hover:shadow-lg transition">Card</div>
```

### Custom Animation
Tambahkan di `assets/css/style.css`:
```css
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-up {
    animation: slideUp 0.6s ease-out forwards;
}
```

---

## 📧 Setup Contact Form

### Opsi 1: Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="email" name="email" placeholder="Email Anda" required>
    <input type="tel" name="phone" placeholder="Nomor HP" required>
    <textarea name="message" placeholder="Pesan Anda" required></textarea>
    <button type="submit">Kirim Pesan</button>
</form>
```

### Opsi 2: EmailJS
```javascript
emailjs.init("YOUR_PUBLIC_KEY");

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => alert("Pesan terkirim!"))
        .catch(err => alert("Error: " + err));
});
```

---

## 🌙 Dark Mode

Tambahkan toggle dark mode di `assets/js/script.js`:
```javascript
// Toggle dark mode
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
```

Dan di HTML:
```html
<!-- Di navbar -->
<button id="darkModeToggle" class="text-gray-700">
    <i class="fas fa-moon"></i>
</button>
```

---

## 🚀 Performance Tips

### 1. Compress Images
Gunakan [TinyPNG](https://tinypng.com) untuk compress gambar

### 2. Optimize Font
Gunakan system fonts atau Google Fonts minimal

### 3. Lazy Load Images
Gambar akan auto lazy load dengan native loading attribute:
```html
<img src="image.jpg" loading="lazy" alt="Gambar">
```

---

## 🔐 Security

### Sanitize User Input
Jangan langsung insert user input ke HTML:
```javascript
// ❌ JANGAN
element.innerHTML = userInput;

// ✅ LAKUKAN
element.textContent = userInput;
```

### HTTPS
Semua hosting provider (Vercel, Netlify, GitHub Pages) otomatis provide HTTPS gratis.

---

## 📊 SEO Optimization

### Meta Tags
Edit di `<head>` section:
```html
<title>JAKIR - Layanan Pengantaran Cepat & Aman</title>
<meta name="description" content="Layanan pengantaran cepat, aman, dan terpercaya di area Anda">
<meta name="keywords" content="pengantaran, jasa, delivery, JAKIR">
<meta name="author" content="JAKIR Team">
```

### Structured Data
Tambahkan untuk better search results:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JAKIR",
  "url": "https://jakir.vercel.app",
  "telephone": "+62-8xx-xxxx-xxxx"
}
</script>
```

---

## 📞 Support

Untuk bantuan lebih lanjut:
- Baca dokumentasi Tailwind: https://tailwindcss.com
- Font Awesome icons: https://fontawesome.com
- HTML/CSS/JS reference: https://mdn.mozilla.org

**Happy customizing! 🎉**
