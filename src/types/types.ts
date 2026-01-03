export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: string;
  sortBy: 'price-asc' | 'price-desc' | 'none';
}
