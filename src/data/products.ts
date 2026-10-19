export interface Product {
  id: string;
  name: string;
  category: 'Gaming Laptop' | 'Workstation' | 'Smartphone' | 'Accessory' | 'Bundle';
  brand?: 'Apple' | 'Samsung' | 'Lenovo' | 'ASUS' | 'Dell' | 'HP' | 'Acer' | 'Redmi';
  price: number;
  originalPrice?: number;
  specs: { [key: string]: string };
  image: string;
  isHot?: boolean;
}

export interface SetupAccessory {
  id: string;
  name: string;
  price: number;
  category: string;
  selectedByDefault: boolean;
}

// 1. STARTER BUNDLE HIGHLIGHT
export const SETUP_350K = {
  title: "The Ultimate Starter Workstation",
  price: 350000,
  includes: [
    "High-Speed Core i5 / 16GB RAM Laptop",
    "22\" FHD Ultra-Slim Monitor",
    "RGB Mechanical Keyboard & Mouse",
    "Extended Clean Desk Mat"
  ],
  specs: "Designed for Coding, Content Creation & Light Gaming",
  image: "/images/products/starter-setup.png"
};

// 2. INTERACTIVE CALCULATOR ITEMS
export const CALCULATOR_ITEMS: SetupAccessory[] = [
  { id: "1", name: "Electric Sit-Stand Table (1.4m)", price: 360000, category: "Desk", selectedByDefault: true },
  { id: "2", name: "Ergonomic High-Back Mesh Chair", price: 165000, category: "Seating", selectedByDefault: true },
  { id: "3", name: "Redmi 34\" Ultrawide Curved Monitor (144Hz)", price: 580000, category: "Display", selectedByDefault: true },
  { id: "4", name: "Dell 24\" FHD IPS Vertical Monitor", price: 130000, category: "Display", selectedByDefault: false },
  { id: "5", name: "Havit Quad-Mode Ergonomic Wireless Mouse", price: 52000, category: "Peripherals", selectedByDefault: true },
  { id: "6", name: "RGB World Map Extended Desk Mat", price: 35000, category: "Accessories", selectedByDefault: true },
  { id: "7", name: "100W GaN Desktop Fast Charger", price: 65000, category: "Power", selectedByDefault: false },
  { id: "8", name: "Heavy Duty Single Monitor Arm (17\"-57\")", price: 90000, category: "Mounts", selectedByDefault: true },
  { id: "9", name: "Single Monitor Arm (17\"-32\")", price: 87000, category: "Mounts", selectedByDefault: false },
  { id: "10", name: "Laptop Stand (360° Rotation)", price: 40000, category: "Mounts", selectedByDefault: true },
  { id: "11", name: "2-in-1 Havit Detachable Screenbar Lamp", price: 25000, category: "Lighting", selectedByDefault: true },
  { id: "12", name: "Havit ANC Wireless Headphones", price: 50000, category: "Audio", selectedByDefault: false },
  { id: "13", name: "RGB Headphone Stand", price: 15000, category: "Accessories", selectedByDefault: false },
  { id: "14", name: "Minimalist Phone Stand", price: 10000, category: "Accessories", selectedByDefault: false },
  { id: "15", name: "8-in-1 Type-C Docking Station", price: 40000, category: "Connectivity", selectedByDefault: true },
];

// 3. SMARTPHONE INVENTORY
export const SMARTPHONES: Product[] = [
  // Apple iPhones
  { id: "ip-15-pm", name: "iPhone 15 Pro Max", brand: "Apple", category: "Smartphone", price: 1450000, specs: { Storage: "256GB", Condition: "Brand New" }, image: "/images/products/iphone-15-promax.png", isHot: true },
  { id: "ip-15-p", name: "iPhone 15 Pro", brand: "Apple", category: "Smartphone", price: 1250000, specs: { Storage: "128GB", Condition: "Brand New" }, image: "/images/products/iphone-15-pro.png" },
  { id: "ip-14-pm", name: "iPhone 14 Pro Max", brand: "Apple", category: "Smartphone", price: 980000, specs: { Storage: "256GB", Condition: "Certified Mint" }, image: "/images/products/iphone-14-promax.png", isHot: true },
  { id: "ip-14-p", name: "iPhone 14 Pro", brand: "Apple", category: "Smartphone", price: 820000, specs: { Storage: "128GB", Condition: "Certified Mint" }, image: "/images/products/iphone-14-pro.png" },
  { id: "ip-13-pm", name: "iPhone 13 Pro Max", brand: "Apple", category: "Smartphone", price: 720000, specs: { Storage: "128GB", Condition: "Certified Mint" }, image: "/images/products/iphone-13-promax.png" },
  { id: "ip-13-p", name: "iPhone 13 Pro", brand: "Apple", category: "Smartphone", price: 580000, specs: { Storage: "128GB", Condition: "Certified Mint" }, image: "/images/products/iphone-13-pro.png", isHot: true },
  { id: "ip-12-pm", name: "iPhone 12 Pro Max", brand: "Apple", category: "Smartphone", price: 510000, specs: { Storage: "128GB", Condition: "Certified Mint" }, image: "/images/products/iphone-12-promax.png" },
  { id: "ip-12-p", name: "iPhone 12 Pro", brand: "Apple", category: "Smartphone", price: 420000, specs: { Storage: "128GB", Condition: "Certified Mint" }, image: "/images/products/iphone-12-pro.png" },
  { id: "ip-11-pm", name: "iPhone 11 Pro Max", brand: "Apple", category: "Smartphone", price: 350000, specs: { Storage: "64GB", Condition: "Certified Mint" }, image: "/images/products/iphone-11-promax.png" },
  { id: "ip-11", name: "iPhone 11", brand: "Apple", category: "Smartphone", price: 270000, specs: { Storage: "64GB", Condition: "Certified Mint" }, image: "/images/products/iphone-11.png" },

  // Samsung Flagships
  { id: "s24-u", name: "Galaxy S24 Ultra 5G", brand: "Samsung", category: "Smartphone", price: 1380000, specs: { Storage: "512GB", CPU: "Snapdragon 8 Gen 3", Condition: "Brand New" }, image: "/images/products/s24-ultra.png", isHot: true },
  { id: "s23-u", name: "Galaxy S23 Ultra 5G", brand: "Samsung", category: "Smartphone", price: 820000, specs: { Storage: "256GB", Condition: "Certified Mint" }, image: "/images/products/s23-ultra.png" },
  { id: "s22-u", name: "Galaxy S22 Ultra 5G", brand: "Samsung", category: "Smartphone", price: 540000, specs: { Storage: "128GB", Condition: "Certified Mint" }, image: "/images/products/s22-ultra.png" },
  { id: "s21-u", name: "Galaxy S21 Ultra 5G", brand: "Samsung", category: "Smartphone", price: 420000, specs: { Storage: "128GB", Condition: "Certified Mint" }, image: "/images/products/s21-ultra.png" },
  { id: "z-fold-5", name: "Galaxy Z Fold 5", brand: "Samsung", category: "Smartphone", price: 1200000, specs: { Storage: "256GB", Condition: "Brand New" }, image: "/images/products/z-fold-5.png" },
  { id: "z-flip-5", name: "Galaxy Z Flip 5", brand: "Samsung", category: "Smartphone", price: 650000, specs: { Storage: "256GB", Condition: "Certified Mint" }, image: "/images/products/z-flip-5.png" }
];

// 4. LAPTOP INVENTORY
export const LAPTOPS: Product[] = [
  { id: "legion-5-pro", name: "Lenovo Legion 5 Pro", brand: "Lenovo", category: "Gaming Laptop", price: 850000, originalPrice: 920000, specs: { GPU: "RTX 3060 6GB", RAM: "16GB DDR5", CPU: "Ryzen 7", Storage: "1TB SSD" }, image: "/images/products/legion-5-pro.png", isHot: true },
  { id: "rog-strix", name: "ASUS ROG Strix G15", brand: "ASUS", category: "Gaming Laptop", price: 980000, specs: { GPU: "RTX 3070 8GB", RAM: "16GB RAM", CPU: "Core i7 12th Gen", Storage: "512GB SSD" }, image: "/images/products/rog-strix.png", isHot: true },
  { id: "helios-300", name: "Acer Predator Helios 300", brand: "Acer", category: "Gaming Laptop", price: 750000, specs: { GPU: "RTX 3060", RAM: "16GB RAM", CPU: "Core i7", Storage: "1TB SSD" }, image: "/images/products/helios-300.png" },
  { id: "tuf-f15", name: "ASUS TUF Gaming F15", brand: "ASUS", category: "Gaming Laptop", price: 480000, specs: { GPU: "GTX 1650", RAM: "16GB RAM", CPU: "Core i5 11th Gen" }, image: "/images/products/tuf-f15.png" },
  { id: "macbook-air-m1", name: "MacBook Air M1 (2020)", brand: "Apple", category: "Workstation", price: 550000, specs: { Chip: "Apple M1", RAM: "8GB Unified", Storage: "256GB SSD" }, image: "/images/products/macbook-air-m1.png" },
  { id: "macbook-air-m2", name: "MacBook Air M2 (2022)", brand: "Apple", category: "Workstation", price: 780000, specs: { Chip: "Apple M2", RAM: "8GB RAM", Storage: "256GB SSD" }, image: "/images/products/macbook-air-m2.png" },
  { id: "macbook-pro-m1", name: "MacBook Pro M1 Pro 14\"", brand: "Apple", category: "Workstation", price: 1150000, specs: { Chip: "M1 Pro", RAM: "16GB RAM", Storage: "512GB SSD" }, image: "/images/products/macbook-pro-m1.png", isHot: true },
  { id: "dell-xps-15", name: "Dell XPS 15 9520", brand: "Dell", category: "Workstation", price: 920000, specs: { CPU: "Core i7 12th Gen", RAM: "16GB RAM", Screen: "4K Touch" }, image: "/images/products/dell-xps-15.png" },
  { id: "thinkpad-x1", name: "Lenovo ThinkPad X1 Carbon", brand: "Lenovo", category: "Workstation", price: 450000, specs: { CPU: "Core i7", RAM: "16GB RAM", Storage: "512GB SSD" }, image: "/images/products/thinkpad-x1.png" }
];