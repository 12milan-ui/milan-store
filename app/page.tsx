'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Play, ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <h1 className="text-[110px] md:text-[150px] font-light tracking-[-8px] leading-none mb-4">
              MILAN
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl md:text-3xl font-light max-w-xl mb-16 tracking-wide"
          >
            Timeless Craftsmanship. Modern Elegance.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href="/shop">
                <button className="bg-white text-black px-14 py-5 rounded-full font-medium text-lg flex items-center gap-3 hover:bg-neutral-100 transition">
                  <ShoppingBag size={24} />
                  Shop Collection
                </button>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <button className="border-2 border-white/80 hover:border-white px-14 py-5 rounded-full font-medium text-lg flex items-center gap-3 transition">
                <Play size={24} />
                Watch Cinematic Film
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Prompt */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center"
        >
          <span className="text-sm tracking-widest">DISCOVER MORE</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <ArrowDown size={28} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}