'use client';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import Polaroid from './Polaroid';

// Sampul scrapbook (porting Stitch "Nostalgic Scrapbook"): doodle, stempel,
// tumpukan polaroid + caption tulisan tangan.
export default function ScrapbookCover({ onOpen }) {
  const guest = useGuestName();
  const { reunion, gallery } = config;
  const year = (reunion.angkatan.match(/\d{4}/) || [''])[0];

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-y-auto bg-blush"
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {/* Doodle melayang */}
      <div className="pointer-events-none absolute inset-0 select-none font-script text-3xl text-gold/70" aria-hidden="true">
        <span className="animate-floaty absolute left-8 top-12">✦</span>
        <span className="animate-floaty absolute right-10 top-24 [animation-delay:1s]">★</span>
        <span className="animate-floaty absolute left-10 bottom-28 text-4xl [animation-delay:2s]">~</span>
        <span className="animate-floaty absolute right-12 top-1/2 [animation-delay:1.5s]">✿</span>
      </div>

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-rose-deep"
        >
          Reuni &amp; Temu Kangen
        </motion.p>

        {/* Tumpukan polaroid + stempel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.6, type: 'spring' }}
          className="relative mx-auto my-8 h-60 w-64"
        >
          {/* Stempel "Since" */}
          {year && (
            <div className="absolute -right-1 -top-3 z-20 flex h-20 w-20 rotate-12 flex-col items-center justify-center rounded-full border-2 border-rose-deep bg-gold text-center text-ink shadow-md">
              <span className="text-[10px] font-bold uppercase leading-tight">Since</span>
              <span className="font-display text-base leading-tight">{year}</span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-6 w-32"><Polaroid src={gallery[1].src} rotate="-8deg" className="w-full" /></div>
            <div className="absolute right-2 top-3 w-32"><Polaroid src={gallery[2].src} rotate="7deg" className="w-full" /></div>
            <div className="absolute left-1/2 top-0 w-40 -translate-x-1/2"><Polaroid src={gallery[0].src} caption="Good times..." rotate="-1deg" className="w-full" /></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="break-words font-display text-4xl text-rose sm:text-5xl"
        >
          {reunion.title}
        </motion.h1>
        <p className="mt-2 font-script text-2xl text-ink">{reunion.school}</p>

        <div className="mt-7 -rotate-1 rounded-lg border-2 border-dashed border-rose-deep/40 bg-cream px-5 py-3">
          <p className="text-xs font-bold uppercase tracking-wide text-muted">Halo,</p>
          <p className="text-base font-bold text-ink">{guest}</p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="mt-7 inline-flex items-center gap-2 rounded-md border-2 border-ink bg-rose px-8 py-3 text-sm font-bold text-cream shadow-[4px_4px_0_var(--color-ink)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_var(--color-ink)]"
        >
          <BookOpen size={16} /> Buka Album
        </motion.button>
      </div>
    </motion.section>
  );
}
