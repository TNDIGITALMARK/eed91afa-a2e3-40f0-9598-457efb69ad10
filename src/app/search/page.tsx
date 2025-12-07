'use client';

import { useState } from 'react';
import { Search as SearchIcon, TrendingUp, Clock } from 'lucide-react';
import { RestaurantCard } from '@/components/restaurant/RestaurantCard';
import { BottomNavigation } from '@/components/restaurant/BottomNavigation';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { searchRestaurants, mockRestaurants } from '@/lib/data/mockData';

const trendingSearches = [
  'Biryani',
  'Pizza',
  'Burger',
  'Chinese',
  'Dosa',
  'Paneer',
  'Chicken',
  'Ice Cream',
];

const recentSearches = ['Hyderabad Biryani', 'North Indian', 'Street Food'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(mockRestaurants);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const results = searchRestaurants(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults(mockRestaurants);
    }
  };

  const handleTrendingClick = (term: string) => {
    handleSearch(term);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header with Search */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search restaurants, cuisines, dishes..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full"
              autoFocus
            />
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {!query ? (
          <>
            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <section className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold text-foreground">
                    Recent Searches
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => handleTrendingClick(term)}
                      className="bg-card border border-border rounded-full px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Trending Searches */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-semibold text-foreground">
                  Trending Now
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => handleTrendingClick(term)}
                    className="bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-2 text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </section>

            {/* Popular Categories */}
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Popular Categories
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'North Indian', emoji: '🍛', query: 'north indian' },
                  { name: 'South Indian', emoji: '🥞', query: 'south indian' },
                  { name: 'Chinese', emoji: '🥡', query: 'chinese' },
                  { name: 'Street Food', emoji: '🌮', query: 'street food' },
                  { name: 'Desserts', emoji: '🍰', query: 'desserts' },
                  { name: 'Seafood', emoji: '🦐', query: 'seafood' },
                ].map((category) => (
                  <button
                    key={category.name}
                    onClick={() => handleTrendingClick(category.query)}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <div className="text-4xl mb-2">{category.emoji}</div>
                    <p className="font-semibold text-foreground">{category.name}</p>
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Search Results */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-foreground">
                  Search Results for &quot;{query}&quot;
                </h2>
                <Badge variant="secondary">{searchResults.length} found</Badge>
              </div>
            </div>

            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <SearchIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No results found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try searching with different keywords
                </p>
                <button
                  onClick={() => handleSearch('')}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}
