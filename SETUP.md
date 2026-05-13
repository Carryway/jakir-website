# Panduan Setup & Deployment JAKIR Website

## 🎯 Panduan Cepat

Website JAKIR sudah siap pakai! Ikuti langkah di bawah sesuai dengan platform yang Anda gunakan.

---

## 🖥️ Buka Website di Komputer Anda

### Windows
```powershell
# Navigate ke folder
cd c:\Users\hafid\OneDrive\Documents\Coding\jakir

# Buka dengan browser default
start index.html

# Atau buka file langsung di browser
# File > Open atau Ctrl+O, pilih index.html
```

### Mac
```bash
cd ~/Documents/Coding/jakir
open index.html
```

### Linux
```bash
cd ~/Documents/Coding/jakir
xdg-open index.html
```

---

## 🔥 Menggunakan Live Server (VS Code)

Cara terbaik untuk development adalah menggunakan Live Server extension:

### Instalasi
1. Buka VS Code
2. Ke Extensions (Ctrl+Shift+X)
3. Cari "Live Server"
4. Install extension dari Ritwick Dey

### Menggunakan
1. Buka folder `jakir` di VS Code
2. Klik kanan pada `index.html`
3. Pilih "Open with Live Server"
4. Browser otomatis membuka dengan live reload

---

## ☁️ Deploy ke Vercel (Recommended - Gratis)

### Step 1: Setup Git Repository
```bash
cd c:\Users\hafid\OneDrive\Documents\Coding\jakir

# Initialize git (jika belum ada)
git init

# Add files
git add .
git commit -m "Initial commit: JAKIR website"
```

### Step 2: Upload ke GitHub
1. Buka [github.com](https://github.com)
2. Login atau buat akun gratis
3. Buat repository baru bernama `jakir-website`
4. Copy commands yang disediakan GitHub:
```bash
git remote add origin https://github.com/USERNAME/jakir-website.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy ke Vercel
1. Kunjungi [vercel.com](https://vercel.com)
2. Login dengan GitHub
3. Klik "New Project"
4. Import repository `jakir-website`
5. Klik "Deploy"
6. Website live dalam hitungan menit!

**URL akan seperti**: `https://jakir-website.vercel.app`

---

## 📱 Deploy ke Netlify (Alternatif)

### Cara Paling Cepat (Drag & Drop)
1. Kunjungi [netlify.com](https://netlify.com)
2. Login atau buat akun gratis
3. Drag and drop folder `jakir` ke area yang disediakan
4. Done! Website langsung live

### Cara dengan Git
1. Setup git repository (seperti di atas)
2. Push ke GitHub
3. Di Netlify: New site from Git > Connect to GitHub > Select repo > Deploy

---

## 🌐 Deploy ke GitHub Pages (Gratis)

1. Push ke GitHub (lihat Step 1-2 Vercel)
2. Buka repository di GitHub
3. Settings > Pages > Source: main branch
4. Save
5. Website live di: `https://USERNAME.github.io/jakir-website`

---

## 🔧 Konfigurasi Domain Custom

Setelah website live, Anda bisa menggunakan domain custom:

### Untuk Vercel
1. Di Vercel Dashboard > Project Settings > Domains
2. Add custom domain
3. Update DNS records di registrar domain Anda

### Untuk Netlify
1. Di Netlify > Site Settings > Domain Management
2. Add custom domain
3. Update DNS records

### Untuk GitHub Pages
1. Di Repository > Settings > Pages
2. Custom domain: masukkan domain Anda
3. Commit CNAME file
4. Update DNS records di registrar

---

## 📊 Monitoring & Analytics

### Google Analytics
1. Setup Google Analytics account
2. Copy Tracking ID
3. Add ke `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
- Otomatis tersedia di Vercel Dashboard
- Lihat traffic, performance, dan visitor data

---

## 🛡️ SSL/HTTPS

Semua platform (Vercel, Netlify, GitHub Pages) otomatis memberikan SSL certificate gratis. Website Anda akan aman di `https://`.

---

## 📧 Setup Email untuk Kontak

Untuk form kontak, Anda perlu backend service:

### Opsi 1: Formspree (Recommended)
1. Kunjungi [formspree.io](https://formspree.io)
2. Buat account gratis
3. Update form action di HTML:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input name="email" type="email" required>
    <input name="message" type="text" required>
    <button type="submit">Kirim</button>
</form>
```

### Opsi 2: EmailJS
1. Kunjungi [emailjs.com](https://emailjs.com)
2. Buat template email
3. Integrate dengan JavaScript

---

## ✅ Checklist Sebelum Go Live

- [ ] Ganti semua konten placeholder dengan info JAKIR Anda
- [ ] Update nomor telepon dan email
- [ ] Update alamat kantor
- [ ] Tambah social media links yang benar
- [ ] Setup custom domain (opsional)
- [ ] Setup analytics
- [ ] Test semua button dan link
- [ ] Test responsive di mobile
- [ ] Setup email form (opsional)

---

## 🚀 Tips Performance

- Website ini sudah dioptimasi
- Images diload hanya saat diperlukan
- CSS dan JS minimal (no bloat)
- Tailwind CSS menggunakan CDN (production bisa dioptimasi lebih lanjut)

---

## 💬 Support & Help

Jika ada pertanyaan:
- Baca README.md untuk info project
- Baca file HTML, CSS, JS untuk understand code
- Google untuk solusi umum development

---

**Good luck untuk website JAKIR Anda! 🚀**
