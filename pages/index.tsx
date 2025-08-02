import { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import VideoModal from '../components/VideoModal';

const Particles = dynamic(() => import('react-tsparticles'), { ssr: false });

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <Head>
        <title>Surprise Birthday!</title>
      </Head>

      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: { detectsOn: 'canvas', events: { resize: true } },
          particles: {
            number: { value: 100 },
            shape: { type: ['circle', 'star'] },
            size: { value: { min: 4, max: 8 } },
            move: { direction: 'bottom', enable: true, speed: 2 }
          }
        }}
      />

      <div className="fixed inset-0 flex items-center justify-center">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => setShowVideo(true)}
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:scale-105 transform transition"
        >
          Click Here Neggaa
        </motion.button>
      </div>

      <AnimatePresence>
        {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
      </AnimatePresence>
    </>
  );
}