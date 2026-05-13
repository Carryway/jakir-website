# Struktur File Project JAKIR

## 📁 Folder Organization

```
jakir/
│
├── 📄 index.html                    # Halaman utama (START HERE!)
├── 📄 package.json                  # Info project
├── 📄 vercel.json                   # Config untuk Vercel deployment
├── 📄 .gitignore                    # Git ignore file
│
├── 📋 README.md                     # Dokumentasi umum
├── 📋 SETUP.md                      # Panduan setup & deployment
├── 📋 CUSTOMIZATION.md              # Panduan mengubah website
│
└── 📁 assets/
    ├── 🎨 css/
    │   └── style.css                # Custom CSS styling
    │
    └── 🔧 js/
        └── script.js                # JavaScript interaktif
```

---

## 🚀 Quick Start

### 1️⃣ Buka Website
```bash
# Cukup buka file ini di browser:
index.html
```

### 2️⃣ Customize Konten
- Edit nama, alamat, nomor di `index.html`
- Ubah warna di `assets/css/style.css`
- Ganti social media links

### 3️⃣ Deploy (Pilih salah satu)
- **Vercel** (Recommended): https://vercel.com (free)
- **Netlify**: https://netlify.com (free)
- **GitHub Pages**: https://pages.github.com (free)

---

## 📄 File Descriptions

### index.html
- **Apa**: Halaman utama website
- **Gunakan untuk**: Mengubah teks, layanan, tarif, testimonial
- **Tidak perlu**: Mengubah kecuali konten

### assets/css/style.css
- **Apa**: Styling dan animasi custom
- **Gunakan untuk**: Mengubah warna, font, animasi
- **Berisi**: Color variables, animations, responsive styles

### assets/js/script.js
- **Apa**: Interaktivitas website
- **Gunakan untuk**: Mobile menu, smooth scroll, notifications
- **Berisi**: Event listeners, navigation logic, animations

### README.md
- **Apa**: Dokumentasi general
- **Gunakan untuk**: Memahami project overview

### SETUP.md
- **Apa**: Panduan deployment
- **Gunakan untuk**: Setup local, deploy ke Vercel/Netlify/GitHub

### CUSTOMIZATION.md
- **Apa**: Panduan mengubah content
- **Gunakan untuk**: Detailed instructions untuk customization

---

## 🎨 Section Descriptions

Website terbagi menjadi beberapa section:

### 1. Navigation Bar
- **Lokasi**: Atas halaman, fixed
- **Elemen**: Logo, menu links, mobile toggle
- **Customize**: Ubah logo, links di HTML

### 2. Hero Section
- **Lokasi**: Setelah navbar
- **Elemen**: Judul besar, deskripsi, 2 CTA buttons
- **Customize**: Ubah text dan warna di HTML

### 3. Services Section
- **Lokasi**: Section "Layanan"
- **Elemen**: 2 service cards + 3 icon services
- **Customize**: Ubah judul, deskripsi, icons

### 4. Pricing Section
- **Lokasi**: Section "Tarif"
- **Elemen**: 2 pricing cards dengan feature list
- **Customize**: Ubah harga, fitur, deskripsi

### 5. Testimonials Section
- **Lokasi**: Section "Kata Mereka"
- **Elemen**: 3 testimonial cards
- **Customize**: Ubah nama, foto, quote

### 6. Contact Section
- **Lokasi**: Section "Hubungi JAKIR"
- **Elemen**: Alamat, email, telepon, social media
- **Customize**: Ubah semua info kontak

### 7. Footer
- **Lokasi**: Bawah halaman
- **Elemen**: Copyright, links, info
- **Customize**: Ubah copyright year, links

---

## 🎯 Customization Checklist

Sebelum deploy, pastikan Anda sudah mengubah:

- [ ] Logo/icon (opsional)
- [ ] Nama service (JAKIR Delivery, Layanan Rumah, dll)
- [ ] Deskripsi service
- [ ] Harga layanan
- [ ] Feature list di pricing cards
- [ ] Nama pelanggan di testimonial
- [ ] Quote testimonial
- [ ] Alamat kantor
- [ ] Email
- [ ] Nomor telepon
- [ ] Social media username
- [ ] Warna brand (opsional)
- [ ] Copyright year

---

## 🛠️ File Editing Guide

### Editing HTML (index.html)
```html
<!-- Struktur dasar -->
<section id="layanan">
    <!-- Content di sini -->
    <h2>Layanan JAKIR</h2>
    <p>Deskripsi layanan...</p>
</section>
```

### Editing CSS (assets/css/style.css)
```css
/* Warna variables */
:root {
    --primary-color: #2563eb;
}

/* Atau Tailwind classes di HTML */
<div class="bg-blue-600">...</div>
```

### Editing JavaScript (assets/js/script.js)
```javascript
// Event listeners
button.addEventListener('click', () => {
    // Handle click
});
```

---

## 📚 Resources

### External Tools
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Color Picker**: https://www.color-hex.com
- **Image Compression**: https://tinypng.com

### Deployment Platforms
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: https://pages.github.com

### Learning
- **MDN Web Docs**: https://mdn.mozilla.org
- **W3Schools**: https://www.w3schools.com
- **CSS-Tricks**: https://css-tricks.com

---

## 🤔 FAQ

### Q: Bagaimana cara menambah service baru?
A: Copy section service, ubah icon, judul, deskripsi. Ubah di HTML di section "Layanan".

### Q: Bagaimana cara menambah testimonial?
A: Copy testimonial card, ubah nama, quote, dan warna avatar.

### Q: Bagaimana cara ganti warna?
A: Edit CSS variables di `assets/css/style.css` atau ubah Tailwind classes di HTML.

### Q: Website tidak muncul di browser?
A: Pastikan path file benar, gunakan Live Server, atau check browser console.

### Q: Bagaimana cara setup form kontak?
A: Gunakan Formspree atau EmailJS. Lihat CUSTOMIZATION.md untuk detail.

---

## 📞 Next Steps

1. **Buka** `index.html` di browser
2. **Customize** konten sesuai brand JAKIR
3. **Test** di mobile dan desktop
4. **Deploy** ke Vercel/Netlify/GitHub
5. **Share** URL ke team!

---

## 💡 Tips

- Selalu backup file sebelum edit besar-besaran
- Test di mobile sebelum deploy
- Gunakan Chrome DevTools (F12) untuk debug
- Push ke GitHub untuk version control
- Check console untuk JavaScript errors

---

**Status**: ✅ Ready for Customization & Deployment

Selamat menggunakan JAKIR Website! 🚀

Dibuat dengan ❤️ untuk memudahkan bisnis Anda.
