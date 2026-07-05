'use client';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Box({ value, label }) {
  return (
    <div className="flex h-20 w-20 -rotate-1 flex-col items-center justify-center border-2 border-rose-deep/30 bg-cream shadow-sm odd:rotate-1 md:h-24 md:w-24">
      <span className="font-display text-2xl text-rose md:text-3xl">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] font-bold uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

// Hitung mundur menuju reuni.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(config.mainDate);
  return (
    <section className="relative z-10 bg-blush/50 px-6 py-20">
      <Reveal className="text-center">
        <p className="font-script text-3xl text-rose-deep sm:text-4xl">Kumpul lagi dalam...</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Box value={days} label="Hari" />
          <Box value={hours} label="Jam" />
          <Box value={minutes} label="Menit" />
          <Box value={seconds} label="Detik" />
        </div>
      </Reveal>
    </section>
  );
}
