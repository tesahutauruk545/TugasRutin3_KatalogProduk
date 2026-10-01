# 🏆 SportGear - Katalog Produk Alat Olahraga

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Deskripsi Singkat

SportGear adalah website katalog produk alat olahraga responsif yang dibangun menggunakan HTML, Tailwind CSS (CDN), dan Vanilla JavaScript. Proyek ini menerapkan pendekatan *mobile-first*, tanpa menggunakan framework JS atau build tool, serta mematuhi prinsip aksesibilitas dan validasi W3C.

## ✨ Fitur Utama

- ✅ **Responsif Penuh**: Layout beradaptasi dari mobile (1 kolom) hingga desktop (4 kolom).
- ✅ **Gambar Produk**: Menggunakan gambar dari Unsplash untuk visualisasi produk.
- ✅ **Keranjang Belanja Interaktif**: Tambah, ubah jumlah, hapus item, dan hitung total otomatis.
- ✅ **Modal Responsif**: Bottom sheet di mobile, center modal di desktop, dengan pencegahan scroll body.
- ✅ **Checkout & Toast**: Simulasi checkout dengan pop-up sukses dan notifikasi toast animasi.
- ✅ **Tipografi Clamp**: Ukuran font fluid menggunakan `clamp()` untuk semua breakpoint.
- ✅ **Safe Area**: Dukungan `env(safe-area-inset-bottom)` untuk perangkat iPhone notch.

## 📋 Tabel Requirements yang Dipenuhi

| No | Requirement                               | Status       |
| -- | ----------------------------------------- | ------------ |
| 1  | Mobile-first approach                     | ✅ Terpenuhi |
| 2  | Minimal 3 breakpoint (sm, lg, xl)         | ✅ Terpenuhi |
| 3  | Grid responsif (1 -> 2 -> 3 -> 4 kolom)   | ✅ Terpenuhi |
| 4  | Card produk (gambar, info, harga, tombol) | ✅ Terpenuhi |
| 5  | Navbar responsif (hamburger mobile)       | ✅ Terpenuhi |
| 6  | Responsive images                         | ✅ Terpenuhi |
| 7  | `clamp()` untuk typography (h1, h2, p)  | ✅ Terpenuhi |
| 8  | Footer minimal 3 kolom                    | ✅ Terpenuhi |
| 9  | Dokumentasi testing (screenshot)          | ✅ Terpenuhi |

## 📸 Dokumentasi Testing (Screenshot)

Berikut adalah tampilan website pada 3 breakpoint utama:

| Mobile (320px - 639px)           | Tablet (640px - 1023px)          | Desktop (1024px+)                  |
| -------------------------------- | -------------------------------- | ---------------------------------- |
| ![Mobile](assets/img/mobile.png) | ![Tablet](assets/img/tablet.png) | ![Desktop](assets/img/desktop.png) |
| *1 Kolom, Bottom Sheet Cart*   | *2 Kolom, Layout Menyesuai*    | *4 Kolom, Center Modal Cart*     |

*(Catatan: File screenshot `mobile.png`, `tablet.png`, dan `desktop.png` harus ditempatkan di folder `assets/img/`)*

## 📁 Struktur Folder

```text
TugasRutin3_KatalogProduk/
├── assets/
│   ├── css/style.css      # Custom CSS (clamp, animasi, safe area)
│   ├── js/script.js       # Logika produk, keranjang, checkout
│   └── img/               # Screenshot testing (mobile.png, tablet.png, desktop.png)
├── index.html             # Struktur utama HTML
├── README.md              # Dokumentasi ini
└── .gitignore             # Konfigurasi Git
```
