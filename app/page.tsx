'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Play } from 'lucide-react';

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-light tracking-[-4px] mb-6"
          >
            MILAN
          </motion.h1>
          <p className="text-2xl md:text-3xl font-light max-w-md mb-12">
            Premium Sneakers & Tailored Suits
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/shop">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black px-10 py-4 rounded-full font-medium flex items-center gap-3 text-lg"
              >
                <ShoppingBag size={22} /> Shop Collection
              </motion.button>
            </Link>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="border border-white px-10 py-4 rounded-full font-medium flex items-center gap-3 text-lg"
            >
              <Play size={22} /> Watch Film
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}