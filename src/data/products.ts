import { Product } from '@/types/types';

export const products: Product[] = [
  {
    id: 1,
    name: "4K Security Camera System",
    price: 15999,
    description: "Professional 8-channel 4K security camera system with night vision and motion detection",
    category: "CCTV Cameras",
    image: "/products/camera-system.jpg"
  },
  {
    id: 2,
    name: "Wireless Alarm System",
    price: 8999,
    description: "Advanced wireless alarm system with smartphone alerts and 24/7 monitoring",
    category: "Alarm Systems",
    image: "/products/alarm-system.jpg"
  },
  {
    id: 3,
    name: "Biometric Access Control",
    price: 25999,
    description: "Fingerprint-based access control system for offices and commercial spaces",
    category: "Access Control",
    image: "/products/biometric.jpg"
  },
  {
    id: 4,
    name: "Smart Door Lock Pro",
    price: 12999,
    description: "Premium smart door lock with PIN, card, and mobile app access",
    category: "Smart Locks",
    image: "/products/smart-lock.jpg"
  },
  {
    id: 5,
    name: "PTZ Security Camera",
    price: 18999,
    description: "Pan-tilt-zoom camera with 360° coverage and auto-tracking",
    category: "CCTV Cameras",
    image: "/products/ptz-camera.jpg"
  },
  {
    id: 6,
    name: "Video Door Phone",
    price: 6999,
    description: "HD video door phone with intercom and remote viewing capability",
    category: "Alarm Systems",
    image: "/products/video-doorphone.jpg"
  },
  {
    id: 7,
    name: "RFID Card Reader",
    price: 4999,
    description: "Professional RFID card reader for secure access management",
    category: "Access Control",
    image: "/products/rfid-reader.jpg"
  },
  {
    id: 8,
    name: "Outdoor Bullet Camera",
    price: 3999,
    description: "Weatherproof outdoor bullet camera with infrared night vision",
    category: "CCTV Cameras",
    image: "/products/bullet-camera.jpg"
  },
  {
    id: 9,
    name: "Fire Alarm System",
    price: 22999,
    description: "Comprehensive fire alarm system with smoke and heat detectors",
    category: "Alarm Systems",
    image: "/products/fire-alarm.jpg"
  },
  {
    id: 10,
    name: "Keypad Door Lock",
    price: 5999,
    description: "Digital keypad door lock with programmable PIN codes",
    category: "Smart Locks",
    image: "/products/keypad-lock.jpg"
  },
  {
    id: 11,
    name: "IP Camera 2MP",
    price: 2999,
    description: "Network IP camera with 2MP resolution and mobile viewing",
    category: "CCTV Cameras",
    image: "/products/ip-camera.jpg"
  },
  {
    id: 12,
    name: "Motion Sensor Spotlight",
    price: 3499,
    description: "Motion-activated security spotlight with integrated camera",
    category: "Alarm Systems",
    image: "/products/motion-light.jpg"
  },
  {
    id: 13,
    name: "Facial Recognition Terminal",
    price: 35999,
    description: "Advanced facial recognition access control terminal with temperature screening",
    category: "Access Control",
    image: "/products/facial-recognition.jpg"
  },
  {
    id: 14,
    name: "Smart Lock Bluetooth",
    price: 7999,
    description: "Bluetooth-enabled smart lock with keyless entry and guest access",
    category: "Smart Locks",
    image: "/products/bluetooth-lock.jpg"
  },
  {
    id: 15,
    name: "Dome Camera 5MP",
    price: 5499,
    description: "Indoor dome camera with 5MP resolution and wide-angle lens",
    category: "CCTV Cameras",
    image: "/products/dome-camera.jpg"
  }
];

export const categories = ["All", "CCTV Cameras", "Alarm Systems", "Access Control", "Smart Locks"];
