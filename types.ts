export interface MenuItem {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
  imageUrl: string;
  calories: number;
  spicy?: boolean;
  vegetarian?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}