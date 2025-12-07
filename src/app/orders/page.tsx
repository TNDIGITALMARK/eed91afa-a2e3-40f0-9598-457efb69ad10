'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Package, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { OrderStatusTracker } from '@/components/restaurant/OrderStatusTracker';
import { BottomNavigation } from '@/components/restaurant/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  mockOrders,
  mockRestaurants,
  getOrdersByUserId,
  type Order,
  type OrderStatus,
} from '@/lib/data/mockData';

const statusConfig: Record<
  OrderStatus,
  { label: string; icon: React.ElementType; color: string }
> = {
  pending: { label: 'Pending', icon: Clock, color: 'text-yellow-600' },
  confirmed: { label: 'Confirmed', icon: CheckCircle2, color: 'text-blue-600' },
  preparing: { label: 'Preparing', icon: Package, color: 'text-purple-600' },
  ready: { label: 'Ready', icon: CheckCircle2, color: 'text-green-600' },
  out_for_delivery: {
    label: 'Out for Delivery',
    icon: Package,
    color: 'text-orange-600',
  },
  delivered: { label: 'Delivered', icon: CheckCircle2, color: 'text-green-600' },
  cancelled: { label: 'Cancelled', icon: XCircle, color: 'text-red-600' },
};

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const userId = 'user-1'; // Mock user ID
  const orders = getOrdersByUserId(userId);

  if (selectedOrder) {
    const restaurant = mockRestaurants.find(
      (r) => r.id === selectedOrder.restaurant_id
    );

    return (
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
          <div className="max-w-screen-xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => setSelectedOrder(null)}>
                ← Back
              </Button>
              <div>
                <h1 className="font-semibold text-foreground">Order Details</h1>
                <p className="text-xs text-muted-foreground">
                  Order ID: {selectedOrder.id.substring(0, 8).toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-screen-xl mx-auto px-4 py-6">
          {/* Order Status */}
          <OrderStatusTracker
            currentStatus={selectedOrder.status}
            estimatedDeliveryTime={selectedOrder.estimated_delivery_time || undefined}
          />

          {/* Restaurant Info */}
          {restaurant && (
            <div className="mt-6 bg-card rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground mb-2">
                {restaurant.name}
              </h3>
              <p className="text-sm text-muted-foreground">{restaurant.location}</p>
            </div>
          )}

          {/* Order Details */}
          <div className="mt-6 bg-card rounded-lg border border-border p-4">
            <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">
                  ₹{(selectedOrder.total_amount - selectedOrder.delivery_fee).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-semibold">₹{selectedOrder.delivery_fee}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between">
                <span className="font-semibold text-foreground">Total</span>
                <span className="font-bold text-lg">₹{selectedOrder.total_amount}</span>
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          {selectedOrder.delivery_preference === 'delivery' && (
            <div className="mt-6 bg-card rounded-lg border border-border p-4">
              <h3 className="font-semibold text-foreground mb-3">Delivery Details</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Address</p>
                  <p className="text-foreground">{selectedOrder.delivery_address}</p>
                </div>
                {selectedOrder.delivery_instructions && (
                  <div>
                    <p className="text-muted-foreground mb-1">Instructions</p>
                    <p className="text-foreground">
                      {selectedOrder.delivery_instructions}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground mb-1">Contact</p>
                  <p className="text-foreground">{selectedOrder.contact_phone}</p>
                </div>
              </div>
            </div>
          )}
        </main>

        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">My Orders</h1>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">
              No orders yet
            </h2>
            <p className="text-muted-foreground mb-6">
              Start exploring restaurants and place your first order!
            </p>
            <Link href="/">
              <Button className="bg-primary text-primary-foreground">
                Browse Restaurants
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const restaurant = mockRestaurants.find(
                (r) => r.id === order.restaurant_id
              );
              const config = statusConfig[order.status];
              const StatusIcon = config.icon;

              return (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className="w-full bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow text-left"
                >
                  <div className="flex items-start gap-4">
                    {/* Restaurant Image */}
                    {restaurant?.image_url && (
                      <img
                        src={restaurant.image_url}
                        alt={restaurant.name}
                        className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                      />
                    )}

                    {/* Order Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">
                          {restaurant?.name || 'Restaurant'}
                        </h3>
                        <Badge
                          variant="secondary"
                          className={`${config.color} flex items-center gap-1`}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {config.label}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Order ID: {order.id.substring(0, 8).toUpperCase()}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-foreground">
                          ₹{order.total_amount}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(order.created_at).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </main>

      <BottomNavigation />
    </div>
  );
}
