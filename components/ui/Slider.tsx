import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  valueDisplay?: string | number;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, valueDisplay, ...props }, ref) => {
    return (
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          {label && <label className="text-sm font-medium text-slate-600">{label}</label>}
          {valueDisplay && <span className="text-sm font-bold text-credsy-navy">{valueDisplay}</span>}
        </div>
        <input
          type="range"
          ref={ref}
          className={cn(
            'w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-credsy-gold hover:accent-credsy-gold-dark',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export { Slider };
