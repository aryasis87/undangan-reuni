'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import ScrapbookCover from '@/components/ScrapbookCover';
import Hero from '@/components/Hero';
import EventNote from '@/components/EventNote';
import CountdownTimer from '@/components/CountdownTimer';
import Throwback from '@/components/Throwback';
import PolaroidGallery from '@/components/PolaroidGallery';
import Attendees from '@/components/Attendees';
import MapEmbed from '@/components/MapEmbed';
import Memories from '@/components/Memories';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      <AnimatePresence>
        {!opened && <ScrapbookCover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <div className="relative z-10">
          <Hero />
          <EventNote />
          <CountdownTimer />
          <Throwback />
          <PolaroidGallery />
          <Attendees />
          <MapEmbed />
          <Memories />
          <Footer />
          <MusicPlayer playing={opened} />
        </div>
      )}
    </main>
  );
}
