import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 's1',
    name: 'Crispy Vegetable Samosas',
    description: 'Golden fried pastry triangles filled with spiced potatoes, green peas, and cashews. Served with tamarind chutney.',
    ingredients: ['Potatoes', 'Green Peas', 'Maida Flour', 'Cumin', 'Coriander Seeds', 'Cashews', 'Tamarind Chutney'],
    price: 6,
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
    calories: 280,
    vegetarian: true
  },
  {
    id: 's2',
    name: 'Paneer Tikka',
    description: 'Chunks of fresh paneer marinated in yogurt and tandoori spices, grilled to perfection in a clay oven.',
    ingredients: ['Paneer (Cottage Cheese)', 'Yogurt', 'Kashmiri Chili', 'Lemon Juice', 'Bell Peppers', 'Onions', 'Chaat Masala'],
    price: 11,
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop',
    calories: 320,
    vegetarian: true,
    spicy: true
  },
  {
    id: 's3',
    name: 'Pani Puri',
    description: 'Crispy hollow dough balls stuffed with boiled potatoes and chickpeas, served with spicy mint water and sweet tamarind water.',
    ingredients: ['Semolina', 'Mint', 'Tamarind', 'Potatoes', 'Chickpeas', 'Chaat Masala', 'Cumin'],
    price: 8,
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?q=80&w=800&auto=format&fit=crop',
    calories: 220,
    vegetarian: true,
    spicy: true
  },
  {
    id: 's4',
    name: 'Tandoori Chicken',
    description: 'Chicken legs marinated in lemon juice, yogurt, and aromatic spices, roasted in a cylindrical clay oven.',
    ingredients: ['Chicken Legs', 'Yogurt', 'Lemon Juice', 'Tandoori Masala', 'Ginger Garlic Paste', 'Red Chili Powder'],
    price: 14,
    category: 'Starter',
    imageUrl: 'https://images.unsplash.com/photo-1628294895950-98052523e036?q=80&w=800&auto=format&fit=crop',
    calories: 450,
    spicy: true
  },
  {
    id: 'm1',
    name: 'Butter Chicken (Murg Makhani)',
    description: 'Tender chicken pieces simmered in a rich, creamy tomato gravy with butter and fenugreek leaves.',
    ingredients: ['Chicken Thighs', 'Tomato Puree', 'Heavy Cream', 'Butter', 'Kasuri Methi (Fenugreek)', 'Garlic', 'Ginger'],
    price: 22,
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop',
    calories: 650
  },
  {
    id: 'm2',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Aromatic basmati rice cooked with succulent chicken, saffron, mint, and fried onions in the traditional dum style.',
    ingredients: ['Basmati Rice', 'Chicken', 'Saffron', 'Mint Leaves', 'Fried Onions', 'Ghee', 'Biryani Masala'],
    price: 20,
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800&auto=format&fit=crop',
    calories: 750,
    spicy: true
  },
  {
    id: 'm3',
    name: 'Palak Paneer',
    description: 'Soft cottage cheese cubes cooked in a smooth, mild spinach gravy seasoned with garlic and cumin.',
    ingredients: ['Spinach', 'Paneer', 'Garlic', 'Heavy Cream', 'Cumin', 'Green Chilies', 'Garam Masala'],
    price: 18,
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=800&auto=format&fit=crop',
    calories: 480,
    vegetarian: true
  },
  {
    id: 'm4',
    name: 'Dal Makhani',
    description: 'Whole black lentils and kidney beans slow-cooked overnight with butter and cream for a velvety texture.',
    ingredients: ['Black Lentils (Urad Dal)', 'Red Kidney Beans', 'Butter', 'Cream', 'Ginger', 'Tomato Puree'],
    price: 16,
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    calories: 550,
    vegetarian: true
  },
  {
    id: 'm5',
    name: 'Lamb Rogan Josh',
    description: 'Aromatic Kashmiri curry made with tender lamb, browned onions, yogurt, and a signature blend of spices including fennel and dry ginger.',
    ingredients: ['Lamb', 'Yogurt', 'Fennel Powder', 'Dry Ginger', 'Kashmiri Chili', 'Mustard Oil'],
    price: 24,
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=800&auto=format&fit=crop',
    calories: 600,
    spicy: true
  },
  {
    id: 'm6',
    name: 'Malai Kofta',
    description: 'Fried potato and paneer dumplings served in a rich, creamy, slightly sweet cashew-tomato gravy.',
    ingredients: ['Potatoes', 'Paneer', 'Cashews', 'Heavy Cream', 'Tomatoes', 'Raisins', 'Cardamom'],
    price: 19,
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=800&auto=format&fit=crop',
    calories: 680,
    vegetarian: true
  },
  {
    id: 'm7',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry served with large, fluffy fried sourdough bread. A Punjabi classic.',
    ingredients: ['Chickpeas', 'Maida Flour', 'Yogurt', 'Onions', 'Tomatoes', 'Chole Masala', 'Ghee'],
    price: 17,
    category: 'Main',
    imageUrl: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop',
    calories: 850,
    vegetarian: true,
    spicy: true
  },
  {
    id: 'd1',
    name: 'Gulab Jamun',
    description: 'Soft milk-solid dumplings deep-fried and soaked in a warm rose-scented sugar syrup.',
    ingredients: ['Milk Powder', 'Khoya', 'Sugar', 'Rose Water', 'Cardamom', 'Saffron'],
    price: 8,
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1593701461250-d71331799695?q=80&w=800&auto=format&fit=crop',
    calories: 400,
    vegetarian: true
  },
  {
    id: 'd2',
    name: 'Rasmalai',
    description: 'Spongy cottage cheese patties dunked in thickened, sweetened milk flavored with cardamom and pistachios.',
    ingredients: ['Paneer (Chhena)', 'Milk', 'Sugar', 'Saffron', 'Pistachios', 'Almonds', 'Cardamom'],
    price: 9,
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1630409346824-4f0e7b042918?q=80&w=800&auto=format&fit=crop',
    calories: 350,
    vegetarian: true
  },
  {
    id: 'd3',
    name: 'Rice Kheer',
    description: 'Traditional Indian rice pudding cooked with whole milk, sugar, cardamom, and topped with dried fruits.',
    ingredients: ['Basmati Rice', 'Whole Milk', 'Sugar', 'Cardamom', 'Raisins', 'Almonds'],
    price: 7,
    category: 'Dessert',
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=800&auto=format&fit=crop',
    calories: 300,
    vegetarian: true
  },
  {
    id: 'k1',
    name: 'Masala Chai',
    description: 'Traditional Indian tea brewed with strong spices, ginger, and milk. The perfect comfort drink.',
    ingredients: ['Black Tea Dust', 'Ginger', 'Cardamom', 'Cloves', 'Cinnamon', 'Whole Milk', 'Sugar'],
    price: 5,
    category: 'Drink',
    imageUrl: 'https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?q=80&w=800&auto=format&fit=crop',
    calories: 120,
    vegetarian: true
  },
  {
    id: 'k2',
    name: 'Mango Lassi',
    description: 'Refreshing yogurt-based drink blended with sweet mango pulp and a dash of cardamom.',
    ingredients: ['Yogurt', 'Alphonso Mango Pulp', 'Sugar', 'Cardamom Powder', 'Ice', 'Mint'],
    price: 7,
    category: 'Drink',
    imageUrl: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop',
    calories: 280,
    vegetarian: true
  }
];