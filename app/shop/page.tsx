export default function ShopPage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-light text-center mb-4">Our Collection</h1>
        <p className="text-center text-neutral-600 mb-12">Premium Sneakers & Tailored Suits</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder Product Cards */}
          {[1,2,3,4,5,6].map((item) => (
            <div key={item} className="border border-neutral-200 rounded-2xl overflow-hidden group">
              <div className="h-80 bg-neutral-100 flex items-center justify-center">
                <span className="text-4xl text-neutral-400">👟</span>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-lg">Premium Sneaker {item}</h3>
                <p className="text-neutral-500 mt-1">Rs. 12,999</p>
                <button className="mt-4 w-full bg-black text-white py-3 rounded-xl hover:bg-neutral-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}