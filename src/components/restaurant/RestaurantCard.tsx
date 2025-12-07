import Link from 'next/link';
import { Star, Clock } from 'lucide-react';
import type { Restaurant } from '@/lib/supabase/types';
import { Badge } from '@/components/ui/badge';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="card-restaurant block w-full"
    >
      {/* Restaurant Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={restaurant.image_url || '/placeholder-restaurant.jpg'}
          alt={restaurant.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {!restaurant.is_open && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Currently Closed</span>
          </div>
        )}
        {restaurant.is_open && (
          <div className="absolute top-3 right-3">
            <Badge className="badge-success">Open</Badge>
          </div>
        )}
      </div>

      {/* Restaurant Info */}
      <div className="p-4">
        {/* Name and Cuisine */}
        <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1">
          {restaurant.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {restaurant.cuisine_types.map((c) => c.replace(/_/g, ' ')).join(', ')}
        </p>

        {/* Rating and Delivery Time */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 rating-star fill-current" />
            <span className="text-sm font-semibold text-foreground">
              {restaurant.rating.toFixed(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              ({restaurant.total_reviews})
            </span>
          </div>

          <div className="delivery-time">
            <Clock className="h-4 w-4" />
            <span>
              {restaurant.delivery_time_min}-{restaurant.delivery_time_max} min
            </span>
          </div>
        </div>

        {/* Location and Delivery Fee */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{restaurant.location}</span>
          <span className="font-semibold text-foreground">
            ₹{restaurant.delivery_fee} delivery
          </span>
        </div>
      </div>
    </Link>
  );
}
