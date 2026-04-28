'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Play, ArrowDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <Image
            src="/hero-background.png"
            alt="Milan Premium Fashion"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

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
              <button className="border-2 border-white/80 hover:border-white px-14 py-5 rounded-full font-medium text-lg flex items-center gap-3 transition backdrop-blur-sm bg-black/20">
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
          <span className="text-sm tracking-widest mb-2">DISCOVER MORE</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
            <ArrowDown size={28} />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-32 px-6 md:px-20 max-w-[1600px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900 mb-4">Latest Arrivals</h2>
            <p className="text-neutral-500 text-lg max-w-md">Curated pieces that define modern luxury. Meticulously designed for the discerning individual.</p>
          </div>
          <Link href="/shop" className="hidden md:flex items-center gap-2 text-neutral-900 font-medium hover:opacity-70 transition border-b border-black pb-1">
            View All <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Product 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-6">
              <Image 
                src="/sneaker-1.png" 
                alt="Premium Leather Sneaker" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-neutral-100">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-neutral-900">Monochrome Leather Sneaker</h3>
                <p className="text-neutral-500 mt-1">Italian Leather / Off-White</p>
              </div>
              <span className="text-xl font-medium">$450</span>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group cursor-pointer md:mt-24"
          >
            <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden mb-6">
              <Image 
                src="/suit-1.png" 
                alt="Tailored Navy Suit" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <button className="bg-white text-black px-8 py-4 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-neutral-100">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium text-neutral-900">Signature Tailored Suit</h3>
                <p className="text-neutral-500 mt-1">Merino Wool / Midnight Blue</p>
              </div>
              <span className="text-xl font-medium">$1,200</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Craftsmanship Section (Split Layout) */}
      <section className="bg-neutral-950 text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="p-12 md:p-24 lg:p-32 flex flex-col justify-center"
          >
            <span className="text-neutral-400 tracking-widest text-sm uppercase mb-6 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              The Art of<br />True Craftsmanship
            </h2>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-xl">
              Every piece in our collection is born from a relentless pursuit of perfection. We partner with master artisans across Europe, combining generations of traditional techniques with modern design sensibilities to create garments that transcend seasons.
            </p>
            <div>
              <Link href="/about">
                <button className="border-b border-white pb-2 hover:text-neutral-300 hover:border-neutral-300 transition flex items-center gap-4 text-lg">
                  Discover Our Story <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[60vh] lg:h-auto w-full"
          >
            <Image 
              src="/craftsmanship.png" 
              alt="Master tailor at work" 
              fill 
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}