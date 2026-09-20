// ── LOGO INJECT dari base64 original ──
const LOGO_B64 = 'LOGO_BASE64_AKAN_DIINJEKSI';
// Logo akan di-set via script inject di bawah

/* ── SEARCH ENGINE DATA ── */
const SEARCH_INDEX = [
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Login ptsp.halal.go.id buat akun NIB email registrasi verifikasi OTP'},
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Pilih skema Self Declare omzet 500 juta UMK produk tidak berisiko tinggi'},
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Input data pelaku usaha nama usaha NIB KBLI alamat produksi'},
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Input data produk nama produk jenis kategori merek brand foto kemasan'},
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Input data bahan sertifikat halal bahan tidak kritis bahan alam dari hewan'},
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Upload dokumen KTP NIB foto proses produksi foto produk kemasan'},
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Pakta integritas submit nomor permohonan tracking status'},
  {tab:'sihalal',tabName:'Panduan SIHALAL',text:'Monitoring status permohonan diajukan diverifikasi revisi terbit sertifikat'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Pelaku usaha belum punya NIB cara daftar OSS gratis KTP NPWP KBLI'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'KBLI tidak sesuai produk cara ubah OSS tambah KBLI'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'NIB tidak ditemukan SIHALAL data tidak ditemukan sinkron 24 jam'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Pelaku usaha tidak punya email generator alias Gmail dot trick LP3H'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Upload dokumen gagal ukuran file besar kompres JPEG Chrome browser'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Bahan tidak ditemukan database SIHALAL bahan tidak kritis bahan alam'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Bahan impor tanpa label halal lembaga halal diakui BPJPH MUI'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Permohonan lebih dari satu bulan status diajukan antrian BPJPH call center'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Status revisi cara perbaiki kirim ulang data catatan verifikator'},
  {tab:'faq',tabName:'FAQ Lapangan',text:'Sertifikat terbit unduh PDF QR Code logo halal kemasan 4 tahun perpanjang'},
  {tab:'alur',tabName:'Alur Proses',text:'Alur sertifikasi halal mulai rekrut pelaku usaha temukan'},
  {tab:'alur',tabName:'Alur Proses',text:'Kelengkapan dokumen awal KTP NIB daftar produk bahan foto produksi'},
  {tab:'alur',tabName:'Alur Proses',text:'Verifikasi kelayakan self declare kriteria omzet tidak berisiko tinggi bahan'},
  {tab:'alur',tabName:'Alur Proses',text:'Input data SIHALAL ptsp halal go id submit permohonan nomor'},
  {tab:'alur',tabName:'Alur Proses',text:'Verifikasi validasi BPJPH 7 14 hari kerja pantau status'},
  {tab:'alur',tabName:'Alur Proses',text:'Revisi perbaikan data 3 hari kerja kirim ulang'},
  {tab:'alur',tabName:'Alur Proses',text:'Penetapan kehalalan produk keputusan BPJPH sidang'},
  {tab:'alur',tabName:'Alur Proses',text:'Sertifikat terbit 21 45 hari kerja unduh cetak dokumentasi kinerja P3H'},
  {tab:'troubleshoot',tabName:'Troubleshooting',text:'NIB tidak ditemukan SIHALAL ERROR 01 sinkron 24 jam KBLI helpdesk'},
  {tab:'troubleshoot',tabName:'Troubleshooting',text:'Gagal upload dokumen ERROR 02 ukuran file besar kompres format JPG PNG PDF Chrome'},
  {tab:'troubleshoot',tabName:'Troubleshooting',text:'Nama produk ditolak sudah terdaftar ERROR 03 tambah merek brand varian'},
  {tab:'troubleshoot',tabName:'Troubleshooting',text:'Akun terkunci tidak bisa login ERROR 04 lupa password reset email spam'},
  {tab:'troubleshoot',tabName:'Troubleshooting',text:'Bahan tidak ada database ERROR 05 nama generik nomor sertifikat bahan tidak kritis'},
  {tab:'troubleshoot',tabName:'Troubleshooting',text:'Sistem tidak bisa diakses ERROR 06 maintenance server cache cookies browser refresh'},
  {tab:'troubleshoot',tabName:'Troubleshooting',text:'Kontak helpdesk BPJPH 1500-110 call center Twitter email website'},
  {tab:'dialog',tabName:'Dialog Lapangan',text:'Dialog lapangan script percakapan P3H pelaku usaha persuasi pendekatan'},
  {tab:'persuasi',tabName:'Teknik Persuasi',text:'Teknik persuasi closing keberatan menangani penolakan pelaku usaha konversi'},
  {tab:'generator',tabName:'Generator Email',text:'Generator email alias Gmail dot trick LP3H OSS SIHALAL akun pendaftaran CSV unduh'},
  {tab:'syarat',tabName:'Syarat & Pakta',text:'Syarat pendampingan pakta integritas P3H ketentuan sertifikasi halal'},
  {tab:'kbli',tabName:'Tabel KBLI',text:'Tabel KBLI kode klasifikasi baku lapangan usaha self declare kategori produk BPJPH 146 2025'},
];

function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 100);
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '<div class="search-empty"><i class="fas fa-search" style="font-size:28px;display:block;margin-bottom:10px;opacity:.3;"></i>Ketik kata kunci untuk mulai mencari</div>';
}
function runSearch(q) {
  const el = document.getElementById('searchResults');
  if (!q || q.trim().length < 2) {
    el.innerHTML = '<div class="search-empty"><i class="fas fa-search" style="font-size:28px;display:block;margin-bottom:10px;opacity:.3;"></i>Ketik kata kunci untuk mulai mencari</div>';
    return;
  }
  const words = q.trim().toLowerCase().split(/\s+/);
  const results = SEARCH_INDEX.filter(item => words.some(w => item.text.toLowerCase().includes(w)));
  if (!results.length) { el.innerHTML = '<div class="search-empty">Tidak ditemukan hasil untuk "<strong>' + q + '</strong>"<br><span style="font-size:12px;">Coba kata kunci lain</span></div>'; return; }
  const seen = new Set();
  let html = '';
  results.slice(0, 8).forEach(r => {
    const key = r.tab + r.text.slice(0,30);
    if (seen.has(key)) return; seen.add(key);
    const highlight = r.text.replace(new RegExp('(' + words.join('|') + ')', 'gi'), '<mark>$1</mark>');
    html += `<div class="search-result-item" onclick="goSearchResult('${r.tab}');closeSearch()"><div class="search-result-tab">${r.tabName}</div><div class="search-result-text">${highlight}</div></div>`;
  });
  el.innerHTML = html;
}
function goSearchResult(tabId) {
  showTab(tabId);
}

/* ── FAQ INTERAKTIF ── */
function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(f => f.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}
function filterFaq(cat, btn) {
  document.querySelectorAll('.faq-filter').forEach(b => {
    b.style.background = 'white'; b.style.color = 'var(--gray-600)'; b.style.borderColor = 'var(--gray-200)';
  });
  btn.style.background = 'var(--emerald)'; btn.style.color = 'white'; btn.style.borderColor = 'var(--emerald)';
  const items = document.querySelectorAll('.faq-item');
  let anyVisible = false;
  items.forEach(item => {
    const show = cat === 'all' || item.dataset.cat === cat;
    item.style.display = show ? 'block' : 'none';
    if (show) anyVisible = true;
  });
  document.getElementById('faqEmpty').style.display = anyVisible ? 'none' : 'block';
}

function showTab(tabId) {
  const target = document.getElementById('tab-' + tabId);
  if (!target) return;
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.side-link').forEach(b => b.classList.remove('active'));
  target.classList.add('active');
  const link = document.querySelector(`.side-link[data-tab="${tabId}"]`);
  if (link) {
    link.classList.add('active');
    const group = link.closest('.side-group');
    if (group) group.classList.add('open');
  } else {
    document.querySelector('.side-link.dashboard-link')?.classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeSidebar();
}

/* ── SIDEBAR: GRUP KOLAPS ── */
function toggleGroup(headerEl) {
  headerEl.closest('.side-group').classList.toggle('open');
}
function expandAllGroups() {
  document.querySelectorAll('.side-group').forEach(g => g.classList.add('open'));
}

/* ── SIDEBAR: OFF-CANVAS MOBILE ── */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── TOPBAR: PROFIL & NOTIFIKASI ── */
function toggleProfile(e) {
  if (e) e.stopPropagation();
  document.getElementById('profileDropdown').classList.toggle('open');
}
function toggleNotif() {
  alert('Belum ada notifikasi baru.');
}
document.addEventListener('click', () => {
  document.getElementById('profileDropdown')?.classList.remove('open');
});

// Menu box click handler
document.querySelectorAll('.menu-box, .qc-card').forEach(box => {
  box.style.cursor = 'pointer';
});

/* ── GENERATOR EMAIL ALIAS ── */
let generatedEmails = [];

function gShowToast(msg) {
  const t = document.getElementById('gToast');
  document.getElementById('gToastMsg').textContent = msg;
  t.style.display = 'flex';
  setTimeout(() => { t.style.display = 'none'; }, 2200);
}

function isValidGmail(email) {
  return /^[a-zA-Z0-9]+@gmail\.com$/i.test(email.trim());
}

function generateDotVariations(username, maxCount) {
  const clean = username.replace(/\./g, '').toLowerCase();
  const n = clean.length;
  const totalPossible = Math.pow(2, n - 1);
  const limit = Math.min(totalPossible, maxCount);
  const results = new Set();
  for (let i = 0; i < totalPossible && results.size < limit; i++) {
    let result = clean[0];
    for (let j = 1; j < n; j++) {
      if (i & (1 << (j - 1))) result += '.';
      result += clean[j];
    }
    results.add(result + '@gmail.com');
  }
  return Array.from(results);
}

function generatorRun() {
  const raw = document.getElementById('emailInput').value.trim().toLowerCase();
  const count = parseInt(document.getElementById('countSelect').value);
  const warn = document.getElementById('warnBox');
  const btn = document.getElementById('genBtn');
  warn.style.display = 'none';
  if (!raw) { warn.textContent = '⚠ Harap masukkan alamat email Gmail LP3H.'; warn.style.display = 'block'; return; }
  if (!isValidGmail(raw)) { warn.textContent = '⚠ Format tidak valid. Gunakan: namaanda@gmail.com (hanya huruf dan angka, tanpa karakter khusus)'; warn.style.display = 'block'; return; }
  btn.disabled = true;
  btn.innerHTML = '<i class="ti ti-refresh" style="display:inline-block;animation:g-spin 1s linear infinite;"></i> Memproses...';
  setTimeout(() => {
    const [username] = raw.split('@');
    const clean = username.replace(/\./g, '');
    const totalPossible = Math.pow(2, clean.length - 1);
    generatedEmails = generateDotVariations(username, count);
    if (generatedEmails.length < count) {
      warn.innerHTML = `⚠ Username "<strong>${clean}</strong>" hanya menghasilkan <strong>${generatedEmails.length}</strong> variasi dari ${count} yang diminta.<br>Untuk lebih banyak alias, gunakan email Gmail berbeda (misal: <em>lp3h.darussunah2@gmail.com</em>).`;
      warn.style.display = 'block';
    }
    document.getElementById('statTotal').textContent = generatedEmails.length;
    document.getElementById('statUsername').textContent = clean;
    document.getElementById('statMax').textContent = totalPossible.toLocaleString('id-ID');
    gRenderList();
    document.getElementById('resultSection').style.display = 'block';
    document.getElementById('emptyState').style.display = 'none';
    btn.disabled = false;
    btn.innerHTML = '<i class="ti ti-bolt"></i> Generate';
    gShowToast(`✓ ${generatedEmails.length} email alias berhasil dibuat`);
  }, 600);
}

function gRenderList() {
  const list = document.getElementById('emailList');
  list.innerHTML = '';
  generatedEmails.forEach((email, i) => {
    const row = document.createElement('div');
    row.className = 'email-row';
    row.innerHTML = `<span class="g-num-badge">${i + 1}</span><span class="email-addr">${email}</span><button class="copy-single" onclick="gCopySingle('${email}',this)" aria-label="Salin ${email}">Salin</button>`;
    list.appendChild(row);
  });
}

function gCopySingle(email, btn) {
  navigator.clipboard.writeText(email).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓';
    setTimeout(() => btn.textContent = orig, 1200);
    gShowToast('Disalin: ' + email);
  });
}

function gCopyAll() {
  if (!generatedEmails.length) return;
  navigator.clipboard.writeText(generatedEmails.join('\n')).then(() => {
    gShowToast(`✓ ${generatedEmails.length} email disalin ke clipboard`);
  });
}

function gDownloadTxt() {
  if (!generatedEmails.length) return;
  const tgl = new Date().toLocaleDateString('id-ID');
  const content = `DAFTAR EMAIL ALIAS — LP3H DARUSSUNAH\nDihasilkan: ${tgl}\nJumlah: ${generatedEmails.length} email\n${'='.repeat(45)}\n\n` + generatedEmails.join('\n');
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = `lp3h-alias-${Date.now()}.txt`; a.click();
  gShowToast('File TXT berhasil diunduh');
}

function gDownloadCsv() {
  if (!generatedEmails.length) return;
  const rows = [['No','Email Alias','Nama Pelaku Usaha','Jenis Usaha','No WA','Keterangan']];
  generatedEmails.forEach((e, i) => rows.push([i+1, e, '', '', '', '']));
  const csv = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = `lp3h-alias-${Date.now()}.csv`; a.click();
  gShowToast('File CSV berhasil diunduh — siap isi data pelaku usaha');
}

document.addEventListener('DOMContentLoaded', () => {
  const emailEl = document.getElementById('emailInput');
  if (emailEl) emailEl.addEventListener('keydown', e => { if (e.key === 'Enter') generatorRun(); });
});
