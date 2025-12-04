import React from 'react';
import { MenuItem } from '../types';
import { Plus, Flame, Leaf, Utensils } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
  onClick: (item: MenuItem) => void;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item, onAdd, onClick }) => {
  return (
    <div 
      onClick={() => onClick(item)}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-warm-100 flex flex-col h-full cursor-pointer hover:-translate-y-1"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity group-hover:opacity-40"></div>
        
        <div className="absolute top-3 left-3 flex gap-2">
          {item.spicy && (
            <span className="bg-red-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm uppercase tracking-wide">
              <Flame size={10} fill="currentColor" /> Spicy
            </span>
          )}
          {item.vegetarian && (
            <span className="bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm uppercase tracking-wide">
              <Leaf size={10} fill="currentColor" /> Veg
            </span>
          )}
        </div>
        
        <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-warm-900 font-bold shadow-lg border border-warm-100 text-sm">
          ${item.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative">
        <div className="mb-4">
            <h3 className="font-serif text-2xl font-bold text-warm-900 leading-tight mb-2 group-hover:text-warm-600 transition-colors">{item.name}</h3>
            <p className="text-warm-800/70 text-sm leading-relaxed line-clamp-2">
              {item.description}
            </p>
        </div>
        
        {/* Recipe / Ingredients Section */}
        <div className="mb-6 flex-grow">
          <div className="flex items-center gap-1 text-warm-400 mb-2">
            <Utensils size={12} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Recipe Includes</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {item.ingredients.slice(0, 3).map((ing, i) => (
              <span key={i} className="inline-block px-2 py-0.5 bg-warm-50 border border-warm-100 rounded-md text-[10px] text-warm-700 font-medium">
                {ing}
              </span>
            ))}
            {item.ingredients.length > 3 && (
               <span className="inline-block px-2 py-0.5 bg-warm-50 border border-warm-100 rounded-md text-[10px] text-warm-400 font-medium">
                +{item.ingredients.length - 3} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-warm-100">
           <span className="text-xs font-medium text-warm-400 uppercase tracking-wider">{item.calories} kCal</span>
           <button
             onClick={(e) => {
               e.stopPropagation();
               onAdd(item);
             }}
             className="bg-warm-100 hover:bg-warm-600 text-warm-700 hover:text-white pl-4 pr-3 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 group/btn font-bold text-xs uppercase tracking-wider"
             aria-label="Add to cart"
           >
             Add to Order <Plus size={16} className="transition-transform group-hover/btn:rotate-90" />
           </button>
        </div>
      </div>
    </div>
  );
};