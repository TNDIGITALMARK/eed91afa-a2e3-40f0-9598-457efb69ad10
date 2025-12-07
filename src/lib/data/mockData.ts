import type { Restaurant, MenuItem, Order, OrderStatus } from '../supabase/types';

// Mock data for Indian restaurant app
const TENANT_ID = 'WC7fg1SHcFfszFskryWOptZ6Gje2';
const PROJECT_ID = 'eed91afa-a2e3-40f0-9598-457efb69ad10';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Spice Garden Mumbai',
    slug: 'spice-garden-mumbai',
    description: 'Authentic Maharashtrian cuisine with traditional recipes passed down through generations. Famous for street food favorites.',
    cuisine_types: ['maharashtrian', 'street_food'],
    rating: 4.3,
    total_reviews: 1250,
    delivery_time_min: 25,
    delivery_time_max: 30,
    image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
    is_open: true,
    min_order_amount: 150,
    delivery_fee: 30,
    location: 'Dadar, Mumbai',
    latitude: 19.0178,
    longitude: 72.8478,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Delhi Darbar Bangalore',
    slug: 'delhi-darbar-bangalore',
    description: 'North Indian restaurant serving royal Mughlai cuisine. Renowned for butter chicken and tandoori specialties.',
    cuisine_types: ['north_indian', 'punjabi'],
    rating: 4.1,
    total_reviews: 890,
    delivery_time_min: 35,
    delivery_time_max: 40,
    image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80',
    is_open: true,
    min_order_amount: 200,
    delivery_fee: 40,
    location: 'Indiranagar, Bangalore',
    latitude: 12.9716,
    longitude: 77.5946,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Coastal Kitchen Chennai',
    slug: 'coastal-kitchen-chennai',
    description: 'Fresh seafood and authentic South Indian coastal delicacies. Specializing in Tamil Nadu traditional recipes.',
    cuisine_types: ['south_indian', 'seafood', 'tamil'],
    rating: 4.5,
    total_reviews: 2100,
    delivery_time_min: 20,
    delivery_time_max: 25,
    image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80',
    is_open: true,
    min_order_amount: 180,
    delivery_fee: 25,
    location: 'Mylapore, Chennai',
    latitude: 13.0339,
    longitude: 80.2619,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Punjabi Dhaba Pune',
    slug: 'punjabi-dhaba-pune',
    description: 'Traditional Punjabi dhaba-style food with authentic flavors. Famous for dal makhani and tandoori rotis.',
    cuisine_types: ['punjabi', 'north_indian'],
    rating: 4.2,
    total_reviews: 670,
    delivery_time_min: 30,
    delivery_time_max: 35,
    image_url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80',
    is_open: true,
    min_order_amount: 160,
    delivery_fee: 35,
    location: 'Koregaon Park, Pune',
    latitude: 18.5362,
    longitude: 73.8847,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Bengal Spice Kolkata',
    slug: 'bengal-spice-kolkata',
    description: 'Authentic Bengali cuisine featuring fresh fish curries and traditional sweets. Family recipes from generations.',
    cuisine_types: ['bengali', 'seafood'],
    rating: 4.4,
    total_reviews: 1450,
    delivery_time_min: 28,
    delivery_time_max: 33,
    image_url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80',
    is_open: true,
    min_order_amount: 170,
    delivery_fee: 30,
    location: 'Salt Lake, Kolkata',
    latitude: 22.5675,
    longitude: 88.3700,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    name: 'Hyderabad Biryani House',
    slug: 'hyderabad-biryani-house',
    description: 'Authentic Hyderabadi biryani made with basmati rice and traditional spices. Voted best biryani in the city.',
    cuisine_types: ['telugu', 'north_indian'],
    rating: 4.6,
    total_reviews: 3200,
    delivery_time_min: 40,
    delivery_time_max: 45,
    image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80',
    is_open: true,
    min_order_amount: 250,
    delivery_fee: 45,
    location: 'Banjara Hills, Hyderabad',
    latitude: 17.4239,
    longitude: 78.4738,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const mockMenuItems: MenuItem[] = [
  // Spice Garden Mumbai Menu
  {
    id: 'menu-1',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '1',
    name: 'Vada Pav',
    description: 'Mumbai\'s iconic street food - spicy potato fritter in soft bun with chutneys',
    price: 40,
    image_url: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80',
    category: 'Street Food',
    is_veg: true,
    is_available: true,
    serves: '1',
    includes: 'Chutney',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-2',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '1',
    name: 'Misal Pav',
    description: 'Spicy sprouted lentil curry topped with farsan, onions, and lemon',
    price: 120,
    image_url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80',
    category: 'Main Course',
    is_veg: true,
    is_available: true,
    serves: '1',
    includes: 'Pav (2 pieces)',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-3',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '1',
    name: 'Puran Poli',
    description: 'Sweet flatbread stuffed with lentil and jaggery filling',
    price: 80,
    image_url: 'https://images.unsplash.com/photo-1624869807913-c086b0728646?w=400&q=80',
    category: 'Desserts',
    is_veg: true,
    is_available: true,
    serves: '2 pieces',
    includes: 'Ghee',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Delhi Darbar Menu
  {
    id: 'menu-4',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '2',
    name: 'Butter Chicken',
    description: 'Tender chicken pieces in rich creamy tomato gravy with butter',
    price: 320,
    image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80',
    category: 'Main Course',
    is_veg: false,
    is_available: true,
    serves: '2-3',
    includes: 'Gravy',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-5',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '2',
    name: 'Garlic Naan',
    description: 'Soft tandoori bread topped with fresh garlic and butter',
    price: 60,
    image_url: 'https://images.unsplash.com/photo-1619365748653-3f97c0792e3b?w=400&q=80',
    category: 'Breads',
    is_veg: true,
    is_available: true,
    serves: '1 piece',
    includes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-6',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '2',
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese grilled to perfection in tandoor',
    price: 280,
    image_url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80',
    category: 'Appetizers',
    is_veg: true,
    is_available: true,
    serves: '2',
    includes: 'Mint chutney',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Coastal Kitchen Menu
  {
    id: 'menu-7',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '3',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato masala',
    price: 120,
    image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&q=80',
    category: 'Main Course',
    is_veg: true,
    is_available: true,
    serves: '1',
    includes: 'Coconut chutney, Sambar',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-8',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '3',
    name: 'Fish Curry',
    description: 'Fresh fish cooked in traditional Tamil Nadu spicy curry',
    price: 280,
    image_url: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?w=400&q=80',
    category: 'Main Course',
    is_veg: false,
    is_available: true,
    serves: '1-2',
    includes: 'Rice',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-9',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '3',
    name: 'Filter Coffee',
    description: 'Authentic South Indian filter coffee with frothy milk',
    price: 40,
    image_url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&q=80',
    category: 'Beverages',
    is_veg: true,
    is_available: true,
    serves: '1',
    includes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Punjabi Dhaba Menu
  {
    id: 'menu-10',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '4',
    name: 'Dal Makhani',
    description: 'Creamy black lentils slow-cooked with butter and spices',
    price: 220,
    image_url: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&q=80',
    category: 'Main Course',
    is_veg: true,
    is_available: true,
    serves: '2',
    includes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-11',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '4',
    name: 'Tandoori Roti',
    description: 'Whole wheat bread cooked in clay oven',
    price: 25,
    image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80',
    category: 'Breads',
    is_veg: true,
    is_available: true,
    serves: '1 piece',
    includes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Hyderabad Biryani House Menu
  {
    id: 'menu-12',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '6',
    name: 'Chicken Biryani Hyderabadi',
    description: 'Aromatic basmati rice layered with spiced chicken and saffron',
    price: 280,
    image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80',
    category: 'Biryani',
    is_veg: false,
    is_available: true,
    serves: '1-2',
    includes: 'Raita, Shorba',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-13',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '6',
    name: 'Mirchi Ka Salan',
    description: 'Spicy green chilies cooked in peanut and sesame gravy',
    price: 150,
    image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80',
    category: 'Side Dish',
    is_veg: true,
    is_available: true,
    serves: '2',
    includes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 'menu-14',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '6',
    name: 'Double Ka Meetha',
    description: 'Traditional Hyderabadi bread pudding with dry fruits',
    price: 120,
    image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
    category: 'Desserts',
    is_veg: true,
    is_available: true,
    serves: '1',
    includes: 'Garnish',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },

  // Universal Dessert
  {
    id: 'menu-15',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    restaurant_id: '1',
    name: 'Gulab Jamun',
    description: 'Soft milk solid dumplings soaked in rose-flavored sugar syrup',
    price: 80,
    image_url: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=400&q=80',
    category: 'Desserts',
    is_veg: true,
    is_available: true,
    serves: '4 pieces',
    includes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const mockOrders: Order[] = [
  {
    id: 'order-1',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    user_id: 'user-1',
    restaurant_id: '3',
    status: 'delivered',
    total_amount: 440,
    delivery_fee: 25,
    delivery_preference: 'delivery',
    delivery_address: '123 MG Road, Bangalore',
    delivery_instructions: 'Please ring the doorbell',
    contact_phone: '+91 98765 43210',
    estimated_delivery_time: new Date(Date.now() - 3600000).toISOString(),
    created_at: new Date(Date.now() - 7200000).toISOString(),
    updated_at: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: 'order-2',
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    user_id: 'user-1',
    restaurant_id: '6',
    status: 'preparing',
    total_amount: 605,
    delivery_fee: 45,
    delivery_preference: 'delivery',
    delivery_address: '123 MG Road, Bangalore',
    delivery_instructions: null,
    contact_phone: '+91 98765 43210',
    estimated_delivery_time: new Date(Date.now() + 2400000).toISOString(),
    created_at: new Date(Date.now() - 600000).toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// Helper functions
export function getRestaurantById(id: string): Restaurant | undefined {
  return mockRestaurants.find((r) => r.id === id);
}

export function getMenuItemsByRestaurantId(restaurantId: string): MenuItem[] {
  return mockMenuItems.filter((item) => item.restaurant_id === restaurantId);
}

export function filterRestaurantsByCuisine(cuisineType: string): Restaurant[] {
  if (cuisineType === 'all') return mockRestaurants;
  return mockRestaurants.filter((r) =>
    r.cuisine_types.includes(cuisineType as any)
  );
}

export function searchRestaurants(query: string): Restaurant[] {
  const lowerQuery = query.toLowerCase();
  return mockRestaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(lowerQuery) ||
      r.description.toLowerCase().includes(lowerQuery) ||
      r.location.toLowerCase().includes(lowerQuery)
  );
}

export function getOrdersByUserId(userId: string): Order[] {
  return mockOrders.filter((o) => o.user_id === userId);
}

export function updateOrderStatus(
  orderId: string,
  newStatus: OrderStatus
): Order | undefined {
  const order = mockOrders.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
    order.updated_at = new Date().toISOString();
  }
  return order;
}

// Simulated location detection
export function detectUserLocation(): {
  city: string;
  latitude: number;
  longitude: number;
} {
  // Default to Bangalore for demo
  return {
    city: 'Bangalore',
    latitude: 12.9716,
    longitude: 77.5946,
  };
}

// Calculate distance (simplified Haversine formula)
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function getNearbyRestaurants(
  userLat: number,
  userLon: number,
  radiusKm: number = 5
): Restaurant[] {
  return mockRestaurants.filter((r) => {
    if (!r.latitude || !r.longitude) return false;
    const distance = calculateDistance(userLat, userLon, r.latitude, r.longitude);
    return distance <= radiusKm;
  });
}
