// Database types for Indian Restaurant App

export type CuisineType =
  | 'north_indian'
  | 'south_indian'
  | 'chinese'
  | 'continental'
  | 'street_food'
  | 'maharashtrian'
  | 'punjabi'
  | 'bengali'
  | 'tamil'
  | 'telugu'
  | 'seafood'
  | 'desserts';

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled';

export type DeliveryPreference = 'delivery' | 'pickup';

export interface Restaurant {
  id: string;
  tenantid: string;
  projectid: string;
  name: string;
  slug: string;
  description: string;
  cuisine_types: CuisineType[];
  rating: number;
  total_reviews: number;
  delivery_time_min: number;
  delivery_time_max: number;
  image_url: string | null;
  is_open: boolean;
  min_order_amount: number;
  delivery_fee: number;
  location: string;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
  updated_at: string;
}

export interface MenuItem {
  id: string;
  tenantid: string;
  projectid: string;
  restaurant_id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string;
  is_veg: boolean;
  is_available: boolean;
  serves: string | null;
  includes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string | null;
  restaurant_id: string;
  status: OrderStatus;
  total_amount: number;
  delivery_fee: number;
  delivery_preference: DeliveryPreference;
  delivery_address: string | null;
  delivery_instructions: string | null;
  contact_phone: string;
  estimated_delivery_time: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  tenantid: string;
  projectid: string;
  order_id: string;
  menu_item_id: string;
  quantity: number;
  price_at_time: number;
  customization_notes: string | null;
  created_at: string;
}

export interface UserProfile {
  id: string;
  tenantid: string;
  projectid: string;
  user_id: string;
  name: string;
  email: string | null;
  phone: string;
  default_address: string | null;
  favorite_restaurant_ids: string[];
  dietary_preferences: string[];
  created_at: string;
  updated_at: string;
}

// Extended types with relations
export interface RestaurantWithDetails extends Restaurant {
  menu_items?: MenuItem[];
  total_orders?: number;
}

export interface OrderWithDetails extends Order {
  restaurant?: Restaurant;
  order_items?: (OrderItem & { menu_item?: MenuItem })[];
}

export interface MenuItemWithRestaurant extends MenuItem {
  restaurant?: Restaurant;
}
