'use client';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Box({ value, label }) {
  return (
    <div className="flex aspect-square -rotate-1 flex-col items-center justify-center border-2 border-rose-deep/30 bg-cream shadow-sm odd:rotate-1">
      <span className="font-display text-2xl tabular-nums text-rose md:text-3xl">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] font-bold uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

// Hitung mundur menuju reuni; setelah lewat berganti jadi ucapan terima kasih.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds, passed } = useCountdown(config.mainDate);
  return (
    <section className="relative z-10 bg-blush/50 px-6 py-20">
      <Reveal className="text-center">
        <p className="font-script text-3xl text-rose-deep sm:text-4xl">{passed ? 'Reuni sudah digelar!' : 'Kumpul lagi dalam...'}</p>
        {passed ? (
          <p className="mx-auto mt-5 max-w-sm text-sm font-semibold text-ink">
            Terima kasih sudah datang. Sampai jumpa di reuni berikutnya!
          </p>
        ) : (
          <div className="mx-auto mt-7 grid max-w-xs grid-cols-4 gap-2 sm:max-w-md sm:gap-4" role="timer" aria-label={`${days} hari ${hours} jam ${minutes} menit lagi`}>
            <Box value={days} label="Hari" />
            <Box value={hours} label="Jam" />
            <Box value={minutes} label="Menit" />
            <Box value={seconds} label="Detik" />
          </div>
        )}
      </Reveal>
    </section>
  );
}
