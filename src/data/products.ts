import { Product } from '@/types/types';

export const products: Product[] = [
  // HD CCTV CAMERA
  {
    id: 1,
    name: "HD CCTV Camera 1080p",
    price: 3999,
    description: "High Definition 1080p CCTV camera with superior image quality and night vision",
    category: "HD CCTV CAMERA",
    image: "/products/hd-camera.jpg"
  },
  {
    id: 2,
    name: "HD CCTV Camera 4K",
    price: 6999,
    description: "Professional 4K HD CCTV camera with ultra-clear resolution and advanced features",
    category: "HD CCTV CAMERA",
    image: "/products/hd-4k-camera.jpg"
  },
  
  // IP CCTV CAMERA
  {
    id: 3,
    name: "IP CCTV Camera 2MP",
    price: 4999,
    description: "Network IP camera with 2MP resolution and remote viewing capability",
    category: "IP CCTV CAMERA",
    image: "/products/ip-camera-2mp.jpg"
  },
  {
    id: 4,
    name: "IP CCTV Camera 5MP",
    price: 7999,
    description: "High-performance IP camera with 5MP resolution and PoE support",
    category: "IP CCTV CAMERA",
    image: "/products/ip-camera-5mp.jpg"
  },
  
  // SOLAR CCTV CAMERA
  {
    id: 5,
    name: "Solar CCTV Camera",
    price: 12999,
    description: "Eco-friendly solar-powered CCTV camera with rechargeable battery backup",
    category: "SOLAR CCTV CAMERA",
    image: "/products/solar-camera.jpg"
  },
  {
    id: 6,
    name: "Solar CCTV Camera Pro",
    price: 18999,
    description: "Premium solar CCTV camera with 4G connectivity and weatherproof design",
    category: "SOLAR CCTV CAMERA",
    image: "/products/solar-camera-pro.jpg"
  },
  
  // 4G CCTV CAMERA
  {
    id: 7,
    name: "4G CCTV Camera",
    price: 9999,
    description: "4G LTE enabled CCTV camera for remote locations without WiFi",
    category: "4G CCTV CAMERA",
    image: "/products/4g-camera.jpg"
  },
  {
    id: 8,
    name: "4G CCTV Camera PTZ",
    price: 15999,
    description: "Pan-tilt-zoom 4G CCTV camera with SIM card support and cloud storage",
    category: "4G CCTV CAMERA",
    image: "/products/4g-ptz-camera.jpg"
  },
  
  // WIFI CCTV CAMERA
  {
    id: 9,
    name: "WiFi CCTV Camera Indoor",
    price: 2999,
    description: "Wireless WiFi CCTV camera for indoor monitoring with mobile app",
    category: "WIFI CCTV CAMERA",
    image: "/products/wifi-indoor.jpg"
  },
  {
    id: 10,
    name: "WiFi CCTV Camera Outdoor",
    price: 5999,
    description: "Weatherproof WiFi CCTV camera with motion detection and alerts",
    category: "WIFI CCTV CAMERA",
    image: "/products/wifi-outdoor.jpg"
  },
  
  // Shutter alarm
  {
    id: 11,
    name: "Shutter Alarm System",
    price: 6999,
    description: "Advanced shutter alarm with vibration sensors and loud siren",
    category: "Shutter alarm",
    image: "/products/shutter-alarm.jpg"
  },
  {
    id: 12,
    name: "Shutter Alarm Wireless",
    price: 8999,
    description: "Wireless shutter alarm system with smartphone notifications",
    category: "Shutter alarm",
    image: "/products/shutter-alarm-wireless.jpg"
  },
  
  // Door lock
  {
    id: 13,
    name: "Smart Door Lock",
    price: 12999,
    description: "Premium smart door lock with fingerprint, PIN, and card access",
    category: "Door lock",
    image: "/products/smart-lock.jpg"
  },
  {
    id: 14,
    name: "Digital Door Lock",
    price: 7999,
    description: "Digital keypad door lock with programmable PIN codes",
    category: "Door lock",
    image: "/products/digital-lock.jpg"
  },
  
  // SECOND LAPTOP
  {
    id: 15,
    name: "Refurbished Laptop i5",
    price: 25999,
    description: "Quality tested second hand laptop with Intel i5 processor and 8GB RAM",
    category: "SECOND LAPTOP",
    image: "/products/laptop-i5.jpg"
  },
  {
    id: 16,
    name: "Refurbished Laptop i7",
    price: 35999,
    description: "Premium second hand laptop with Intel i7 processor and 16GB RAM",
    category: "SECOND LAPTOP",
    image: "/products/laptop-i7.jpg"
  },
  
  // COMPUTER SETUP
  {
    id: 17,
    name: "Basic Computer Setup",
    price: 22999,
    description: "Complete desktop computer setup with monitor, keyboard, and mouse",
    category: "COMPUTER SETUP",
    image: "/products/basic-setup.jpg"
  },
  {
    id: 18,
    name: "Gaming Computer Setup",
    price: 55999,
    description: "High-performance gaming computer setup with RGB keyboard and gaming mouse",
    category: "COMPUTER SETUP",
    image: "/products/gaming-setup.jpg"
  }
];

export const categories = [
  "All",
  "HD CCTV CAMERA",
  "IP CCTV CAMERA",
  "SOLAR CCTV CAMERA",
  "4G CCTV CAMERA",
  "WIFI CCTV CAMERA",
  "Shutter alarm",
  "Door lock",
  "SECOND LAPTOP",
  "COMPUTER SETUP"
];
