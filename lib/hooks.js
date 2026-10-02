'use client';
import { useState, useEffect } from 'react';

// Hitung mundur menuju tanggal acara. `passed` bernilai true setelah waktunya lewat,
// supaya tampilan bisa berganti dari angka 00 menjadi ucapan terima kasih.
export function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, passed: false });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const diff = target - Date.now();
      const d = Math.max(0, diff);
      setTimeLeft({
        days: Math.floor(d / (1000 * 60 * 60 * 24)),
        hours: Math.floor((d / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((d / (1000 * 60)) % 60),
        seconds: Math.floor((d / 1000) % 60),
        passed: diff <= 0,
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

// Ambil nama tamu dari query string: ?to=Nama%20Tamu
export function useGuestName(fallback = 'Tamu Undangan') {
  const [name, setName] = useState(fallback);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) setName(decodeURIComponent(to.replace(/\+/g, ' ')));
  }, [fallback]);

  return name;
}
