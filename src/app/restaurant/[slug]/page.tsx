'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Star, Clock, MapPin, ShoppingCart } from 'lucide-react';
import { MenuItemCard } from '@/components/restaurant/MenuItemCard';
import { BottomNavigation } from '@/components/restaurant/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  mockRestaurants,
  getMenuItemsByRestaurantId,
  type MenuItem,
} from '@/lib/data/mockData';

export default function RestaurantDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [cart, setCart] = useState<{item: MenuItem; quantity: number}[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const restaurant = mockRestaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Restaurant not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  const menuItems = getMenuItemsByRestaurantId(restaurant.id);
  const categories = ['All', ...new Set(menuItems.map((item) => item.category))];
  const filteredMenuItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  const cartTotal = cart.reduce(
    (sum, cartItem) => sum + cartItem.item.price * cartItem.quantity,
    0
  );
  const cartItemCount = cart.reduce((sum, cartItem) => sum + cartItem.quantity, 0);

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header with Back Button */}
      <div className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="font-semibold text-foreground">{restaurant.name}</h1>
            <p className="text-xs text-muted-foreground">{restaurant.location}</p>
          </div>
          {cartItemCount > 0 && (
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-foreground" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Restaurant Hero */}
      <div className="relative h-56 w-full">
        <img
          src={restaurant.image_url || '/placeholder-restaurant.jpg'}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        {!restaurant.is_open && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-xl">Currently Closed</span>
          </div>
        )}
      </div>

      {/* Restaurant Info */}
      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">{restaurant.name}</h2>
          <p className="text-muted-foreground mb-3">{restaurant.description}</p>

          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 rating-star fill-current" />
              <span className="text-sm font-semibold">{restaurant.rating.toFixed(1)}</span>
              <span className="text-xs text-muted-foreground">
                ({restaurant.total_reviews} reviews)
              </span>
            </div>
            <div className="delivery-time">
              <Clock className="h-4 w-4" />
              <span>
                {restaurant.delivery_time_min}-{restaurant.delivery_time_max} min
              </span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{restaurant.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {restaurant.cuisine_types.map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="text-xs">
                {cuisine.replace(/_/g, ' ')}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Min order: </span>
              <span className="font-semibold">₹{restaurant.min_order_amount}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Delivery: </span>
              <span className="font-semibold">₹{restaurant.delivery_fee}</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="sticky top-[57px] z-30 bg-background py-3 -mx-4 px-4 border-b border-border mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-4">
          {filteredMenuItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items in this category</p>
            </div>
          ) : (
            filteredMenuItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))
          )}
        </div>
      </div>

      {/* Cart Footer */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-20 left-0 right-0 z-40 bg-card border-t border-border shadow-lg">
          <div className="max-w-screen-xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {cartItemCount} {cartItemCount === 1 ? 'item' : 'items'}
                </p>
                <p className="text-xl font-bold text-foreground">₹{cartTotal}</p>
              </div>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                View Cart
              </Button>
            </div>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
