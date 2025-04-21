
import React from 'react';

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
  expanded?: boolean;
  toggleExpand?: (id: number) => void;
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
