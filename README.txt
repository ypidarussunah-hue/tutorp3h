==================================================
 TUTOR P3H DSN — LP3H DARUSSUNAH
 Portal Edukasi & Pendampingan Proses Produk Halal
==================================================

ISI PAKET INI
-------------
index.html            -> Halaman utama portal (Dashboard + 12 menu tools)
404.html              -> Halaman error 404 (khusus untuk hosting statis)
css/style.css         -> Semua styling tampilan (1 file, sudah termasuk widget Tabel KBLI)
js/main.js            -> Logic utama: navigasi sidebar, showTab, search, FAQ, generator email, dll.
js/kbli.js            -> Logic khusus widget Tabel KBLI (mandiri/scoped, tidak bentrok dgn main.js)
images/logo-lp3h.png  -> Logo resmi LP3H Darussunah (dipakai di sidebar, dashboard, footer, favicon)
images/logo-kbli.png  -> Logo/aset visual untuk widget Tabel KBLI
robots.txt            -> Instruksi untuk crawler mesin pencari
sitemap.xml           -> Peta situs dasar untuk SEO
site.webmanifest       -> Manifest PWA (nama app, warna tema, ikon)
_headers              -> Header keamanan & caching (format Netlify/Cloudflare Pages)
README-HOSTING.txt    -> Panduan upload ke hosting
AUDIT-DAN-REKOMENDASI.md -> Catatan audit desain & rekomendasi lanjutan dari Claude

STRUKTUR NAVIGASI
-----------------
Dashboard
├─ General Tools     : Galeri Edukasi, Dialog Lapangan, Teknik Persuasi, Video Tutorial,
│                       Unduh Dokumen, Syarat & Pakta, FAQ–Tanya Jawab SEHATI, Help Desk
├─ Administration Tools : Generator Email, Tabel KBLI, Troubleshooting
└─ Sehati Tools      : Panduan SIHALAL, Alur Proses

CARA MEMBUKA DI KOMPUTER (TANPA HOSTING)
-----------------------------------------
Cukup klik 2x file index.html. Semua fitur jalan normal kecuali:
- Font Awesome & Google Fonts butuh koneksi internet (dimuat dari CDN)
- Foto di Galeri Edukasi & gambar Alur Kerja/KBLI dimuat dari Google Drive,
  butuh koneksi internet + link Drive tsb harus "Anyone with the link can view"

CATATAN PENTING SOAL FOTO GOOGLE DRIVE
----------------------------------------
Beberapa foto di tab "Galeri Edukasi" memakai link Google Drive sebagai sumber gambar.
Kalau sewaktu-waktu ada foto yang tidak muncul (kotak kosong/rusak), penyebab paling umum:
1. File di Drive dipindah/dihapus, atau
2. Setting share link-nya bukan "Anyone with the link" (masih private/restricted)
Solusi: buka file di Google Drive > klik kanan > Share > ubah ke "Anyone with the link - Viewer".
Satu foto ("Budi — Pendampingan Lapangan 2") sudah saya hapus dari galeri di versi ini karena
linknya bermasalah — silakan cek Drive-nya dan tambahkan lagi manual kalau sudah fix.

DUKUNGAN
--------
LP3H Darussunah — Yayasan Pendidikan Islam Darussunah (Noreg 2603000004)
Email  : ypidarussunah@gmail.com
WhatsApp Help Desk : 0813-8610-8624
