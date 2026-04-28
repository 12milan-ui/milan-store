'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Play } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Full Screen Animated Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-[120px] md:text-[160px] font-light tracking-[-6px] leading-none mb-6">
              MILAN
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-3xl font-light tracking-wide mb-16 max-w-2xl"
          >
            Where craftsmanship meets contemporary elegance
          </motion.p>

          {/* Buttons with Hover Animation */}
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/shop">
                <button className="group bg-white text-black px-12 py-5 rounded-full font-medium text-lg flex items-center gap-3 hover:bg-neutral-200 transition-all duration-300">
                  <ShoppingBag className="w-6 h-6 group-hover:rotate-12 transition" />
                  Shop Collection
                </button>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="group border-2 border-white/80 hover:border-white px-12 py-5 rounded-full font-medium text-lg flex items-center gap-3 transition-all duration-300">
                <Play className="w-6 h-6" />
                Watch The Film
              </button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 text-sm"
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-2"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}