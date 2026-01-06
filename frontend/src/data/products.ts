export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
    rating: number;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Smart AI Camera",
        price: 129.00,
        category: "Surveillance",
        image: "https://images.unsplash.com/photo-1557862954-22d28404b0c8?q=80&w=500&auto=format&fit=crop",
        description: "High-definition AI-powered surveillance camera with night vision and motion detection.",
        rating: 5
    },
    {
        id: 2,
        name: "Biometric Door Lock",
        price: 199.00,
        category: "Access Control",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=500&auto=format&fit=crop",
        description: "Secure your home with advanced fingerprint and keypad access control.",
        rating: 4
    },
    {
        id: 3,
        name: "Motion Sensor Pro",
        price: 49.00,
        category: "Sensors",
        image: "https://images.unsplash.com/photo-1585332921340-023fc827e05e?q=80&w=500&auto=format&fit=crop",
        description: "Ultra-sensitive motion sensor with smart home integration.",
        rating: 5
    },
    {
        id: 4,
        name: "Smart Alarm Hub",
        price: 149.00,
        category: "Alarm Systems",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=500&auto=format&fit=crop",
        description: "Centralized hub for all your security devices with cellular backup.",
        rating: 4
    },
    {
        id: 5,
        name: "Outdoor Bullet Camera",
        price: 89.00,
        category: "Surveillance",
        image: "https://images.unsplash.com/photo-1524333865981-d5723773bc2a?q=80&w=500&auto=format&fit=crop",
        description: "Weatherproof outdoor camera with crystal clear 4K resolution.",
        rating: 5
    },
    {
        id: 6,
        name: "Smart Video Doorbell",
        price: 159.00,
        category: "Access Control",
        image: "https://images.unsplash.com/photo-1591147139223-846f70d795ed?q=80&w=500&auto=format&fit=crop",
        description: "See and speak to visitors from anywhere with this smart doorbell.",
        rating: 4
    },
    {
        id: 7,
        name: "Window/Door Sensor",
        price: 29.00,
        category: "Sensors",
        image: "https://images.unsplash.com/photo-1576613109753-27c07601bb3c?q=80&w=500&auto=format&fit=crop",
        description: "Discrete sensor that alerts you when doors or windows are opened.",
        rating: 5
    },
    {
        id: 8,
        name: "Indoor PTZ Camera",
        price: 79.00,
        category: "Surveillance",
        image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=500&auto=format&fit=crop",
        description: "Pan-tilt-zoom camera for complete 360-degree coverage of your room.",
        rating: 4
    },
    {
        id: 9,
        name: "Smart Light Switch",
        price: 39.00,
        category: "Automation",
        image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=500&auto=format&fit=crop",
        description: "Control your lights remotely and set schedules for home security.",
        rating: 4
    }
];
