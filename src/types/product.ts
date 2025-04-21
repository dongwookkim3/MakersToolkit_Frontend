
export interface Product {
  id: number;
  name: string;
  category: string;
  level: string;
  price: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
  image?: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image?: string;
}

export interface CompareItem {
  id: number;
  name: string;
  category: string;
  level: string;
  price: string;
  features: string[];
}
