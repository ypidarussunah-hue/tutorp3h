# Audit & Rekomendasi — Tutor P3H DSN (Portal LP3H Darussunah)
Ditulis oleh Claude — sesi redesain navigasi, 18–19 September 2026

## 1. Ringkasan Pekerjaan

Navigasi portal diubah total dari **tab horizontal di atas** (13 tab discroll ke samping)
menjadi **sidebar kiri berkelompok + topbar**, mengikuti referensi desain yang diberikan.

Struktur baru:
- **Dashboard** — beranda baru: hero welcome, 3 kartu statistik, grid "Menu Cepat" (12 menu),
  daftar "Informasi Terbaru"
- **General Tools** (terbuka default, 8 item): Galeri Edukasi, Dialog Lapangan, Teknik Persuasi,
  Video Tutorial, Unduh Dokumen, Syarat & Pakta, FAQ–Tanya Jawab SEHATI, Help Desk
- **Administration Tools** (tertutup default, 3 item): Generator Email, Tabel KBLI, Troubleshooting
- **Sehati Tools** (tertutup default, 2 item): Panduan SIHALAL, Alur Proses

File juga dipecah dari satu file HTML monolitik (416 KB, semua CSS/JS/gambar inline base64)
menjadi struktur folder standar: `css/`, `js/`, `images/` + file pendukung hosting.

## 2. Bug yang Ditemukan & Sudah Diperbaiki

| # | Bug | Penyebab | Perbaikan |
|---|-----|----------|-----------|
| 1 | Ikon badge (kotak warna biru) tampak "melayang" dekat topbar di setiap halaman tools | `<span class="icon-badge">` di depan setiap judul halaman — bukan bug posisi sebenarnya, tapi elemen dekoratif yang dianggap mengganggu/duplikat dengan ikon sidebar | Dihapus dari 11 judul halaman, judul sekarang teks polos |
| 2 | Foto hijau bertuliskan "budi2" muncul di Galeri Edukasi | Link Google Drive foto tsb gagal dimuat (permission/file bermasalah), lalu fallback `onerror` menampilkan placeholder | Item foto dihapus dari galeri; counter "Foto Pendampingan" disesuaikan dari 8 → 7 |
| 3 | `id="logoImg"` dobel di 2 elemen berbeda | Salah satu logo hero disalin dari sidebar tanpa ganti id | ID kedua diganti jadi `logoImgHero` |
| 4 | Tombol navigasi lama pakai `nav-tab:nth-child(n)` (rapuh) | Sisa kode dari desain tab horizontal lama | Diganti pakai atribut `data-tab`, jadi urutan menu boleh diubah tanpa merusak JS |

## 3. Yang PERLU Dicek Manual oleh Tim LP3H (Tidak Bisa Saya Perbaiki dari Sini)

- **Foto Google Drive lain berpotensi bermasalah juga.** Saya hanya menghapus 1 foto yang
  terbukti gagal load (budi2). Foto lain (rahmat1-3, p1-p7, onde, dll.) memakai pola link yang
  sama — kalau nanti ada yang muncul kotak placeholder lagi, cek setting share link Drive-nya
  ("Anyone with the link — Viewer"), bukan link-nya sendiri yang salah.
- **Angka statistik Dashboard** (2.000 Target P3H, 6 Dokumen, 13 Menu) saya ambil dari data
  yang ADA di dalam konten situs saat ini, bukan angka pencapaian real-time. Kalau LP3H sudah
  punya sistem pencatatan P3H aktif yang sesungguhnya, sebaiknya angka ini diganti manual
  secara berkala (atau dihubungkan ke Google Sheets/database kalau mau otomatis).
- **"Informasi Terbaru"** di Dashboard saat ini statis (hardcode di HTML). Kalau LP3H ingin
  ini update sendiri tanpa edit kode, perlu dibuatkan sistem CMS ringan (misal ambil dari
  Google Sheets via API) — di luar scope pekerjaan navigasi ini.
- **robots.txt & sitemap.xml** memakai domain contoh (`tutorp3hdarussunah.example.com`) —
  wajib diganti ke domain asli sebelum di-publish (lihat README-HOSTING.txt).

## 4. Rekomendasi Lanjutan (Opsional, Bukan Bug)

1. **Label sidebar vs isi konten**: saya pertahankan nama tab asli situs (mis. "FAQ–Tanya Jawab
   SEHATI" untuk konten yang judul internalnya "FAQ Lapangan"). Kalau mau selaras 100%, tinggal
   putuskan satu nama per menu dan saya rapikan.
2. **Sehati Tools cuma 2 item** — dari sisi UX agak "kurus" dibanding 2 grup lain. Kalau ke depan
   ada tools baru khusus SIHALAL/SEHATI, taruh di grup ini biar seimbang.
3. **Foto asli, bukan placeholder**: sebagian foto UMKM/produk masih pakai placehold.co sebagai
   fallback (bukan foto sungguhan) — idealnya semua diganti foto asli dari lapangan.
4. Kalau traffic portal ini sudah cukup besar, pertimbangkan pindah dari Google Drive sebagai
   host foto ke storage khusus (Cloudflare Images / R2, dsb.) — Drive tidak didesain untuk
   melayani banyak request gambar publik dan bisa kena rate-limit.

## 5. Catatan Teknis untuk Developer Berikutnya

- Semua navigasi dikontrol lewat atribut `data-tab="xxx"` yang harus cocok dengan `id="tab-xxx"`.
  Tambah menu baru = tambah 1 tombol `<button class="side-link" data-tab="baru" onclick="showTab('baru')">`
  di sidebar + 1 `<div id="tab-baru" class="tab-content">` di `index.html`.
- CSS ada di satu file `css/style.css` (gabungan style utama + style khusus widget KBLI yang
  di-scope dengan prefix `#kbliRoot`). Jangan hapus prefix itu kalau edit CSS KBLI, supaya tidak
  bentrok dengan style global.
- JS dipisah 2 file: `js/kbli.js` (mandiri, khusus widget Tabel KBLI) dan `js/main.js` (semua
  logic lain: sidebar, search, FAQ toggle, generator email).
