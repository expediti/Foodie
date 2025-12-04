import React, { useState, useEffect } from 'react';
import { MENU_ITEMS } from './constants';
import { MenuItem, CartItem } from './types';
import { FoodCard } from './components/FoodCard';
import { Cart } from './components/Cart';
import { FoodModal } from './components/FoodModal';
import { ShoppingBag, UtensilsCrossed } from 'lucide-react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // State for Food Details Modal
  const [selectedFood, setSelectedFood] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [scrolled, setScrolled] = useState(false);

  // Categories derived from data
  const categories = ['All', ...Array.from(new Set(MENU_ITEMS.map(i => i.category)))];

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const handleFoodClick = (item: MenuItem) => {
    setSelectedFood(item);
    setIsModalOpen(true);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(i => i.category === activeCategory);

  return (
    <div className="min-h-screen font-sans selection:bg-warm-200 selection:text-warm-900 flex flex-col bg-warm-50/50">
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
             <div className="bg-warm-600 text-white p-2 rounded-xl shadow-lg shadow-warm-600/20">
               <UtensilsCrossed size={24} />
             </div>
             <span className="font-serif text-2xl font-bold text-warm-900 tracking-tight">Foodie</span>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className={`relative p-3 rounded-full transition-all duration-300 ${scrolled ? 'hover:bg-warm-100 text-warm-900' : 'bg-white/50 hover:bg-white text-warm-900 shadow-sm'}`}
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-warm-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm animate-bounce ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-warm-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

        <div className="container mx-auto text-center max-w-3xl relative z-10">
           <span className="inline-block py-1 px-3 rounded-full bg-warm-100 text-warm-700 font-bold tracking-wider text-xs uppercase mb-6 border border-warm-200">
              Est. 2024 • Authentic Indian Cuisine
           </span>
           <h1 className="font-serif text-5xl sm:text-7xl font-black text-warm-900 mb-6 leading-[1.1] tracking-tight">
             Taste the <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-600 to-warm-500">Tradition</span>
           </h1>
           <p className="text-warm-900/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
             Experience culinary excellence with our carefully curated menu of Indian classics. 
             Click on any dish to view its ingredients and details.
           </p>
           
           {/* Categories */}
           <div className="flex flex-wrap justify-center gap-3">
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300 border
                    ${activeCategory === cat 
                      ? 'bg-warm-900 border-warm-900 text-white shadow-lg shadow-warm-900/20 scale-105' 
                      : 'bg-white border-warm-200 text-warm-600 hover:bg-warm-50 hover:border-warm-300'
                    }
                 `}
               >
                 {cat}
               </button>
             ))}
           </div>
        </div>
      </header>

      {/* Menu Grid */}
      <main className="container mx-auto px-4 sm:px-6 pb-20 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredItems.map(item => (
             <FoodCard 
                key={item.id} 
                item={item} 
                onAdd={addToCart} 
                onClick={handleFoodClick}
             />
           ))}
        </div>
        
        {filteredItems.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-warm-400 gap-4">
                <UtensilsCrossed size={48} className="opacity-20" />
                <p className="text-lg">No items found in this category.</p>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="text-warm-600 font-medium hover:underline"
                >
                  View all items
                </button>
            </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-warm-900 text-warm-100 py-10 mt-auto">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-4">
           <div className="flex items-center gap-2 mb-2">
             <div className="bg-warm-800 p-2 rounded-full">
               <UtensilsCrossed size={20} className="text-warm-200" />
             </div>
             <span className="font-serif font-bold text-xl tracking-tight text-white">Foodie</span>
           </div>
           
           <p className="font-serif italic text-lg text-warm-200">Built by Aman</p>
           
           <p className="text-xs text-warm-500 mt-4 border-t border-warm-800 pt-6 w-full text-center max-w-md">
             &copy; {new Date().getFullYear()} Foodie Restaurant. All rights reserved. <br/>
             Images courtesy of Unsplash.
           </p>
        </div>
      </footer>

      {/* Components */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <FoodModal 
        item={selectedFood}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={addToCart}
      />
      
    </div>
  );
}