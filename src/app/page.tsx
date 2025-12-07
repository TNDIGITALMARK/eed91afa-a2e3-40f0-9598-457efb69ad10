'use client';

import { useState } from 'react';
import { MapPin, SlidersHorizontal } from 'lucide-react';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { BottomNavigation } from '@/components/restaurant/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  mockRestaurants,
  filterRestaurantsByCuisine,
  searchRestaurants,
  detectUserLocation,
} from '@/lib/data/mockData';

const cuisineFilters = [
  { value: 'all', label: 'All' },
  { value: 'north_indian', label: 'North Indian' },
  { value: 'south_indian', label: 'South Indian' },
  { value: 'street_food', label: 'Street Food' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'seafood', label: 'Seafood' },
  { value: 'desserts', label: 'Desserts' },
];

export default function HomePage() {
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const userLocation = detectUserLocation();

  const filteredRestaurants = searchQuery
    ? searchRestaurants(searchQuery)
    : filterRestaurantsByCuisine(selectedCuisine);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Delivering to</p>
              <p className="font-semibold text-foreground">{userLocation.city}</p>
            </div>
          </div>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for restaurants, cuisines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-full"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="gradient-saffron rounded-2xl p-8 mb-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Discover India&apos;s Flavors</h1>
          <p className="text-white/90 mb-4">Order from the best restaurants across India</p>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              🚚 Fast Delivery
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              ⭐ Top Rated
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
              💰 Best Prices
            </span>
          </div>
        </div>

        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            {cuisineFilters.map((filter) => (
              <Button
                key={filter.value}
                variant={selectedCuisine === filter.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCuisine(filter.value)}
                className="whitespace-nowrap"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No restaurants found</p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-foreground">
                {searchQuery ? 'Search Results' : 'Restaurants Near You'}
              </h2>
              <span className="text-sm text-muted-foreground">
                {filteredRestaurants.length} found
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </>
        )}

        {!searchQuery && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Popular Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Biryani', emoji: '🍛', cuisine: 'north_indian' },
                { name: 'Dosa', emoji: '🥞', cuisine: 'south_indian' },
                { name: 'Street Food', emoji: '🌮', cuisine: 'street_food' },
                { name: 'Desserts', emoji: '🍰', cuisine: 'desserts' },
              ].map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCuisine(category.cuisine)}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all"
                >
                  <div className="text-4xl mb-2">{category.emoji}</div>
                  <p className="font-semibold text-foreground">{category.name}</p>
                </button>
              ))}
            </div>
          </section>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}