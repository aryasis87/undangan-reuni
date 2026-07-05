// Helper murni (tanpa state) yang dipakai beberapa komponen.

// Format Date -> string UTC untuk Google Calendar: YYYYMMDDTHHmmssZ
function toCalDate(iso) {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

// Bangun URL "Tambah ke Google Calendar" dari satu event.
export function googleCalendarUrl(event, { title, location } = {}) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title ? `${title} — ${event.name}` : event.name,
    dates: `${toCalDate(event.start)}/${toCalDate(event.end)}`,
    details: `${event.name} • ${event.date} • ${event.time}`,
    location: location || `${event.venue}, ${event.address}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// URL share ke WhatsApp. `url` opsional (default: alamat halaman saat ini).
export function whatsappShareUrl(text, url) {
  const link = url ?? (typeof window !== 'undefined' ? window.location.href : '');
  return `https://wa.me/?text=${encodeURIComponent(`${text}\n${link}`)}`;
}
