import { Check, Clock, ChefHat, Package, Truck } from 'lucide-react';
import type { OrderStatus } from '@/lib/supabase/types';

interface OrderStatusTrackerProps {
  currentStatus: OrderStatus;
  estimatedDeliveryTime?: string;
}

const statusSteps: {
  status: OrderStatus;
  label: string;
  icon: React.ElementType;
}[] = [
  { status: 'confirmed', label: 'Confirmed', icon: Check },
  { status: 'preparing', label: 'Preparing', icon: ChefHat },
  { status: 'ready', label: 'Ready', icon: Package },
  { status: 'out_for_delivery', label: 'Out for Delivery', icon: Truck },
  { status: 'delivered', label: 'Delivered', icon: Check },
];

export function OrderStatusTracker({
  currentStatus,
  estimatedDeliveryTime,
}: OrderStatusTrackerProps) {
  const currentStepIndex = statusSteps.findIndex(
    (step) => step.status === currentStatus
  );

  const isCancelled = currentStatus === 'cancelled';

  if (isCancelled) {
    return (
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
        <p className="text-destructive font-semibold text-lg">Order Cancelled</p>
        <p className="text-muted-foreground text-sm mt-2">
          This order has been cancelled
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      {/* Estimated Delivery Time */}
      {estimatedDeliveryTime && currentStatus !== 'delivered' && (
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-medium">Estimated Delivery</span>
          </div>
          <p className="text-2xl font-bold text-foreground">
            {new Date(estimatedDeliveryTime).toLocaleTimeString('en-IN', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      )}

      {/* Status Steps */}
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
        <div
          className="absolute left-6 top-0 w-0.5 bg-accent transition-all duration-500"
          style={{
            height: `${(currentStepIndex / (statusSteps.length - 1)) * 100}%`,
          }}
        />

        {/* Steps */}
        <div className="relative space-y-6">
          {statusSteps.map((step, index) => {
            const isCompleted = index <= currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const Icon = step.icon;

            return (
              <div key={step.status} className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors ${
                    isCompleted
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-border bg-card text-muted-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Label */}
                <div className="flex-1">
                  <p
                    className={`font-semibold ${
                      isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {step.label}
                  </p>
                  {isCurrent && (
                    <p className="text-sm text-muted-foreground mt-1">
                      In progress...
                    </p>
                  )}
                </div>

                {/* Check Mark for Completed */}
                {isCompleted && !isCurrent && (
                  <Check className="h-5 w-5 text-accent" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Delivered Status */}
      {currentStatus === 'delivered' && (
        <div className="mt-6 bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
          <p className="text-accent font-semibold">Order Delivered!</p>
          <p className="text-muted-foreground text-sm mt-1">
            Thank you for your order
          </p>
        </div>
      )}
    </div>
  );
}
