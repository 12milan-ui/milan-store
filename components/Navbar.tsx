'use client';
import Link from 'next/link';
import { ShoppingBag, Heart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-light tracking-tighter">MILAN</Link>
        
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/shop">Shop</Link>
          <Link href="/sneakers">Sneakers</Link>
          <Link href="/suits">Suits</Link>
        </div>

        <div className="flex gap-6 items-center">
          <Heart className="w-5 h-5 cursor-pointer hover:text-neutral-500" />
          <User className="w-5 h-5 cursor-pointer hover:text-neutral-500" />
          <Link href="/cart">
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-neutral-500" />
          </Link>
        </div>
      </div>
    </nav>
  );
}