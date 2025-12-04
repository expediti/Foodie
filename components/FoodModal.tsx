import React from 'react';
import { MenuItem } from '../types';
import { X, Plus, Flame, Leaf, Utensils, ChefHat } from 'lucide-react';

interface FoodModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAdd: (item: MenuItem) => void;
}

export const FoodModal: React.FC<FoodModalProps> = ({ item, isOpen, onClose, onAdd }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ zIndex: 100 }}>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col sm:flex-row animate-in fade-in zoom-in-95 duration-300">
        
        {/* Image Section */}
        <div className="w-full sm:w-1/2 h-64 sm:h-auto relative group">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>
          <button onClick={onClose} className="absolute top-4 left-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full sm:hidden backdrop-blur-md transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content Section */}
        <div className="w-full sm:w-1/2 p-6 sm:p-10 flex flex-col overflow-y-auto bg-warm-50/50">
          <div className="hidden sm:flex justify-end mb-2">
             <button onClick={onClose} className="text-warm-400 hover:text-warm-800 transition-colors p-1 rounded-full hover:bg-warm-100">
               <X size={24} />
             </button>
          </div>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
             {item.spicy && <span className="text-red-600 flex items-center gap-1.5 text-xs font-bold bg-red-100 border border-red-200 px-3 py-1 rounded-full uppercase tracking-wider"><Flame size={12} fill="currentColor" /> Spicy</span>}
             {item.vegetarian && <span className="text-green-700 flex items-center gap-1.5 text-xs font-bold bg-green-100 border border-green-200 px-3 py-1 rounded-full uppercase tracking-wider"><Leaf size={12} fill="currentColor" /> Veg</span>}
             <span className="text-warm-600 text-xs font-bold bg-warm-100 border border-warm-200 px-3 py-1 rounded-full uppercase tracking-wider">{item.calories} kCal</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4 leading-tight">{item.name}</h2>
          
          <p className="text-warm-800/80 text-lg leading-relaxed mb-8">
            {item.description}
          </p>

          <div className="bg-white p-6 rounded-2xl border border-warm-100 shadow-sm mb-8">
            <div className="flex items-center gap-2 mb-4 text-warm-600 border-b border-warm-100 pb-2">
               <ChefHat size={20} />
               <h3 className="font-bold uppercase tracking-widest text-sm">Chef's Recipe</h3>
            </div>
            
            <div className="space-y-3">
              <p className="text-xs text-warm-400 font-medium uppercase tracking-wider mb-2">Key Ingredients</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                 {item.ingredients.map((ing, i) => (
                   <li key={i} className="flex items-start gap-2 text-warm-700 text-sm font-medium">
                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-warm-400 shrink-0" />
                     {ing}
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-warm-200 flex items-center justify-between gap-6">
             <div className="flex flex-col">
                <span className="text-xs text-warm-500 font-bold uppercase tracking-wider">Total Price</span>
                <span className="font-serif text-4xl font-bold text-warm-900">${item.price}</span>
             </div>
             <button 
               onClick={() => { onAdd(item); onClose(); }}
               className="flex-1 bg-warm-600 hover:bg-warm-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-warm-200 active:scale-95 flex items-center justify-center gap-2"
             >
               Add to Order <Plus size={20} />
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}