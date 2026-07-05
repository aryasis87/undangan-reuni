import { CalendarDays, Clock, MapPin, Shirt, CalendarPlus } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { googleCalendarUrl } from '@/lib/utils';

// Detail acara sebagai catatan tertempel (sticky note retro).
export default function EventNote() {
  const { event, meta, location } = config;
  const calUrl = googleCalendarUrl(event, { title: meta.title, location: location.label });
  const rows = [
    { icon: CalendarDays, text: event.date },
    { icon: Clock, text: event.time },
    { icon: MapPin, text: `${event.venue}, ${event.address}` },
    { icon: Shirt, text: `Dresscode: ${event.dresscode}` },
  ];
  return (
    <section className="relative z-10 px-6 py-20">
      <Reveal className="mx-auto max-w-md">
        <div className="relative -rotate-1 border-2 border-dashed border-rose-deep/40 bg-cream p-8 shadow-md">
          <span className="tape" aria-hidden="true" />
          <p className="text-center font-script text-3xl text-rose-deep">Save the Date</p>
          <h2 className="mt-1 text-center font-display text-xl text-rose">{event.name}</h2>

          <ul className="mt-6 space-y-3">
            {rows.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-start gap-3 text-sm font-semibold text-ink">
                <Icon size={17} className="mt-0.5 shrink-0 text-rose" /> {text}
              </li>
            ))}
          </ul>

          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-full bg-rose py-3 text-sm font-bold text-cream transition hover:bg-rose-deep"
          >
            <CalendarPlus size={15} /> Tambah ke Kalender
          </a>
        </div>
      </Reveal>
    </section>
  );
}
