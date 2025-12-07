'use client';

import { User, Heart, MapPin, Settings, LogOut, Bell, CreditCard } from 'lucide-react';
import { BottomNavigation } from '@/components/restaurant/BottomNavigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ProfilePage() {
  const user = {
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    totalOrders: 24,
    favoriteRestaurants: 5,
  };

  const menuItems = [
    {
      icon: User,
      label: 'Edit Profile',
      description: 'Update your personal information',
      href: '/profile/edit',
    },
    {
      icon: MapPin,
      label: 'Saved Addresses',
      description: 'Manage delivery addresses',
      href: '/profile/addresses',
    },
    {
      icon: Heart,
      label: 'Favorite Restaurants',
      description: `${user.favoriteRestaurants} restaurants`,
      href: '/profile/favorites',
    },
    {
      icon: CreditCard,
      label: 'Payment Methods',
      description: 'Manage cards and UPI',
      href: '/profile/payments',
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Manage your preferences',
      href: '/profile/notifications',
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'App preferences and privacy',
      href: '/profile/settings',
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-gradient-saffron text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
              <p className="text-white/90 text-sm">{user.email}</p>
              <p className="text-white/90 text-sm">{user.phone}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">{user.totalOrders}</p>
              <p className="text-sm text-white/90">Total Orders</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-3xl font-bold">{user.favoriteRestaurants}</p>
              <p className="text-sm text-white/90">Favorites</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-4 py-6">
        {/* Membership Card */}
        <div className="bg-card rounded-lg border border-border p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Gold Member</h3>
              <p className="text-sm text-muted-foreground">
                Unlock exclusive benefits and rewards
              </p>
            </div>
            <Badge className="badge-warning">Premium</Badge>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-accent w-3/4 rounded-full" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            6 more orders to reach Platinum status
          </p>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full bg-card rounded-lg border border-border p-4 hover:shadow-md transition-shadow text-left flex items-center gap-4"
              >
                <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground mb-0.5">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {item.description}
                  </p>
                </div>
                <div className="text-muted-foreground">→</div>
              </button>
            );
          })}
        </div>

        {/* Support Section */}
        <div className="mt-8 bg-card rounded-lg border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Need Help?</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Help Center
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Contact Support
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Terms & Conditions
            </Button>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/30"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* App Version */}
        <p className="text-center text-sm text-muted-foreground mt-6">
          Version 1.0.0
        </p>
      </main>

      <BottomNavigation />
    </div>
  );
}
