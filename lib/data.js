// ============================================================
//  KONFIGURASI UNDANGAN — Reuni (Yearbook / Scrapbook Retro)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Reuni Akbar Angkatan 2010 — SMA Harapan Bangsa',
    description: 'Welcome back! Kumpul lagi, kenang masa-masa sekolah di reuni akbar angkatan 2010.',
  },

  // -- Identitas reuni --
  reunion: {
    title: 'Reuni Akbar',
    angkatan: 'Angkatan 2010',
    school: 'SMA Harapan Bangsa',
    tagline: 'Welcome back, Sahabat!',
    cover: 'Album Kenangan',
  },

  // -- Tanggal acara (ISO) untuk countdown --
  mainDate: '2026-12-27T17:00:00+07:00',

  // -- Detail acara --
  event: {
    name: 'Reuni Akbar Angkatan 2010',
    date: 'Minggu, 27 Desember 2026',
    time: '17.00 WIB - selesai',
    venue: 'Aula SMA Harapan Bangsa',
    address: 'Jl. Pelajar No. 10, Bandung',
    dresscode: 'Retro / Old School',
    start: '2026-12-27T17:00:00+07:00',
    end: '2026-12-27T22:00:00+07:00',
  },

  // -- Throwback / kilas balik angkatan --
  throwback: [
    { year: '2007', title: 'Awal Masuk', desc: 'Pertama kali menginjak SMA, MOS, dan kenalan baru.' },
    { year: '2009', title: 'Masa Jaya', desc: 'Pensi, classmeeting, dan kenangan paling seru sepanjang masa.' },
    { year: '2010', title: 'Kelulusan', desc: 'Coret-coret seragam, perpisahan, dan janji untuk reuni.' },
    { year: '2026', title: 'Kumpul Lagi', desc: '16 tahun berlalu — saatnya bernostalgia bareng!' },
  ],

  // -- Galeri polaroid (foto + caption tulisan tangan) --
  gallery: [
    { src: 'https://placehold.co/600x600/c8553d/f4ecd9.png?text=Kenangan+1', caption: 'Class of 2010' },
    { src: 'https://placehold.co/600x600/e2a44f/3a2c22.png?text=Kenangan+2', caption: 'Study tour!' },
    { src: 'https://placehold.co/600x600/6e3a2c/f4ecd9.png?text=Kenangan+3', caption: 'Pensi legendaris' },
    { src: 'https://placehold.co/600x600/e2a44f/3a2c22.png?text=Kenangan+4', caption: 'Geng kelas XII' },
    { src: 'https://placehold.co/600x600/c8553d/f4ecd9.png?text=Kenangan+5', caption: 'Wisuda SMA' },
    { src: 'https://placehold.co/600x600/6e3a2c/f4ecd9.png?text=Kenangan+6', caption: 'Sahabat selamanya' },
  ],

  // -- Daftar yang sudah konfirmasi hadir (dinding "Sudah Hadir") --
  attendees: [
    'Andi Pratama', 'Bunga Lestari', 'Citra Dewi', 'Doni Saputra',
    'Eka Putri', 'Fajar Nugroho', 'Gita Rahma', 'Hadi Wijaya',
  ],

  // -- Lokasi (embed Google Maps) --
  location: {
    label: 'Aula SMA Harapan Bangsa, Bandung',
    mapEmbed: 'https://www.google.com/maps?q=Gedung+Sate+Bandung&output=embed',
    mapLink: 'https://maps.google.com/?q=Gedung+Sate+Bandung',
  },

  // -- Musik latar (taruh file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/song.mp3',
    title: 'Throwback Song',
  },

  // -- Footer --
  footer: {
    closing: 'Ayo kumpul, lengkapi cerita lama dengan kenangan baru. Sampai jumpa di reuni!',
    hashtag: '#Reuni2010',
  },
};

export default config;
