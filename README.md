# FoodIndia - Restaurant Discovery & Ordering Platform

A comprehensive restaurant discovery and food ordering platform for India, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Features

### Core Functionality
- **Restaurant Discovery Dashboard**: Browse restaurants by cuisine, location, ratings, and delivery time
- **Restaurant Detail Pages**: View menus, prices, reviews, and place orders
- **Order Tracking**: Real-time order status with visual progress tracking
- **User Profiles**: Manage favorites, addresses, payment methods, and order history
- **Search**: Powerful search with trending suggestions and category filters

### Design System
- **Indian Heritage Colors**: Saffron orange primary, success green accents
- **Typography**: Inter for body text, Poppins for headings
- **Mobile-First**: Responsive design optimized for Indian smartphone users
- **Bottom Navigation**: Touch-friendly navigation bar for easy access

### Technical Features
- **Supabase Ready**: Database schema and client configured for multi-tenant architecture
- **Mock Data**: Complete mock data system for development and testing
- **Type Safety**: Full TypeScript coverage with strict types
- **Component Library**: Reusable restaurant-specific components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the app.

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home (Restaurant Discovery)
│   ├── restaurant/[slug]/   # Restaurant Detail page
│   ├── orders/              # Order Tracking & History
│   ├── profile/             # User Profile Hub
│   └── search/              # Search page
├── components/
│   ├── restaurant/          # Restaurant-specific components
│   │   ├── RestaurantCard.tsx
│   │   ├── MenuItemCard.tsx
│   │   ├── OrderStatusTracker.tsx
│   │   └── BottomNavigation.tsx
│   └── ui/                  # Base UI components (shadcn/ui)
├── lib/
│   ├── data/
│   │   └── mockData.ts      # Mock restaurant & order data
│   └── supabase/
│       ├── client.ts        # Supabase client configuration
│       └── types.ts         # Database type definitions
└── app/globals.css          # Global styles & design system
```

## 🎨 Design System

### Colors
- **Primary (Saffron)**: `hsl(25 95% 53%)` - Represents Indian heritage
- **Accent (Green)**: `hsl(142 76% 36%)` - Success, confirmations
- **Background**: `hsl(35 30% 98%)` - Warm off-white
- **Foreground**: `hsl(0 0% 10%)` - Dark text

### Typography
- **Headings**: Poppins (700-800 weight)
- **Body**: Inter (400-600 weight)
- **Price Display**: Poppins bold

### Components
- **Restaurant Cards**: 12px border radius, hover lift effect
- **Menu Items**: Veg/non-veg indicators, add-to-cart buttons
- **Status Badges**: Color-coded order status indicators
- **Bottom Nav**: Fixed navigation with active state highlighting

## 🗄️ Database Schema

The app uses Supabase with multi-tenant architecture. Key tables:

### Restaurants
- `id`, `name`, `slug`, `description`
- `cuisine_types[]`, `rating`, `total_reviews`
- `delivery_time_min`, `delivery_time_max`
- `location`, `latitude`, `longitude`
- `is_open`, `min_order_amount`, `delivery_fee`

### Menu Items
- `id`, `restaurant_id`, `name`, `description`
- `price`, `category`, `is_veg`, `is_available`
- `serves`, `includes`, `image_url`

### Orders
- `id`, `user_id`, `restaurant_id`
- `status` (pending → confirmed → preparing → ready → out_for_delivery → delivered)
- `total_amount`, `delivery_fee`, `delivery_preference`
- `delivery_address`, `contact_phone`, `estimated_delivery_time`

### User Profiles
- `id`, `user_id`, `name`, `email`, `phone`
- `default_address`, `favorite_restaurant_ids[]`
- `dietary_preferences[]`

## 📱 Pages Overview

### Home (`/`)
Restaurant discovery dashboard with:
- Location-based delivery
- Search bar with filters
- Cuisine category filters
- Grid of restaurant cards
- Popular categories section

### Restaurant Detail (`/restaurant/[slug]`)
- Hero image with restaurant info
- Rating, delivery time, location
- Category-filtered menu
- Add-to-cart functionality
- Cart summary footer

### Orders (`/orders`)
- List of user orders
- Status badges and tracking
- Detailed order view with progress tracker
- Delivery details and contact info

### Profile (`/profile`)
- User info and stats
- Membership card with progress
- Settings and preferences
- Help and support links

### Search (`/search`)
- Auto-focus search input
- Trending searches
- Recent searches
- Category shortcuts
- Search results grid

## 🛠️ Development

### Mock Data
The app includes comprehensive mock data in `src/lib/data/mockData.ts`:
- 6 restaurants across India (Mumbai, Bangalore, Chennai, Pune, Kolkata, Hyderabad)
- 15+ menu items with realistic prices
- Sample orders with different statuses
- Helper functions for filtering and searching

### Adding New Restaurants
```typescript
// Edit src/lib/data/mockData.ts
export const mockRestaurants: Restaurant[] = [
  {
    id: '7',
    name: 'Your Restaurant Name',
    slug: 'your-restaurant-slug',
    // ... other fields
  }
];
```

### Adding New Menu Items
```typescript
// Edit src/lib/data/mockData.ts
export const mockMenuItems: MenuItem[] = [
  {
    id: 'menu-16',
    restaurant_id: '7',
    name: 'Your Dish Name',
    price: 200,
    // ... other fields
  }
];
```

## 🚢 Deployment

The app is ready for deployment on Vercel or any Next.js hosting platform:

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
When deploying with real Supabase:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key

## 🎯 Roadmap

### Phase 1: MVP (Current)
- ✅ Restaurant discovery
- ✅ Menu browsing
- ✅ Order tracking UI
- ✅ User profiles
- ✅ Search functionality

### Phase 2: Backend Integration
- Connect to Supabase database
- Real-time order updates
- User authentication
- Payment gateway integration

### Phase 3: Advanced Features
- Cart management with checkout
- Restaurant owner dashboard
- Push notifications
- GPS-based delivery tracking
- Rating and review system

### Phase 4: Scale
- Multi-language support (Hindi, Tamil, Telugu, Bengali)
- Grocery and medicine delivery
- Cloud kitchen support
- Third-party logistics integration

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🙏 Acknowledgments

- Design inspiration from leading Indian food delivery platforms
- Mock data represents authentic regional Indian cuisines
- Built with modern web technologies for optimal performance
