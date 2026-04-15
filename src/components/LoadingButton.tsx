import { Button, buttonVariants } from '@/components/ui/button';
import { type VariantProps } from 'class-variance-authority';
import { HugeiconsIcon } from '@hugeicons/react';
import { Loading01Icon } from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & { asChild?: boolean };

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export default function LoadingButton({ 
  loading, 
  children, 
  className, 
  disabled,
  ...props 
}: LoadingButtonProps) {
  return (
    <Button
      className={cn("relative transition duration-200", className)}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <>
          <HugeiconsIcon icon={Loading01Icon} className="w-5 h-5 mr-2 animate-spin"  />
          {children}
        </>
      ) : (
        children
      )}
    </Button>
  );
}


// Specialized buttons using standard ShadCN
export function SaveButton({ 
  loading, 
  saved, 
  children,
  ...props 
}: LoadingButtonProps & { saved?: boolean }) {
  return (
    <LoadingButton
      {...props}
      variant={saved ? "outline-solid" : (props.variant || "default")}
      loading={loading}
    >
      {saved ? '✓ Desat' : (loading ? 'Desant...' : (children || 'Desar'))}
    </LoadingButton>
  );
}

export function SubmitButton({ loading, children, ...props }: LoadingButtonProps) {
  return (
    <LoadingButton
      type="submit"
      loading={loading}
      {...props}
    >
      {loading ? 'Enviant...' : (children || 'Enviar')}
    </LoadingButton>
  );
}

export function DeleteButton({ loading, children, ...props }: LoadingButtonProps) {
  return (
    <LoadingButton
      variant="destructive"
      loading={loading}
      {...props}
    >
      {loading ? 'Eliminant...' : (children || 'Eliminar')}
    </LoadingButton>
  );
}
