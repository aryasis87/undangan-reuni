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

// Alamat undangan tanpa query (?to=...), supaya nama tamu tidak ikut terbagikan.
export function invitationUrl() {
  if (typeof window === 'undefined') return '';
  return `${window.location.origin}/`;
}

// Tautan undangan pribadi untuk satu tamu: https://.../?to=Nama+Tamu
export function guestUrl(name) {
  return `${invitationUrl()}?to=${encodeURIComponent(name.trim()).replace(/%20/g, '+')}`;
}

// URL share ke WhatsApp. `url` opsional (default: alamat undangan tanpa nama tamu).
export function whatsappShareUrl(text, url) {
  const link = url ?? invitationUrl();
  return `https://wa.me/?text=${encodeURIComponent(link ? `${text}\n${link}` : text)}`;
}
