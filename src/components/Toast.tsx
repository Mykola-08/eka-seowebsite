"use client";


import { useState, useEffect, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, X } from '@/lib/icons';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    toast: {
      success: (title: string, message?: string, options?: Partial<Toast>) => void;
      error: (title: string, message?: string, options?: Partial<Toast>) => void;
      info: (title: string, message?: string, options?: Partial<Toast>) => void;
      warning: (title: string, message?: string, options?: Partial<Toast>) => void;
    };
  }
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastProps {
  toast: Toast;
  onClose: (id: string) => void;
}

function ToastComponent({ toast, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => onClose(toast.id), 200);
  }, [toast.id, onClose]);

  useEffect(() => {
    // Animate in
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(() => handleClose(), toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast.duration, handleClose]);

  const getVariantStyles = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-primary/5 border-0 text-foreground';
      case 'error':
        return 'bg-destructive/5 border-0 text-foreground';
      case 'warning':
        return 'bg-gold/5 border-0 text-foreground';
      case 'info':
      default:
        return 'bg-primary/5 border-0 text-foreground';
    }
  };

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <HugeiconsIcon icon={CheckmarkCircle01Icon} className="w-5 h-5 text-primary"  />;
      case 'error':
        return <HugeiconsIcon icon={AlertCircleIcon} className="w-5 h-5 text-destructive"  />;
      case 'warning':
        return <HugeiconsIcon icon={AlertCircleIcon} className="w-5 h-5 text-gold"  />;
      case 'info':
      default:
        return <HugeiconsIcon icon={InformationCircleIcon} className="w-5 h-5 text-primary"  />;
    }
  };

  const progressBarColor = () => {
    switch (toast.type) {
      case 'success': return 'bg-primary';
      case 'error': return 'bg-destructive';
      case 'warning': return 'bg-gold';
      case 'info': default: return 'bg-primary';
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden max-w-md w-full rounded-lg border  backdrop-blur-xs transition duration-300 ease-out transform pointer-events-auto flex items-start gap-3 p-4",
        getVariantStyles(),
        isVisible && !isExiting
          ? 'translate-x-0 opacity-100 scale-100'
          : 'translate-x-full opacity-0 scale-95'
      )}
    >
      <div className="shrink-0 mt-0.5">
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium pr-6">
          {toast.title}
        </h3>
        {toast.message && (
          <p className="mt-1 text-sm opacity-90">
            {toast.message}
          </p>
        )}
        {toast.action && (
          <div className="mt-3">
            <button
              onClick={toast.action.onClick}
              className="text-sm font-medium underline hover:no-underline transition"
            >
              {toast.action.label}
            </button>
          </div>
        )}
      </div>

      <button
        onClick={handleClose}
        aria-label="Close notification"
        className="absolute top-4 right-4 text-current opacity-70 hover:opacity-100 transition-opacity p-0.5 rounded-full hover:bg-foreground/5"
      >
        <HugeiconsIcon icon={Cancel01Icon} className="w-4 h-4"  />
      </button>

      {/* Progress bar for duration */}
      {toast.duration && toast.duration > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-foreground/5">
          <div
            className={cn("h-full transition ease-out", progressBarColor())}
            style={{
              width: isVisible && !isExiting ? '0%' : '100%',
              transitionDuration: `${toast.duration}ms`
            }}
          />
        </div>
      )}
    </div>
  );
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration ?? 5000,
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };




  // Global toast function
  useEffect(() => {
    window.toast = {
      success: (title: string, message?: string, options?: Partial<Toast>) =>
        addToast({ type: 'success', title, message, ...options }),
      error: (title: string, message?: string, options?: Partial<Toast>) =>
        addToast({ type: 'error', title, message, ...options }),
      info: (title: string, message?: string, options?: Partial<Toast>) =>
        addToast({ type: 'info', title, message, ...options }),
      warning: (title: string, message?: string, options?: Partial<Toast>) =>
        addToast({ type: 'warning', title, message, ...options }),
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-(--z-toast) space-y-4 pointer-events-none">
      <div className="space-y-3">
        {toasts.map(toast => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastComponent toast={toast} onClose={removeToast} />
          </div>
        ))}
      </div>
    </div>
  );
}

