'use client';
import { useState } from 'react';
import { UserPlus, Check } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

const badgeRot = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg', '1deg'];

// Dinding "Sudah Hadir": daftar yang konfirmasi + form RSVP yang menambah nama.
export default function Attendees() {
  const { attendees: initial } = config;
  const [list, setList] = useState(initial);
  const [name, setName] = useState('');
  const [justAdded, setJustAdded] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const n = name.trim();
    if (!n) return;
    // TODO: kirim ke backend/Firebase
    setList((prev) => [n, ...prev]);
    setName('');
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2500);
  };

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="font-script text-3xl text-rose-deep sm:text-4xl">Sampai jumpa!</p>
          <h2 className="mt-1 font-display text-3xl text-rose">Sudah Hadir</h2>
          <p className="mt-3 text-sm font-semibold text-muted">{list.length} sahabat sudah konfirmasi hadir</p>
        </Reveal>

        {/* Form RSVP */}
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-md">
          <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tulis namamu..."
              className="w-full rounded-full border-2 border-rose-deep/30 bg-cream px-5 py-3 text-sm font-semibold outline-none focus:border-rose"
              required
            />
            <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-bold text-cream transition hover:bg-rose-deep">
              <UserPlus size={16} /> Saya Hadir!
            </button>
          </form>
          {justAdded && (
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-rose">
              <Check size={15} /> Asik, namamu sudah ditempel di dinding!
            </p>
          )}
        </Reveal>

        {/* Dinding nama */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {list.map((n, i) => (
            <span
              key={`${n}-${i}`}
              style={{ rotate: badgeRot[i % badgeRot.length] }}
              className="border border-rose-deep/20 bg-cream px-4 py-2 text-sm font-bold text-ink shadow-sm"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
