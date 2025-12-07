import { Plus } from 'lucide-react';
import type { MenuItem } from '@/lib/supabase/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <div className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
      {/* Item Info */}
      <div className="flex-1">
        {/* Veg/Non-Veg Indicator */}
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`h-4 w-4 border-2 flex items-center justify-center ${
              item.is_veg
                ? 'border-green-600'
                : 'border-red-600'
            }`}
          >
            <div
              className={`h-2 w-2 rounded-full ${
                item.is_veg ? 'bg-green-600' : 'bg-red-600'
              }`}
            />
          </div>
          {!item.is_available && (
            <Badge variant="secondary" className="text-xs">
              Unavailable
            </Badge>
          )}
        </div>

        {/* Name and Description */}
        <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
        {item.description && (
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Serves and Includes */}
        {(item.serves || item.includes) && (
          <div className="flex flex-wrap gap-2 mb-3 text-xs text-muted-foreground">
            {item.serves && <span>Serves: {item.serves}</span>}
            {item.includes && <span>• Includes: {item.includes}</span>}
          </div>
        )}

        {/* Price and Add Button */}
        <div className="flex items-center gap-3">
          <span className="price text-xl">₹{item.price}</span>
          {item.is_available && (
            <Button
              size="sm"
              onClick={() => onAddToCart?.(item)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          )}
        </div>
      </div>

      {/* Item Image */}
      {item.image_url && (
        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={item.image_url}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
