
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 249.99,
    description: "Wireless over-ear headphones with noise cancellation technology, premium sound quality and 30 hours of battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    featured: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Track your fitness goals, sleep patterns, and receive notifications from your phone with this sleek smart watch.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
    featured: true,
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: 149.99,
    description: "True wireless earbuds with immersive sound, touch controls, and 24-hour battery life with the charging case.",
    image: "https://images.unsplash.com/photo-1606741965509-44b3887e6ae3?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 79.99,
    description: "Handcrafted genuine leather backpack with multiple compartments, perfect for daily use or weekend trips.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    category: "Fashion",
    featured: true,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "Tactile mechanical keyboard with customizable RGB lighting and programmable keys for the ultimate typing experience.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
  },
  {
    id: 6,
    name: "Minimalist Watch",
    price: 89.99,
    description: "Classic minimalist design watch with Japanese quartz movement and premium leather strap.",
    image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000&auto=format&fit=crop",
    category: "Fashion",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 59.99,
    description: "Portable Bluetooth speaker with rich bass, waterproof design, and 12 hours of playback time.",
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1000&auto=format&fit=crop",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Winter Jacket",
    price: 199.99,
    description: "Premium winter jacket with thermal insulation, waterproof exterior, and multiple pockets for functionality.",
    image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=1000&auto=format&fit=crop",
    category: "Fashion",
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured === true);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};
