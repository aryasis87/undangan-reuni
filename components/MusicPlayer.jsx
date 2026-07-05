'use client';
import { useEffect, useRef, useState } from 'react';
import { Music, Pause } from 'lucide-react';
import config from '@/lib/data';

// Tombol musik latar mengambang. `playing` dipicu saat undangan dibuka.
export default function MusicPlayer({ playing }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!config.music.enabled || !audioRef.current) return;
    if (playing) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [playing]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  if (!config.music.enabled) return null;

  return (
    <>
      <audio ref={audioRef} src={config.music.src} loop preload="none" />
      <button
        onClick={toggle}
        aria-label="Putar/jeda musik"
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-rose-deep text-cream shadow-lg transition hover:bg-ink"
      >
        {isPlaying ? <Pause size={18} /> : <Music size={18} className="animate-pulse" />}
      </button>
    </>
  );
}
