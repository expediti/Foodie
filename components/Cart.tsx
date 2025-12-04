import React from 'react';
import { CartItem } from '../types';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 bg-warm-50 border-b border-warm-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <ShoppingBag className="text-warm-600" />
             <h2 className="font-serif text-2xl font-bold text-warm-900">Your Order</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-warm-200 rounded-full transition-colors text-warm-600">
            <X size={24} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
             <div className="h-full flex flex-col items-center justify-center text-warm-300 gap-4">
                <ShoppingBag size={64} className="opacity-20" />
                <p className="font-medium">Your plate is empty.</p>
                <button onClick={onClose} className="text-warm-600 hover:underline">Go to Menu</button>
             </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4">
                <img 
                   src={item.imageUrl} 
                   alt={item.name} 
                   className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-grow flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                     <h4 className="font-bold text-warm-900 line-clamp-2 leading-tight">{item.name}</h4>
                     <button onClick={() => onRemove(item.id)} className="text-warm-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                     </button>
                   </div>
                   <div className="flex items-center justify-between mt-2">
                      <span className="font-bold text-warm-700">${item.price * item.quantity}</span>
                      <div className="flex items-center gap-3 bg-warm-50 rounded-full px-2 py-1 border border-warm-100">
                        <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm text-warm-600 hover:bg-warm-100"
                        >
                            <Minus size={12} />
                        </button>
                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                        <button 
                             onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-sm text-warm-600 hover:bg-warm-100"
                        >
                            <Plus size={12} />
                        </button>
                      </div>
                   </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-warm-50 border-t border-warm-100">
             <div className="flex justify-between items-center mb-6">
                <span className="text-warm-600 font-medium">Total</span>
                <span className="text-3xl font-serif font-bold text-warm-900">${total.toFixed(2)}</span>
             </div>
             <button className="w-full bg-warm-600 hover:bg-warm-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-warm-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                Checkout <span className="opacity-70">|</span> ${total.toFixed(2)}
             </button>
          </div>
        )}
      </div>
    </>
  );
};