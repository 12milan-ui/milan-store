'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Search, X, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const allProducts = [
  { id: 1, name: "Phantom Low", price: 14999, category: "Sneakers", image: "/sneaker_phantom.png", sizes: ["40", "41", "42", "43"] },
  { id: 2, name: "Velocity Runner", price: 12999, category: "Sneakers", image: "/sneaker_velocity.png", sizes: ["39", "40", "41", "42"] },
  { id: 3, name: "Italian Wool Suit", price: 24999, category: "Suits", image: "/suit-1.png", sizes: ["S", "M", "L"] },
  { id: 4, name: "Shadow Boost", price: 16499, category: "Sneakers", image: "/sneaker-1.png", sizes: ["41", "42", "43", "44"] },
  { id: 5, name: "Midnight Tailored Suit", price: 32999, category: "Suits", image: "/suit-1.png", sizes: ["M", "L", "XL"] },
  { id: 6, name: "Eclipse Premium", price: 18999, category: "Sneakers", image: "/sneaker_velocity.png", sizes: ["40", "41", "42"] },
  { id: 7, name: "Royal Blue Suit", price: 28999, category: "Suits", image: "/suit-1.png", sizes: ["L", "XL"] },
  { id: 8, name: "Urban Classic", price: 13999, category: "Sneakers", image: "/sneaker-1.png", sizes: ["39", "40", "41"] },
];

type CartItem = {
  product: any;
  size: string;
  quantity: number;
};

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Sneakers" | "Suits">("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const addToCart = (product: any, size: string) => {
    const existing = cart.findIndex(item => item.product.id === product.id && item.size === size);
    
    if (existing !== -1) {
      const updatedCart = [...cart];
      updatedCart[existing].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, size, quantity: 1 }]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-light">Our Collection</h1>
          <p className="text-neutral-600 mt-3">Discover premium sneakers and tailored suits</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-5 top-4 text-neutral-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 border border-neutral-200 rounded-2xl focus:outline-none focus:border-black"
            />
          </div>

          <div className="flex gap-3">
            {["All", "Sneakers", "Suits"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as "All" | "Sneakers" | "Suits")}
                className={`px-8 py-4 rounded-2xl font-medium transition-all ${
                  selectedCategory === cat ? 'bg-black text-white' : 'bg-neutral-100 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-square bg-neutral-100">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                <button
                  onClick={() => {
                    const newWishlist = wishlist.includes(product.id) 
                      ? wishlist.filter(id => id !== product.id)
                      : [...wishlist, product.id];
                    setWishlist(newWishlist);
                  }}
                  className="absolute top-5 right-5 bg-white/90 p-3 rounded-full hover:bg-white transition"
                >
                  <Heart 
                    size={20} 
                    className={wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-neutral-700"} 
                  />
                </button>

                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-8 py-3 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Quick View
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-light">{product.name}</h3>
                <p className="text-neutral-500">Rs. {product.price.toLocaleString()}</p>
                
                <button 
                  onClick={() => setQuickViewProduct(product)}
                  className="mt-6 w-full bg-black hover:bg-neutral-800 text-white py-4 rounded-2xl transition"
                >
                  ADD TO CART
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-lg w-full rounded-3xl overflow-hidden"
            >
              <div className="relative">
                <button onClick={() => setQuickViewProduct(null)} className="absolute top-6 right-6 z-10 bg-white rounded-full p-3">
                  <X size={24} />
                </button>
                <Image src={quickViewProduct.image} alt={quickViewProduct.name} width={600} height={600} className="w-full" />
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-light">{quickViewProduct.name}</h2>
                <p className="text-3xl mt-2">Rs. {quickViewProduct.price.toLocaleString()}</p>

                <div className="mt-8">
                  <p className="font-medium mb-3">Select Size</p>
                  <div className="flex flex-wrap gap-3">
                    {quickViewProduct.sizes.map((size: string) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 border rounded-xl transition ${selectedSize === size ? 'bg-black text-white border-black' : 'border-neutral-300 hover:border-black'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-10 flex gap-4">
                  <button 
                    onClick={() => {
                      if (selectedSize) {
                        addToCart(quickViewProduct, selectedSize);
                        setQuickViewProduct(null);
                        setSelectedSize("");
                      } else {
                        alert("Please select a size");
                      }
                    }}
                    className="flex-1 bg-black text-white py-5 rounded-2xl text-lg font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-[70] flex">
            <div className="flex-1 bg-black/50" onClick={() => setIsCartOpen(false)} />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="w-full max-w-md bg-white h-full overflow-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-light">Your Cart</h2>
                  <button onClick={() => setIsCartOpen(false)}><X size={28} /></button>
                </div>

                {cart.length === 0 ? (
                  <p className="text-center text-neutral-500 py-12">Your cart is empty</p>
                ) : (
                  <>
                    {cart.map((item, index) => (
                      <div key={index} className="flex gap-4 border-b pb-6 mb-6">
                        <Image src={item.product.image} alt="" width={80} height={80} className="rounded-xl" />
                        <div className="flex-1">
                          <h4>{item.product.name}</h4>
                          <p className="text-sm text-neutral-500">Size: {item.size}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <button onClick={() => updateQuantity(index, item.quantity - 1)}><Minus size={16} /></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(index, item.quantity + 1)}><Plus size={16} /></button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p>Rs. {(item.product.price * item.quantity).toLocaleString()}</p>
                          <button onClick={() => removeFromCart(index)} className="text-red-500 text-sm mt-2">Remove</button>
                        </div>
                      </div>
                    ))}

                    <div className="mt-8 pt-6 border-t">
                      <div className="flex justify-between text-xl font-medium">
                        <span>Total</span>
                        <span>Rs. {totalPrice.toLocaleString()}</span>
                      </div>
                      <button className="w-full mt-6 bg-black text-white py-5 rounded-2xl text-lg">
                        Proceed to Checkout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}