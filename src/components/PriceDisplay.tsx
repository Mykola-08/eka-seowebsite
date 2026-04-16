import { TrendingDown, TrendingUp, Star } from '@/lib/icons';
import { useDiscount } from '@/contexts/DiscountContext';

interface PriceDisplayProps {
  basePriceCents: number;
  finalPriceCents?: number;
  showCalculation?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PriceDisplay({
  basePriceCents,
  finalPriceCents,
  showCalculation = false,
  size = 'md',
  className = ''
}: PriceDisplayProps) {
  const { calculateDiscountedPrice, selectedDiscount } = useDiscount();
  const formatPrice = (cents: number) => `€${(cents / 100).toFixed(0)}`;
  
  // Apply discount to base price
  const basePrice = basePriceCents / 100;
  const discountedPrice = calculateDiscountedPrice(basePrice);
  const discountedPriceCents = Math.round(discountedPrice * 100);
  
  const actualFinalPrice = finalPriceCents || discountedPriceCents;
  const hasDiscount = actualFinalPrice < basePriceCents;
  const hasSurcharge = actualFinalPrice > basePriceCents;
  
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Main Price */}
      <div className={`font-light text-foreground dark:text-primary-foreground tabular-nums ${sizeClasses[size]}`}>
        {formatPrice(actualFinalPrice)}
      </div>

      {/* Price Change Indicator */}
      {showCalculation && actualFinalPrice !== basePriceCents && (
        <div className="flex items-center space-x-1">
          {hasDiscount && (
            <>
              <HugeiconsIcon icon={ChartDecreaseIcon} className="w-4 h-4 text-primary"  />
              <span className="text-sm text-muted-foreground dark:text-muted-foreground line-through">
                {formatPrice(basePriceCents)}
              </span>
            </>
          )}
          
          {hasSurcharge && (
            <>
              <HugeiconsIcon icon={ChartIncreaseIcon} className="w-4 h-4 text-gold"  />
              <span className="text-sm text-muted-foreground dark:text-muted-foreground line-through">
                {formatPrice(basePriceCents)}
              </span>
            </>
          )}
        </div>
      )}

      {/* Special Badge */}
      {hasDiscount && selectedDiscount && (
        <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 dark:bg-primary/10 text-primary dark:text-primary/80">
          <HugeiconsIcon icon={StarIcon} className="w-3 h-3 mr-1"  />
          {selectedDiscount.name} -{selectedDiscount.percentage}%
        </div>
      )}
    </div>
  );
}

