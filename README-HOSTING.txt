==================================================
 PANDUAN HOSTING — TUTOR P3H DSN
==================================================

Paket ini adalah static site (HTML/CSS/JS murni, tanpa server/database).
Bisa di-hosting di mana saja yang mendukung file statis. Beberapa opsi gratis:

OPSI 1 — NETLIFY (paling gampang, drag & drop)
------------------------------------------------
1. Buka https://app.netlify.com/drop
2. Drag seluruh folder ini (bukan file zip-nya, tapi folder hasil extract) ke halaman tsb
3. Netlify otomatis baca file "_headers" untuk setting cache & keamanan
4. Selesai — dapat link *.netlify.app, bisa disambungkan ke domain sendiri nanti

OPSI 2 — CLOUDFLARE PAGES
------------------------------------------------
1. Buat akun di https://pages.cloudflare.com
2. Upload folder ini sebagai project baru (opsi "Direct Upload")
3. File "_headers" otomatis kebaca sama seperti di Netlify

OPSI 3 — GITHUB PAGES
------------------------------------------------
1. Push seluruh isi folder ini ke sebuah repo GitHub
2. Masuk Settings > Pages > pilih branch "main" folder "/ (root)"
3. Catatan: file "_headers" TIDAK didukung GitHub Pages (abaikan saja, tidak wajib)

OPSI 4 — HOSTING CPANEL / SHARED HOSTING BIASA
------------------------------------------------
1. Login ke cPanel > File Manager (atau pakai FTP/FileZilla)
2. Upload seluruh ISI folder ini (bukan foldernya) ke folder public_html
3. Pastikan struktur di server jadi: public_html/index.html, public_html/css/, dst.
4. Buka domain Anda di browser, portal langsung aktif

SEBELUM DI-PUBLISH KE DOMAIN ASLI, CEK DULU:
------------------------------------------------
[ ] Ganti "https://tutorp3hdarussunah.example.com" di robots.txt & sitemap.xml
    dengan domain asli yang akan dipakai
[ ] Cek semua foto Google Drive di tab "Galeri Edukasi" sudah share "Anyone with the link"
[ ] Update angka statistik di Dashboard (Target P3H, Dokumen, dll) kalau datanya berubah
[ ] Tes buka di HP (mode sidebar otomatis jadi menu geser/hamburger di layar kecil)
